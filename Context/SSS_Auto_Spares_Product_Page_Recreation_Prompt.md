# SSS Auto Spares — Product Page Recreation Prompt

## 1. Reference Analysis

Recreate the supplied SSS Auto Spares **Product / Product Catalogue** page as a production-quality responsive website.

The reference shows a complete desktop product catalogue page with:

1. Global information bar
2. Main navigation with Product active
3. Breadcrumb
4. Product catalogue hero
5. Product category explorer
6. Search/filter panel
7. Catalogue directory with 6 product cards
8. Featured sourcing / service-value section
9. Technical quotation enquiry form
10. Rare/hard-to-find parts CTA
11. Footer

The design language must remain consistent with the supplied About page:
- Deep navy
- Royal blue
- Pale blue backgrounds
- White cards
- Controlled warm-orange accents
- Rounded corners
- Thin borders
- Soft shadows
- Professional automotive B2B appearance

Do not turn this into a generic ecommerce store. It is primarily a **catalogue + enquiry/sourcing website**, where customers inspect product information and submit enquiries rather than directly purchasing products.

---

# 2. MASTER APP-BUILDER PROMPT

## Copy-ready prompt

```text
Build a responsive production-quality SSS Auto Spares Product Catalogue page based strictly on the supplied reference screenshots.

The screenshots are the visual source of truth. Reproduce their:
- layout
- proportions
- spacing
- typography
- colors
- card dimensions
- image treatment
- borders
- shadows
- buttons
- navigation
- form structure
- section ordering
- responsive behavior

Do not redesign it into a generic ecommerce template.

BUSINESS:
SSS Auto Spares
Chennai Automobile Parts

PRIMARY PURPOSE:
Allow customers to browse automotive spare-part categories, search/filter catalogue items, inspect product information, and submit a spare-part enquiry.

Do NOT add checkout/cart/purchase functionality unless explicitly requested later.

==================================================
GLOBAL HEADER
==================================================

Create the same global header used in the supplied About page.

TOP INFORMATION BAR:
Dark navy thin strip.

Left:
"[Confirm Phone Number] • Chennai, TN"

Middle:
"Hours: [Confirm Hours]"

Right:
"[Confirm Email] | Verified OEM/OES Supply Hub"

MAIN NAVIGATION:
White navigation bar.

Left:
- SSS Auto Spares logo
- SSS AUTO SPARES
- CHENNAI AUTOMOBILE PARTS

Navigation:
Home
About Us
Product
Payment
Gallery
Feedback
Enquire
Share

Product must be the active navigation item:
- royal blue background
- white text
- rounded corners

Right:
- pale orange "Enquire Now" button
- circular blue account icon

Keep header dimensions and spacing visually consistent with the About page.

==================================================
BREADCRUMB + PRODUCT HERO
==================================================

Use a white / very pale blue background.

Breadcrumb:
Home > Product Catalogue

Hero uses a two-column desktop layout.

LEFT:

Small blue pill:
"VERIFIED CATALOGUE SOURCING • CHENNAI CENTRAL"

Main heading:
"Find the Right Auto Spare Parts"

Supporting copy:
"Explore our automotive spare parts categories and share your vehicle
requirements with SSS Auto Spares. We deliver authenticated OEM/OES
components and rigorously bench-tested assemblies across Tamil Nadu."

Buttons:
Primary:
"Send an Enquiry"

Secondary:
"Explore Categories"

Below buttons create a pale-blue horizontal information strip with 3 columns:

INVENTORY QUALITY
"100% OEM / OES"

FAST RESPONSE
"~30 Mins Quote"

LOGISTICS
"Chennai Dispatch"

RIGHT:

Use a large automotive warehouse image.

Show:
- organized automotive spare-part shelves
- brake discs
- mechanical components
- automotive inventory
- professional warehouse/service environment

Image has:
- rounded corners
- subtle shadow
- white/clean framing

Overlay a small warm-orange badge:
"Live Stock Network"

Overlay a white floating verification card near the lower portion of the image:

Icon
"Chassis Fitment Guarantee"
"Validated against VIN/RC records"

The floating card slightly overlaps the image.

==================================================
CATEGORY EXPLORER
==================================================

Section background:
very pale blue.

Small uppercase label:
"CATEGORY EXPLORER"

Heading:
"Explore Product Categories"

Description:
"Browse our automotive product categories and discover the parts or services relevant to your requirement."

Right side:
"6 Core Sourcing Segments"

Create a 3-column × 2-row grid.

CATEGORY CARD 1:
Icon: car
Title:
"Car Spare Parts"

Description:
"Explore spare parts for four-wheeler requirements including powertrain, braking, suspension, and routine service consumables."

Action:
"Explore Category →"

CATEGORY CARD 2:
Icon: body/car
Title:
"Car Body Parts"

Description:
"Enquire about automotive body parts and replacement components including bumpers, fenders, bonnets, mirrors, and door skins."

Action:
"Explore Category →"

CATEGORY CARD 3:
Icon: recycling/used parts
Title:
"Used Spare Parts"

Description:
"Ask about second-hand and used automotive parts salvaged and bench-tested for structural and functional viability."

Action:
"Explore Category →"

CATEGORY CARD 4:
Icon: replacement/refresh
Title:
"Replacement Parts"

Description:
"Explore replacement component enquiries for worn-out mechanical assemblies, hydraulic mounts, bushings, and steering racks."

Action:
"Explore Category →"

CATEGORY CARD 5:
Icon: older vehicle
Title:
"Old Vehicle Parts"

Description:
"Submit enquiries for parts related to older vehicles or discontinued vehicle series requiring specialized supplier lookup."

Action:
"Explore Category →"

CATEGORY CARD 6:
Icon: gears
Title:
"Other Automotive Requirements"

Description:
"Contact us with a specific automotive parts requirement or custom procurement needs across multi-brand fleet setups."

Action:
"Explore Category →"

CARD STYLE:
- white
- 12–14px radius
- subtle border
- subtle shadow
- approximately 22px internal padding
- blue icon inside pale-blue rounded square
- title around 16px
- body around 14–15px
- blue action link at bottom

==================================================
CATALOGUE SEARCH / FILTER
==================================================

Create a large white rounded filter container on the pale-blue background.

Top:
Large search field with search icon.

Placeholder:
"Search for spare parts by name, OEM part #, or vehicle model..."

Below create 5 filter controls:

Product Category
Vehicle Brand
Vehicle Model
Vehicle Type
Part Condition

Default values:
All Categories
All Brands
All Models
All Types
All Conditions

Use clean select/dropdown styling.

Below:
Primary blue button:
"Search Parts"

Secondary pale-blue button:
"Clear Filters"

Right-side status pill:
"Displaying 6 Demo Catalogue Items (Sample Data for Client Review)"

The filtering system should be functional if backend/data support exists.

==================================================
CATALOGUE DIRECTORY
==================================================

Section title:
"Catalogue Directory"

Subtitle:
"Verified part units ready for technical confirmation & dispatch."

Top-right badge:
"Stock Location: Chennai Hub"

Use a 3-column responsive product grid on desktop.

Create six product cards.

--------------------------------------------------
PRODUCT 01
--------------------------------------------------

Category:
CAR BODY PARTS

Badge:
"New / OEM Grade"

SKU:
"BMP-7701"

Image:
Automotive front bumper assembly displayed in a professional automotive workshop.

Product title:
"Car Front Bumper Assembly"

Vehicle Compatibility:
"[Confirm Vehicle Fitment]"

Price:
"Contact for Price"

Stock Status:
"Enquire for Availability"

Buttons:
"▷ Enquire"
"View Details"

--------------------------------------------------
PRODUCT 02
--------------------------------------------------

Badge:
"New"

SKU:
"HLP-8920"

Category:
LIGHTING & ELECTRICAL

Title:
"Dual Projector Headlamp Assembly"

Vehicle Compatibility:
"[Confirm Fitment]"

Price:
"Contact for Price"

Stock Status:
"Enquire for Availability"

Buttons:
"▷ Enquire"
"View Details"

--------------------------------------------------
PRODUCT 03
--------------------------------------------------

Badge:
"New / Tested"

SKU:
"BRK-4412"

Category:
CAR SPARE PARTS (BRAKING)

Title:
"High-Carbon Ventilated Brake Disc"

Vehicle Compatibility:
"[Confirm Fitment]"

Price:
"Contact for Price"

Stock Status:
"Enquire for Availability"

Buttons:
"▷ Enquire"
"View Details"

--------------------------------------------------
PRODUCT 04
--------------------------------------------------

Badge:
"Used / Bench-Tested"

SKU:
"MRR-2094"

Category:
CAR BODY PARTS

Title:
"Electric Power Side Mirror Assembly"

Vehicle Compatibility:
"[Confirm Fitment]"

Price:
"Contact for Price"

Stock Status:
"Enquire for Availability"

Buttons:
"▷ Enquire"
"View Details"

--------------------------------------------------
PRODUCT 05
--------------------------------------------------

Badge:
"New"

SKU:
"ENG-3108"

Category:
REPLACEMENT PARTS

Title:
"Heavy-Duty Hydraulic Engine Mount"

Vehicle Compatibility:
"[Confirm Fitment]"

Price:
"Contact for Price"

Stock Status:
"Enquire for Availability"

Buttons:
"▷ Enquire"
"View Details"

--------------------------------------------------
PRODUCT 06
--------------------------------------------------

Badge:
"Used / Inspected"

SKU:
"LCK-5561"

Category:
BODY & HARDWARE

Title:
"Exterior Door Handle & Lock Assembly"

Vehicle Compatibility:
"[Confirm Fitment]"

Price:
"Contact for Price"

Stock Status:
"Enquire for Availability"

Buttons:
"▷ Enquire"
"View Details"

--------------------------------------------------

PRODUCT CARD DESIGN:
- White card
- rounded approximately 12px
- subtle border
- soft shadow
- image at top
- image aspect ratio approximately 16:9
- badges overlay image near upper-left
- SKU badge upper-right
- product category small uppercase blue
- product name dark navy
- compatibility / price / stock rows
- thin divider before actions
- two equal-width action buttons
- Enquire button warm pale orange
- View Details button pale blue

Product images must not be stretched.
Use object-fit: cover or contain according to the source image composition.

==================================================
FEATURED SOURCING
==================================================

Use pale-blue section background.

Label:
"FEATURED SOURCING"

Heading:
"Explore Selected Products"

Description:
"Sample curated spare parts demonstrating parts grading, precision specifications, and instant Chennai distribution readiness."

Add category pills on the right:
- Filters & Consumables
- Brake Pads & Discs
- Suspension & Mounts
- Body Bumpers

Below create 3 white value cards.

CARD 1:
Blue shield icon
"100% Genuine Provenance"
"OEM packaging with verifiable serial stamps"

Description:
"Every precision transmission component, braking pad, and sensor sourced through SSS Auto Spares undergoes strict dimensional inspection before handoff."

Bottom:
"Chennai Central Quality Protocol"

CARD 2:
Warm brown/orange icon
"30-Minute Quotations"
"Real-time inventory lookup via WhatsApp & phone"

Description:
"Need an urgent part estimate? Our technical parts sourcing desk verifies current warehouse rack availability and best pricing in Tamil Nadu without delay."

Bottom:
"Instant Dispatch Readiness"

CARD 3:
Dark gray icon
"Mechanic Bench Verification"
"Tested before courier or workshop collection"

Description:
"Used and second-hand components are bench-checked with calibrated micrometers and circuit diagnostics to ensure long service life."

Bottom:
"Verified Automotive Engineering"

==================================================
TECHNICAL QUOTATION FORM
==================================================

Create a centered white elevated form card.

Top label:
"FAST TECHNICAL QUOTATION"

Heading:
"Submit a Spare Part Enquiry"

Description:
"Provide your vehicle specification and required part description. Our Chennai engineering desk validates chassis compatibility and pricing within ~30 minutes."

Form layout:

ROW 1:
Your Full Name *
Contact Phone Number *

ROW 2:
Vehicle Make & Model *
Manufacturing Year
Target Part / SKU (Optional)

ROW 3:
Email Address (Optional)
Condition Preference

Condition radio options:
New OEM/OES
Tested Second-Hand

ROW 4:
Required Part Description & Notes *

Large textarea.

Placeholder:
"Describe the part requirement, chassis/engine number if known, or side (Left / Right)..."

Below form:
Pale-blue information notice:
"This is an enquiry submission. Our Chennai team validates chassis compatibility and pricing within 30 minutes before confirmation."

Bottom:
"Operational Hours: [Confirm Hours] • Tamil & English Desk"

Right:
"▷ Submit Part Enquiry"

Implement proper labels, required validation, accessible inputs, focus states, and responsive stacking.

==================================================
HARD-TO-FIND PARTS CTA
==================================================

Use a dark navy section.

Inside it create a large darker navy rounded panel.

Small warm badge:
"HARD-TO-FIND & VINTAGE SPARES"

Heading:
"Can't Find the Part You Need?"

Description:
"Share your vehicle details and spare parts requirements with our team. We source rare OEM and inspected second-hand parts across Chennai and Tamil Nadu's industrial hubs."

Right buttons:
"Enquire Now"
"Contact Us"

Add a subtle oversized automotive gear/technical decorative graphic in the far-right background.

Do not make the decorative graphic overpower the text.

==================================================
FOOTER
==================================================

Reuse the same SSS Auto Spares footer from the About page.

Four columns:

SSS AUTO SPARES
Description
GST & TRADE ACCREDITED badge

QUICK LINKS
Home
About Us
Product Directory
Parts Gallery

CUSTOMER SUPPORT
Part Quotation & Enquire
Customer Feedback
Payment Gateway & Billing
Share Website Profile

CONTACT & LOCATION
[Confirm Warehouse Address], Chennai, Tamil Nadu, India
[Confirm Phone Number]
[Confirm Email]
[Confirm Hours] (Tamil & English Support)

Bottom bar:
"© 2024 SSS Auto Spares. All rights reserved. Chennai, Tamil Nadu."

Right:
Privacy Policy
Terms of Service
OEM Warranty Policy

==================================================
FUNCTIONAL BEHAVIOR
==================================================

Implement:
- Product navigation active state.
- Category navigation.
- Search input.
- Product category filter.
- Vehicle brand filter.
- Vehicle model filter.
- Vehicle type filter.
- Part condition filter.
- Clear filters.
- Product cards.
- View Details action.
- Enquire action.
- Enquiry form validation.
- Submit enquiry state.
- Contact navigation.
- Responsive mobile navigation.
- Keyboard accessible interactions.

If there is no backend:
- use realistic sample data
- keep all business/contact values marked [Confirm ...]
- simulate form submission with a clear success state
- do not claim that an enquiry was actually sent

==================================================
RESPONSIVE BEHAVIOR
==================================================

DESKTOP:
- Hero: 2 columns
- Categories: 3 columns × 2 rows
- Product catalogue: 3 columns
- Featured sourcing: 3 columns
- Form: multi-column
- Footer: 4 columns

TABLET:
- Hero can remain two-column where width allows
- Categories: 2 columns
- Products: 2 columns
- Featured sourcing: 2 or 3 columns depending on width
- Form fields reduce to 2 columns

MOBILE:
- Stack hero content and image
- Full-width buttons
- Categories: 1 column
- Product cards: 1 column
- Search/filter fields: 1 column
- Featured sourcing cards: 1 column
- Form fields: 1 column
- CTA content stacks
- Footer columns stack
- Navigation collapses into mobile menu
- Preserve touch-friendly controls
- Prevent horizontal overflow

==================================================
ARCHITECTURE
==================================================

Use reusable components:

TopInfoBar
MainNavbar
Breadcrumb
ProductHero
CatalogueStats
CategoryExplorer
CategoryCard
ProductSearchFilters
CatalogueDirectory
ProductCard
FeaturedSourcing
SourcingValueCard
PartEnquiryForm
HardToFindCTA
Footer

Use reusable data arrays for:
categories
products
filters
sourcingBenefits
footerLinks

Keep the design tokens centralized.

Do not fabricate confirmed business details.
Keep all uncertain values as placeholders.
```

---

# 3. EXACT VISUAL DESIGN PROMPT

```text
Reproduce the supplied SSS Auto Spares Product page with pixel-conscious visual fidelity.

OVERALL STYLE:
Modern professional automotive B2B catalogue.
Clean corporate UI.
White and pale-blue surfaces.
Deep navy typography.
Royal blue interactive controls.
Warm pale-orange enquiry buttons.
Minimal decorative elements.
No excessive gradients or glassmorphism.

COLOR SYSTEM:
Primary Blue: #2456D8
Deep Navy: #0B1833
Footer Navy: #0B142A
Pale Blue: #F3F6FF
Soft Blue: #E4EDFF
Body Text: #294365
Muted Text: #58708F
White: #FFFFFF
Warm CTA Orange: #FFDAB8
Accent Orange: #FFB347
Warm Brown Accent: approximately #765000
Dark Gray Icon: approximately #5C667C

TYPOGRAPHY:
Modern sans-serif similar to Inter.
Strong dark-navy headings.
Body text medium/regular.
Uppercase section labels with letter spacing.
Navigation approximately 14px.
Body approximately 14–16px.
Product titles approximately 16px.
Section headings approximately 28–34px.
Hero heading approximately 38–44px desktop.

HEADER:
Thin navy information bar.
White main navigation.
Product tab is active in royal blue.
Logo and business identity on left.
Navigation centered.
Enquire Now button on right.
Circular account icon at far right.

HERO:
White/pale-blue background.
Breadcrumb at top.
Two-column composition.
Text left, warehouse image right.
Large heading.
Two horizontal CTA buttons.
Three-stat strip underneath.
Image has rounded corners and subtle shadow.
Floating fitment-guarantee card overlaps lower image area.

CATEGORY SECTION:
Pale-blue background.
Three-column card grid.
Cards are spacious white rectangles.
Rounded corners.
Blue icon containers.
Minimal borders.
Actions aligned at the bottom.
Six cards form a clean 3 × 2 matrix.

FILTER:
Large white elevated rounded panel.
Search field spans almost entire width.
Five dropdowns beneath it.
Blue Search button.
Pale-blue Clear Filters button.
Status pill aligned to the right.

PRODUCT DIRECTORY:
Three equal product columns.
Images dominate the upper portion of each card.
Product images should have consistent dimensions.
Badges sit on top of images.
SKU badge is positioned at upper-right.
Text content below.
Two horizontal action buttons at the bottom.

Important visual behavior:
The product cards are catalogue cards, not ecommerce checkout cards.
Prices are intentionally displayed as "Contact for Price".
Stock status is enquiry-based.

FEATURED SOURCING:
Pale-blue section.
Heading left.
Category pills right.
Three equal white cards.
Each card begins with an icon square and a title/value proposition.
Description below.
Small blue supporting statement at bottom.

FORM:
Large white centered elevated card.
Heading centered.
Compact uppercase label.
Description centered.
Inputs arranged in clean grid.
Light pale-blue input backgrounds.
Thin light borders.
Blue submit button.
Information alert uses pale-blue background.

FINAL CTA:
Dark navy background.
Dark rounded inner panel.
White heading.
Light-blue description.
Blue primary CTA.
White secondary CTA.
Very subtle oversized technical gear graphic on the right.

FOOTER:
Dark navy.
Four columns.
Small blue icons.
Compact typography.
Bottom legal/copyright strip darker than main footer.

BORDER / SHADOW:
Use subtle 1px light borders.
Use soft shadows around elevated cards.
Avoid heavy black shadows.

RADIUS:
Buttons: 7–9px.
Cards: 12–14px.
Large CTA panels: 14–16px.
Pills: 999px.

SPACING:
Follow an 8px spacing system.
Large sections approximately 48–72px vertical padding.
Cards approximately 20–24px padding.
Maintain consistent horizontal alignment across all sections.

IMAGE TREATMENT:
Photorealistic automotive photography.
No CGI appearance.
No random readable logos.
No watermarks.
No excessive saturation.
No fake text.
Use consistent image aspect ratios across product cards.
```

---

# 4. PRODUCT IMAGE / ASSET ANALYSIS

The screenshots contain **7 major photographic/image assets** that should be treated separately.

## Image 01 — Product Hero Warehouse

Location: Product hero, right side.

Purpose:
Communicates warehouse inventory, live stock, automotive sourcing, and technical parts availability.

Visible subject:
- Automotive warehouse/service inventory
- Metal shelving
- Brake discs
- Mechanical components
- Automotive spare parts
- Technician/worker in background
- Industrial service environment

---

## Image 02 — Car Front Bumper Assembly

Product:
Car Front Bumper Assembly

SKU:
BMP-7701

Visual:
- Large gray/black front bumper assembly
- Professional workshop/warehouse setting
- Product photographed from front
- Mounted/displayed on a support stand

---

## Image 03 — Dual Projector Headlamp Assembly

Product:
Dual Projector Headlamp Assembly

SKU:
HLP-8920

Visual:
- Modern automotive headlamp
- Black housing
- Dual projector elements
- Turn-signal element
- Isolated on a clean neutral background
- Product-display photography

---

## Image 04 — High-Carbon Ventilated Brake Disc

Product:
High-Carbon Ventilated Brake Disc

SKU:
BRK-4412

Visual:
- Large metallic brake rotor/disc
- Mounted upright on a workshop bench
- Automotive repair workshop in background
- Realistic metal surface

---

## Image 05 — Electric Power Side Mirror Assembly

Product:
Electric Power Side Mirror Assembly

SKU:
MRR-2094

Visual:
- Black side mirror assembly
- Integrated amber indicator
- Product isolated on a clean work surface
- Automotive workshop background
- Shallow depth of field

---

## Image 06 — Heavy-Duty Hydraulic Engine Mount

Product:
Heavy-Duty Hydraulic Engine Mount

SKU:
ENG-3108

Visual:
- Black rubber/metal hydraulic engine mount
- Isolated product photography
- Light neutral background
- Reference screenshot includes a product web-page-like background, but the recreated website should use a clean standalone product image rather than reproducing another website interface inside the product image.

---

## Image 07 — Exterior Door Handle & Lock Assembly

Product:
Exterior Door Handle & Lock Assembly

SKU:
LCK-5561

Visual:
- Black automotive exterior door-handle/lock mechanism
- Mechanical gears and latch components visible
- Mounted on a blue technical fixture
- Clean product photography
- Light neutral background

---

# 5. IMAGE PROMPT 01 — PRODUCT HERO WAREHOUSE

```text
Create a photorealistic premium commercial automotive spare-parts warehouse photograph for a professional B2B automotive catalogue website.

Show a clean, organized automotive parts warehouse with tall dark industrial metal shelving filled with genuine-looking automotive components. Prominently display multiple brake discs and rotors, brake components, engine parts, mechanical assemblies, boxed spare parts, and organized inventory.

Include one automotive warehouse technician naturally positioned toward the left/background, slightly out of focus.

The environment should resemble a professional Chennai automotive parts distribution hub:
- industrial shelving
- organized stock
- clean warehouse/service area
- realistic automotive components
- professional workshop lighting
- practical commercial environment

Composition:
- Wide horizontal website hero image
- Approximately 16:9 aspect ratio
- Shelving and automotive inventory are the main visual focus
- Strong depth perspective through the shelving
- Leave enough clean visual space for website overlay elements
- Realistic eye-level camera perspective

Lighting:
Bright professional warehouse lighting
Cool-neutral industrial illumination
Natural realistic shadows
Realistic metallic reflections

Style:
Premium commercial automotive photography
Photorealistic
Authentic spare-parts warehouse
Professional B2B inventory photography
Realistic materials and proportions

Color palette:
Dark gray metal shelves
Silver metallic brake components
Black mechanical parts
Neutral gray/white environment
Subtle blue and red component accents

IMPORTANT:
No readable logos.
No watermark.
No fake text.
No CGI.
No 3D render appearance.
No excessive HDR.
No surreal objects.
No distorted people.
No unrealistic automotive components.
```

---

# 6. IMAGE PROMPT 02 — FRONT BUMPER

```text
Create a photorealistic professional automotive product photograph of a complete modern four-wheeler front bumper assembly.

Show a realistic dark gray/black automotive front bumper with:
- central grille opening
- lower air intake
- fog-light openings
- parking sensor openings
- realistic mounting structures

Place the bumper on a professional industrial display/support stand inside a clean automotive workshop or spare-parts warehouse.

Composition:
- Horizontal 16:9 product catalogue image
- Product centered and dominant
- Front three-quarter perspective
- Entire bumper clearly visible
- Enough background context to communicate professional automotive inventory
- Moderate depth of field

Lighting:
Bright commercial workshop lighting
Soft realistic shadows
Natural reflections on painted plastic
Realistic surface texture

Style:
Premium automotive product photography
Photorealistic
Real replacement automotive component
Professional catalogue photography

IMPORTANT:
No readable logos.
No watermark.
No fake text.
No CGI appearance.
No exaggerated reflections.
No distorted bumper geometry.
No people as the primary subject.
```

---

# 7. IMAGE PROMPT 03 — PROJECTOR HEADLAMP

```text
Create a photorealistic premium automotive product photograph of a modern dual-projector headlamp assembly.

Show a complete automotive headlight unit with:
- black housing
- two projector lens elements
- realistic LED/reflector details
- transparent lens cover
- subtle amber turn-signal element
- authentic mounting brackets

Place the headlamp on a clean minimal neutral studio/workshop surface.

Composition:
- Horizontal 16:9 product catalogue image
- Headlamp centered
- Three-quarter front angle
- Product fills approximately 70% of the frame
- Clean negative space around product
- Moderate soft shadow underneath

Lighting:
Professional studio product lighting
Soft neutral highlights
Realistic glass and plastic reflections
No excessive shine

Style:
High-end automotive parts catalogue photography
Photorealistic
Sharp mechanical detail
Realistic materials

IMPORTANT:
No readable logos.
No watermark.
No fake text.
No CGI.
No unrealistic light emission.
No distorted lens geometry.
```

---

# 8. IMAGE PROMPT 04 — BRAKE DISC

```text
Create a photorealistic commercial automotive workshop photograph featuring a high-carbon ventilated brake disc/rotor.

Show a realistic metallic brake rotor standing vertically on a professional wooden or industrial workshop bench.

The rotor should clearly show:
- drilled/ventilated construction
- realistic machined metal surface
- central hub opening
- mounting holes
- subtle wear-resistant finish

Background:
A professional automotive repair workshop with tools, equipment, workbench, and vehicle-service context. Keep the background softly blurred.

Composition:
- Horizontal 16:9 website product image
- Brake disc is the dominant central subject
- Three-quarter perspective
- Realistic workshop depth

Lighting:
Professional workshop lighting
Natural metallic highlights
Realistic shadows
No exaggerated HDR

Style:
Premium automotive repair photography
Photorealistic
Authentic mechanical component
Commercial catalogue quality

IMPORTANT:
No readable logos.
No watermark.
No fake text.
No CGI.
No impossible geometry.
No excessive rust.
No exaggerated damage.
```

---

# 9. IMAGE PROMPT 05 — ELECTRIC POWER SIDE MIRROR

```text
Create a photorealistic premium automotive product photograph of a complete electric power side mirror assembly.

Show a modern black automotive side mirror with:
- glossy black housing
- integrated amber turn indicator
- realistic mirror glass
- mounting bracket
- electrical adjustment mechanism details

Place it on a clean professional automotive workbench with a softly blurred workshop background.

Composition:
- Horizontal 16:9 product catalogue image
- Product positioned centrally
- Three-quarter perspective
- Entire side mirror and mounting base visible
- Moderate depth of field

Lighting:
Soft professional studio/workshop lighting
Realistic reflections on glossy black housing
Natural amber indicator detail
Soft shadows

Style:
Premium automotive spare-parts catalogue photography
Photorealistic
Clean technical product presentation

IMPORTANT:
No readable logos.
No watermark.
No fake text.
No CGI.
No distorted mirror glass.
No unrealistic reflections.
```

---

# 10. IMAGE PROMPT 06 — HYDRAULIC ENGINE MOUNT

```text
Create a photorealistic premium product photograph of a heavy-duty hydraulic automotive engine mount.

Show a realistic engine mount consisting of:
- black rubber hydraulic bushing
- strong cast or machined metal housing
- mounting bolt holes
- realistic brackets
- industrial automotive-grade construction

Place the component alone on a clean light neutral studio background or professional automotive parts workbench.

Composition:
- Horizontal 16:9 product catalogue image
- Product centered
- Three-quarter angle
- Product fills approximately 65–75% of the image
- Clean background
- Soft grounding shadow

Lighting:
Professional product photography
Soft diffused lighting
Realistic rubber texture
Realistic metal highlights

Style:
Premium automotive engineering catalogue photography
Photorealistic
Highly detailed mechanical component
Authentic replacement part

IMPORTANT:
No readable logos.
No watermark.
No fake text.
No CGI appearance.
No surrounding website interface.
No fake product labels.
```

---

# 11. IMAGE PROMPT 07 — DOOR HANDLE & LOCK ASSEMBLY

```text
Create a photorealistic premium automotive mechanical product photograph of an exterior vehicle door handle and lock assembly.

Show a complete black automotive door-handle/lock mechanism with:
- exterior handle mechanism
- metal latch
- gears
- springs
- mounting brackets
- realistic mechanical linkage
- visible precision components

Mount the mechanism on a simple blue industrial engineering fixture or clean automotive testing stand.

Composition:
- Horizontal 16:9 product catalogue image
- Product centered
- Three-quarter mechanical perspective
- Entire assembly visible
- Clean light neutral background
- Moderate depth of field

Lighting:
Professional technical product photography
Soft diffused lighting
Realistic metal reflections
Clear mechanical details

Style:
Premium automotive engineering photography
Photorealistic
Technical spare-parts catalogue
Realistic materials and proportions

IMPORTANT:
No readable logos.
No watermark.
No fake text.
No CGI.
No distorted mechanical parts.
No impossible gear arrangement.
No excessive reflections.
```

---

# 12. ASSET IMPLEMENTATION RULES

## Logo

Reuse the actual SSS Auto Spares logo from the project/source assets.

Do not generate a replacement logo.

## Icons

Use a vector icon library such as:
- Lucide
- Heroicons
- Material Symbols

Do not generate raster images for:
- search
- filter
- car
- gears
- recycling
- clipboard
- shield
- phone
- email
- location
- account
- arrow icons

## Decorative CTA Graphic

The oversized gear/technical graphic in the final CTA should be generated with CSS/SVG/icon geometry if possible.

Do not use a photographic image.

---

# 13. DESIGN TOKENS

```text
Primary Blue: #2456D8
Deep Navy: #0B1833
Footer Navy: #0B142A

Pale Blue Background: #F3F6FF
Soft Blue: #E4EDFF

Main Text: #071A38
Secondary Text: #294365
Muted Text: #58708F

White: #FFFFFF

Warm CTA: #FFDAB8
Orange Accent: #FFB347
Warm Brown Accent: #765000

Border Radius:
  Buttons: 8px
  Cards: 12–14px
  CTA Panels: 14–16px
  Pills: 999px

Desktop container:
  approximately 1100–1140px

Page horizontal padding:
  approximately 28–30px at reference viewport

Card padding:
  approximately 20–24px

Major section spacing:
  approximately 48–72px

Shadow:
  soft low-opacity navy shadow

Font:
  Inter-like modern sans-serif
```

---

# 14. PRODUCT DATA MODEL

```text
Product {
  id
  sku
  name
  category
  image
  badge
  condition
  vehicleCompatibility
  price
  stockStatus
  description
}

Category {
  id
  title
  icon
  description
}

Filter {
  category
  brand
  model
  vehicleType
  condition
}
```

Keep unknown values configurable:

```text
[Confirm Fitment]
[Confirm Vehicle Fitment]
[Confirm Phone Number]
[Confirm Email]
[Confirm Hours]
[Confirm Warehouse Address]
```

Never invent these values.

---

# 15. FINAL VISUAL QA CHECKLIST

- [ ] Product navigation is active.
- [ ] Header matches the About page.
- [ ] Breadcrumb is present.
- [ ] Product hero has text left / image right.
- [ ] Hero stats strip has three items.
- [ ] Floating fitment guarantee card overlaps hero image.
- [ ] Six category cards appear in a 3 × 2 desktop grid.
- [ ] Search/filter panel has one search field and five filters.
- [ ] Catalogue contains exactly six demo products.
- [ ] Product cards use consistent image dimensions.
- [ ] Product badges and SKUs overlay images.
- [ ] Product cards have Enquire + View Details buttons.
- [ ] Prices remain "Contact for Price".
- [ ] Stock status remains enquiry-based.
- [ ] Featured sourcing has three value cards.
- [ ] Technical quotation form matches the reference structure.
- [ ] Final rare-parts CTA uses dark navy.
- [ ] Footer matches the existing About page.
- [ ] Mobile layout has no horizontal overflow.
- [ ] Product grid becomes one column on small screens.
- [ ] Form becomes one column on mobile.
- [ ] Images are optimized and use meaningful alt text.
- [ ] No fake business details are introduced.
- [ ] No checkout/payment/cart UI is added.
- [ ] The page feels like a professional catalogue and sourcing platform, not a generic ecommerce marketplace.
