# SEO, Local Search and Webmaster Checklist

## A. Completed Technical Website Work

- Root metadata uses `https://barimarentals.com` as the production metadata base.
- Homepage canonical is `https://barimarentals.com/`.
- Homepage title and description describe approved rentals, transportation support and Guyana location naturally.
- Open Graph and Twitter/X metadata are configured for social sharing.
- Favicon and app icon metadata points to the current icon files.
- Google and Bing verification metadata can be added through environment variables only.
- LocalBusiness JSON-LD uses one consistent entity: `https://barimarentals.com/#business`.
- JSON-LD includes `name: Barima Rentals` and `alternateName: CF Rentals`.
- JSON-LD uses the Kitty address as the primary business address.
- JSON-LD includes approved services, service areas, phone number, logo and images.
- No fake reviews, ratings, opening hours, coordinates, social links or claims were added.
- `app/robots.ts` allows crawling and references the production sitemap.
- `app/sitemap.ts` lists the real indexable homepage only.
- Homepage heading structure has one H1.

## B. Tasks Requiring Deployment

- Deploy the current main-branch site after final visual approval.
- Confirm `https://barimarentals.com/` loads the deployed version.
- Confirm `https://barimarentals.com/robots.txt` is available.
- Confirm `https://barimarentals.com/sitemap.xml` is available.
- Confirm the live homepage source includes the expected canonical URL and JSON-LD.
- Run a post-deployment mobile and desktop visual check.

## C. Tasks Requiring Google Account Access

1. Open Google Search Console.
2. Add the domain property: `barimarentals.com`.
3. Complete ownership verification, preferably by DNS through Cloudflare.
4. Submit `https://barimarentals.com/sitemap.xml`.
5. Inspect `https://barimarentals.com/`.
6. Request indexing after the final deployment.
7. Check indexing, mobile usability, enhancements and Core Web Vitals.

If using meta-tag verification instead of DNS, add the token value to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` before deployment.

## D. Tasks Requiring Bing Account Access

1. Open Bing Webmaster Tools.
2. Add `https://barimarentals.com`.
3. Verify ownership using DNS or a supported meta-tag verification method.
4. Submit `https://barimarentals.com/sitemap.xml`.
5. Run URL Inspection for the homepage.
6. Run Site Scan.
7. Review indexing and search-performance reports.

If using meta-tag verification, add the token value to `NEXT_PUBLIC_BING_SITE_VERIFICATION` before deployment.

## E. Google Business Profile Checklist

- Profile name: `Barima Rentals`.
- Former-name wording where appropriate: `Formerly CF Rentals`.
- Main category: requires owner review inside Google Business Profile.
- Additional categories: requires owner review inside Google Business Profile.
- Telephone: `+592 627 5775`.
- Website: `https://barimarentals.com`.
- Primary address: `Lot 6 "D" Station Street, Kitty, Georgetown, Guyana`.
- Service areas: Georgetown, East Coast Demerara, East Bank Demerara, West Coast Demerara and West Bank Demerara.
- Description: mention scaffolding rental, concrete mixer rental, 90kg plate compactor rental and transportation support without keyword stuffing.
- Services: add the approved service and equipment list only.
- Photos: upload real equipment photos, logo and cover image.
- Contact options: add WhatsApp/contact options only where supported.
- Regular updates: post genuine business updates or equipment availability notes when useful.
- Questions and answers: answer real customer questions accurately.
- Duplicate profiles: check for duplicate or old CF Rentals profiles and resolve through official Google tools.

## F. Facebook, WhatsApp and Profile URLs Needed

- Exact Facebook Page URL.
- Exact Google Business Profile or Google Maps place URL.
- Exact WhatsApp public business link, if one exists beyond `https://wa.me/5926275775`.
- Exact Bing Places profile URL, if later created.
- Trustworthy Guyana directory listing URLs.

Do not add generic profile URLs or `sameAs` entries until exact public URLs are confirmed.

## G. Backlink and Directory Work

Pursue legitimate references only:

- Guyana business directories.
- Equipment and construction directories.
- Suppliers.
- Contractors.
- Trade partners.
- Local business associations.
- Map platforms.
- Social profiles.
- Relevant community or commercial listings.

Avoid buying backlinks, link farms, automated directory spam, unrelated foreign directories, fake guest posts, comment spam and private blog networks.

Tracking table:

| Website or organisation | Listing/profile URL | Business name used | Phone | Website URL | Status | Date checked | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |

## H. Future Content-Page Plan

Do not create these pages until enough useful, unique content is approved.

`/scaffolding-rental-guyana`

- Primary intent: customers looking for scaffolding rental in Guyana.
- Questions to answer: available 2ft and 3ft options, typical uses, rental duration, delivery/pickup coordination and how to check availability.
- Details required: final scaffold specifications, safe-use notes the business approves, photos and exact service area wording.
- Internal links: homepage, equipment section, contact section and transportation section.

`/concrete-mixer-rental-guyana`

- Primary intent: customers comparing concrete or cement mixer rental options.
- Questions to answer: 350L, 400L and 450L differences, daily prices, project fit, pickup/delivery and booking details.
- Details required: approved mixer specs, real photos, pricing confirmation and rental terms.
- Internal links: homepage, equipment section, WhatsApp contact and transportation section.

`/plate-compactor-rental-guyana`

- Primary intent: customers needing a 90kg plate or vibrating plate compactor.
- Questions to answer: common use cases, daily price, surface/project fit and delivery/pickup options.
- Details required: approved machine details, photo, rental requirements and service area wording.
- Internal links: homepage, equipment section and contact section.

`/equipment-transportation-guyana`

- Primary intent: customers needing equipment, material, goods or job-site transportation.
- Questions to answer: what can be transported, areas served, scheduling needs, pickup/dropoff information and how to request a quote.
- Details required: approved Canter photos, carrying limits if approved, service boundaries and exclusions.
- Internal links: homepage, transportation section, equipment section and contact section.

## I. Review Readiness

- Do not add fake testimonials, fake ratings or review schema.
- Do not add review popups or broad review banners.
- A subtle `Share your experience on Google` link may be added later only after the exact Google review URL is approved.
- Reviews should remain voluntary, genuine and based on real customer experience.

## J. Name Consistency Plan

- Preferred display where editing is possible: `Barima Rentals`.
- Supporting transition wording where appropriate: `Formerly CF Rentals`.
- Use the same phone number and website across profiles where possible.
- Correct inconsistent external variants such as `Brimer Rentals`, `Barema Rentals`, `Barima Rental` or `CF Rental` if encountered.
- Do not claim Facebook, WhatsApp, Google or Bing profile changes have been completed until the owner confirms them.
