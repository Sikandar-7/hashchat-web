import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/content";
import { localeMeta, t, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const c = t(locale).footer;
  const home = localeMeta(locale).href;
  const at = (hash: string) => `${home === "/" ? "" : home}${hash}`;
  return (
    <footer className="border-t border-line/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-96.png"
              alt=""
              width={28}
              height={28}
              className="size-7"
            />
            <span className="font-display font-bold">{site.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-faint">
            {c.blurb}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a href={at("#features")} className="text-ink-muted hover:text-ink">
            {c.features}
          </a>
          <a href={at("#pricing")} className="text-ink-muted hover:text-ink">
            {c.pricing}
          </a>
          <a href={at("#faq")} className="text-ink-muted hover:text-ink">
            {c.faq}
          </a>
          {/* The features list and every plan already promise an Android
              app; until now nothing on the site handed it over. Not a
              store link because it is not on Play yet — so the version
              and the size are stated rather than hidden: a sideloaded
              APK never auto-updates, and 5 MB on mobile data is worth
              knowing before the tap. */}
          <a
            href={site.androidApk}
            download
            className="text-ink-muted hover:text-ink"
          >
            {c.android}{" "}
            <span className="text-ink-faint" dir="ltr">
              ({site.androidApkVersion} · {site.androidApkSize})
            </span>
          </a>
          <a
            href={`${site.appUrl}/login`}
            className="text-ink-muted hover:text-ink"
          >
            {c.signIn}
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-line/60 px-5 pt-6 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>

        {/* Legal links sit in this strip rather than the nav above, and
            on every page rather than one. Two of the three are the URLs
            Meta's app settings point at -- the reviewer following them
            is the reader this row exists for -- and the third is what a
            customer goes looking for when they want out. Putting them
            up with Pricing would make them compete with the links that
            sell; burying them in a single page would fail the check. */}
        <nav
          aria-label="Legal"
          className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-center"
        >
          <Link href="/privacy" className="hover:text-ink-muted">
            {c.privacy}
          </Link>
          <Link href="/terms" className="hover:text-ink-muted">
            {c.terms}
          </Link>
          <Link href="/data-deletion" className="hover:text-ink-muted">
            {c.deletion}
          </Link>
        </nav>

        <p>
          {c.productOfBefore}
          <a
            href={site.companyUrl}
            className="text-ink-muted underline-offset-4 hover:text-ink hover:underline"
          >
            {site.company}
          </a>
          {c.productOfAfter}
        </p>
      </div>

      {/* Meta ki business verification website par legal entity ka naam
          dhoondti hai -- 2026-08-23 ki refusal ki wajah yehi thi: "your
          legal business name must be present on the website". SECP ke
          incorporation documents se haraf-ba-haraf liya gaya naam -- ise
          "theek" karne ki koshish mat karna.

          Registered address yahan JAAN BUJH KAR nahi hai. Woh kuch der
          laga raha, is soch par ke usi refusal mein address ka bhi zikr
          tha -- magar refusal ka woh hissa upload kiye gaye *document*
          ke baare mein tha ("The document submitted to verify the
          business address ... isn't an accepted type"), website ke baare
          mein nahi. Aur woh ghar ka pata hai. Kisi verification ne waqai
          site par maanga to /terms par jaye, footer par nahi. */}
      <div className="mx-auto mt-6 max-w-6xl border-t border-line/60 px-5 pt-6 text-xs leading-relaxed text-ink-faint">
        <p>
          {c.legalBefore}
          {/* The legal name is never translated: Meta's business
              verification looks for this exact string on the site, and
              the 2026-08-23 refusal was for its absence. Taken letter
              for letter from the SECP incorporation documents. */}
          <span className="text-ink-muted" dir="ltr">
            LOVE &amp; JOY (SMC-PRIVATE) LIMITED
          </span>
          {c.legalAfter}
        </p>
      </div>
    </footer>
  );
}
