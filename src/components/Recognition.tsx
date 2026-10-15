const articles = [
  {
    date: "June 8, 2026",
    category: "Medical AI · CVPR 2026",
    title: "Like a Doctor, AI System Identifies and Describes Tumors in Medical Scans",
    description:
      "Yeshiva University features Lakshmikar's lead-author research on CG-Reasoner, connecting medical image segmentation with spatial language reasoning.",
    href: "https://www.yu.edu/news/katz/doctor-ai-system-identifies-and-describes-tumors-medical-scans",
  },
  {
    date: "November 2, 2025",
    category: "Generative AI · Information Fusion",
    title: "Study Reveals AI Diffusion Models Mostly Rearrange, Not Reinvent, What They Learn",
    description:
      "University coverage of Lakshmikar's co-authored research on information novelty and diverse samples in diffusion models.",
    href: "https://www.yu.edu/news/katz/study-reveals-ai-diffusion-models-mostly-rearrange-not-reinvent-what-they-learn",
  },
  {
    date: "December 15, 2023",
    category: "Autonomous Driving · Research Award",
    title: "Researchers Using AI to Reduce Accidents in Self-Driving Cars Receive Award",
    description:
      "Yeshiva University highlights the Emerging Research Award received by Lakshmikar Polamreddy and Youshan Zhang for LaksNet.",
    href: "https://www.yu.edu/news/katz/researchers-using-ai-reduce-accidents-self-driving-cars-receive-award",
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="border-t border-white/[0.08] bg-[#0a101b] px-6 pb-12 pt-8 sm:pb-24 sm:pt-12 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Research Impact & Recognition
        </p>
        <h2 className="mt-4 text-[26px] font-semibold tracking-tight text-white sm:text-[36px]">
          Featured in University News
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-400">
          Research stories published by Yeshiva University, highlighting
          contributions to medical AI, generative models, and autonomous driving.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.href}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-[#152237] to-[#0d1624] p-6 transition-colors hover:border-cyan-400/35"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-cyan-300">
                <span>{article.date}</span>
                <span aria-hidden="true">·</span>
                <span>Yeshiva University</span>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {article.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                {article.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {article.description}
              </p>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-100"
              >
                Read University Article ↗
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-amber-300/20 bg-gradient-to-r from-[#202334] to-[#111b2b] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              Official Research Award · 2023
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Emerging Research Award
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Presented to Youshan Zhang and Lakshmikar Reddy Polamreddy
              at the Future Technologies Conference 2023 for
              “LaksNet: An End-to-End Deep Learning Model for
              Self-Driving Cars in Udacity Simulator.”
            </p>
            <p className="mt-2 text-sm text-slate-400">
              November 2–3, 2023 · San Francisco, USA
            </p>
          </div>
          <a
            href="/awards/emerging-research-award-2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-amber-300/40 px-6 py-3 text-sm font-semibold text-amber-200 transition-colors hover:bg-amber-300/10"
          >
            View Official Certificate ↗
          </a>
        </div>
      </div>
    </section>
  );
}
