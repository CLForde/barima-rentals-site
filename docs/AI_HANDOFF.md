# AI Handoff

## Project Structure

- `app/page.tsx` - homepage content and sections
- `app/HeroShowcase.tsx` - static two-image hero composition
- `app/globals.css` - global Tailwind import and shared global CSS
- `app/layout.tsx` - metadata, schema, root layout
- `public/images/` - site image assets
- `package.json` - scripts and dependencies

## Active Phase

Hero continuous full-image composition correction complete on `modern-redesign`.

The polished version was preserved on `main` in commit `b706f77` and pushed to `origin/main`. The annotated tag `current-polished-version` was created with message `Preserved polished version before backlog redesign` and pushed to the remote. The `modern-redesign` branch was created from that preserved version, pushed to `origin/modern-redesign`, and is the branch for all future backlog redesign work.

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
- `git diff -- app/page.tsx app/globals.css package.json docs/AI_HANDOFF.md CLAUDE.md docs/PROJECT_CONTEXT.md app/HeroShowcase.tsx`
- `git diff -- app/page.tsx docs/AI_HANDOFF.md`
- `git status --short`
- `git diff -- app/page.tsx docs/AI_HANDOFF.md docs/PROJECT_CONTEXT.md CLAUDE.md app/HeroShowcase.tsx`

## Files Changed

- `CLAUDE.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/AI_HANDOFF.md`
- `app/page.tsx`
- `app/HeroShowcase.tsx`
- Deleted `app/HeroCarousel.tsx`

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
- Committed and pushed the current polished website version on `main`.
- Created and pushed the annotated `current-polished-version` tag.
- Created and pushed the `modern-redesign` branch.
- Future backlog redesign work must occur on `modern-redesign`.
- The preserved original `main` branch must remain unchanged unless explicitly approved.
- Replaced the hero carousel with two vertically stacked full-image panels.
- The same vertical hero structure is used on desktop, laptop, tablet, and mobile.
- The scaffolding panel appears first and the 400L mixer panel appears second.
- Hero images now preserve almost the full original source images.
- Aggressive cropping and zoom were removed from the hero foreground images.
- The scaffolding and mixer images connect directly with no white gap.
- Both images are wrapped in one continuous hero container with one shared border radius and overflow clipping.
- Hero text bridges the central transition area between the scaffolding and mixer imagery.
- No visible text panel, blur, white box, grey box, or dark block is used.
- Used `object-fit: contain` for the sharp foreground images and subtle same-image background filler layers behind them to avoid white bars.
- Scaffolding foreground uses `object-position: center 20%`; mixer foreground uses `object-position: center center`.
- Used restrained text shadow and a soft seamless gradient for readability.
- Removed customer-facing wording that described scaffolding and concrete mixers as the site's "core offering."
- Removed carousel timers, state, previous/next arrows, slide indicators, and rotation behavior.
- Animation is intentionally deferred.
- Equipment-card image sizing remains a separate pending backlog item.
- `AGENTS.md` remains deferred.

## Validation Commands And Results

- Passed: `npm run lint`
- Passed: `npm run build`

## Known Issues

- Visual review in a browser is still recommended for final desktop and mobile polish.
- Existing untracked image assets remain in `public/images/`; they were not deleted or modified.
- The separate `#pricing` section still contains older concrete mixer prices because Phase 2 was limited to equipment cards and unrelated sections were not modified.
- Visual review should confirm desktop/laptop spacing, mobile card rhythm, and fixed mobile contact controls after the full-page polish.

## Deferred Work

- Canter transport presentation remains deferred until images and copy are finalized.

## Backlog / Later Refinements

- Add subtle "Powered by Barima Venture" branding in the footer.
- Reassess whether the floating call button should remain dark navy or use a restrained Barima orange after the full page is visually reviewed.
- Develop the future transport presentation using all three Canters with clearly defined uses.
- Align the separate `#pricing` section with approved mixer pricing during an explicitly approved pricing task.
- Reassess equipment-card image sizing in a later approved equipment-card refinement.
- Decide whether to add rental-hours wording.
- Add `AGENTS.md` setup as a later documentation task.
- Consider broad footer, global spacing, typography, and animation refinements only if explicitly approved after visual review.

## Exact Next Recommended Task

Manual visual review of the homepage on desktop/laptop/tablet/mobile, then explicitly approve the next targeted refinement from the backlog.
