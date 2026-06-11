<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the HexQuarter website. PostHog is initialized client-side in `_app.tsx` using the standard Next.js 14 Pages Router pattern (module-level init with `typeof window` guard). Five targeted business events are instrumented across the key conversion points of the site, with properties attached to each event for segmentation.

| Event | Description | File |
|---|---|---|
| `contact_form_submitted` | Fired on successful contact form submission. Property: `service_category` (bitcoin, nostr, architecture, advisory, other). Primary conversion event. | `src/components/Contact.tsx` |
| `contact_form_error` | Fired when the contact form API call fails. Property: `service_category`. | `src/components/Contact.tsx` |
| `offer_cta_clicked` | Fired when a specific engagement offer CTA is clicked in the Work With Us section. Properties: `offer_tag`, `offer_name`, `offer_href`. | `src/components/home/WorkWithUs.tsx` |
| `hero_cta_clicked` | Fired when the primary "Start a project" CTA in the hero section is clicked. Property: `cta_label`. | `src/components/Hero.tsx` |
| `blog_article_clicked` | Fired when a user clicks to open a blog article from the listing page. Properties: `article_id`, `article_title`. | `src/pages/blog/index.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://eu.posthog.com/project/199726/dashboard/741459)
- [Contact Form Submissions (Total)](https://eu.posthog.com/project/199726/insights/A2xDPRZE)
- [Contact Form Submissions Over Time](https://eu.posthog.com/project/199726/insights/uK1aeGOx)
- [Hero CTA to Contact Form Funnel](https://eu.posthog.com/project/199726/insights/Y1CbjV80)
- [Offer CTA Clicks by Package](https://eu.posthog.com/project/199726/insights/BmNiwjWM)
- [Blog Article Clicks](https://eu.posthog.com/project/199726/insights/EPzELR4m)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
