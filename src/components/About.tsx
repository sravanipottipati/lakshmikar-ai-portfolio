export default function About() {
  const expertise = [
    "Computer Vision",
    "Medical Imaging",
    "Multimodal AI",
    "Medical Image Segmentation",
    "Generative AI",
    "Diffusion Models",
    "Mamba / State-Space Models",
    "Vision-Language Models",
    "LLMs & RAG",
    "Geometric Learning",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-[#0b1120] via-[#0a101d] to-[#080b12] px-6 py-12 sm:py-24 lg:px-12 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl">
              Research that connects
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                intelligence and impact.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">
              Working at the intersection of visual intelligence,
              multimodal reasoning, and generative learning.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-[#17253a] via-[#121d2e] to-[#0d1522] p-6 shadow-[0_24px_65px_rgba(0,0,0,0.20)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Academic Background
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m2 9 10-5 10 5-10 5-10-5Z" />
                    <path d="M6 11v5c3.5 3 8.5 3 12 0v-5" />
                    <path d="M22 9v7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  AI Researcher
                </h3>
              </div>
              <p className="mt-2 text-slate-300">
                PhD in Computer Science and Mathematics
              </p>
              <div className="my-5 h-px bg-white/10" />
              <p className="text-sm font-medium text-cyan-100">
                Yeshiva University
              </p>
            </div>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
              I am a PhD researcher in Computer Science and Mathematics
              at Yeshiva University, specializing in computer vision,
              multimodal learning, and medical artificial intelligence.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-400">
              My research investigates how visual understanding,
              language-guided reasoning, and geometric learning can be
              integrated to develop more capable and reliable AI systems.
              My work spans medical image segmentation, generative
              modeling, diffusion models, and three-dimensional vision.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-400">
              I am passionate about translating fundamental research
              into practical AI applications and contributing to
              research scientist, applied scientist, and computer
              vision engineering teams.
            </p>

            <div className="mt-8 border-t border-white/[0.08] pt-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Research Specializations
              </p>

              <div className="flex flex-wrap gap-2.5">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
