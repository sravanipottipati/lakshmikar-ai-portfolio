export default function About() {
  const expertise = [
    "Computer Vision",
    "Multimodal AI",
    "Medical Image Analysis",
    "Generative AI & Diffusion Models",
    "3D Image Segmentation",
    "Deep Learning",
  ];

  return (
    <section id="about" className="border-t border-white/10 bg-[#0b1120] px-6 py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Advancing AI through
            <span className="block text-cyan-400">meaningful research.</span>
          </h2>
          <div className="mt-8 h-1 w-16 rounded-full bg-cyan-400" />
        </div>

        <div>
          <p className="text-lg leading-9 text-slate-300">
            I am a PhD researcher in Computer Science and Mathematics at
            Yeshiva University, specializing in computer vision, multimodal
            learning, and medical artificial intelligence.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-400">
            My research explores how visual understanding, language-guided
            reasoning, and geometric learning can be integrated to build
            more capable and reliable AI systems. My work spans medical
            image segmentation, generative modeling, diffusion models,
            and three-dimensional visual understanding.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-400">
            I am interested in translating fundamental research into
            impactful AI applications, with a focus on research scientist,
            applied scientist, and computer vision roles.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {expertise.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
