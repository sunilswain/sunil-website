import * as React from "react"

import { type Metadata } from "next"
import * as motion from "framer-motion/client"
import Link from "next/link"

import { BASE_TRANSITION } from "utils/animation"
import classNames from "utils/classNames"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/privacy-policy/",
  title: "Privacy Policy | isagnostic-youtube-publisher - Sunil Swain",
  description:
    "Privacy Policy for isagnostic-youtube-publisher, an application developed by Sunil Swain.",
})

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="mx-auto w-full max-w-[580px] px-4 py-16 md:px-0 md:py-24">
      <motion.article
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.2, ...BASE_TRANSITION }}
        className={classNames(
          "mb-24 prose prose-neutral dark:prose-invert",
          "prose-p:opacity-85 dark:prose-p:opacity-80 prose-p:leading-relaxed",
          "prose-headings:font-semibold prose-headings:opacity-85 dark:prose-headings:opacity-80",
          "prose-h1:tracking-tight prose-h1:text-3xl prose-h1:leading-snug prose-h1:mb-2",
          "prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3",
          "prose-a:underline prose-a:underline-offset-2 hover:prose-a:no-underline"
        )}
      >
        <div className="mb-8">
          <Link
            href="/"
            className="text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors no-underline"
          >
            ← Back to Home
          </Link>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mt-1">
            isagnostic-youtube-publisher
          </p>
        </div>

        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-800/40 p-4 text-sm space-y-1.5 not-prose mb-8">
          <div>
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">
              Effective date:{" "}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              27 October 2026
            </span>
          </div>
          <div>
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">
              App:{" "}
            </span>
            <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
              isagnostic-youtube-publisher
            </span>
          </div>
          <div>
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">
              Developer / contact:{" "}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Sunil Swain — channel{" "}
              <a
                href="https://www.youtube.com/@isAgnostic/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:no-underline text-neutral-800 dark:text-neutral-200"
              >
                https://www.youtube.com/@isAgnostic/
              </a>
            </span>
          </div>
        </div>

        <h2>What this app does</h2>
        <p>
          <code>isagnostic-youtube-publisher</code> uploads short videos created
          by Sunil Swain to his own YouTube channel,{" "}
          <a
            href="https://www.youtube.com/@isAgnostic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @isAgnostic
          </a>
          , using the YouTube Data API with the <code>youtube.upload</code>{" "}
          scope only. It does not publish to any other channel, and it does not
          read, modify or delete videos belonging to anyone else.
        </p>

        <h2>Data we access</h2>
        <p>
          When Sunil authorises the app with his Google account, the app
          receives an OAuth access token and refresh token that allow it to
          upload videos to his channel. Those tokens are stored securely by the
          system that runs the publisher and are never shared, sold or posted
          publicly.
        </p>
        <p>
          The app does not collect, store or share personal data from viewers,
          subscribers or any third party. It does not collect names, email
          addresses, phone numbers, locations, device identifiers, photos or
          browsing history from anyone other than the channel owner who
          authorised it, and it does not use advertising, analytics or tracking
          cookies.
        </p>
        <p>
          Video metadata uploaded through the app (title, description, tags,
          playlist, audience setting and AI-content disclosure) is exactly the
          metadata Sunil provides for each video, and it becomes public on
          YouTube only when Sunil&apos;s publishing settings make it public.
        </p>

        <h2>Data sharing</h2>
        <p>
          We do not sell, rent or share personal data with third parties. The
          only external service the app calls with an authorised token is
          Google&apos;s YouTube Data API, for the purpose of uploading to
          Sunil&apos;s own channel.
        </p>

        <h2>Data retention and revocation</h2>
        <p>
          Tokens are kept only while the publisher is in use. Sunil can revoke
          the app&apos;s access at any time from his Google account security
          settings (Third-party access), after which the app can no longer
          upload until it is authorised again.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If this policy changes, the updated version will be posted here with a
          new effective date.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this app or this policy, contact Sunil Swain via
          the channel at{" "}
          <a
            href="https://www.youtube.com/@isAgnostic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.youtube.com/@isAgnostic/
          </a>
          .
        </p>
      </motion.article>
    </main>
  )
}

export default PrivacyPolicyPage
