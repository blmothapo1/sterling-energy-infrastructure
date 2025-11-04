/**
 * Sterling Energy Infrastructure - Main JavaScript
 * Minimal, vanilla JS for scroll reveals and interactions
 */

(function() {
  'use strict';

  // ===========================
  // Intersection Observer for Scroll Fade Reveals
  // ===========================
  function initScrollReveal() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: just add the fade-in class immediately for older browsers
      const elementsToReveal = document.querySelectorAll('.card, .project-card, .update-post, section');
      elementsToReveal.forEach(el => {
        el.classList.add('fade-in');
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          fadeObserver.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    // Observe all cards and sections on page load
    const elementsToReveal = document.querySelectorAll('.card, .project-card, .update-post, section');
    elementsToReveal.forEach(el => {
      fadeObserver.observe(el);
    });
  }

  // ===========================
  // Active Navigation State
  // ===========================
  function setActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (currentPath.endsWith(linkPath) || (currentPath.endsWith('/') && linkPath.endsWith('index.html'))) {
        link.style.background = 'rgba(88, 213, 255, 0.15)';
        link.style.color = 'var(--primary)';
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // ===========================
  // Smooth Scroll for Anchor Links
  // ===========================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ===========================
  // Form Validation Enhancement
  // ===========================
  function initFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        let firstInvalidField = null;
        
        // Clear previous error messages
        const existingErrors = form.querySelectorAll('.error-message');
        existingErrors.forEach(err => err.remove());
        
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#ff4444';
            field.setAttribute('aria-invalid', 'true');
            
            // Create inline error message
            const errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.style.color = '#ff4444';
            errorMsg.style.fontSize = '0.875rem';
            errorMsg.style.marginTop = '0.25rem';
            errorMsg.style.display = 'block';
            errorMsg.setAttribute('role', 'alert');
            errorMsg.textContent = 'This field is required';
            
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
            
            if (!firstInvalidField) {
              firstInvalidField = field;
            }
          } else {
            field.style.borderColor = 'rgba(88, 213, 255, 0.2)';
            field.removeAttribute('aria-invalid');
          }
        });
        
        if (!isValid) {
          e.preventDefault();
          // Focus first invalid field for accessibility
          if (firstInvalidField) {
            firstInvalidField.focus();
          }
        }
      });
      
      // Reset border color and remove error on input
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('input', function() {
          this.style.borderColor = 'rgba(88, 213, 255, 0.2)';
          this.removeAttribute('aria-invalid');
          
          // Remove error message if it exists
          const errorMsg = this.nextElementSibling;
          if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
          }
        });
      });
    });
  }

  // ===========================
  // Keyboard Navigation Enhancement
  // ===========================
  function initKeyboardNav() {
    // Trap focus in modals if any exist (future-proofing)
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      const focusableElements = modal.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      modal.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
        
        if (e.key === 'Escape') {
          modal.close?.();
        }
      });
    });
  }

  // ===========================
  // Header Scroll Shadow Effect
  // ===========================
  function initHeaderEffect() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
      }
      
      lastScroll = currentScroll;
    });
  }

  // ===========================
  // Lazy Load Images (if any are added later)
  // ===========================
  function initLazyLoad() {
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        img.src = img.dataset.src || img.src;
      });
    } else {
      // Fallback for browsers that don't support native lazy loading
      const lazyImages = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  // ===========================
  // Performance: Debounce Helper
  // ===========================
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ===========================
  // Initialize All Features
  // ===========================
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    initScrollReveal();
    setActiveNav();
    initSmoothScroll();
    initFormValidation();
    initKeyboardNav();
    initHeaderEffect();
    initLazyLoad();
    
    // Log initialization for debugging
    console.log('SEI Website initialized successfully');
  }

  // Start initialization
  init();

})();
