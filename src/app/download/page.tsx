import type { Metadata } from "next";
import Link from "next/link";
import { Download, Play } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { site } from "@/lib/content";

import { AutoDownload } from "./auto-download";

/**
 * The Android app download page.
 *
 * The old hashChat app (a web view of app.hashchat.uk) shows an "update"
 * notice that sends people here, in the phone's browser. Since 21 Oct 2026
 * the app is on Google Play, so on an Android phone this page opens the
 * Play listing by itself; Play installs it, or shows "Update" over the
 * old app.
 *
 * Every build — Play's and the APK below — is signed with the same key and
 * package name, so each installs as an update over the other: login and
 * chats stay. The APK stays for phones without Google Play.
 */
const PAGE_PATH = "/download";
const PAGE_URL = `${site.url}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Download the Android app",
  description: `Get ${site.name} for Android on Google Play, or download the APK.`,
  alternates: { canonical: PAGE_URL },
};

const STEPS = [
  "Tap “Get it on Google Play” — the Play Store opens on hashChat.",
  "Tap Install — or Update, if you already have hashChat. Your login and chats stay as they are.",
  "Play keeps the app up to date from now on.",
] as const;

export default function DownloadPage() {
  return (
    <>
      <SiteNav locale="en" />
      <AutoDownload href={site.playStore} />

      <main className="mx-auto max-w-2xl px-5 py-16 sm:py-24">
        <p className="text-sm text-ink-faint">
          <Link href="/" className="hover:text-ink-muted">
            hashChat
          </Link>{" "}
          · Android app
        </p>

        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Download hashChat for Android
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          hashChat is on Google Play. On an Android phone the Play Store opens
          by itself; if it doesn&apos;t, tap the button below.
        </p>

        <div className="mt-8 flex flex-col items-start gap-4">
          <a
            href={site.playStore}
            className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-6 py-3 font-semibold text-black transition-opacity hover:opacity-90"
          >
            <Play className="size-5 fill-current" aria-hidden />
            Get it on Google Play
          </a>
          <a
            href={site.androidApk}
            download
            className="inline-flex items-center gap-2 text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline"
          >
            <Download className="size-4" aria-hidden />
            No Google Play on your phone? Download the APK
            <span className="text-ink-faint" dir="ltr">
              ({site.androidApkVersion} · {site.androidApkSize})
            </span>
          </a>
        </div>

        <section className="mt-12 rounded-2xl border border-line bg-surface/60 p-7">
          <h2 className="font-display text-xl font-bold">Installing it</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed text-ink-muted">
            {STEPS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </section>
      </main>

      <SiteFooter locale="en" />
    </>
  );
}
