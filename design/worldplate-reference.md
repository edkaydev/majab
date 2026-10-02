# Reference: "WorldPlate" Dark Food Homepage

Source: Dribbble shot linked as "BURGY — Burger Delivery Website UI/UX Design" (the shot itself is
branded **WorldPlate**, not Burgy — the dribbble title and on-canvas branding don't match; noting
this in case the wrong frame was linked).

Screenshot covers a single scrolling marketing homepage, desktop width, dark theme.

## Visual language

| Token | Approx. value | Used for |
|---|---|---|
| `bg` | `#141210` near-black, warm, grainy/noisy texture | page background |
| `bg-card` | `#1c1a17` charcoal | menu cards, testimonial cards |
| `bg-light-card` | `#f2efe8` warm off-white | floating promo banner |
| `fg` | `#f5f1ea` | headings on dark |
| `fg-dim` | `#a9a39a` | body copy on dark |
| `fg-on-light` | `#1a1a1a` | text on the cream promo card |
| `accent` | orange→amber gradient, roughly `#ff5e1a` → `#ffb23c` | logo, CTAs, highlighted words, prices, ratings, bracket accents |

*(Hex values are estimated by eye from the screenshot, not sampled — verify before final use.)*

**Type**: bold, geometric, slightly-rounded display sans for all headings (something in the
Poppins/Gilroy/Plus Jakarta Sans Bold family); a lighter sans for body copy and nav. Numerals
(prices, `50%`, ratings) set extra-bold.

**Shape language**: large corner radii everywhere (~20–24px on cards, fully pill-shaped on
buttons); circular/blob-masked food photography; soft drop shadows; frosted-glass (blurred,
translucent) overlay panels sitting on top of photos.

**Decoration**: faint large background illustrations (e.g. a monochrome flame/burger line-art
sits behind the testimonials grid), soft out-of-focus radial glows scattered across the dark
background, bracket glyphs `⌐ … ⌐` wrapping the orange word in each section heading.

## Section-by-section

### 1. Nav bar
- Left: wordmark "WorldPlate", first syllable white, rest in orange gradient.
- Center: text links — Home (active, shown on a light pill/underline), Menu, About Us, Specials,
  Contact.
- Right: "Sign In / Register" plain text link.
- Transparent/dark bar, no visible border.

### 2. Hero
- Two columns, roughly 55/45.
- Left: headline "Experience the **Taste** of the World" — "Taste" in orange with an underline
  and a cluster of small overlapping circular avatar photos inline right after the word (social
  proof baked into the headline).
- Sub-copy: one sentence, muted gray, ~2 lines.
- CTA: single pill button "Learn More", orange gradient fill, with a small circular avatar icon
  inset on the button's left edge.
- Right: a large circular-cropped photo of a ramen bowl with a visible steam/spice-splash effect,
  floating with no hard container edge.

### 3. Promo banner (floating strip)
- A light cream pill-shaped card overlapping the bottom of the hero, with two black circular
  cutouts biting into its top and bottom edge (ticket-stub effect).
- Left: headline "Great food and lots of discounted prices", a stacked row of small avatar
  circles plus a "40+" badge, caption "People grabbed the offer".
- Right: giant "50%" numeral, caption "offer on Now", and a circular plate photo bleeding off the
  card's right edge.

### 4. "Our Best Delivered"
- Section heading uses the bracket-accent style: `⌐Our Best **Delivered**⌐`.
- Repeating large feature cards (the screenshot shows two, likely more below the fold / a
  carousel): each card is a big circular blurred food-photo backdrop with a glass/blur panel
  overlaid containing a sharp product photo (top-left), title ("Breakfast Specials"), a 2-line
  description, a price ("$99/-"), and two buttons: primary pill "Order Now" + a secondary
  icon-only square button (bag/cart glyph).

### 5. Menu grid
- 2 rows × 3 columns of product cards (top-right of the screenshot, partially cropped).
- Each card: rounded food photo at top, title ("Margherita Pizza"), one-line description, price,
  small square icon button (cart) bottom-right.
- Dark card surface, consistent across all six.

### 6. "What They Say?" (testimonials)
- Bracket-accent heading again.
- 3-up row of cards: avatar + name ("John Smith") + 5-star rating on top, a short quote below.
- Faint large flame/burger line-art illustration bleeds in behind the row as background texture.

### 7. "Meet Our Chefs"
- Bracket-accent heading.
- Left: portrait photo of a chef (black coat, black toque, red glasses, holding a plated dish) in
  a soft-shadowed rounded frame; a second, blurred dessert photo overlaps its top-left corner as a
  decorative accent.
- Right: a paragraph about the chefs' expertise, plus a ghost/outline button "View All".

### 8. Footer
- 4 columns:
  1. Logo + one-line blurb + row of 4 circular social icons (orange-filled).
  2. "Quick Links" — Home, About Us, Services, Portfolio, Testimonials.
  3. A second column also headed "Quick Links" in the shot (likely a mislabel for something like
     "Legal") — Policy Updates, Party Sharing, Our Rights, Data Protection Information.
  4. "Sign Up Our Newsletters" — email input + "Subscribe Now" button.
- Bottom bar: "© 2025 CWorld. All Rights Reserved." — note the footer credits a different brand
  name than the header ("CWorld" vs "WorldPlate"), another inconsistency in the source shot.

## Animations & motion

The screenshot is a static frame, so none of this is literally visible — it's the motion design
that this visual language implies, written out so it can be built from. Flag it to the user before
treating any specific timing/easing as settled.

**Global**
- Smooth/eased scrolling (not browser-default linear jump) for anchor nav links.
- Sticky nav starts transparent over the hero and fades in a blurred dark background once the
  page scrolls past the hero (matches the "floating over imagery" look of the header).
- Every scroll-triggered section below the fold enters on a staggered fade-up (children offset
  ~60–100ms apart) the first time it crosses ~15% into the viewport — nav, hero copy, and the
  promo banner excepted, since they're visible at rest.
- `prefers-reduced-motion: reduce` collapses every transform-based reveal to a plain opacity
  crossfade, kills the ambient/looping animations (ember flicker equivalents, floating photos,
  background drift) entirely, and leaves hover states as instant color changes only.

**Nav**
- Text links: underline slides in from the left on hover (not a fade), ~200ms ease-out; active
  link ("Home") keeps a persistent light pill behind it.
- "Sign In / Register": simple color shift on hover, no transform.

**Hero**
- Headline lines/words fade up with a short stagger on first paint (eyebrow → headline → subcopy
  → CTA → the inline avatar cluster popping in last, each avatar offset a beat behind the last).
- The inline avatar cluster in "Taste ◯◯◯": gentle continuous idle — a slow, almost imperceptible
  bob/scale loop so the social-proof faces read as "alive," not static art.
- Ramen bowl photo: soft ambient float (translateY ±6–8px, several seconds per cycle, ease-in-out
  loop) plus a looping particle/steam-and-spice drift already baked into the image's splash
  effect — if rebuilt as layered assets, animate the steam wisps and a few spice specks on
  independent slow loops for depth.
- "Learn More" button: hover = lift (`translateY(-3px)`) + growing glow shadow in the accent
  color; press = quick scale down to ~0.97 and back.

**Promo banner**
- Enters on scroll with a slightly larger/slower reveal than standard sections (it's the visual
  hinge between hero and body) — fade + rise, ~700–800ms.
- The "50%" numeral count-up animates from 0 to 50 over ~900ms the first time the banner enters
  view, easing out (fast start, slow settle).
- Avatar stack: hovering the group nudges each avatar apart slightly (a few px) to suggest
  depth/stacking, reverting on mouse-leave.

**"Our Best Delivered"**
- The repeating glass-panel cards read as a horizontal drag/snap carousel (or an auto-advancing
  one with pause-on-hover) rather than a plain vertical stack, given how uniformly they repeat.
- Each card's glass panel brightens slightly and lifts (`translateY(-4px)`, shadow grows) on
  hover; the sharp product photo inside gets a subtle zoom (`scale(1.04)`) on the same hover,
  clipped to the panel's rounded corners.
- "Order Now": same lift+glow hover/press as "Learn More". The square icon-only button rotates a
  few degrees and scales up slightly on hover — a small "tappable" flourish distinct from the
  pill buttons.

**Menu grid**
- Cards fade/rise in on scroll with a stagger across the grid (row-by-row or a diagonal wave reads
  well for a 3-column grid).
- Hover: card lifts, border/outline brightens to the accent color, photo scales up slightly inside
  a fixed-size, overflow-hidden frame so it crops rather than resizes the card.
- Cart icon button: hover scale + a quick rotate-in of the icon; click gives a short bounce/pulse
  to acknowledge the add-to-cart action (there's no visible cart drawer in the shot, so this is
  the only add-to-cart feedback available).

**Testimonials**
- Row staggers in on scroll (left → right).
- Star ratings light up sequentially (one star every ~80ms) rather than appearing all at once,
  the first time a card enters view.
- The large faint flame/burger line-art behind the grid drifts very slowly (parallax tied to
  scroll position, moving slower than the foreground) for ambient depth — subtle enough to read
  as atmosphere, not a distraction.

**"Meet Our Chefs"**
- Portrait and the overlapping dessert accent photo parallax at slightly different scroll speeds
  so they separate a little as the section scrolls through, reinforcing the layered/overlapping
  composition.
- The dessert accent photo has its own slow ambient float loop, same treatment as the hero bowl.
- "View All": outline button fills solid with the accent color on hover (border → fill
  transition), text flips to the dark-on-accent color to match the other solid buttons.

**Footer**
- Social icons: scale + brighten on hover.
- Newsletter input: focus state grows a soft accent-colored glow ring around the field.
- "Subscribe Now": same press/hover language as the other pill buttons, plus a brief success state
  (checkmark swap or label change) on submit given there's a real action behind it.

## Non-visual notes
- Avatar clusters and "40+ people grabbed the offer" imply live/social-proof copy, not necessarily
  live data — fine to hardcode for a first pass.

## Open questions before building from this
- This is a **light-on-dark global-cuisine** aesthetic (orange/charcoal, pizza/ramen/dessert
  photography, "Sign In / Register", a "Chefs" section) — quite different in tone from the
  roadside-deli direction already built (see `src/app/`), and from the second reference below.
- Needs real photography (ramen, pizza, breakfast plate, chef portrait, dessert) — none of this
  exists yet; placeholders or stock would be needed to match "exactly."
