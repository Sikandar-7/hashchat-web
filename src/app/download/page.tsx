import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { site } from "@/lib/content";

import { AutoDownload } from "./auto-download";

/**
 * The Android app download page.
 *
 * The old hashChat app (a web view of app.hashchat.uk) shows an "update"
 * notice that sends people here: it hands any host other than its own to
 * the phone's browser, and only the browser can save a download. So this
 * page starts the download by itself, and keeps a button for when the
 * browser blocks the automatic one.
 *
 * The new app is signed with the same key and package name as the old
 * one, so Android installs it as an update over it — login and chats stay.
 */
const PAGE_PATH = "/download";
const PAGE_URL = `${site.url}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Download the Android app",
  description: `Download ${site.name} for Android — version ${site.androidApkVersion}, ${site.androidApkSize}.`,
  alternates: { canonical: PAGE_URL },
};

const STEPS = [
  "Open the file once it has downloaded.",
  "If Android asks, allow your browser to install apps (“Install unknown apps”).",
  "Tap Install — or Update, if you already have hashChat. Your login and chats stay as they are.",
] as const;

export default function DownloadPage() {
  return (
    <>
      <SiteNav locale="en" />
      <AutoDownload href={site.androidApk} />

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
          Your download starts by itself. If it doesn&apos;t, tap the button
          below.
        </p>

        <a
          href={site.androidApk}
          download
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-teal px-6 py-3 font-semibold text-black transition-opacity hover:opacity-90"
        >
          <Download className="size-5" aria-hidden />
          Download hashChat
          <span className="font-normal" dir="ltr">
            ({site.androidApkVersion} · {site.androidApkSize})
          </span>
        </a>

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
