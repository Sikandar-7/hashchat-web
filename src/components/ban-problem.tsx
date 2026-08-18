import { ArrowRight, ShieldCheck, Ban } from "lucide-react";

import { site, waLink } from "@/lib/content";

/**
 * The ban problem, answered plainly.
 *
 * Every competitor in this market leads with it — "anti-ban API",
 * "from banned to brand", "ab aapki WhatsApp kabhi ban nahi hogi". It
 * is the thing buyers here actually search for, and the page said
 * nothing about it.
 *
 * Written deliberately without their language. Nobody can promise Meta
 * will never act on an account, and a page that promises it is lying to
 * someone whose business runs on that number. The honest version — the
 * official channel is built for this traffic, the consumer app is not —
 * is also the more convincing one, because it explains *why*.
 */
export function BanProblem() {
  return (
    <section className="scroll-mt-20 border-t border-line/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-medium text-ink-muted">
              <Ban className="size-3.5 text-red-400" aria-hidden />
              Sab se aam masla
            </p>

            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Ads chalate hi{" "}
              <span className="brand-text">number ban ho jata hai?</span>
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
              <p>
                Aap Facebook ya Instagram par ad chalate hain, messages ka
                sailab aata hai — aur normal WhatsApp Business app usay spam
                samajh kar aapka number block kar deti hai. Jo number par
                poora business chal raha tha, woh ek din mein band.
              </p>
              <p>
                Wajah yeh hai ke woh app ek banday ki personal baat-cheet ke
                liye bani hai, sainkron customers ke liye nahi.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-line bg-surface/60 p-6">
              <div className="flex gap-4">
                <ShieldCheck
                  className="mt-0.5 size-6 shrink-0 text-brand-teal"
                  aria-hidden
                />
                <div>
                  <h3 className="font-display font-semibold">
                    hashChat official WhatsApp Business API par chalta hai
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Yeh wohi raasta hai jo Meta ne bulk aur ads ke traffic ke
                    liye khud banaya hai. Yani aap Meta ke qawaid ke{" "}
                    <strong className="text-ink">andar</strong> hote hain, un
                    ke khilaf nahi.
                  </p>
                </div>
              </div>
            </div>

            {/* Said out loud, because the category is full of people
                promising the opposite. */}
            <p className="mt-6 text-sm leading-relaxed text-ink-faint">
              Hum yeh nahi kahenge ke &ldquo;aapka number kabhi ban nahi
              hoga&rdquo; — koi bhi yeh waada sach mein nahi kar sakta, aur jo
              kare us par shak karein. Qawaid Meta ke hain. Farq yeh hai ke aap
              qanooni channel par hain, jahan yeh traffic mana hi nahi.
            </p>

            <a
              href={waLink(
                "Assalam o alaikum — mera WhatsApp number ads ki wajah se ban hota hai. hashChat ke bare mein maloomat chahiye.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-line bg-surface-2 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-line/40"
            >
              Is bare mein baat karein
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>

          {/* Before / after, as two stacked cards. */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-red-500/25 bg-red-500/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
                Normal WhatsApp Business app
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
                <li>Ek phone, ek banda — team ka koi tasawwur nahi</li>
                <li>Bulk bhejne par spam ka flag</li>
                <li>Ads ka traffic sambhalne ke liye nahi bani</li>
                <li>Ban ho jaye to koi appeal ka raasta nahi</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-teal/30 bg-brand-teal/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal">
                Official API + {site.name}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
                <li>Poori team ek number par, alag alag logins se</li>
                <li>Bulk bhejna Meta ke approved templates se</li>
                <li>Ads ka traffic isi ke liye bana hai</li>
                <li>Business verification aur official status</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
