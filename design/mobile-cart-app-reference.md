# Reference: Light Purple Food-Ordering App

Source: a second pasted screenshot — three mobile screens (Home, Product Detail, Cart) shown
side by side over a decorative purple-blob backdrop, presentation-style (that backdrop is the
Dribbble canvas dressing, not part of the app itself).

This is a different product and a different visual language from `worldplate-reference.md`: a
light-mode mobile ordering app with a browse → product detail → cart flow, vs. that file's dark
marketing homepage. Both are documented as separate references; reconciling them into one brand
is a decision for later, not made here.

## Visual language

| Token | Approx. value | Used for |
|---|---|---|
| `bg` | `#ffffff` | screen background |
| `surface` | `#f5f5f7` light gray | search bar fill, input fills |
| `fg` | `#1a1a1a` near-black | headings, prices |
| `fg-dim` | `#8a8a93` mid gray | descriptions, subtitles |
| `accent-purple` | `#5b3fe0`–`#6c4fe0` indigo-violet | selected chip, promo card, steppers, Checkout button, cart badge |
| `accent-green` | `#3fbf66` | add-on "+" badges only |
| `accent-navy` | `#241f52`-ish dark indigo | "Add to Cart" button (reads darker/more saturated than the lighter purple used elsewhere) |

*(Estimated by eye, not sampled — verify before final use.)*

**Type**: bold rounded sans for headings/prices/buttons, same family at a lighter weight and gray
color for secondary text. Very similar genre to the first reference (Poppins/Inter/Manrope-ish)
but tracked tighter, no all-caps/letter-spaced labels anywhere in this one.

**Shape language**: consistently rounded — ~16–20px radius on cards and sheets, fully circular
stepper buttons and avatar/category icons, pill buttons for every primary CTA. Flat icon style
(outline, 1.5–2px stroke) for search, chevrons, tab bar, star.

## Section-by-section

### Screen 1 — Home
- Header row: "Home" bold title, circular profile photo on the right.
- Full-width search bar: gray pill, magnifying-glass icon + "Search" placeholder.
- Category row: 4 circular icon chips with labels below (All, Burger, Pizza, Dessert) — "All" is
  selected, shown with a rounded-square purple highlight behind its icon; the rest sit unstyled.
- Promotions card: full-width rounded rectangle, purple gradient fill. Left: "Today's Offer /
  **Free box of Fries** / On all orders above $150". Right: a photo of fries in a basket/cone
  bleeding off the card's right edge.
- "Popular" section label, then a row of product cards (shown: Beef Burger $20, Cheesy Pizza $32,
  a third item cropped off): photo, name, one-line description, price, circular purple "+" button
  bottom-right of each card.
- Bottom tab bar: Home (active/filled) · Search · Cart (red badge, count "2") · Profile.

### Screen 2 — Product Detail
- Circular translucent back-chevron button floating over the top-left of the photo.
- Star-rating badge ("★ 4.7") floating top-right of the photo, pill-shaped.
- Large isolated product photo (studio cutout, no card edge) filling the top half of the screen.
- A white sheet with rounded top corners holds the rest:
  - Title ("Beef Burger") + quantity stepper (circle "–" / number / circle "+") on one row.
  - Muted one-line subtitle under the title.
  - A 2–3 line description paragraph.
  - "Add ons" label, then 4 small rounded-square add-on thumbnails in a row (butter, sauce, a dip,
    a bottle), each with a small green circular "+" badge on its corner.
  - Pinned footer row: "Total amount" + big price on the left, solid dark "Add to Cart" pill on
    the right.

### Screen 3 — Cart
- Centered "Cart" title.
- Line-item list: thumbnail, name + muted subtitle, price, quantity stepper (circle –/number/+)
  right-aligned. Two items shown: Noodly Noodles $18.99, Beef Burger $20.99.
- "Promo code" row: light-green-tinted pill input with a "+" affordance to apply a code.
- Summary block: Subtotal, Delivery Fees, Taxes as plain rows, then a bold Total row below a
  divider.
- Full-width dark "Checkout" pill button.
- Same bottom tab bar, Cart tab active with badge "2".

## Animations & motion

Static reference again, so this is the inferred motion system for this genre of app — flag before
treating specifics as final.

**Screen transitions**
- Home → Product Detail: push/slide transition (new screen slides in from the right, ~300ms
  ease-out); the tapped card's photo ideally does a shared-element/hero transition, morphing in
  place into the large detail-screen photo rather than just appearing, since both screens show the
  same photo at different sizes.
- Back chevron reverses the same transition.
- Any screen → Cart (e.g. tapping the tab bar's cart icon): straightforward tab-switch crossfade,
  no slide, consistent with standard bottom-nav behavior.

**Tab bar**
- Active icon fills/colors in and gets a small upward bounce (~150ms spring) on selection; inactive
  icons fade back to the gray outline state.
- Cart badge: pops in with a scale-overshoot (0 → 1.2 → 1) whenever the count increments, rather
  than just updating the number.

**Category chips**
- Selecting a chip animates its background in with a quick scale+color spring (~200ms); the
  previously-selected chip's highlight fades out over the same duration rather than cutting.

**Quantity steppers (–/+)**
- Button press: quick scale-down (~0.9) and back on `pointerdown`/`pointerup`.
- The number between them does a brief vertical flip or crossfade when it changes, not an instant
  swap, so +/- taps feel acknowledged.

**Quick-add ("+") on Home product cards**
- Tap: button scale-bounces, then a small ghost copy of the item's photo "flies" in an eased arc
  toward the cart tab icon and shrinks to nothing on arrival — classic fly-to-cart feedback.
- Cart badge increments (with its pop animation above) right as the flying copy lands.

**Add-ons (Product Detail)**
- Tapping an add-on's green "+" swaps it to a filled checkmark state and draws a colored ring
  around the thumbnail, with a quick scale-bounce on the badge itself.
- "Total amount" updates with a brief highlight flash (color pulse, not a layout jump) whenever an
  add-on is toggled.

**Add to Cart**
- Press: scale-down feedback like any other button.
- On success: button label briefly swaps to a checkmark + "Added", or a small toast/snackbar
  slides up from the bottom of the screen for ~1.5s before auto-dismissing — either reads fine
  given nothing else in the shot shows confirmation.

**Promo code**
- Invalid code: the input shakes horizontally once (short, low-amplitude) and briefly tints red.
- Valid code: the field's green tint deepens slightly and a checkmark icon fades in beside it; the
  Total row re-animates (number count/crossfade) to the discounted amount.

**Checkout**
- Standard press/scale feedback; tapping it is expected to push into a new (not-pictured) payment
  step using the same slide transition as Home → Product Detail, for consistency.

**List entrances**
- Home's product row and the Cart's line items each enter with a short staggered fade-up the first
  time their screen mounts (~60–80ms stagger per item) — not on every revisit, just first mount/
  first load of fresh data.

**Decorative backdrop**
- The purple blob shapes behind the phone mockups are presentation art for the Dribbble shot, not
  in-app UI. If reused anywhere (e.g. a marketing page for the app), treat them as a slow, large-
  radius ambient drift/morph loop — lowest priority, purely atmospheric.

**Reduced motion**
- All spring/bounce feedback collapses to instant state changes; shared-element photo transitions
  fall back to a plain crossfade; the fly-to-cart animation is skipped entirely in favor of just
  incrementing the badge; list stagger becomes a single simultaneous fade.

## Open questions before building from this
- This is a full app ordering flow (browse → customize → cart → checkout) with real state
  (quantities, add-ons, promo codes, totals) — a materially bigger scope than the marketing site
  in `worldplate-reference.md` or the roadside-deli site already built in `src/app/`.
- Purple/white/green doesn't match either the deli site's black/orange palette or the other
  reference's dark/orange palette — worth deciding which direction (or whether all three) is the
  actual target before implementation starts.
