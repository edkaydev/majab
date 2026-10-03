# Production Readiness TODO

## Content & business (decisions only you can make)

- [ ] **WhatsApp number** — replace placeholder `+1 (555) 010-1234` in `src/lib/whatsapp.ts` (`WHATSAPP_NUMBER`, `WHATSAPP_DISPLAY`) with the real number.
- [ ] **Real menu & prices** — replace the 16 placeholder items in `src/lib/menu.ts` with actual dishes, descriptions, and UGX prices.
- [ ] **Real address & hours** — update `src/app/find-us/page.tsx` (`ADDRESS` + `hours` array), currently fictional.
- [ ] **Delivery zones & fee** — confirm the zone list and flat UGX 5,000 fee in `src/lib/whatsapp.ts` (`DELIVERY_ZONES`) / `src/components/CartView.tsx` (`DELIVERY_FEE`) match real delivery coverage and cost.
- [ ] **Social links** — `src/components/SocialIcon.tsx` buttons all point to `#`. Add real Instagram/Facebook/X/TikTok URLs or remove unused ones.
- [ ] **Promo code** — decide whether `ROADSIDE10` (`src/components/CartView.tsx`) is a real ongoing offer or should be removed.
- [ ] **Testimonials** — `src/components/Testimonials.tsx` has 3 sample reviews flagged in the UI itself. Swap for real reviews or remove the section.
- [ ] **Promo banner** — "Sample launch offer" in `src/components/PromoBanner.tsx` needs a real offer or removal.

## Technical / pre-launch

- [ ] **Open Graph / Twitter card metadata** — add to `src/app/layout.tsx` so sharing the link shows a real title/image preview.
- [ ] **sitemap.xml / robots.txt** — add for basic SEO.
- [ ] **Deploy** — no hosting linked yet. Deploy to Vercel (recommended for Next.js) and get a live URL.
- [ ] **Custom domain** — point a real domain at the deployment once live.
- [ ] **Analytics** — add basic analytics (e.g. Vercel Analytics) to see what's converting.

## Already done

- [x] Consistent design system across Home, Menu, Order, Cart, Find Us
- [x] UGX currency formatting throughout
- [x] Delivery-only ordering flow with zone selector, UMU hostel/room fields, and notes
- [x] Cash on Delivery messaging baked into the WhatsApp checkout message
- [x] Footer cleaned up (newsletter form removed)
