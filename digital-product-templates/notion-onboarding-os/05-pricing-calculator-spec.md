# Pricing Calculator Specification (Google Sheets)

## Overview

This Google Sheets calculator helps you quickly generate accurate quotes for clients based on package type, add-ons, rush fees, and discounts.

---

## SHEET 1: Price Calculator (Main Sheet)

### Column Structure:

| Column | Header | Type | Purpose |
|--------|--------|------|---------|
| A | Client Name | Input | Client's name |
| B | Date | Input (auto) | Quote date |
| C | Package Type | Dropdown | Bronze/Silver/Gold |
| D | Base Price | Formula | Auto-populates from pricing table |
| E | Video Count | Formula | Auto-populates from package |
| F | Rush Delivery? | Dropdown | Yes/No |
| G | Rush Fee | Formula | +$97 if Yes |
| H | Add-ons | Multi-select | List of add-ons |
| I | Add-on Total | Formula | Sum of selected add-ons |
| J | Subtotal | Formula | Base + Rush + Add-ons |
| K | Discount % | Input | 0-20% |
| L | Discount Amount | Formula | Subtotal * Discount % |
| M | Final Price | Formula | Subtotal - Discount |
| N | Deposit (50%) | Formula | Final Price / 2 |
| O | Final Payment | Formula | Final Price / 2 |
| P | Price Per Video | Formula | Final Price / Video Count |

---

## Formulas (by Column)

### D (Base Price)
```
=VLOOKUP(C2, PricingTable!A:B, 2, FALSE)
```
Looks up package type in pricing table

### E (Video Count)
```
=VLOOKUP(C2, PricingTable!A:C, 3, FALSE)
```
Returns number of videos for package

### G (Rush Fee)
```
=IF(F2="Yes", 97, 0)
```

### I (Add-on Total)
```
=SUMIF(AddOnsList!A:A, H2, AddOnsList!B:B)
```
(If using single add-on dropdown)

OR for multiple add-ons:
```
=SUM(multiple checkbox references)
```

### J (Subtotal)
```
=D2 + G2 + I2
```

### L (Discount Amount)
```
=J2 * (K2/100)
```

### M (Final Price)
```
=J2 - L2
```

### N (Deposit)
```
=M2 / 2
```

### O (Final Payment)
```
=M2 / 2
```

### P (Price Per Video)
```
=M2 / E2
```

---

## SHEET 2: Pricing Table (Reference)

**Name this range "PricingTable"**

| Package Type | Base Price | Video Count |
|--------------|-----------|-------------|
| Bronze | 297 | 4 |
| Silver | 697 | 12 |
| Gold | 1497 | 30 |

---

## SHEET 3: Add-Ons List

**Name this range "AddOnsList"**

| Add-On Name | Price |
|-------------|-------|
| Rush Delivery (12hr) | 97 |
| Additional Revision Round | 47 |
| Extended Length (90-180s) | 29 |
| Custom Motion Graphics | 127 |
| Voiceover Recording | 97 |
| Premium Stock Footage | 67 |
| Content Strategy Session | 197 |
| Performance Analysis Report | 97 |

---

## SHEET 4: Quote Output (Formatted for Client)

This sheet auto-generates a formatted quote you can copy/paste or export as PDF.

### Layout:

```
===================================
    [YOUR BUSINESS NAME]
    Short-Form Video Editing
===================================

QUOTE FOR: [Client Name]
DATE: [Date]
VALID FOR: 14 days

-----------------------------------
PACKAGE SELECTED: [Package Type]
-----------------------------------

Base Package: .................. $[Base Price]
  ✓ [Video Count] short-form videos
  ✓ [Platform optimization details]
  ✓ [Revisions included]

Add-Ons:
  [If Rush Delivery] Rush Delivery (12hr) ..... +$97
  [List other add-ons] .................. +$[Price]

Subtotal: ..................... $[Subtotal]

[If discount] 
Discount ([Discount %]%): .......... -$[Discount Amount]

-----------------------------------
TOTAL INVESTMENT: $[Final Price]
-----------------------------------

Payment Schedule:
  Deposit (50%): ............... $[Deposit]
  Final Payment (50%): ......... $[Final Payment]

-----------------------------------
BREAKDOWN:
-----------------------------------
Price per video: ................ $[Price Per Video]
Turnaround time: ................ [Based on package]
Revision rounds: ................ [Based on package]

-----------------------------------
NEXT STEPS:
-----------------------------------
1. Reply to accept this quote
2. Sign contract (sent separately)
3. Pay deposit via [payment link]
4. Complete kickoff questionnaire
5. Upload assets to shared folder

Questions? Reply to this email or book a call:
[Your Calendly link]

This quote expires: [Date + 14 days]
```

### Formulas for Quote Output Sheet:

Use cell references from the main calculator sheet:

```
="QUOTE FOR: " & Calculator!A2
="DATE: " & TEXT(Calculator!B2, "MM/DD/YYYY")
="PACKAGE SELECTED: " & Calculator!C2
="Base Package: $" & Calculator!D2
... etc.
```

---

## SHEET 5: Dashboard (Optional)

Visual summary with charts and insights.

### Key Metrics:
- Total quotes sent this month
- Average quote value
- Conversion rate (quotes → signed contracts)
- Most popular package
- Most popular add-ons

### Charts:
1. **Pie chart:** Package distribution (Bronze/Silver/Gold)
2. **Bar chart:** Monthly revenue by package
3. **Line chart:** Quote values over time

---

## ADDITIONAL FEATURES

### Conditional Formatting:

**Highlight rush delivery:**
- If Column F = "Yes", highlight row in yellow

**Highlight high-value quotes:**
- If Final Price > $1000, highlight in green

**Highlight expiring quotes:**
- If Date < TODAY()-14, highlight in red

### Data Validation:

**Package Type (Column C):**
- Dropdown: Bronze, Silver, Gold

**Rush Delivery (Column F):**
- Dropdown: Yes, No

**Discount % (Column K):**
- Number validation: 0-20 (max discount allowed)

### Notes Column (Add Column Q):
- Free text for internal notes
- "Client mentioned budget of $500"
- "Competitor quoted $400"
- "Referred by [Name]"

---

## ADVANCED: Segment-Specific Pricing

Create additional pricing tables for different segments:

### Sheet: Creator Pricing

| Package Type | Base Price | Video Count | Specialty |
|--------------|-----------|-------------|-----------|
| Bronze | 297 | 4 | Hook optimization |
| Silver | 697 | 12 | Trend integration |
| Gold | 1497 | 30 | Full content strategy |

### Sheet: Ecom Pricing

| Package Type | Base Price | Video Count | Specialty |
|--------------|-----------|-------------|-----------|
| Bronze | 347 | 4 | Product showcase |
| Silver | 797 | 12 | UGC-style editing |
| Gold | 1697 | 30 | Ad optimization |

**Then update VLOOKUP to reference the correct sheet based on client segment.**

---

## AUTOMATION IDEAS

### Google Apps Script Options:

1. **Auto-send quote email:**
   - When you fill out calculator, script generates and emails formatted quote
   
2. **CRM Integration:**
   - Push data to Notion, Airtable, or Pipedrive
   
3. **Expiry Reminders:**
   - Email reminder 2 days before quote expires
   
4. **Discount Approval:**
   - If discount > 15%, trigger approval request

---

## SETUP INSTRUCTIONS

### Step 1: Create New Google Sheet
1. Go to Google Sheets
2. Create new spreadsheet
3. Name it: "Client Pricing Calculator - [Your Business]"

### Step 2: Create All Sheets
1. Rename Sheet1 to "Calculator"
2. Add new sheets: PricingTable, AddOnsList, QuoteOutput, Dashboard

### Step 3: Build PricingTable
1. In PricingTable sheet, add header row: Package Type | Base Price | Video Count
2. Fill in three packages (Bronze, Silver, Gold)
3. Select data range (A1:C4)
4. Name the range "PricingTable" (Data > Named ranges)

### Step 4: Build AddOnsList
1. In AddOnsList sheet, add header: Add-On Name | Price
2. Fill in all add-ons
3. Name the range "AddOnsList"

### Step 5: Build Calculator
1. Add column headers (A1:P1)
2. Add formulas in row 2
3. Apply data validation to dropdowns
4. Format currency columns as $ (Format > Number > Currency)

### Step 6: Build QuoteOutput
1. Design formatted layout (see template above)
2. Use cell references to pull data from Calculator sheet
3. Format for readability (bold, borders, spacing)

### Step 7: Add Conditional Formatting
1. Select entire Calculator range
2. Format > Conditional formatting
3. Add rules (see Conditional Formatting section above)

### Step 8: Test
1. Fill out a test quote
2. Verify all formulas calculate correctly
3. Check QuoteOutput renders properly
4. Export as PDF to see final look

### Step 9: Make a Template
1. File > Make a copy
2. Keep master template clean (no test data)
3. Duplicate for each client quote

---

## USAGE WORKFLOW

### When You Get a Lead:

1. **Open calculator** (or duplicate template)
2. **Fill in:**
   - Client name
   - Package type
   - Rush delivery (if needed)
   - Add-ons (if discussed)
   - Discount (if offering early-bird or referral discount)
3. **Review:**
   - Final Price looks right?
   - Price per video is profitable?
4. **Copy QuoteOutput:**
   - Copy formatted quote
   - Paste into email or PDF
5. **Send to client**
6. **Track in Notion:**
   - Log quote in your CRM/Notion
   - Set reminder to follow up in 3 days

---

## PROFITABILITY ANALYSIS

Add a "Margin Calculator" sheet:

| Item | Cost | Notes |
|------|------|-------|
| Music License (Epidemic Sound) | $15/month | Divided across all clients |
| Software (Premiere/Final Cut) | $20/month | Adobe CC |
| Stock Footage (if needed) | $10/video | Only if required |
| Time (your hourly rate) | $50/hour | Adjust based on experience |
| Overhead (internet, equipment) | $5/video | Amortized |

**Profit per video:**
```
= (Price per video) - (Music + Software + Stock + Time + Overhead)
```

**Target margin:** 50-70%

---

## PRICING STRATEGY NOTES

### When to Raise Prices:

- ✅ After first 10 clients (increase 15-20%)
- ✅ When fully booked (demand > supply)
- ✅ After 6 months experience (you're faster/better)
- ✅ When you add new skills (motion graphics, 3D, etc.)

### When to Discount:

- ✅ First 3 clients (portfolio building)
- ✅ Referral from existing client (10% discount)
- ✅ Long-term contract (3+ months, 15% discount)
- ❌ NEVER discount just because someone asks
- ❌ NEVER discount more than 20%

### Package Upsell Strategy:

**Most leads will gravitate to Bronze (cheapest).**

Your job: Show value of Silver/Gold.

**Tactics:**
- Present all three (don't hide Gold)
- Show price-per-video savings (Silver = $58/video vs Bronze = $74/video)
- Emphasize time savings (Silver = unlimited revisions, faster turnaround)
- Offer payment plans on Gold (makes it accessible)

**Goal:** 60% of clients on Silver or Gold.

---

## MOBILE VERSION

Create a simplified version in Google Sheets app:

**Quick Quote Calculator:**
- Package dropdown
- Add-ons checkboxes
- Final price display
- "Email Quote" button (uses Google Apps Script)

**Use case:** Quoting clients on discovery calls in real-time

---

## SECURITY & SHARING

**Permissions:**
- Master template: Only you (Owner)
- Client-specific copies: You only (don't share calculator, only the QuoteOutput)

**Backup:**
- File > Make a copy > Save to "Quote Archive" folder monthly

---

This pricing calculator spec gives you everything needed to build a professional, automated quoting system that saves time and ensures profitability.

**Build time:** 30-45 minutes  
**Time saved per quote:** 10-15 minutes  
**ROI:** Worth it after 3-5 quotes
