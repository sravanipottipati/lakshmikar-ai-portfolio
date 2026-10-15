import MobileNavigation from "@/components/MobileNavigation";
import Image from "next/image";
import About from "@/components/About";
import Publications from "@/components/Publications";
import Recognition from "@/components/Recognition";
import Experience from "@/components/Experience";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      {/* Desktop navigation */}
      <header className="sticky top-0 z-50 mx-auto hidden max-w-7xl items-center justify-between border-b border-white/[0.08] bg-[#080b12]/85 px-6 py-5 shadow-[0_8px_35px_rgba(0,0,0,0.12)] backdrop-blur-2xl md:flex lg:px-12">
        <a href="#" className="text-xl font-bold tracking-tight">
          LR<span className="text-cyan-400">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-medium text-slate-400 md:flex">
          {[
            ["About", "#about"],
            ["Experience", "#experience"],
            ["Expertise", "#expertise"],
            ["Research & Publications", "#publications"],
            ["News & Recognition", "#recognition"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="transition-colors duration-200 hover:text-cyan-300"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:lakshmikarpolamreddy@gmail.com"
          className="rounded-full border border-slate-700 px-5 py-2 text-sm transition hover:border-cyan-400"
        >
          Get in touch ↗
        </a>
      </header>

      {/* Mobile navigation */}
      <MobileNavigation />

      {/* Hero */}
      <section
        id="home"
        className="relative isolate mx-auto max-w-7xl overflow-hidden px-6 pb-8 pt-8 sm:pb-12 sm:pt-14 lg:px-12 lg:pt-12"
      >
        

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="pointer-events-none absolute right-0 top-10 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div className="min-w-0">
          <div className="mb-7 inline-flex max-w-full items-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.06)] sm:text-xs">
            Medical Imaging AI · Computer Vision · Multimodal Learning
          </div>

          <p className="mb-4 text-lg text-slate-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[1.06] tracking-[-0.055em] text-white">
            Lakshmikar Reddy
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-500 bg-clip-text text-transparent">
              Polamreddy.
            </span>
          </h1>

          <div className="mt-6">
            <p className="mb-3 text-base font-semibold tracking-wide text-cyan-300 sm:text-lg">
              PhD in Computer Science and Mathematics
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">
              AI Research Scientist
            </h2>
            <p className="mt-2 text-base font-medium tracking-wide text-cyan-300 sm:text-lg">
              Computer Vision · Medical Imaging · Multimodal AI
            </p>
          </div>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Developing intelligent systems that see, reason, and generate.
            My research spans computer vision, multimodal AI, medical imaging,
            and generative models—connecting foundational research with
            real-world applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#publications"
              className="rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_8px_35px_rgba(34,211,238,0.18)] transition hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_12px_40px_rgba(34,211,238,0.25)] sm:text-base"
            >
              Explore My Research ↗
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-600 px-5 py-3 font-medium transition hover:border-white"
            >
              Connect With Me
            </a>
            <a
              href="/documents/Lakshmikar_Polamreddy_CV.pdf"
              download="Lakshmikar_Polamreddy_CV.pdf"
              className="rounded-full border border-cyan-400/50 px-5 py-3 font-medium text-cyan-300 transition hover:bg-cyan-400/10"
            >
              Download CV ↓
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[350px] lg:max-w-[350px] lg:translate-y-6">
      {/* Soft medical-AI glow behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-12 -z-10 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-violet-500/20 blur-[75px]"
      />
<div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-cyan-400/25 via-blue-500/15 to-violet-500/25 blur-[55px]"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-gradient-to-br from-cyan-300/20 via-slate-900 to-blue-500/20 p-2 shadow-[0_25px_100px_rgba(0,0,0,0.4),0_0_90px_rgba(34,211,238,0.14)] transition-transform duration-500 hover:scale-[1.015]">
            <Image
              src="/images/lakshmikar-profile.png"
              alt="Professional portrait of Lakshmikar Reddy Polamreddy"
              width={600}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 380px"
              className="aspect-[3/4] w-full rounded-2xl object-cover object-top"
            />
          </div>

          <div className="absolute -bottom-5 left-1/2 z-20 w-max max-w-[calc(100%-1rem)] -translate-x-1/2 rounded-2xl border border-cyan-300/25 bg-[#101c2b]/95 px-5 py-3 shadow-[0_15px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <div className="flex items-center justify-center gap-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]"
              />
              <span className="text-center text-xs font-semibold tracking-wide text-cyan-100 sm:text-sm">
                AI Researcher
              </span>
            </div>
          </div>
        </div>
        </div>

      </section>

      {/* About Me */}
      <About />
      <Experience />

      {/* Expertise */}
      <section
        id="expertise"
        className="relative mx-auto max-w-7xl px-6 py-12 sm:py-28 lg:px-12 lg:py-32"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Technical Foundation
        </p>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-[26px] font-semibold tracking-tight sm:text-[36px]">
            Areas of Expertise
          </h2>
          <p className="max-w-md leading-7 text-slate-400">
            Research expertise and engineering capabilities across
            modern computer vision and artificial intelligence.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          {[
            {
              number: "01",
              title: "Computer Vision & Medical AI",
              skills: [
                "Medical Imaging",
                "Image Segmentation",
                "3D Computer Vision",
                "CNNs",
                "Geometric Learning",
              ],
            },
            {
              number: "02",
              title: "Generative & Multimodal AI",
              skills: [
                "Diffusion Models",
                "GANs",
                "Mamba / State-Space Models",
                "Vision-Language Models",
                "LLMs, LoRA & RAG",
              ],
            },
            {
              number: "03",
              title: "Deep Learning & Frameworks",
              skills: [
                "PyTorch",
                "Transformers",
                "NumPy & Pandas",
                "Matplotlib & Seaborn",
                "Model Evaluation",
              ],
            },
            {
              number: "04",
              title: "Programming, Data & Platforms",
              skills: [
                "Python & SQL",
                "R",
                "Snowflake",
                "Streamlit",
                "Tableau",
                "ETL Pipelines",
                "Statistical Analysis",
                "Data Visualization",
              ],
            },
          ].map((group) => (
            <article
              key={group.title}
              className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#162338] via-[#111b2b] to-[#0c1421] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_24px_60px_rgba(6,182,212,0.07)] sm:p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                {group.number} / Expertise
              </span>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-2xl">
                {group.title}
              </h3>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors duration-200 group-hover:border-white/15 hover:!border-cyan-400/35 hover:!bg-cyan-400/[0.06] hover:!text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Publications */}
      <Publications />
      <Recognition />


      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-[#0c111c] via-[#0a101c] to-[#080b12] px-6 py-14 sm:py-16 lg:px-12 lg:py-20"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-[#18283f] via-[#101a2b] to-[#0b1321] px-6 py-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.25),0_0_80px_rgba(34,211,238,0.045)] sm:px-12 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Let&apos;s Connect
          </p>

          <h2 className="mx-auto mt-5 sm:mt-6 max-w-3xl text-[26px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[36px]">
            Let&apos;s build the future of
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              intelligent systems.
            </span>
          </h2>

          <p className="mx-auto mt-5 sm:mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Open to research collaborations and opportunities in
            AI research, applied science, and computer vision.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:lakshmikarpolamreddy@gmail.com"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Get in Touch ↗
            </a>

            <a
              href="/documents/Lakshmikar_Polamreddy_CV.pdf"
              download="Lakshmikar_Polamreddy_CV.pdf"
              className="rounded-full border border-white/20 px-7 py-3.5 font-medium text-white transition hover:border-cyan-400/50 hover:bg-white/5"
            >
              Download CV ↓
            </a>
          </div>

          <div className="mt-6 sm:mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/LakshmikarPolamreddy"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-400/25 bg-cyan-400/5 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/lakshmikar-reddy-polamreddy"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-400/25 bg-cyan-400/5 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://scholar.google.com/citations?user=NQun8LoAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-400/25 bg-cyan-400/5 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              Google Scholar ↗
            </a>
          </div>

          <p className="mt-6 sm:mt-9 break-all text-sm text-slate-400">
            lakshmikarpolamreddy@gmail.com
          </p>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] bg-[#080b12] px-6 py-6">
        <p className="mx-auto max-w-7xl text-center text-sm text-slate-500">
          © 2026 Lakshmikar Reddy Polamreddy. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
