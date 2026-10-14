const publications = [
  {
    title: "CG-Reasoner: Centroid-Guided Positional Reasoning Segmentation for Medical Imaging with a Robust Visual-Text Consistency Metric",
    venue: "CVPR 2026",
    link: "https://openaccess.thecvf.com/content/CVPR2026/papers/Polamreddy_CG-Reasoner_Centroid-Guided_Positional_Reasoning_Segmentation_for_Medical_Imaging_with_a_CVPR_2026_paper.pdf",
    category: "Computer Vision",
    status: "Published",
  },
  {
    title: "The Deficit of New Information in Diffusion Models: A Focus on Diverse Samples",
    venue: "Information Fusion 2026",
    link: "https://doi.org/10.1016/j.inffus.2025.103857",
    category: "Generative AI",
    status: "Published",
  },
  {
    title: "Confident Pseudo-Labeled Diffusion Augmentation for Canine Cardiomegaly Detection",
    venue: "WACV 2025 Workshop",
    link: "https://openaccess.thecvf.com/content/WACV2025W/ImageQuality/papers/Zhang_Confident_Pseudo-labeled_Diffusion_Augmentation_for_Canine_Cardiomegaly_Detection_WACVW_2025_paper.pdf",
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
  {
    title: "Leapfrog Latent Consistency Model (LLCM) for Medical Images Generation",
    venue: "ACM/IEEE CHASE 2025",
    link: "https://www.computer.org/csdl/proceedings-article/chase/2025/153900a430/29j5RUxS97a",
    category: "Generative AI",
    status: "Published",
  },
  {
    title: "LaksNet: An End-to-End Deep Learning Model for Self-Driving Cars in Udacity Simulator",
    venue: "Future Technologies Conference 2023",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-47448-4_1",
    category: "Computer Vision",
    status: "Published",
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="relative overflow-hidden border-t border-white/10 bg-[#080b12] px-6 py-28 lg:px-12"
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

        <div className="mt-14 grid gap-4">
          {publications.map((paper, index) => (
            <article
              key={paper.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-[#151f31] via-[#111a2a] to-[#0d1420] p-7 shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:shadow-[0_20px_55px_rgba(6,182,212,0.07)] sm:p-9"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-7">
                <span className="text-sm font-semibold tabular-nums tracking-widest text-cyan-300/65">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-3">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-cyan-300">
                      {paper.venue}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                      {paper.status}
                    </span>
                  </div>

                  <h3 className="max-w-4xl text-xl font-semibold leading-snug tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-[1.45rem]">
                    {paper.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-400">
                    {paper.category}
                  </p>

                  {"link" in paper && paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
                    >
                      View Paper ↗
                    </a>
                  )}
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
