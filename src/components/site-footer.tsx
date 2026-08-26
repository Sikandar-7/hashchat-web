import Image from "next/image";

import { site } from "@/lib/content";

export function SiteFooter() {
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
            {site.tagline}. Lahore, Pakistan se banaya gaya.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a href="#features" className="text-ink-muted hover:text-ink">
            Features
          </a>
          <a href="#pricing" className="text-ink-muted hover:text-ink">
            Pricing
          </a>
          <a href="#faq" className="text-ink-muted hover:text-ink">
            FAQ
          </a>
          <a
            href={`${site.appUrl}/login`}
            className="text-ink-muted hover:text-ink"
          >
            Sign in
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-line/60 px-5 pt-6 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          Ek product{" "}
          <a
            href={site.companyUrl}
            className="text-ink-muted underline-offset-4 hover:text-ink hover:underline"
          >
            {site.company}
          </a>{" "}
          ka
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
          {site.name} ko{" "}
          <span className="text-ink-muted">LOVE &amp; JOY (SMC-PRIVATE) LIMITED</span>{" "}
          chalati hai — Pakistan mein registered company, CUIN 0324937.
        </p>
      </div>
    </footer>
  );
}
