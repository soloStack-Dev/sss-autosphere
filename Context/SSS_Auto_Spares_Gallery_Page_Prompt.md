# SSS Auto Spares — Gallery Page Reconstruction & App Builder Prompt

## 1. Page Overview

Recreate the **SSS Auto Spares Gallery page** shown in the supplied screenshots.

The page is a professional automotive spare-parts business gallery for a Chennai-based company. The visual direction is:

- Professional automotive / industrial
- Trustworthy and technical
- Clean modern business UI
- Deep navy + royal blue brand palette
- White/light-blue content surfaces
- Rounded cards
- Compact badges and pills
- Automotive workshop / warehouse photography
- Strong desktop grid layout
- Responsive mobile behavior
- Clear enquiry-focused calls to action

Do **not** redesign the page into a different style. Preserve the visual hierarchy, spacing, proportions, component relationships, and overall appearance of the reference screenshots.

---

# 2. APP BUILDER MASTER PROMPT

```text
Build a complete responsive Gallery page for a professional automotive spare-parts company named "SSS Auto Spares".

The result should closely reproduce the supplied reference screenshots rather than introducing a new visual design.

TECHNOLOGY / IMPLEMENTATION
- Build a production-quality responsive web page.
- Use reusable components for header, gallery filters, gallery cards, feature sections, CTA, and footer.
- Use semantic HTML and accessible controls.
- Use responsive CSS/grid/flex layouts.
- Optimize images with lazy loading where appropriate.
- Preserve consistent spacing and card dimensions.
- Add subtle hover/focus states without changing the visual identity.
- The page should work cleanly from mobile through desktop widths.

BRAND / VISUAL LANGUAGE
- Primary brand color: deep navy.
- Secondary brand color: strong royal blue.
- Accent: warm amber/orange for verification badges, small icons, and highlighted metadata.
- Main page background: very light cool gray / blue.
- Dark sections: deep navy.
- Cards: white with subtle gray-blue borders and soft shadows.
- Typography: modern clean sans-serif similar to Inter/Arial/system sans-serif.
- Headings should be bold and highly readable.
- Use rounded corners, approximately 10–14px for large cards.
- Buttons should have rounded corners around 6–8px.
- Avoid excessive gradients, glassmorphism, or decorative effects.

PAGE STRUCTURE

1. TOP INFORMATION BAR
Create a thin dark navy utility bar at the top.
Left side:
"[Confirm Phone Number] • Chennai, TN"
Right side:
"Hours: [Confirm Hours]"
"[Confirm Email]"

Use small light-gray text.

2. MAIN NAVIGATION
Create a white navigation bar underneath.

Left:
- SSS Auto Spares logo/brand mark
- Text: "SSS AUTO SPARES"

Navigation:
- Home
- About Us
- Product
- Payment
- Gallery
- Feedback
- Enquire
- Share

The Gallery navigation item must be visually active using a pale blue rounded background with blue text.

Right:
- Primary blue button: "Enquire Now"
- Circular user/account icon button

The navbar should remain compact and professional.

3. HERO / GALLERY INTRODUCTION
Create a dark navy-blue hero section with a subtle dotted technical pattern.

Top small breadcrumb:
Home / Gallery

Below it, two pill badges:
- "Verified Business Gallery • Chennai Central Hub"
- "Authentic Spares & Facility Visuals"

Main heading:
"Explore SSS Auto Spares"

Description:
"Discover our automotive spare parts, product collections, and business activities through our curated gallery. Verified OEM components, testing benches, and Chennai counter operations."

On the right side create three compact statistics cards:
- "6" / "Curated Categories"
- "100%" / "Genuine Parts"
- "Live" / "Chennai Facility"

On desktop the text occupies the left portion and statistics occupy the right. On mobile stack them vertically.

4. GALLERY FILTER BAR
Create a white horizontal filter area.

Pills:
- All 6
- Products 2
- Spare Parts 1
- Shop & Showroom 1
- Workshop 1
- Customer Services 1

"All" is active with a solid blue background and white text.
Other filters use pale gray/blue backgrounds with dark text.

At the far right:
small gallery/media icon followed by:
"Showing 6 Media Items"

On mobile, allow the filter pills to horizontally scroll instead of wrapping into an awkward multi-row layout.

5. MAIN GALLERY GRID
Create a 3-column desktop gallery grid.

Each gallery card:
- White background
- Rounded corners approximately 10–12px
- Very subtle border/shadow
- Large image at top
- Image aspect ratio approximately 16:11
- Small category badge overlaid near the top-left of the image
- Content area below image
- Title
- Short description
- Bottom metadata label on the left
- "View Detail →" on the right
- External/open icon near the title's right side

CARD 1
Category: "Shop & Showroom"
Title:
"SSS Auto Spares Store & Display Shelf"

Description:
"Showroom display with precision brake components, calipers, and gear assemblies ready for over-the-..."

Metadata:
"SKU Inspection Rack"

CARD 2
Category: "Workshop"
Title:
"Technicians Bench-Testing Automotive Assemblies"

Description:
"Technical verification desk equipped with digital micrometers, fitment schematics, and testing..."

Metadata:
"Tolerance Check Bench"

CARD 3
Category: "Spare Parts"
Title:
"High-Performance Carbon Ceramic Brake System"

Description:
"Ventilated disc rotor with precision multi-piston caliper mount for high-performance sedans and SUVs."

Metadata:
"Braking Systems"

CARD 4
Category: "Products"
Title:
"Heavy-Duty Suspension & Coil Springs"

Description:
"OEM and aftermarket gas-pressurized shock absorbers organized by vehicle model fitment and load rating."

Metadata:
"Suspension Range"

CARD 5
Category: "Products"
Title:
"Precision Engine Internals & Turbochargers"

Description:
"Camshafts, forged pistons, and cylinder head gaskets strictly inspected for micrometer durability and OEM..."

Metadata:
"Engine Core Components"

CARD 6
Category: "Customer Services"
Title:
"Vehicle Parts Consultation & Fitment Validation"

Description:
"Dedicated Chennai engineering desk assisting garage owners, technicians, and car owners with chassis-lev..."

Metadata:
"Fitment Assistance"

Use the six supplied reference images as the visual basis for these six cards.

6. FACILITY & STANDARDS SECTION
Create a pale cool-blue section.

Small uppercase eyebrow:
"FACILITY & STANDARDS"

Heading:
"Quality You Can Trust"

Description:
"Take a closer look at our products, facilities, and commitment to serving automotive needs across Tamil Nadu."

Top-right small verification label:
"Verified Stock Management"

Layout:
- Large feature card on the left, approximately 58–60% width.
- Two smaller horizontal feature cards stacked on the right.

LEFT LARGE FEATURE
Large warehouse/showroom image.
Overlay badge:
"Primary Chennai Warehouse & Showroom"

Below image:
Title:
"Integrated Chennai Parts Hub"

Description:
"Every automotive part entering our facility undergoes barcoding, brand authenticity checks, and digital cataloging before entering active rotation."

Three small information boxes:
1. "Tier-1 Sourcing" / "Direct factory batches"
2. "Clean Cataloging" / "Accurate chassis matches"
3. "Instant Dispatch" / "Same-day pickup available"

RIGHT TOP FEATURE
Image on left and text on right.

Badge/eyebrow:
"Testing Bench"

Title:
"Bench-Testing & Fitment Desk"

Description:
"Hands-on measurement checking clearance, tolerance, and electrical..."

RIGHT BOTTOM FEATURE
Use the brake-system image.
Eyebrow:
"OEM Assurance"

Title:
"Verified Brake & Performance Spares"

Description:
"High-friction rotors, hydraulic calipers, and temperature-rated pads certified for..."

7. REAL-TIME PHOTO REQUEST STRIP
Create a white/light-blue rounded rectangular callout.

Left:
Circular light-blue camera icon.

Heading:
"Looking for specific part photos or live warehouse stock?"

Description:
"We regularly update our verified warehouse stock photography. Contact our Chennai counter for live video or photo verification of your specific part SKU before dispatch."

Right:
Dark navy button with phone icon:
"Request Real-Time Part Photo"

8. FINAL CTA
Create a full-width dark navy section.

Small amber/blue pill:
"Fast Chennai Courier & Workshop Dispatch"

Centered heading:
"Looking for a Specific Spare Part?"

Description:
"Contact SSS Auto Spares to enquire about your required automotive spare parts. Our Chennai team validates chassis fitment and stock availability in real time."

Three CTA controls:
- Blue primary button: "Enquire Now"
- White secondary button: "View Products"
- Text/link action with location icon: "Visit Our Hub"

9. FOOTER
Dark navy footer with four columns.

COLUMN 1:
"SSS Auto Spares"

Description:
"Automotive spare parts and vehicle-related enquiries in Chennai. Supplying genuine parts, quality used spares, and vehicle solutions."

Badge:
"Chennai Operational Hub"

COLUMN 2:
"QUICK LINKS"
- Home
- About Us
- Product
- Gallery

COLUMN 3:
"CUSTOMER SUPPORT"
- Enquire
- Feedback
- Payment
- Share Website

COLUMN 4:
"CONTACT & LOCATION"
- Phone: [Confirm phone]
- Email: [Confirm email]
- Address: [Confirm address, Chennai]
- Business Hours: [Confirm hours]

Bottom divider.

Bottom-left:
"Copyright © 2025 SSS Auto Spares. All rights reserved."
"Privacy Policy"
"Terms & Conditions"

Bottom-right pill:
"Chennai, Tamil Nadu, India"

RESPONSIVE DESIGN

Desktop:
- 3-column gallery grid.
- Full navigation.
- Hero statistics displayed horizontally.
- Facility section uses large-left + stacked-right layout.
- Footer uses 4 columns.

Tablet:
- 2-column gallery.
- Reduce horizontal spacing.
- Keep hero statistics compact.
- Facility section may remain 2 columns if space permits.

Mobile:
- Collapse navigation into a mobile menu.
- Utility bar may become compact or allow horizontal content.
- Hero text becomes full width.
- Statistics stack into a 3-column compact row or vertical cards depending on available width.
- Gallery becomes one column.
- Filter pills horizontally scroll.
- Facility section becomes one column.
- Feature cards become vertical.
- CTA buttons stack or wrap.
- Footer becomes stacked sections.
- Maintain generous touch targets.

INTERACTIONS

- Gallery filter buttons should actually filter the six gallery items.
- Active filter should update visually.
- Clicking "View Detail" should open a gallery detail/modal/page.
- Images should open in a larger lightbox when appropriate.
- Navigation links should be functional.
- Enquire buttons should route to the enquiry/contact flow.
- "Request Real-Time Part Photo" should open the enquiry/contact interaction.
- Add keyboard focus states.
- Respect prefers-reduced-motion.

IMAGE HANDLING

Use the supplied image-generation prompts in the "Image Asset Prompts" section of this specification to create visually consistent assets.

Do not use generic stock photos.
The images should look like authentic professional commercial automotive photography with consistent SSS Auto Spares branding.

IMPORTANT VISUAL REQUIREMENT

The finished page must visually resemble the supplied screenshots in:
- section ordering
- component density
- card proportions
- typography scale
- color hierarchy
- spacing
- rounded corners
- image placement
- navigation structure
- footer structure
- CTA placement

Do not add unrelated sections.
Do not introduce a different color palette.
Do not turn the gallery into a masonry/Pinterest layout.
Do not use oversized hero photography.
Do not make the interface overly futuristic.
```

---

# 3. EXACT DESIGN / VISUAL REPLICATION PROMPT

```text
Reproduce the supplied SSS Auto Spares Gallery page as closely as possible at the visual-design level.

REFERENCE CANVAS
- Desktop reference width is approximately 1024px.
- The screenshots represent a desktop webpage captured around 1024px wide.
- Recreate the same visual density and proportions.
- Content should scale fluidly above and below this width.

COLOR SYSTEM
Use a restrained automotive corporate palette:
- Deep navy for utility/header/footer/CTA backgrounds.
- Royal blue for primary buttons and active states.
- Pale blue-gray for section backgrounds.
- White for cards and navigation.
- Warm amber/orange only for verification/category accents.
- Dark navy text for headings.
- Muted blue-gray for secondary descriptions.

HEADER
The top utility strip is very thin, dark navy, approximately 27px high.
The main navigation is approximately 58px high.
Use a thin separation between navigation and hero.
Keep navigation elements horizontally aligned and compact.

HERO
Hero is approximately 218px tall in the reference.
Background is dark navy with a subtle repeating dotted pattern.
Use a left-aligned content block.
Breadcrumb sits near the top.
Two small pills sit below breadcrumb.
Main heading is approximately 29–31px and bold.
Description is approximately 15–16px with relaxed line-height.

Statistics sit on the right:
- three small dark-blue translucent-looking cards
- rounded corners
- compact typography
- amber highlight for the first statistic
- large white/near-white numbers

FILTER BAR
White background.
Approximately 60px tall.
Pills have approximately 28–30px height.
Active pill is solid royal blue.
Inactive pills are very pale blue-gray.
Small media count is aligned to the far right.

GALLERY
Use three equal-width cards with approximately 18–20px gaps.
Cards have rounded corners around 10–12px.
Images occupy approximately 55–57% of the card height.
Image corners are rounded at the top.
Content is white.
Titles use dark navy/black, around 14–15px.
Descriptions are smaller, around 11–12px.
Metadata and "View Detail" are compact.

The image cards should feel like professional catalogue cards rather than social-media posts.

FACILITY SECTION
Background should be a very pale blue-gray.
Heading area is compact.
Main feature uses approximately 60% width.
Large image has rounded top corners.
Information content sits directly below it inside the same white card.
Three mini-stat boxes are displayed horizontally.

Right feature cards are horizontal:
- image approximately 35–40% width
- text approximately 60–65%
- white background
- rounded corners
- consistent height

REAL-TIME PHOTO STRIP
Use a pale blue-white card with rounded corners.
Keep the content horizontally aligned on desktop.
Camera icon is contained inside a soft circular background.
Dark navy CTA button on the right.

CTA
Use a dark navy background.
Center all content.
Heading is white and large.
Description is pale blue-white.
Primary button is royal blue.
Secondary button is white.
Third action is text-only/light with an icon.

FOOTER
Use very dark navy.
Four-column desktop layout.
Headings are white.
Body text is muted light blue.
Links are small and vertically spaced.
Use a subtle horizontal divider above the copyright row.
Bottom-right location appears in a small rounded pill.

TYPOGRAPHY
Use a clean sans-serif font.
Suggested:
- Inter
- Arial
- system-ui
Use:
- bold/700 for major headings
- 600 for card titles and navigation emphasis
- 400–500 for descriptions
- compact uppercase/600 for eyebrow labels

SPACING
Use a compact corporate UI spacing system.
Approximate:
- page side padding: 26px at the 1024px reference width
- gallery card gap: 18–20px
- section vertical padding: 30–40px
- card internal padding: 18–20px
- small metadata gaps: 8–12px

BORDERS / SHADOWS
Use extremely subtle borders and shadows.
Do not create strong floating-card effects.
The reference relies primarily on:
- white surfaces
- pale borders
- small radius
- subtle elevation

ICONS
Use simple outline icons similar to Lucide/Font Awesome.
Do not use oversized colorful illustrations.
Icons should be small and aligned with text.

IMAGE TREATMENT
Photography should be realistic, sharp, commercial, and automotive-industrial.
Use natural indoor workshop/showroom lighting.
Avoid artificial CGI appearance.
Keep branding subtle and believable.
Images should have consistent color temperature and visual quality.

DO NOT:
- change the page into a dark-only website
- use huge typography
- use glassmorphism
- use neon colors
- use excessive gradients
- use masonry cards
- add unrelated animations
- replace the corporate automotive aesthetic with a generic SaaS aesthetic
```

---

# 4. PAGE COMPONENT HIERARCHY

```text
GalleryPage
│
├── UtilityBar
│   ├── Location
│   ├── BusinessHours
│   └── Email
│
├── MainNavbar
│   ├── BrandLogo
│   ├── NavigationLinks
│   ├── EnquireNowButton
│   └── AccountButton
│
├── GalleryHero
│   ├── Breadcrumb
│   ├── VerificationBadges
│   ├── HeroHeading
│   ├── HeroDescription
│   └── Statistics
│
├── GalleryFilterBar
│   ├── CategoryFilters
│   └── MediaCount
│
├── GalleryGrid
│   ├── GalleryCard
│   ├── GalleryCard
│   ├── GalleryCard
│   ├── GalleryCard
│   ├── GalleryCard
│   └── GalleryCard
│
├── FacilityStandards
│   ├── SectionHeading
│   ├── VerificationLabel
│   ├── MainFacilityCard
│   ├── TestingBenchCard
│   └── BrakePerformanceCard
│
├── PhotoRequestStrip
│   ├── CameraIcon
│   ├── Copy
│   └── RequestButton
│
├── EnquiryCTA
│   ├── Badge
│   ├── Heading
│   ├── Description
│   └── CTAButtons
│
└── Footer
    ├── CompanyInfo
    ├── QuickLinks
    ├── CustomerSupport
    ├── ContactLocation
    └── CopyrightBar
```

---

# 5. GALLERY DATA MODEL

```text
GalleryItem {
  id
  category
  title
  description
  metadata
  image
  alt
}

Categories:
- All
- Products
- Spare Parts
- Shop & Showroom
- Workshop
- Customer Services
```

Six initial gallery items:

```text
1.
category: Shop & Showroom
title: SSS Auto Spares Store & Display Shelf
metadata: SKU Inspection Rack

2.
category: Workshop
title: Technicians Bench-Testing Automotive Assemblies
metadata: Tolerance Check Bench

3.
category: Spare Parts
title: High-Performance Carbon Ceramic Brake System
metadata: Braking Systems

4.
category: Products
title: Heavy-Duty Suspension & Coil Springs
metadata: Suspension Range

5.
category: Products
title: Precision Engine Internals & Turbochargers
metadata: Engine Core Components

6.
category: Customer Services
title: Vehicle Parts Consultation & Fitment Validation
metadata: Fitment Assistance
```

---

# 6. IMAGE ASSET ANALYSIS

The screenshots contain **real photographic-style visual assets** that should be treated as separate website images rather than attempting to recreate them with CSS.

Detected image subjects:

1. Automotive spare-parts showroom/display shelving
2. Automotive technicians testing assemblies on a workbench
3. High-performance brake disc and red multi-piston brake caliper
4. Suspension/shock absorber and coil-spring product display
5. Engine internal components and turbochargers arranged on a display
6. Customer service / parts consultation counter
7. Large Chennai warehouse/showroom interior
8. Precision testing/measurement desk with technician
9. Brake-system product image reused in the facility section

The brake-system image is reused in multiple parts of the page and should preferably be implemented as **one shared asset** rather than generating separate versions.

---

# 7. IMAGE PROMPTS — COPY INDIVIDUALLY

## IMAGE 01 — Automotive Spare Parts Store & Display Shelf

```text
Create a photorealistic professional commercial photograph of a modern automotive spare-parts showroom in Chennai, India.

Show a large organized retail/display area with multiple long industrial shelving racks filled with genuine automotive spare parts, brake components, calipers, filters, boxed parts, suspension components, and vehicle maintenance products.

The showroom should look clean, organized, authentic, and operational rather than luxurious.

Include:
- multiple tall metal retail shelving units
- neatly arranged automotive spare-parts boxes
- brake components and packaged parts
- colorful but realistic product packaging
- automotive-brand-style shelf signage without copying any real trademark
- polished light-gray showroom floor
- bright industrial ceiling lighting
- realistic depth and perspective
- a professional automotive parts counter in the background
- subtle SSS Auto Spares-style branding elements

Composition:
- wide landscape photograph
- eye-level camera
- strong leading lines from the shelving
- showroom filling the entire frame
- suitable for a website gallery card
- realistic Indian automotive business environment

Photography:
- high-end commercial photography
- natural realistic lighting
- sharp product details
- physically realistic materials
- subtle depth of field
- no CGI appearance
- no people prominently blocking the shelves
- 16:11 landscape composition
```

---

## IMAGE 02 — Technicians Bench-Testing Automotive Assemblies

```text
Create a photorealistic commercial automotive workshop photograph showing two professional Indian automotive technicians working at a large technical workbench.

Both technicians should wear matching dark navy automotive workshop polo shirts with a small generic automotive service logo.

The workbench should contain:
- brake rotor
- suspension components
- metal automotive assemblies
- precision measuring instruments
- digital micrometer
- calipers
- hand tools
- fitment/testing equipment
- organized trays of components

The technicians are carefully inspecting and bench-testing automotive assemblies.

Background:
- professional automotive workshop
- shelves filled with spare parts
- workshop tools
- vehicle components
- technical signage
- industrial lighting
- clean but authentic working environment

Composition:
- wide landscape
- eye-level professional documentary/commercial photography
- technicians centered around the workbench
- detailed foreground components
- realistic workshop depth

Style:
photorealistic automotive industry photography, realistic Indian workshop environment, natural skin tones, accurate metallic materials, sharp details, professional commercial lighting, no CGI, no exaggerated poses.

16:11 landscape.
```

---

## IMAGE 03 — High-Performance Carbon Ceramic Brake System

```text
Create a photorealistic premium automotive product photograph of a high-performance ventilated brake disc rotor mounted vertically with a bright red multi-piston hydraulic brake caliper.

The brake system should be the primary subject.

Show:
- large drilled and ventilated metallic brake rotor
- realistic machined steel surface
- central hub opening
- multiple mounting holes
- realistic rotor thickness
- precision-machined outer edge
- detailed red performance brake caliper
- realistic brake hardware
- subtle metallic surface texture

Place the brake assembly on a professional dark display stand inside a modern automotive showroom or performance-brake display environment.

Background:
- premium automotive workshop/showroom
- softly blurred car or workshop environment
- realistic industrial lighting
- clean professional presentation

Composition:
- vertical brake assembly centered slightly to the right
- landscape 16:11 frame
- product photography perspective
- shallow depth of field
- crisp brake rotor and caliper
- realistic reflections

Important:
Make the brake rotor physically accurate.
Do not make it look like a toy, CGI render, or illustration.
Use realistic engineering proportions and materials.
```

---

## IMAGE 04 — Heavy-Duty Suspension & Coil Springs

```text
Create a photorealistic commercial photograph of a professional automotive suspension-parts showroom display.

Show a large organized wall-mounted display containing multiple automotive shock absorbers, struts, and coil springs.

Arrange the products by type and size:
- black shock absorbers
- silver shock absorbers
- red coil springs
- yellow coil springs
- blue suspension components
- heavy-duty gas-pressurized dampers

The display should look like a professional automotive parts inventory/catalogue wall.

Background:
- automotive spare-parts store
- shelves with boxed products
- clean workshop/showroom interior
- industrial ceiling lights
- realistic retail environment

Foreground:
- suspension products arranged symmetrically
- realistic metallic finishes
- detailed springs
- realistic mounting brackets and shock bodies

Composition:
- straight-on product-display photography
- symmetrical framing
- landscape 16:11
- professional catalogue photography
- realistic depth

Avoid:
- futuristic showroom
- CGI
- cartoon appearance
- impossible product shapes
- excessive branding
```

---

## IMAGE 05 — Precision Engine Internals & Turbochargers

```text
Create a photorealistic professional automotive engineering product photograph showing precision engine internal components arranged neatly on a dark technical display tray.

Include:
- forged engine pistons
- crankshaft components
- camshaft
- connecting rods
- piston rings
- cylinder-head gasket
- turbocharger assemblies
- precision machined metal components

Place the components on a professional industrial workbench or presentation tray.

The tray may contain subtle engraved generic wording such as:
"SSS AUTO SPARES - GALLERY"

Background:
- clean automotive engineering workshop
- shelves and workshop equipment softly blurred
- professional industrial lighting
- realistic automotive service environment

Composition:
- close-to-medium product photography
- components arranged neatly and intentionally
- metallic textures clearly visible
- shallow background depth of field
- landscape 16:11

Style:
photorealistic engineering catalogue photography, realistic machined aluminum and steel surfaces, accurate automotive components, natural reflections, no CGI, no illustration.
```

---

## IMAGE 06 — Vehicle Parts Consultation & Fitment Validation

```text
Create a photorealistic commercial photograph inside a professional automotive spare-parts customer-service counter in Chennai, India.

Show two people at a modern wooden service counter:
- an experienced Indian automotive parts consultant wearing a professional light-colored automotive service shirt
- a younger Indian customer or technician discussing vehicle parts

The consultant should be showing technical vehicle-part information on a tablet.

Include:
- desktop computer
- tablet
- automotive parts catalog interface
- printed documents
- parts boxes in the background
- organized spare-parts shop shelves
- diagnostic/service information screens
- subtle generic automotive service branding

The environment should look like a real operational automotive parts consultation desk.

Composition:
- landscape 16:11
- customer-service interaction as the focal point
- natural professional body language
- realistic Indian business environment
- clean but busy automotive store background

Photography:
photorealistic commercial business photography, natural skin tones, realistic lighting, accurate materials, sharp foreground, moderate background blur, no CGI.
```

---

## IMAGE 07 — Primary Chennai Warehouse & Showroom

```text
Create a photorealistic wide-angle commercial photograph of a large professional automotive spare-parts warehouse and showroom in Chennai, India.

Show a spacious high-ceiling industrial warehouse with long rows of organized automotive parts shelving.

Include:
- tall metal storage racks
- hundreds of neatly organized automotive spare-parts boxes
- tires and automotive components
- warehouse workstations
- customer service counter
- dispatch/packing area
- barcode/scanning equipment
- workers handling parts naturally
- clean polished industrial floor
- bright overhead warehouse lighting
- large windows with subtle Chennai urban context

The environment should communicate an established automotive parts distribution hub.

Add subtle generic directional signs such as:
- SHOWROOM
- DISPATCH
- WAREHOUSE
- COUNTER

Do not use real copyrighted brand logos.

Composition:
- wide landscape 16:9 or 16:11
- strong central aisle perspective
- high ceiling visible
- showroom/warehouse depth extending into the background
- realistic scale

Style:
high-end architectural and commercial industrial photography, photorealistic, authentic Indian warehouse, realistic lighting, accurate proportions, no CGI.
```

---

## IMAGE 08 — Testing Bench & Fitment Desk

```text
Create a photorealistic professional automotive testing-bench photograph showing an Indian female automotive technician working at a precision measurement desk.

She should be wearing a clean light-colored professional automotive workshop shirt with a small generic service logo.

On the desk include:
- digital micrometer
- vernier caliper
- precision measuring instruments
- automotive metal component
- brake/suspension component
- laptop or technical monitor
- organized tools
- measurement documentation

She is carefully checking an automotive component for clearance, tolerance, or fitment.

Background:
- modern automotive workshop testing area
- technical screens
- organized tools
- industrial signage
- another worker softly blurred in background

Composition:
- landscape image
- technician positioned slightly right of center
- workbench and measuring instruments clearly visible
- realistic office/workshop hybrid environment
- natural professional lighting

Style:
photorealistic industrial technical photography, realistic Indian automotive workplace, clean commercial composition, accurate measuring tools, no CGI, no illustration.
```

---

# 8. SHARED BRAKE IMAGE REUSE

Use **Image 03** again for:

- Gallery Card 3
- Facility & Standards right-bottom card
- Any additional brake-system reference

Do not generate a visibly different brake rotor for the second location.

This creates visual consistency across the page.

---

# 9. IMAGE ALT TEXT

```text
1. Automotive spare parts displayed on showroom shelving
2. Technicians bench-testing automotive assemblies
3. High-performance ventilated brake rotor with red performance caliper
4. Heavy-duty automotive suspension shocks and coil springs
5. Precision engine internals and turbocharger components
6. Automotive parts consultation and fitment validation at Chennai service counter
7. Chennai automotive spare-parts warehouse and showroom
8. Technician performing precision automotive component measurements
```

---

# 10. RESPONSIVE BREAKPOINT GUIDANCE

```text
Large desktop: 1200px+
- max content width around 1200–1280px
- 3 gallery columns
- full 4-column footer

Desktop: 900–1199px
- 3 gallery columns where space permits
- reduce card gaps slightly
- compact navigation

Tablet: 600–899px
- 2 gallery columns
- facility section can become 1 column
- footer 2 columns
- filters horizontal-scroll

Mobile: below 600px
- 1 gallery column
- mobile navigation
- stacked hero content
- horizontally scrollable category filters
- 1-column facility layout
- stacked CTA buttons
- 1-column footer
- preserve card radius and visual hierarchy
```

---

# 11. DESIGN QA CHECKLIST

Before considering the implementation complete, verify:

- [ ] Utility bar exists.
- [ ] Main navbar matches the reference hierarchy.
- [ ] Gallery is the active navigation item.
- [ ] Hero uses dark navy dotted background.
- [ ] Hero has breadcrumb and two badges.
- [ ] Three hero statistics are present.
- [ ] Six gallery cards appear in a 3-column desktop grid.
- [ ] Category badges sit over gallery images.
- [ ] Filter bar has six category choices.
- [ ] "All" is active by default.
- [ ] Facility & Standards section matches the large-left/two-right structure.
- [ ] Large warehouse image appears on the left.
- [ ] Testing-bench card appears top-right.
- [ ] Brake-performance card appears bottom-right.
- [ ] Real-time photo request strip exists.
- [ ] Final enquiry CTA uses dark navy.
- [ ] Footer uses four desktop columns.
- [ ] Mobile layout does not overflow horizontally.
- [ ] Images use realistic automotive photography.
- [ ] Buttons have clear hover/focus states.
- [ ] No unrelated sections have been introduced.
- [ ] Overall visual appearance remains close to the supplied screenshots.
