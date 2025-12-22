# Notion Template Specification

## Overview

This document provides the exact structure for creating your Notion workspace for client onboarding and project management.

## Two Versions Available

### Version 1: Simple (Solo Editor)
For individual freelancers managing 1-5 clients at a time

### Version 2: Agency (Multi-Editor/Team)
For teams with 2+ editors, featuring collaboration and assignment features

---

# SIMPLE (SOLO) TEMPLATE SPECIFICATION

## Main Dashboard

**Name:** "Client Onboarding OS - [Your Business Name]"

### Dashboard Sections:
1. Quick Stats (callout boxes)
2. Active Projects (linked database view)
3. Upcoming Deadlines (linked database view)
4. Recent Activity (linked database view)
5. Quick Links (email templates, pricing, policies)

---

## Database 1: Clients

**Icon:** 👤  
**Properties:**

| Property Name | Type | Options/Format |
|--------------|------|----------------|
| Client Name | Title | - |
| Status | Select | Active, Onboarding, Completed, Inactive |
| Email | Email | - |
| Phone | Phone | - |
| Company | Text | - |
| Industry | Select | Creator, Ecom, Coach, Agency, Other |
| Start Date | Date | - |
| Total Projects | Rollup | Count from Projects |
| Total Spent | Rollup | Sum from Projects |
| Payment Terms | Select | 50/50, Full Upfront, Net-30 |
| Notes | Text (long) | - |

**Views:**
1. All Clients (Table)
2. Active Only (Table, filtered: Status = Active)
3. By Industry (Board, grouped by Industry)

---

## Database 2: Projects

**Icon:** 🎬  
**Properties:**

| Property Name | Type | Options/Format |
|--------------|------|----------------|
| Project Name | Title | - |
| Client | Relation | → Clients |
| Status | Select | Not Started, In Progress, In Review, Revisions, Delivered, Archived |
| Package | Select | Bronze, Silver, Gold, Custom |
| Deadline | Date | - |
| Delivery Date | Date | - |
| Platform | Multi-Select | TikTok, Instagram Reels, YouTube Shorts, YouTube Long-Form, LinkedIn, Facebook |
| Video Count | Number | - |
| Price | Number | Format: Dollar |
| Paid Amount | Number | Format: Dollar |
| Balance Due | Formula | Price - Paid Amount |
| Revisions Used | Number | - |
| Revisions Allowed | Number | - |
| Priority | Select | Low, Normal, High, Rush |
| Asset Status | Select | Waiting, Received, Complete |
| Notes | Text (long) | - |

**Views:**
1. Active Projects (Table, filtered: Status ≠ Archived)
2. By Status (Board, grouped by Status)
3. By Deadline (Timeline)
4. This Week (Table, filtered: Deadline within 7 days)
5. Awaiting Payment (Table, filtered: Balance Due > 0)

---

## Database 3: Assets

**Icon:** 📁  
**Properties:**

| Property Name | Type | Options/Format |
|--------------|------|----------------|
| Asset Name | Title | - |
| Project | Relation | → Projects |
| Client | Relation | → Clients |
| Type | Select | Raw Footage, Logo, Brand Guidelines, Script, Music, Product Images, B-Roll, Other |
| Status | Select | Requested, Received, Approved, Needs Update |
| File Link | URL | - |
| Received Date | Date | - |
| Notes | Text | - |

**Views:**
1. All Assets (Table)
2. By Project (Board, grouped by Project)
3. Pending (Table, filtered: Status = Requested)

---

## Database 4: Deliverables

**Icon:** ✅  
**Properties:**

| Property Name | Type | Options/Format |
|--------------|------|----------------|
| Deliverable Name | Title | - |
| Project | Relation | → Projects |
| Client | Relation | → Clients |
| Version | Select | V1, V2, V3, Final |
| Status | Select | In Progress, Ready for Review, Approved, Delivered |
| File Link | URL | - |
| Delivery Date | Date | - |
| Feedback | Text (long) | - |
| Revision Number | Number | - |

**Views:**
1. All Deliverables (Table)
2. In Review (Table, filtered: Status = Ready for Review)
3. By Project (Board, grouped by Project)
4. Delivered This Month (Table, filtered by date)

---

## Database 5: Email Templates

**Icon:** 📧  
**Properties:**

| Property Name | Type | Options/Format |
|--------------|------|----------------|
| Template Name | Title | - |
| Category | Select | Onboarding, Discovery, Proposal, Kickoff, Delivery, Follow-up, Revision Request |
| Subject Line | Text | - |
| Body | Text (long) | - |
| When to Use | Text | - |

**Templates to Include:**
1. Initial Outreach
2. Discovery Call Follow-up
3. Proposal Delivery
4. Onboarding Welcome
5. Asset Request
6. First Draft Delivery
7. Revision Request
8. Final Delivery
9. Payment Reminder
10. Testimonial Request

---

# AGENCY (MULTI-EDITOR/TEAM) TEMPLATE SPECIFICATION

All databases from Simple version, PLUS:

## Additional Database: Team Members

**Icon:** 👥  
**Properties:**

| Property Name | Type | Options/Format |
|--------------|------|----------------|
| Name | Title | - |
| Role | Select | Lead Editor, Junior Editor, Project Manager, QA |
| Email | Email | - |
| Active Projects | Rollup | Count from Projects |
| Capacity | Number | Max projects at once |
| Skills | Multi-Select | Short-Form, Long-Form, Motion Graphics, Color Grading, Audio Mix |
| Availability | Select | Available, Busy, Out of Office |

## Modified Projects Database (Agency)

**Additional Properties:**
| Property Name | Type | Options/Format |
|--------------|------|----------------|
| Assigned Editor | Relation | → Team Members |
| Project Manager | Relation | → Team Members |
| QA Reviewer | Relation | → Team Members |
| Editor Workload | Rollup | From Team Members |

**Additional Views:**
- By Editor (Board, grouped by Assigned Editor)
- Team Capacity (Table with workload rollups)

---

# SEGMENT-SPECIFIC CUSTOMIZATIONS

## For CREATORS Segment

**Additional Project Properties:**
- Hook Type (Select): Question, Shocking Statement, Story, Tutorial
- Engagement Goal (Number): Target views/likes
- Trending Topic (Checkbox)
- Series/Campaign (Text)

**Additional Templates:**
- Trend Analysis Template
- Performance Report Template
- Content Calendar Integration

## For ECOM BRANDS Segment

**Additional Project Properties:**
- Product SKU (Text)
- Campaign Type (Select): Product Launch, Sale Event, Brand Story, UGC
- CTA Type (Select): Shop Now, Learn More, Sign Up, Download
- Conversion Goal (Number)

**Additional Assets to Track:**
- Product Photos
- Product Demos
- Customer Testimonials

## For AGENCIES Segment

**Additional Project Properties:**
- White Label (Checkbox)
- End Client Name (Text)
- Account Manager (Text)
- Reporting Required (Checkbox)

**Additional Databases:**
- Reporting Dashboard
- Client Success Metrics

## For COACHES Segment

**Additional Project Properties:**
- Video Purpose (Select): Lead Magnet, Course Promo, Testimonial, Launch Video
- Funnel Stage (Select): Awareness, Consideration, Conversion
- Target Audience (Text)

**Additional Templates:**
- Launch Sequence Template
- Testimonial Collection Form

---

# SETUP INSTRUCTIONS

## Step 1: Create New Notion Page
1. In Notion, click "+ New Page"
2. Name it: "Client Onboarding OS"
3. Add icon and cover image

## Step 2: Create Databases
1. For each database above, create a new database (Table view)
2. Add all properties exactly as specified
3. Configure property types and options

## Step 3: Create Relations
1. Link Clients → Projects (two-way)
2. Link Projects → Assets (two-way)
3. Link Projects → Deliverables (two-way)
4. For Agency: Link Team Members → Projects

## Step 4: Set Up Rollups
1. In Clients: Total Projects = Count of related Projects
2. In Clients: Total Spent = Sum of Project Price
3. In Projects: Balance Due = Price - Paid Amount

## Step 5: Create Views
For each database, set up the views listed above with:
- Proper filters
- Sorting rules
- Visible properties

## Step 6: Build Dashboard
1. Create main dashboard page
2. Add linked database views for each database
3. Filter views to show only relevant info (Active, This Week, etc.)
4. Add callout boxes for quick stats

## Step 7: Add Templates
1. In Email Templates database, create each template
2. Use Notion's template button feature for quick access
3. Add merge fields like [Client Name], [Project Name], [Deadline]

## Step 8: Test & Iterate
1. Create a test client
2. Create a test project
3. Add sample assets
4. Walk through entire workflow
5. Adjust as needed

---

# TEMPLATE EXPORT

To share this template:
1. Click "Share" in top right
2. Select "Publish to web" OR "Template"
3. Copy link
4. This link is what you'll deliver to customers

---

# CUSTOMIZATION TIPS

1. **Colors**: Use Notion's background colors to differentiate project stages
2. **Icons**: Add relevant emoji icons to each database and page
3. **Filters**: Set default filters on views to reduce clutter
4. **Board Views**: Use for visual project management
5. **Calendar Views**: Great for deadline tracking
6. **Gallery Views**: Perfect for deliverables showcase

---

# NOTION FORMULAS REFERENCE

**Balance Due:**
```
prop("Price") - prop("Paid Amount")
```

**Overdue Check:**
```
if(prop("Status") != "Delivered" and prop("Deadline") < now(), "⚠️ OVERDUE", "")
```

**Days Until Deadline:**
```
dateBetween(prop("Deadline"), now(), "days")
```

**Payment Status:**
```
if(prop("Balance Due") > 0, "💰 Payment Due", "✅ Paid")
```

---

This specification provides everything needed to build either version of the Notion template. Choose Simple or Agency based on your business needs, and customize with segment-specific additions as needed.
