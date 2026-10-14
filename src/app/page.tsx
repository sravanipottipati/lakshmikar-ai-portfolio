import About from "@/components/About";
import Publications from "@/components/Publications";


const research = [
  {
    title: "CG-Reasoner",
    category: "Computer Vision · Multimodal AI",
    description:
      "Centroid-guided positional reasoning for medical image segmentation, with a visual-text consistency metric.",
    venue: "CVPR 2026",
    number: "01",
  },
  {
    title: "MedNet & U²-ViT",
    category: "Generative AI · Diffusion Models",
    description:
      "A nested Vision Transformer diffusion framework for diverse medical image generation.",
    venue: "IEEE Healthcom 2026",
    number: "02",
  },
  {
    title: "3DMuseReasoner",
    category: "3D Vision · Vision-Language Models",
    description:
      "Multimodal shape-aware reasoning segmentation combining volumetric vision and geometric learning.",
    venue: "Research Project",
    number: "03",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 bg-[#080b12]/90 px-6 py-5 backdrop-blur-xl lg:px-12">
        <a href="#" className="text-xl font-bold tracking-tight">
          LR<span className="text-cyan-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#research" className="hover:text-white">Research</a>
          <a href="#expertise" className="hover:text-white">Expertise</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <a
          href="mailto:lakshmikarpolamreddy@gmail.com"
          className="rounded-full border border-slate-700 px-5 py-2 text-sm transition hover:border-cyan-400"
        >
          Get in touch ↗
        </a>
      </header>

      {/* Hero */}
      <section
        id="about"
        className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-28 pt-24 lg:px-12 lg:pt-36"
      >
        <div className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="min-w-0">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium tracking-widest text-cyan-300 uppercase">
            AI Research · Computer Vision · Multimodal Learning
          </div>

          <p className="mb-5 text-lg text-slate-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
            Lakshmikar Reddy
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-500 bg-clip-text text-transparent">
              Polamreddy.
            </span>
          </h1>

          <h2 className="mt-9 text-xl font-medium text-slate-200 sm:text-2xl">
            AI Research Scientist
            <span className="text-cyan-400"> · </span>
            Computer Vision · Multimodal AI
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Advancing intelligent systems through computer vision,
            multimodal reasoning, generative models, and deep learning.
            Bridging fundamental AI research with real-world engineering
            and impactful applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#research"
              className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
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

        <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-900 p-2 shadow-[0_0_60px_rgba(34,211,238,0.12)]">
          <img src="/images/lakshmikar-profile.png" alt="Professional portrait of Lakshmikar Reddy Polamreddy" className="aspect-[3/4] w-full rounded-2xl object-cover object-top" />
        </div>
        </div>

        <div className="relative z-10 mt-24 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          {[
            ["CVPR 2026", "Published Research"],
            ["PhD", "Mathematics & Computer Science"],
            ["AI + Industry", "Research & Applied Engineering"],
          ].map(([value, label]) => (
            <div key={value}>
              <p className="text-2xl font-semibold text-white">{value}</p>
              <p className="mt-2 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Me */}
      <About />

      {/* Research */}
      <section
        id="research"
        className="border-t border-white/10 bg-[#0c111c] px-6 py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
            Selected Work
          </p>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Research & Innovation
            </h2>
            <p className="max-w-md text-slate-400">
              Exploring the intersection of visual intelligence,
              multimodal reasoning, and generative learning.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {research.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-[#111827] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {project.number} / Research
                  </span>
                  <span className="text-cyan-400">↗</span>
                </div>

                {project.title === "CG-Reasoner" || project.title === "MedNet & U²-ViT" || project.title === "3DMuseReasoner" ? (
                  <div className="my-9 flex h-40 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/10 bg-white p-2">
                    <img
                      src={project.title === "CG-Reasoner" ? "/research/cg-reasoner-architecture.png" : project.title === "MedNet & U²-ViT" ? "/research/mednet-architecture.png" : "/research/3dmusereasoner-architecture.png"}
                      alt={`${project.title} model architecture`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                <div className="my-9 flex h-40 items-center justify-center rounded-xl border border-cyan-400/10 bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950">
                  <div className="h-24 w-24 rounded-full border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_65px_rgba(34,211,238,0.18)]" />
                </div>
                )}

                <p className="text-xs font-medium tracking-wider text-cyan-400 uppercase">
                  {project.category}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-4 min-h-24 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-300">
                  {project.venue}
                  {project.title === "MedNet & U²-ViT" && (
                    <a
                      href="https://github.com/LakshmikarPolamreddy/MedNet-U2-ViT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block font-medium text-cyan-400 hover:text-cyan-300"
                    >
                      View Code ↗
                    </a>
                  )}
                  {project.title === "CG-Reasoner" && (
                    <a
                      href="/research/cg-reasoner-paper.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block font-medium text-cyan-400 hover:text-cyan-300"
                    >
                      View Paper ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section
        id="expertise"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-12"
      >
        <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
          Technical Foundation
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Areas of Expertise
        </h2>

        <div className="mt-12 flex flex-wrap gap-3">
          {[
            "Computer Vision",
            "Deep Learning",
            "Multimodal AI",
            "Vision-Language Models",
            "Diffusion Models",
            "Transformers",
            "PyTorch",
            "3D Image Segmentation",
            "Generative AI",
            "Python",
            "LLMs",
            "Data Science",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Publications */}
      <Publications />


      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#0c111c] px-6 py-24 text-center"
      >
        <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
          Let's Connect
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Building the next generation of intelligent systems.
        </h2>
        <p className="mt-6 text-slate-400">
          Open to conversations about AI research, engineering,
          and collaboration.
        </p>
        <a
          href="mailto:lakshmikarpolamreddy@gmail.com"
          className="mt-9 inline-block rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Start a Conversation ↗
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Lakshmikar Reddy Polamreddy. All rights reserved.
      </footer>
    </main>
  );
}
