# SSS Auto Spares — Payment Page Recreation Prompt

## 1. Reference Analysis

Recreate the supplied **SSS Auto Spares Payment page** as a professional, responsive automotive B2B payment-information and payment-assistance page.

The screenshots are the visual source of truth.

The page is **not a checkout page**. It is an informational payment page that:
- explains supported payment channels
- displays verified payment credentials
- provides an official QR-code area
- explains the payment workflow
- gives fraud/safety guidance
- provides a payment enquiry form
- provides a demo payment-verification status checker
- provides direct support/contact actions

Do not add a shopping cart, product checkout, card-payment gateway UI, fake transaction processing, or fabricated banking details.

---

# 2. MASTER APP-BUILDER PROMPT

```text
Build a production-quality responsive SSS Auto Spares Payment page based strictly on the supplied reference screenshots.

The screenshots are the visual source of truth. Reproduce the:
- page structure
- section ordering
- spacing
- typography
- colors
- cards
- buttons
- form fields
- status components
- information hierarchy
- borders
- shadows
- responsive behavior

Keep the same visual design language used by the SSS Auto Spares About and Product pages.

BUSINESS:
SSS Auto Spares
Chennai Automobile Parts

PAGE PURPOSE:
Provide customers with official payment-method information, verified payment credentials, payment safety guidance, payment workflow instructions, payment enquiries, and a simulated transaction-status checker.

IMPORTANT:
This is an information and enquiry page, NOT an ecommerce checkout.

Do not create:
- shopping cart
- checkout
- fake successful payment processing
- fake bank credentials
- fake UPI credentials
- fake merchant account numbers
- fabricated payment confirmations

Use placeholders whenever official credentials are not confirmed.

==================================================
GLOBAL DESIGN LANGUAGE
==================================================

Use the established SSS Auto Spares visual system:

Primary Blue:
#2456D8

Deep Navy:
#0B1833

Footer Navy:
#0B142A

Very Pale Blue:
#F3F6FF

Soft Blue:
#E4EDFF

Main Text:
#071A38

Secondary Text:
#294365

Muted Text:
#58708F

White:
#FFFFFF

Warm Orange:
#FFDAB8

Orange Accent:
#FFB347

Typography:
Modern clean sans-serif similar to Inter.

Use:
- bold dark navy headings
- blue uppercase section labels
- compact labels
- spacious cards
- subtle shadows
- light borders
- rounded corners

Avoid:
- glassmorphism
- excessive gradients
- excessive animation
- dark-heavy body sections
- generic fintech styling

The page should feel like a trustworthy automotive business payment-information portal.

==================================================
BREADCRUMB
==================================================

At the top create a very thin pale-blue breadcrumb strip.

Show:

Home / Payment

Use a small home icon followed by:
Home
/
Payment

"Payment" should be visually emphasized.

==================================================
PAYMENT HERO
==================================================

Use a pale-blue background.

Create a two-column desktop hero.

LEFT SIDE:

Small blue pill:
"Official Settlement Desk • Chennai Central"

Main heading:
"Simple & Secure Payment Information"

The word:
"Payment"
should use the primary blue accent.

Supporting text:

"Review the available payment methods and contact SSS Auto Spares for payment-related assistance. Always verify official account details prior to dispatch confirmation."

Below create three small verification badges:

"Verified UPI & Bank Channels"
"Zero Convenience Fees"
"Direct Invoice Confirmation"

Buttons:

Primary blue:
"View Payment Details"

Secondary white:
"Submit Enquiry"

RIGHT SIDE:

Create a white elevated card titled:

"Payment Assurance"

Subtitle:
"SSS Auto Spares Verified Gateway"

Top-right pill:
"Active Desk"

Use a blue shield icon.

Inside create two small information cards:

DISPATCH PROTOCOL
"Instant Post-UTR"

HUB LOCATION
"Chennai, TN"

Below add three verification statements:

"GST Tax Invoiced Transactions"
"Dedicated Accounts Confirmation Support"
"Encrypted Banking & Merchant Records"

At the bottom add a pale-blue strip:

"Direct Business Settlement Desk • Operational Hours: Mon – Sat"

Card:
- white
- rounded corners
- subtle shadow
- approximately 20px padding

==================================================
AVAILABLE PAYMENT METHODS
==================================================

Use a very pale-blue section background.

Section label:
"APPROVED TRANSACTION CHANNELS"

Heading:
"Available Payment Methods"

Description:
"Choose from the payment options supported by our business. Verify the payment details before making any transaction."

Create a five-column desktop grid.

PAYMENT CARD 1:

Icon:
QR/UPI

Badge:
"Instant"

Title:
"UPI Transfer"

Description:
"Make a payment using a verified UPI ID from any supported app."

Footer:
"Verified Method ✓"

PAYMENT CARD 2:

Icon:
Bank/mobile payment

Badge:
"App Pay"

Title:
"Google Pay"

Description:
"Use the confirmed Google Pay payment number or merchant identifier."

Footer:
"Verified Method ✓"

PAYMENT CARD 3:

Icon:
Phone/mobile payment

Badge:
"Direct"

Title:
"PhonePe"

Description:
"Use the confirmed PhonePe payment details linked to authorized accounts."

Footer:
"Verified Method ✓"

PAYMENT CARD 4:

Icon:
Card/merchant payment

Badge:
"Merchant"

Title:
"Paytm"

Description:
"Use the confirmed Paytm payment details for instant digital clearance."

Footer:
"Verified Method ✓"

PAYMENT CARD 5:

Icon:
Bank

Badge:
"RTGS / NEFT"

Title:
"Bank Transfer"

Description:
"Use bank transfer details only if supported by the business (IMPS/NEFT)."

Footer:
"Verified Method ✓"

CARD STYLE:
- white background
- approximately 12px radius
- subtle border
- subtle shadow
- compact 18–20px padding
- pale-blue icon square
- small blue badge
- strong dark title
- readable description
- blue verification footer

Below cards add a full-width pale-blue notice:

"Notice: Display only payment methods confirmed by the business owner. Always verify receiver name prior to transferring."

==================================================
PAYMENT DETAILS
==================================================

Use a white/light section.

Section label:
"OFFICIAL CREDENTIALS"

Heading:
"Payment Details"

Subtitle:
"Directly remit order settlements using our authorized merchant identifiers below."

Create a large white elevated card with two columns.

LEFT COLUMN:

Row:
Payment Method:
"UPI / Direct Mobile Transfer / Bank Wire"

Row:
Beneficiary Business Name:
"[Confirm Official Business Name / SSS Auto Spares]"

Official UPI ID block:

Label:
"OFFICIAL UPI ID:"

Value:
"[Confirm official UPI ID - e.g. sssautospareS@bank]"

Button:
"Copy Payment ID"

Payment contact row:

"Contact Number for Payment:"
"[Confirm Payment Number]"

Below:
Primary button:
"Copy Payment ID"

Secondary button:
"Contact Business"

RIGHT COLUMN:

Create a dedicated QR-code panel.

Top small pill:
"Scan with Any UPI App"

Display the official business QR code in a clean white QR container.

Below:
"Official Business QR Code"

Small status:
"[Awaiting Client Verification & Upload]"

IMPORTANT:
Do not generate a fake usable payment QR code.

The QR code must be:
- supplied by the business owner
- dynamically loaded from a confirmed asset
OR
- represented by a clearly marked placeholder until the official QR asset is supplied

Never invent payment credentials.

==================================================
HOW TO MAKE A PAYMENT
==================================================

Use a pale-blue section.

Centered heading area.

Section label:
"ORDER TO DISPATCH WORKFLOW"

Heading:
"How to Make a Payment"

Description:
"Follow these structured verification steps to guarantee instant order recording and rapid parts dispatch."

Create a five-column workflow on desktop.

STEP 01:
Icon: checklist
"Confirm Your Requirement"

Description:
"Discuss the product SKU, fitment, or service requirement with the SSS Auto Spares support team."

STEP 02:
Icon: verification/document
"Verify Payment Details"

Description:
"Confirm the official recipient name and payment details with the business before transferring funds."

STEP 03:
Icon: payment
"Complete Your Payment"

Description:
"Use your preferred supported payment method (UPI, Bank Wire, or Merchant App)."

STEP 04:
Icon: receipt/document
"Save Transaction Details"

Description:
"Keep your UTR number, payment screenshot, or reference ID for immediate order tagging."

STEP 05:
Icon: send/contact
"Contact the Business"

Description:
"Share the transaction reference via WhatsApp or enquiry form for invoice and dispatch confirmation."

Each step:
- white card
- rounded corners
- subtle shadow
- large blue step number
- circular pale-blue icon area
- compact title
- concise description

==================================================
PAYMENT SAFETY
==================================================

Create a white elevated safety card.

LEFT:

Warm orange shield icon.

Heading:
"Before You Make a Payment"

Description:
"Protect yourself from fraudulent calls and unauthorized accounts. Adhere to our strict safety protocols."

Important warning strip:
"SSS Auto Spares will NEVER ask for your UPI PIN, OTP, or Banking Password."

RIGHT:

Create four pale-blue verification cards:

1.
"Verify Recipient Details"
"Match the registered business name before authorizing any UPI transfer."

2.
"Confirm Payable Amount"
"Ensure the exact proforma invoice amount is confirmed prior to entering remittance."

3.
"Keep Credentials Secret"
"Do not share your UPI PIN, OTP, or passwords with anyone claiming to be our agent."

4.
"Avoid Unverified Details"
"Do not make payments using unverified personal payment details or random QR codes."

Use blue check-circle icons.

==================================================
PAYMENT HELP / RESOLUTION DESK
==================================================

Create a two-column layout.

LEFT CARD:

Section label:
"DIRECT RESOLUTION DESK"

Heading:
"Need Help With a Payment?"

Description:
"Contact us for questions about payment details, transaction references, or payment-related assistance."

Form fields:

ROW 1:
Customer Name *
Phone Number *

ROW 2:
Email Address (Optional)
Enquiry Type *

Enquiry Type default:
"Payment Method"

ROW 3:
Transaction Reference / UTR Number (Optional)

Full width.

ROW 4:
Message / Part Details *

Large textarea.

Placeholder:
"Specify parts required, payment query, or transfer date..."

Security notice:
"Do not include passwords, OTPs, or CVVs in this enquiry form."

Buttons:
"Submit Payment Enquiry"
"Contact Us"

Implement:
- required validation
- email validation
- phone validation
- accessible labels
- focus states
- clear submission feedback
- no actual payment processing

RIGHT CARD:

Section label:
"STATUS SIMULATION"

Heading:
"Track Payment Verification"

Description:
"Enter your transaction reference or UTR to inspect demo clearing status."

Create:
UTR input
"Enter 12-digit UTR No."

Blue button:
"Verify"

Helper text:
"Simulated reference: try typing any UTR"

Status panel:

Label:
"CURRENT STATUS"

Status badge:
"Awaiting Input"

Message:
"Enter a transaction reference above to simulate receipt verification against the store log."

Below:

"Possible Confirmation States:"

Four status chips:

"Payment Pending"
"Under Review"
"Payment Confirmed"
"Requires Action"

Use different small status indicators but keep the overall palette consistent.

Below:
"Official payment confirmation requires authorized staff validation against Chennai bank records."

Then a small support card:

Icon:
headset/phone

"Payment Desk Phone"

"[Confirm phone number]"

Right button:
"Call Desk"

IMPORTANT:
This is a demo status simulation unless a real backend verification service is explicitly connected.

Do not claim real bank verification.

==================================================
FINAL PAYMENT CTA
==================================================

Use a dark navy full-width section.

Heading:
"Have Questions About Payment?"

Description:
"Contact SSS Auto Spares for direct assistance with payment-related enquiries, bulk quotation invoices, or warehouse dispatches."

Right-side buttons:

White:
"Contact Us"

Blue:
"Enquire Now"

Keep the CTA compact and professional.

==================================================
FOOTER
==================================================

Use the same footer language and structure as the reference.

Dark navy background.

Four columns:

SSS AUTO SPARES

Description:
"Automotive spare parts and vehicle-related enquiry services in Chennai. Supplying genuine parts, quality used spares, and vehicle solutions."

Badge:
"Chennai Operational Hub"

QUICK LINKS

Home
About Us
Product
Gallery

CUSTOMER SUPPORT

Enquire
Feedback
Payment
Share Website

CONTACT & LOCATION

Phone:
"[Confirm phone]"

Email:
"[Confirm email]"

Address:
"[Confirm address, Chennai]"

Business Hours:
"[Confirm hours]"

Bottom divider.

Bottom-left:
"Copyright © 2025 SSS Auto Spares. All rights reserved."

Links:
Privacy Policy
Terms & Conditions

Bottom-right location badge:
"Chennai, Tamil Nadu, India"

==================================================
FUNCTIONAL REQUIREMENTS
==================================================

Implement:

1. Copy Payment ID button
   - copy the configured payment ID to clipboard
   - show temporary "Copied" feedback
   - do not expose a fake ID

2. View Payment Details
   - scroll/navigate to Payment Details section

3. Submit Enquiry
   - scroll/navigate to payment enquiry form

4. Payment enquiry form
   - required-field validation
   - email validation
   - phone validation
   - UTR/reference validation where appropriate
   - success state
   - loading state if backend is connected

5. Payment status simulator
   - validate UTR input
   - simulate states using demo data
   - clearly label it as simulation
   - never imply real bank access

6. Contact Us
   - navigate to configured contact destination

7. Call Desk
   - use configured phone number
   - remain disabled or placeholder if phone is not confirmed

8. QR code
   - load only the verified business QR image
   - show placeholder state if not uploaded
   - never fabricate a functional payment QR

==================================================
RESPONSIVE DESIGN
==================================================

DESKTOP:
- Hero: 2 columns
- Payment methods: 5 columns
- Payment details: 2 columns
- Workflow: 5 columns
- Safety: 2-column composition
- Help section: 2 columns
- Footer: 4 columns

TABLET:
- Hero can remain 2 columns
- Payment cards: 2–3 columns
- Workflow: 2–3 columns
- Payment details: 1–2 columns
- Help section: 1–2 columns
- Footer: 2 columns

MOBILE:
- Hero stacks vertically
- Payment assurance card moves below hero text
- Payment methods become 1 column
- Payment details become 1 column
- QR section remains centered
- Workflow becomes vertical
- Safety cards become 1 column
- Enquiry form becomes 1 column
- Status simulator moves below enquiry form
- CTA buttons stack or become full width
- Footer columns stack
- No horizontal overflow
- Touch targets minimum approximately 44px

==================================================
COMPONENT ARCHITECTURE
==================================================

Use reusable components:

PaymentBreadcrumb
PaymentHero
PaymentAssuranceCard
PaymentMethodGrid
PaymentMethodCard
PaymentNotice
PaymentDetails
PaymentCredentialRow
PaymentQRCode
PaymentWorkflow
PaymentWorkflowStep
PaymentSafetySection
PaymentSafetyCard
PaymentEnquiryForm
PaymentStatusSimulator
PaymentDeskCard
PaymentCTA
Footer

Use reusable data arrays:

paymentMethods
paymentWorkflow
paymentSafetyItems
footerLinks
paymentStatusOptions

Centralize all confirmed business/payment configuration:

businessName
upiId
paymentPhone
qrCode
email
address
businessHours
supportedPaymentMethods

Keep unconfirmed values as:

[Confirm ...]
[Awaiting Client Verification & Upload]

==================================================
ACCESSIBILITY
==================================================

Use:
- semantic headings
- proper form labels
- accessible buttons
- keyboard navigation
- visible focus states
- descriptive aria-labels for icon-only controls
- sufficient contrast
- meaningful QR-code alt text
- error messages associated with form inputs

==================================================
SECURITY
==================================================

Never request:
- UPI PIN
- OTP
- CVV
- banking password
- account password

Never store sensitive payment credentials in frontend code if a backend/configuration system is available.

Never present demo payment details as official details.

Never claim that a payment was verified by a bank unless a real authorized verification API is connected.

==================================================
FINAL RESULT
==================================================

The finished page must look like a trustworthy Chennai automotive business payment-information portal.

It should visually match the supplied screenshots and remain consistent with the existing SSS Auto Spares About and Product pages.

The page must be:
- professional
- clean
- responsive
- accessible
- secure
- enquiry-oriented
- catalogue-business appropriate
- visually consistent
```

---

# 3. EXACT VISUAL DESIGN PROMPT

```text
Reproduce the supplied SSS Auto Spares Payment page with pixel-conscious visual fidelity.

OVERALL STYLE:
Professional automotive B2B payment information portal.

Use:
- pale blue section backgrounds
- white elevated cards
- deep navy typography
- royal blue actions
- warm orange safety accents
- compact information badges
- subtle shadows
- thin borders
- rounded corners

Do not make it look like a consumer fintech dashboard.

COLOR SYSTEM:

Primary Blue:
#2456D8

Deep Navy:
#0B1833

Footer Navy:
#0B142A

Pale Blue:
#F3F6FF

Soft Blue:
#E4EDFF

Main Text:
#071A38

Secondary Text:
#294365

Muted Text:
#58708F

White:
#FFFFFF

Warm Orange:
#FFDAB8

Orange Accent:
#FFB347

TYPOGRAPHY:

Use an Inter-like modern sans-serif.

Hero:
approximately 40–44px desktop

Section headings:
approximately 28–32px

Card headings:
approximately 16–18px

Body:
approximately 14–16px

Labels:
approximately 11–13px

Uppercase labels:
blue
small
medium letter spacing

HEADER / BREADCRUMB:

The screenshot begins with a thin pale-blue breadcrumb strip rather than the full global header.

Show:
Home / Payment

Use compact spacing.

HERO:

Background:
very pale blue.

Two-column layout.

Left:
large heading with "Payment" in royal blue.

Three compact verification pills under the description.

Primary blue button.
Secondary white button.

Right:
white Payment Assurance card.

Card has:
- shield icon
- title
- subtitle
- Active Desk pill
- two mini information boxes
- three verification bullets
- bottom operational-hours strip

CARD STYLE:

12–14px radius.
Soft low-opacity shadow.
Light border.
20px padding.

PAYMENT METHOD SECTION:

Pale blue background.

Five equal cards on desktop.

Each card:
- white
- approximately 12px radius
- small pale-blue icon container
- small blue badge
- title
- compact description
- blue verification footer

Keep card heights visually aligned.

NOTICE:
Full-width pale-blue strip below cards.

PAYMENT DETAILS:

Use a large white elevated card.

Left:
credential rows.

Right:
large pale-blue QR area.

Credential rows use pale-blue backgrounds.

The official UPI ID row should visually stand out with a blue copy button.

QR container:
white inner square inside pale-blue outer panel.

Do not replace the QR with a generated decorative QR.

WORKFLOW:

Centered heading.

Five equal white cards.

Large blue step numbers:
01
02
03
04
05

Each card has a circular pale-blue icon near the top-right.

Keep descriptions compact.

SAFETY SECTION:

White elevated container.

Left side:
warm orange shield icon
heading
description
orange warning strip

Right:
2 × 2 grid of pale-blue safety cards.

HELP SECTION:

Two-column desktop layout.

Left enquiry form card is larger.

Right status simulator card.

Inputs:
very light blue backgrounds
thin border
rounded 7–9px

Buttons:
blue primary
pale-blue/white secondary

STATUS SIMULATOR:

Input and Verify button horizontally aligned.

Current status displayed inside pale-blue panel.

Status chips use tiny colored indicators but avoid bright saturated colors.

FINAL CTA:

Dark navy.

White heading.
Muted light-blue description.
White Contact button.
Blue Enquire button.

FOOTER:

Dark navy.

Four-column desktop layout.

Small compact text.
Thin divider above copyright.

Use a slightly darker bottom bar.

SPACING:

Use an 8px spacing system.

Major section padding:
approximately 48–64px.

Cards:
approximately 20px padding.

Section horizontal container:
approximately 970–1100px at reference width.

Keep all sections aligned to a common left/right content boundary.

SHADOWS:

Very subtle.
Avoid dramatic shadows.

BORDERS:

1px light blue/gray borders.

RADIUS:

Cards:
12–14px

Buttons:
7–9px

Pills:
999px

Inputs:
7–9px

RESPONSIVE:

Desktop:
full multi-column composition.

Tablet:
reduce columns.

Mobile:
stack everything vertically while preserving the exact visual hierarchy.

Do not introduce horizontal scrolling.
```

---

# 4. WEBSITE IMAGE / VISUAL ASSET ANALYSIS

The supplied Payment page contains **no photographic website images** like the Product page.

The primary visual asset is:

## Asset 01 — Official Business QR Code

Location:
Payment Details section.

Purpose:
Allows customers to scan the official SSS Auto Spares payment QR using a UPI app.

Important:
This should **NOT be generated using an image-generation model**.

A payment QR is functional encoded data. Generating a visually similar QR would not guarantee that it contains the correct payment destination.

Use:

```text
Official QR image supplied by the business owner
```

or:

```text
[Awaiting Client Verification & Upload]
```

until the verified QR asset is available.

---

# 5. QR CODE IMPLEMENTATION PROMPT

```text
Create a clean official business QR-code presentation area for the SSS Auto Spares payment page.

IMPORTANT:
Do NOT invent or fabricate the QR code data.

The QR must be generated from the confirmed official business payment identifier or supplied as the verified QR image provided by the business owner.

Visual presentation:
- white QR-code container
- centered black-and-white QR code
- pale-blue outer payment panel
- small blue pill above QR:
  "Scan with Any UPI App"
- label below:
  "Official Business QR Code"
- verification status below:
  "[Awaiting Client Verification & Upload]"

The QR code itself must remain technically scannable.

Do not:
- stylize the QR excessively
- distort modules
- add decorative graphics over the QR
- add fake logos
- add fake payment IDs
- generate a random QR code
- use a placeholder QR as if it were official

If the verified QR image is unavailable, display a professional placeholder panel instead.
```

---

# 6. ICON / UI ASSET RULES

All icons visible in the screenshots should be implemented as vector icons, not generated images.

Recommended:
- Lucide
- Heroicons
- Material Symbols

Required icon categories include:

- Home
- Shield
- QR code
- Percentage
- Receipt
- Bank
- Smartphone
- Payment card
- Clipboard
- Verification/check circle
- Transaction/UTR
- Headset
- Phone
- Location
- Send
- Information
- Lock/security

Do not create raster images for these icons.

---

# 7. PAYMENT DATA CONFIGURATION

Use a configuration object similar to:

```text
paymentConfig = {
  businessName: "[Confirm Official Business Name / SSS Auto Spares]",
  upiId: "[Confirm official UPI ID]",
  paymentPhone: "[Confirm Payment Number]",
  qrCode: "[Awaiting Client Verification & Upload]",
  email: "[Confirm Email]",
  address: "[Confirm Address, Chennai]",
  businessHours: "[Confirm Hours]",
  dispatchProtocol: "Instant Post-UTR",
  hubLocation: "Chennai, TN"
}
```

Do not hard-code fabricated financial information.

---

# 8. PAYMENT METHOD DATA

```text
[
  {
    title: "UPI Transfer",
    badge: "Instant",
    description: "Make a payment using a verified UPI ID from any supported app.",
    icon: "qr-code"
  },
  {
    title: "Google Pay",
    badge: "App Pay",
    description: "Use the confirmed Google Pay payment number or merchant identifier.",
    icon: "smartphone"
  },
  {
    title: "PhonePe",
    badge: "Direct",
    description: "Use the confirmed PhonePe payment details linked to authorized accounts.",
    icon: "smartphone"
  },
  {
    title: "Paytm",
    badge: "Merchant",
    description: "Use the confirmed Paytm payment details for instant digital clearance.",
    icon: "credit-card"
  },
  {
    title: "Bank Transfer",
    badge: "RTGS / NEFT",
    description: "Use bank transfer details only if supported by the business (IMPS/NEFT).",
    icon: "building"
  }
]
```

---

# 9. PAYMENT WORKFLOW DATA

```text
[
  {
    number: "01",
    title: "Confirm Your Requirement",
    description: "Discuss the product SKU, fitment, or service requirement with the SSS Auto Spares support team."
  },
  {
    number: "02",
    title: "Verify Payment Details",
    description: "Confirm the official recipient name and payment details with the business before transferring funds."
  },
  {
    number: "03",
    title: "Complete Your Payment",
    description: "Use your preferred supported payment method (UPI, Bank Wire, or Merchant App)."
  },
  {
    number: "04",
    title: "Save Transaction Details",
    description: "Keep your UTR number, payment screenshot, or reference ID for immediate order tagging."
  },
  {
    number: "05",
    title: "Contact the Business",
    description: "Share the transaction reference via WhatsApp or enquiry form for invoice and dispatch confirmation."
  }
]
```

---

# 10. PAYMENT SAFETY DATA

```text
[
  {
    title: "Verify Recipient Details",
    description: "Match the registered business name before authorizing any UPI transfer."
  },
  {
    title: "Confirm Payable Amount",
    description: "Ensure the exact proforma invoice amount is confirmed prior to entering remittance."
  },
  {
    title: "Keep Credentials Secret",
    description: "Do not share your UPI PIN, OTP, or passwords with anyone claiming to be our agent."
  },
  {
    title: "Avoid Unverified Details",
    description: "Do not make payments using unverified personal payment details or random QR codes."
  }
]
```

---

# 11. FINAL VISUAL QA CHECKLIST

- [ ] Breadcrumb matches reference.
- [ ] Hero uses pale-blue background.
- [ ] Hero heading has blue "Payment".
- [ ] Payment Assurance card is on the right.
- [ ] Three verification badges appear below hero text.
- [ ] Available Payment Methods contains exactly 5 cards.
- [ ] Payment method cards align evenly.
- [ ] Payment notice appears below cards.
- [ ] Payment Details has two-column layout.
- [ ] Official UPI ID has Copy Payment ID interaction.
- [ ] QR area is visually prominent.
- [ ] QR is never fabricated.
- [ ] Workflow contains exactly 5 steps.
- [ ] Safety section has 4 verification cards.
- [ ] Warning message is visually emphasized.
- [ ] Payment enquiry form matches the reference.
- [ ] Status simulator appears beside the form on desktop.
- [ ] Status simulator is explicitly treated as demo/simulation unless a real service exists.
- [ ] Payment Desk Phone card is present.
- [ ] Final CTA uses dark navy.
- [ ] Footer matches the SSS Auto Spares visual system.
- [ ] Mobile layout stacks correctly.
- [ ] No horizontal overflow.
- [ ] No fabricated financial credentials.
- [ ] No fake payment success state.
- [ ] No checkout/cart UI.
