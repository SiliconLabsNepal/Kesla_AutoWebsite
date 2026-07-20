# VoltDrive Nepal - Design System

## Theme: Voltage Performance

### Core Tokens
* **Color Mode:** DARK
* **Headline Font:** SPACE_GROTESK
* **Body Font:** MANROPE
* **Label Font:** SPACE_GROTESK
* **Roundness:** ROUND_FOUR
* **Primary Custom Color:** #CCFF00 (Electric Lime)

### Key Colors
* **Background / Base Surface:** `#0e0e0e`
* **Surface Container (Cards):** `#1a1919`
* **Surface Container High:** `#201f1f`
* **Surface Container Lowest (Recessed):** `#000000`
* **Primary / Accent:** `#f3ffca` (Subtle) to `#cafd00` / `#CCFF00` (Vibrant Electric Lime)
* **Text on Background:** `#ffffff`
* **Muted Text / Outline Variant:** `#484847` to `#adaaaa`
* **Ghost Border (Fallback):** `#484847` at 15% opacity

---

# Design System Strategy: Kinetic Precision

## 1. Overview & Creative North Star
**The Creative North Star: "Hyper-Performance Editorial"**

This design system is not a utility; it is an experience of velocity and precision. For VoltDrive Nepal, we are moving away from the "standard dark mode" of flat greys and blue-ish blacks. Instead, we are leaning into a **High-Performance Editorial** aesthetic—a fusion of Swiss grid discipline and futuristic kinetic energy. 

The system breaks the "template" look by utilizing intentional asymmetry, wide margins, and high-contrast typography scales. We treat the screen not as a collection of boxes, but as a sophisticated dashboard of a premium electric vehicle. Expect overlapping elements, large-scale display type that bleeds off-canvas, and a depth model built on tonal layering rather than structural lines.

---

## 2. Colors & Atmospheric Depth

The color palette is anchored in absolute darkness, punctuated by "Electric Lime" (#CCFF00) to simulate the high-voltage energy of the EV sector.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts. For instance, a `surface-container-low` section sitting on a `surface` background provides all the separation necessary. We define space through mass, not lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface tiers to create "nested" depth:
*   **Base Layer:** `surface` (#0e0e0e) for the primary background.
*   **Submerged Content:** `surface-container-lowest` (#000000) for recessed areas like footer backgrounds or input wells.
*   **Raised Components:** `surface-container` (#1a1919) and `surface-container-high` (#201f1f) for cards and modals.

### The "Glass & Gradient" Rule
To escape the "flat" feel, use **Glassmorphism** for floating elements. Apply `surface-variant` with a 60% opacity and a 20px backdrop-blur. 
*   **Signature Textures:** Use subtle linear gradients for primary CTAs, transitioning from `primary` (#f3ffca) to `primary-container` (#cafd00) at a 135-degree angle. This adds a "glow" that mimics LED illumination.

---

## 3. Typography: The Futuristic Voice

The typography scale is a dialogue between the technical rigidity of **Space Grotesk** and the human-centric clarity of **Manrope**.

*   **Display & Headlines (Space Grotesk):** Used for high-impact brand moments. The aggressive x-height and geometric terminals of Space Grotesk communicate "High-Tech." Use `display-lg` (3.5rem) with tight letter-spacing (-0.04em) to create an authoritative, editorial feel.
*   **Body & Titles (Manrope):** Used for information density. Manrope provides a premium, legible counterpoint to the tech-heavy headlines.
*   **Hierarchy as Identity:** Always pair a `display-sm` headline with a `label-md` uppercase tag in `primary` (#f3ffca). This "Label + Headline" combination is the signature typographic lockup for the brand.

---

## 4. Elevation & Depth: Tonal Layering

We reject traditional drop shadows. We build hierarchy through **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface-container-highest` card on a `surface-container-low` section. This creates a soft, natural lift that feels like machined hardware rather than a digital web element.
*   **Ambient Shadows:** If a "floating" effect is required (e.g., a floating navigation bar), use an extra-diffused shadow: `offset: 0 20px, blur: 40px, color: rgba(0, 0, 0, 0.4)`. 
*   **The "Ghost Border" Fallback:** If a container lacks contrast against its background, use a **Ghost Border**: `outline-variant` (#484847) at 15% opacity. Never use 100% opaque borders.
*   **Kinetic Glass:** Floating modals must use semi-transparent `surface` colors with high backdrop-blur values to allow the vibrant `primary` accents of the background to bleed through, maintaining a sense of atmospheric unity.

---

## 5. Components

### Buttons
*   **Primary:** High-visibility. Background: `primary_container` (#cafd00); Text: `on_primary` (#516700). Shape: `sm` (0.125rem) for a sharp, technical look.
*   **Secondary:** Glass-style. Background: `surface_variant` at 20% opacity with a `Ghost Border`.
*   **Tertiary:** Text-only in `primary`. Use for low-priority actions like "Learn More."

### Cards & Lists
*   **No Dividers:** Forbid the use of divider lines. Separate list items using 16px of vertical white space or by alternating background tones between `surface-container-low` and `surface-container-lowest`.
*   **Interactive Cards:** On hover, a card should shift from `surface-container` to `surface-container-highest` and the `Ghost Border` opacity should increase from 15% to 40%.

### Input Fields
*   **Style:** Recessed. Background: `surface-container-lowest` (#000000). 
*   **Focus State:** A 1px "Electric Lime" (`primary`) underline. No full-box focus rings.

### Signature Component: The "Performance Gauge"
For an EV brand, data is key. Use thin, circular progress indicators or horizontal "power bars" using `primary` for the fill and `surface-container-highest` for the track. This reinforces the high-performance DNA.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use extreme white space. Let the "Deep Charcoal" breathe to emphasize the premium nature of the cars.
*   **Do** use asymmetrical layouts (e.g., a large image on the left, with text offset to the right-bottom).
*   **Do** ensure all `primary` (#CCFF00) text on dark backgrounds is checked for AA accessibility (use `on_primary_container` if needed for smaller text).

### Don’t
*   **Don’t** use rounded corners above `md` (0.375rem) for main UI elements. We want "Precision," not "Playful."
*   **Don’t** use standard "Grey" (#808080). Use the `on_surface_variant` (#adaaaa) which is tuned to the charcoal base.
*   **Don’t** use generic iconography. Use thin-stroke, geometric icons that match the weight of the **Space Grotesk** typeface.

---
## Generated Screens
- **Homepage** generated for VoltDrive Nepal with Hero ("THE FUTURE IS ELECTRIC"), Featured Models scroll, using the Kinestic Precision design system.
