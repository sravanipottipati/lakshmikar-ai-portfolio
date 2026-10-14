const publications = [
  {
    title: "CG-Reasoner: Centroid-Guided Positional Reasoning Segmentation for Medical Imaging with a Robust Visual-Text Consistency Metric",
    venue: "CVPR 2026",
    category: "Computer Vision",
    status: "Published",
  },
  {
    title: "The Deficit of New Information in Diffusion Models: A Focus on Diverse Samples",
    venue: "Information Fusion 2025",
    category: "Generative AI",
    status: "Published",
  },
  {
    title: "Confident Pseudo-Labeled Diffusion Augmentation for Canine Cardiomegaly Detection",
    venue: "WACV 2025",
    category: "Medical AI",
    status: "Published",
  },
  {
    title: "MedNet and U²-ViT: A Nested Vision Transformer Diffusion Framework for Diverse Medical Images Generation",
    venue: "IEEE Healthcom 2026",
    category: "Diffusion Models",
    status: "Accepted",
  },
  {
    title: "WD-Mamba: A W-Mamba Diffusion Model for Enhancing Image Synthesis",
    venue: "ICONIP 2026",
    category: "Generative AI",
    status: "Accepted",
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="border-t border-white/10 bg-[#080b12] px-6 py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Research Contributions
        </p>

        <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
          Selected Publications
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Research in computer vision, multimodal learning,
          generative AI, and medical image analysis.
        </p>

        <div className="mt-14 grid gap-5">
          {publications.map((paper, index) => (
            <article
              key={paper.title}
              className="group rounded-2xl border border-white/10 bg-[#111827] p-7 transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#152033]"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                <span className="text-sm text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-3">
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                      {paper.venue}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                      {paper.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-snug text-white transition-colors group-hover:text-cyan-300 sm:text-2xl">
                    {paper.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-400">
                    {paper.category}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden text-xl text-cyan-400 md:block"
                >
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
