import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"

import { BASE_TRANSITION } from "utils/animation"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/work/",
  title: "Work | Sunil Swain",
  description:
    "Experience across central AI, voice GenAI, enterprise AI/ML, and technical internships.",
})

const experiences = [
  {
    title: "AVP, Artificial Intelligence",
    company: "Wells Fargo",
    period: "March 2026 – Present",
    domain: "Artificial Intelligence",
    summary:
      "Part of the newly formed central AI team. Working with teams to improve efficiency and effectiveness through AI and helping them deliver faster.",
    bullets: [] as string[],
  },
  {
    title: "Gen AI Engineer",
    company: "Exotel Telecom",
    period: "September 2025 – February 2026",
    domain: "Artificial Intelligence",
    clients:
      "Bajaj Finserve, Zouk Bags, Barq & RCBC Bank",
    projects: "Voicebot Gen1, Gen2",
    bullets: [
      "Developed intricate bot profiles (Mandates) defining personality, capabilities, and dialogue flows for complex user interactions.",
      "Integrated large language models including Gemini and OpenAI for NLU and generative answering.",
      "Implemented and optimized ASR and premium TTS (e.g. ElevenLabs) for natural, human-like voice experiences.",
      "Built and maintained API endpoints for integration with client systems, data sources, and telephony.",
    ],
  },
  {
    title: "Associate AI/ML Engineer",
    company: "Enterprise System Solutions Private Limited",
    period: "June 2023 – September 2025",
    domain: "Artificial Intelligence",
    clients:
      "Logistics, learning platforms, technical support (ticket resolution), IT service providers",
    projects:
      "SentryVision (ANPR), InfoMate (organizational knowledge), Wisdy (educational chatbot), Contract Generator (shipping contracts), 20High Shipping Bot",
    bullets: [
      "Developed and deployed AI apps across logistics, education, and support: chatbots, RAG, and multi-agent workflows.",
      "Built API services and document-processing pipelines with vector databases for querying, contracts, and retrieval.",
      "Delivered conversational assistants on channels such as WhatsApp with scalable backend integration.",
      "Maintained production systems through continuous optimization while tracking emerging AI tech.",
    ],
  },
  {
    title: "Technical Intern",
    company: "Sambad Digital, Sambad Group",
    period: "May 2023 – July 2023",
    domain: "Media and digital marketing",
    clients: "Reliance Trends",
    projects: "Campaign website",
    bullets: [
      "Designed and laid out the main campaign website.",
      "Coordinated with clients and vendors on requirements and delivery.",
      "Supported infrastructure for a high-traffic site and performance/UX goals.",
    ],
  },
] as const

const WorkPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center py-24">
      <div className="mx-auto w-full max-w-[640px] px-4 md:px-0">
        <h1>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0, ...BASE_TRANSITION }}
            className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
          >
            Work <br />
          </motion.span>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.1, ...BASE_TRANSITION }}
            className="mb-12 flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
          >
            <span className="text-neutral-400 dark:text-neutral-600">
              Experience.
            </span>
          </motion.span>
        </h1>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.2, ...BASE_TRANSITION }}
          className="space-y-12 text-neutral-800 dark:text-neutral-300"
        >
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="border-b border-neutral-200 pb-12 last:border-b-0 dark:border-neutral-800"
            >
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-lg font-semibold">{exp.title}</h2>
                <p className="shrink-0 text-sm text-neutral-500 dark:text-neutral-500">
                  {exp.period}
                </p>
              </div>
              <p className="mb-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {exp.company}
              </p>
              <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-500">
                Domain: {exp.domain}
              </p>
              {"clients" in exp && exp.clients ? (
                <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-500">
                  <span className="font-medium text-neutral-700 dark:text-neutral-400">
                    Clients:{" "}
                  </span>
                  {exp.clients}
                </p>
              ) : null}
              {"projects" in exp && exp.projects ? (
                <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-500">
                  <span className="font-medium text-neutral-700 dark:text-neutral-400">
                    Projects:{" "}
                  </span>
                  {exp.projects}
                </p>
              ) : null}
              {"summary" in exp && exp.summary ? (
                <p className="mb-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
                  {exp.summary}
                </p>
              ) : null}
              {exp.bullets.length > 0 ? (
                <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
                  {exp.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </motion.div>
      </div>
    </main>
  )
}

export default WorkPage
