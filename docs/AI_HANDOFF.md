# AI Handoff

## Project Structure

- `app/page.tsx` - homepage content and sections
- `app/HeroSection.tsx` - static single-image homepage hero
- `app/globals.css` - global Tailwind import and shared global CSS
- `app/layout.tsx` - metadata, schema, root layout
- `app/robots.ts` - App Router robots output
- `app/sitemap.ts` - App Router sitemap output
- `public/images/` - site image assets
- `package.json` - scripts and dependencies
- `docs/SEO_CHECKLIST.md` - SEO, local-search and webmaster preparation checklist

## Active Phase

Main local transportation, contact, and visible brand wording refinement.

## Phase Checklist

- [x] Documentation setup
- [x] Hero modernization - technically complete; visual correction backlogged
- [x] Equipment-card modernization
- [x] Final visual polish
- [ ] Manual refinements
- [ ] Canter presentation - deferred

## Files Inspected

- `app/page.tsx`
- `app/globals.css`
- `package.json`
- `public/images/`
- `CLAUDE.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/AI_HANDOFF.md`
- `git status --short`
- `git diff -- app/page.tsx app/globals.css package.json docs/AI_HANDOFF.md CLAUDE.md docs/PROJECT_CONTEXT.md app/HeroCarousel.tsx`
- `git diff -- app/page.tsx docs/AI_HANDOFF.md`

## Files Changed

- `CLAUDE.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/AI_HANDOFF.md`
- `app/page.tsx`
- `app/HeroSection.tsx`
- `app/HeroCarousel.tsx` - removed obsolete carousel component
- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `next.config.ts`
- `.gitignore`
- `app/icon.png`
- `app/favicon.ico`
- `public/images/3ft-scaffolding-candidate-cropped.png`
- `docs/SEO_CHECKLIST.md`
- `.env.example`

## Decisions Applied

- Kept the homepage as a server component and added a focused client carousel component.
- Modernized only the hero section.
- Reused the existing WhatsApp URL pattern and `#equipment` section target.
- Kept existing sticky navigation, fixed mobile WhatsApp button, and fixed call control unchanged.
- Kept carousel controls inside the hero image panel.
- Did not change equipment cards, pricing, transport, locations, contact, footer, SEO, or dependencies.
- Did not delete any image assets.
- Replaced the old four-card equipment section with six consistent cards for:
  - 3ft Scaffolding
  - 2ft Scaffolding
  - 350L Concrete Mixer
  - 400L Concrete Mixer
  - 450L Concrete Mixer
  - 90kg Plate Compactor
- Used the approved image assets for all six equipment cards.
- Applied approved mixer card prices: G$23,000/day, G$28,000/day, and G$33,000/day.
- Preserved existing scaffolding pricing from the current site in the scaffolding cards.
- Applied the approved 90kg Plate Compactor card price: G$15,000/day.
- Added the 90kg Plate Compactor card secondary wording: "Also commonly requested as a vibrating plate compactor."
- Added equipment-specific WhatsApp messages for card CTAs without changing other contact controls.
- Did not change the completed hero, navigation, transport, locations, contact, footer, SEO, sticky WhatsApp button, or floating call button during Phase 2.
- Applied Phase 3 visual polish with light section backgrounds, consistent vertical spacing, stronger heading hierarchy, subtler card borders/shadows, and more consistent button treatments.
- Added `overflow-x-hidden` to the main wrapper to reduce horizontal-overflow risk.
- Polished the How to Book, equipment, pricing, transport, why-choose-us, locations, contact, and footer presentation without changing their business facts, approved prices, addresses, or contact destinations.
- Preserved the existing Phase 1 hero structure and carousel behavior during Phase 3.
- Did not implement any backlog items during Phase 3.
- Preserved modern-redesign separately in commit `34eb5d8` on `modern-redesign` and pushed it to `origin/modern-redesign`; do not merge redesign work into `main` unless explicitly approved.
- Prepared the main-branch version for deployment with a responsive sticky contact-header behavior.
- Desktop/laptop uses the full dark navy header as sticky, including logo/business identity, navigation links, and WhatsApp button.
- Phone/narrow screens let the full mobile header scroll normally with the page.
- Phone/narrow screens use one compact sticky WhatsApp control at the top with the existing green treatment and WhatsApp link.
- Removed the previous mobile bottom fixed WhatsApp bar to avoid duplicate active mobile WhatsApp controls.
- Floating `Call 627-5775` control remains unchanged.
- 3ft Scaffolding card now uses `/images/3ft-scaffolding.jpeg`; the lighthouse hero image remains only in the hero.
- Equipment-card images now use the full available card width while preserving the full original photographs with contained, natural-ratio rendering.
- Standalone Pricing section and Pricing navigation link were removed; card prices remain unchanged.
- Added subtle footer wording: "Powered by Barima Venture".
- `modern-redesign` remains separate and untouched by this main-branch production correction.
- Visible "core offering" wording was manually removed and preserved.
- 3ft Scaffolding card image now uses the full card width with the complete original photograph preserved.
- Equipment prices now appear with equipment names instead of in bottom price boxes.
- Equipment is grouped into Scaffolding, Concrete Mixers, and Compaction Equipment.
- Concrete mixer order is 450L, 400L, then 350L.
- Header logo now uses the brighter `/images/barima-rentals-logo.png` asset.
- Favicon assets were regenerated from `/images/barima-favicon.png` so the building fills most of the square icon canvas.
- Hero now uses the approved `/images/3ft-scaffolding-candidate-cropped.png` image as one scaffolding image only.
- The 400L mixer was removed from the hero; it remains only in the approved equipment card.
- Obsolete carousel logic and controls were removed with `app/HeroCarousel.tsx`.
- Current lighthouse image `/images/3ft-scaffolding-hero.PNG` was reassigned to the 3ft Scaffolding card.
- 2ft Scaffolding card image remains `/images/2ft-scaffolding.jpeg`.
- Equipment prices now appear directly beneath equipment names on all breakpoints.
- Existing alternate-name/supporting wording was preserved.
- Equipment grouping remains Scaffolding, Concrete Mixers, and Compaction Equipment.
- Mixer order remains 450L, 400L, then 350L.
- Brighter header logo and corrected favicon were preserved.
- `modern-redesign` remains separate and untouched.
- No commit or push has been performed for this local update.
- Phone widths below 768px use one fixed top WhatsApp control.
- The full phone header scrolls normally.
- Tablet widths from approximately 768px use the full sticky dark-blue header.
- Laptops and desktops use the full sticky dark-blue header.
- A phone-only top content offset prevents the fixed WhatsApp control from covering the hero/top content.
- No duplicate WhatsApp controls remain.
- Hero now uses a full-width natural-aspect-ratio image without large white side margins.
- Hero text sits directly over the image, and the image/text scroll together as one normal section.
- Hero image is no longer stretched by a forced height or constrained by a centered card wrapper.
- Phone WhatsApp control now touches the top edge with safe-area padding inside the green bar.
- Phone content starts immediately beneath the fixed WhatsApp control using the smallest matching offset.
- No commit, push, or deployment has occurred for this correction.
- Technical SEO preparation added root metadataBase, homepage canonical, title template, Open Graph, Twitter/X metadata, robots directives and conditional Google/Bing verification metadata.
- Google Search Console and Bing Webmaster verification values are read from `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION`; empty values do not render verification tags.
- LocalBusiness JSON-LD now uses one stable `https://barimarentals.com/#business` entity with `Barima Rentals` and `CF Rentals`, Kitty as the primary address, approved service areas and approved services.
- No fake reviews, aggregate ratings, opening hours, coordinates, invented social URLs or unapproved business claims were added.
- Added `app/robots.ts` with crawl allow rules and production sitemap reference.
- Added `app/sitemap.ts` listing only the real production homepage URL.
- Added `docs/SEO_CHECKLIST.md` for webmaster setup, Google Business Profile readiness, profile URL gaps, review-readiness, backlink tracking and future service-page planning.
- Header brand text was changed from an `h1` to paragraph text so the hero remains the single page H1.
- Header tagline now matches the approved wording: "Equipment Rental & Logistics Solutions".
- Transportation copy remains broad and includes construction materials, equipment, goods, barrels, household items, signs, deliveries and job-site coordination.
- `.gitignore` now allows `.env.example` while continuing to ignore real `.env*` files.
- Hero primary CTA is now "Book Your Rental".
- Hero "View Equipment" CTA remains linked to `#equipment` and is transparent with no blur or frosted effect.
- All equipment-card CTAs now say "Book Now".
- One Equipment section notice says "Advance booking is recommended for timely service."
- Shared mixer alternate wording now appears once at the Concrete Mixers group level.
- Repeated mixer-card notes were removed.
- Plate compactor alternate wording remains on its card.
- Equipment now appears directly after the hero.
- How to Book was moved below Transportation Solutions and made more compact.
- Visible "Formerly CF Rentals" wording was removed from the homepage header and footer; machine-readable `alternateName` remains unchanged.
- Header now shows "Barima Rentals" with the secondary tagline "Equipment Rental & Logistics Solutions".
- Public email is now `hello@barimarentals.com`.
- Transportation section now uses three real truck cards: Hiab Crane Transport, Enclosed Canter Transport and Powergate Canter Transport.
- Each truck card has a specific WhatsApp booking message.
- Generic transport service boxes were removed.
- The general "Arrange Transport on WhatsApp" button was removed because truck cards now have their own booking buttons.
- A single transportation advance-booking notice remains: "Advance booking is recommended for timely service."
- Public opening hours were added visibly in the Contact section: Monday-Friday 8:00 a.m.-5:00 p.m.; Saturday-Sunday closed.
- How to Book steps 3 and 4 were reordered; step 4 now says "We confirm the booking details and total cost".
- "Delivery & Pickup Available" was replaced with "Advance Booking & Reliable Scheduling" in the Why Choose cards.
- Opening hours now show Monday-Friday 8:00 a.m.-5:00 p.m.; Saturday closed; Sunday 10:00 a.m.-4:00 p.m.

## Validation Commands And Results

- Passed: `npm run lint`
- Passed: `npm run build`
- Build output confirmed static `/robots.txt` and `/sitemap.xml` routes.
- Browser automation could not complete because the available Node browser tool failed before execution with missing sandbox metadata; manual browser visual review is still required.

## Known Issues

- Visual review in a browser is still recommended for final desktop and mobile polish.
- Existing untracked image assets remain in `public/images/`; they were not deleted or modified.
- Visual review should confirm desktop/laptop spacing, mobile card rhythm, the full-width hero overlay, and fixed mobile contact controls before checkpoint creation.

## Deferred Work

- Canter transport presentation remains deferred until images and copy are finalized.

## Backlog / Later Refinements

- Reassess whether the floating call button should remain dark navy or use a restrained Barima orange after the full page is visually reviewed.
- Develop the future transport presentation using all three Canters with clearly defined uses.
- Consider broad footer, global spacing, typography, and animation refinements only if explicitly approved after visual review.

## Exact Next Recommended Task

Local visual evaluation of the approved single-image hero and equipment cards before checkpoint creation.
