import { BanProblem } from "@/components/ban-problem";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { KeepApp } from "@/components/keep-app";
import { Pricing } from "@/components/pricing";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { StructuredData } from "@/components/structured-data";
import { Verification } from "@/components/verification";
import { localeMeta, type Locale } from "@/lib/i18n";

/**
 * The landing page, once, for every language.
 *
 * `lang` and `dir` sit on this wrapper rather than on `<html>` because
 * Next only lets the root layout own that tag, and moving the root to a
 * `[locale]` segment would change the URL of the page that is already
 * indexed. A `lang`/`dir` on a subtree is valid HTML and the browser
 * applies both correctly; hreflang in the metadata is what actually
 * carries the signal to search engines.
 *
 * `dir="rtl"` alone flips the whole layout because the CSS is written
 * in logical properties — Tailwind's `ms-`/`me-`/`text-start` and flex
 * ordering all follow direction. The only places needing `dir="ltr"`
 * back are the ones holding Latin data inside Urdu prose: the phone
 * number, prices, plan names, step numbers.
 */
export function Landing({ locale }: { locale: Locale }) {
  const meta = localeMeta(locale);
  return (
    <div lang={meta.htmlLang} dir={meta.dir} className={meta.dir === "rtl" ? "font-urdu" : undefined}>
      <StructuredData locale={locale} />
      <SiteNav locale={locale} />
      <main>
        <Hero locale={locale} />
        {/* Straight after the hero: it is the problem this market
            actually searches for, so it earns the position. */}
        <BanProblem locale={locale} />
        {/* Right behind it: the ban section makes the case against the
            app, and this answers the objection that raises — keeping
            the app is now possible. The hero's "New" pill lands here. */}
        <KeepApp locale={locale} />
        <Features locale={locale} />
        <HowItWorks locale={locale} />
        <Pricing locale={locale} />
        {/* Verification sits after pricing on purpose. It is the second
            question people ask, but only once they are already weighing
            the thing up — leading with it would answer a doubt the
            reader has not had yet. */}
        <Verification locale={locale} />
        <Faq locale={locale} />
        <Cta locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
