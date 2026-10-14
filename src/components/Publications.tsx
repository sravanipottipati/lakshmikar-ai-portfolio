"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Publication = {
  title: string;
  venue: string;
  category: string;
  status: string;
  link?: string;
  code?: string;
  image?: string;
};

const publications: Publication[] = [
  {
    title: "CG-Reasoner: Centroid-Guided Positional Reasoning Segmentation for Medical Imaging with a Robust Visual-Text Consistency Metric",
    image: "/research/cg-reasoner-architecture.png",
    venue: "CVPR 2026",
    link: "https://openaccess.thecvf.com/content/CVPR2026/papers/Polamreddy_CG-Reasoner_Centroid-Guided_Positional_Reasoning_Segmentation_for_Medical_Imaging_with_a_CVPR_2026_paper.pdf",
    category: "Computer Vision",
    status: "Published",
  },
  {
    title: "The Deficit of New Information in Diffusion Models: A Focus on Diverse Samples",
    image: "/research/information-fusion-2025.jpg",
    venue: "Information Fusion 2025",
    link: "https://doi.org/10.1016/j.inffus.2025.103857",
    category: "Generative AI",
    status: "Published",
  },
  {
    title: "Confident Pseudo-Labeled Diffusion Augmentation for Canine Cardiomegaly Detection",
    image: "/research/wacv-canine-methodology.png",
    venue: "WACV 2025 Workshop",
    link: "https://openaccess.thecvf.com/content/WACV2025W/ImageQuality/papers/Zhang_Confident_Pseudo-labeled_Diffusion_Augmentation_for_Canine_Cardiomegaly_Detection_WACVW_2025_paper.pdf",
    category: "Medical AI",
    status: "Published",
  },
  {
    title: "MedNet and U²-ViT: A Nested Vision Transformer Diffusion Framework for Diverse Medical Images Generation",
    code: "https://github.com/LakshmikarPolamreddy/MedNet-U2-ViT",
    image: "/research/mednet-architecture.png",
    venue: "IEEE Healthcom 2026",
    category: "Diffusion Models",
    status: "Accepted",
  },
  {
    title: "WD-Mamba: A W-Mamba Diffusion Model for Enhancing Image Synthesis",
    image: "/research/wd-mamba-iconip-2026.jpeg",
    venue: "ICONIP 2026",
    category: "Generative AI",
    status: "Accepted",
  },
  {
    title: "Leapfrog Latent Consistency Model (LLCM) for Medical Images Generation",
    image: "/research/llcm-architecture.png",
    venue: "ACM/IEEE CHASE 2025",
    link: "https://www.computer.org/csdl/proceedings-article/chase/2025/153900a430/29j5RUxS97a",
    category: "Generative AI",
    status: "Published",
  },
  {
    title: "LaksNet: An End-to-End Deep Learning Model for Self-Driving Cars in Udacity Simulator",
    image: "/research/laksnet-workflow.png",
    venue: "Future Technologies Conference 2023",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-47448-4_1",
    category: "Computer Vision",
    status: "Published",
  },
];

const underReview: Publication[] = [
  {
    title: "MeshGuideSeg: 3D Mesh-Guided Geometry-aware Learning for Medical Image Segmentation via Attentive State-Space Modeling",
    venue: "ICASSP 2027",
    category: "3D Medical Image Segmentation",
    status: "Under Review",
  },
  {
    title: "3DMuseReasoner: 3D Multimodal Shape-Aware Reasoning Segmentation for Medical Images",
    image: "/research/3dmusereasoner-architecture.png",
    venue: "AAAI 2027",
    category: "Multimodal AI & Medical Imaging",
    status: "Under Review",
  },
];

export default function Publications() {
  const [preview, setPreview] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openPreview = (src: string, title: string) => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    setPreview({ src, title });
  };

  const closePreview = () => {
    setPreview(null);
    requestAnimationFrame(() => {
      previousFocusRef.current?.focus();
    });
  };

  useEffect(() => {
    if (!preview) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreview(null);
        requestAnimationFrame(() => {
          previousFocusRef.current?.focus();
        });
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [preview]);

  const published = publications.filter(
    (paper) => paper.status === "Published"
  );

  const accepted = publications.filter(
    (paper) => paper.status === "Accepted"
  );

  return (
    <section
      id="publications"
      className="relative overflow-hidden border-t border-white/10 bg-[#080b12] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Research Contributions
        </p>

        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Research & Publications
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Research in computer vision, multimodal learning,
          generative AI, and medical image analysis.
        </p>

        {/* Published papers */}
        <div className="mt-14">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-semibold text-white">
              Published Papers
            </h3>
            <span className="text-sm text-slate-400">
              {published.length} papers
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
            {published.map((paper, index) => (
              <article
                key={paper.title}
                className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-[#151f31] to-[#0d1420] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 ${index < 2 ? "xl:col-span-3" : "xl:col-span-2"}`}
              >
                <span className="text-xs font-semibold tracking-widest text-cyan-300/65">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {paper.image ? (
                  <div className={`mt-3 flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-slate-50 p-2 ${
                    "h-[220px]"
                  }`}>
                    <button
                      type="button"
                      onClick={() => openPreview(paper.image!, paper.title)}
                      aria-label={`Enlarge research figure for ${paper.title}`}
                      className="group/image relative h-full w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                    >
                      <Image
                        src={paper.image}
                        alt={`Research figure for ${paper.title}`}
                        width={900}
                        height={600}
                        className="h-full w-full object-contain"
                      />
                      <span className="absolute bottom-2 right-2 rounded-full bg-slate-900/85 p-2 text-white opacity-0 transition-opacity group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-4 w-4"
                        >
                          <circle cx="10.5" cy="10.5" r="6.5" />
                          <path d="M16 16l5 5M10.5 7v7M7 10.5h7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="mt-3 flex h-32 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <span className="text-xs text-slate-500">
                      Research figure coming soon
                    </span>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {paper.venue}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    Published
                  </span>
                </div>

                <h4 className="mt-4 text-base font-semibold leading-snug text-white transition-colors group-hover:text-cyan-100">
                  {paper.title}
                </h4>

                <p className="mt-3 text-sm text-slate-400">
                  {paper.category}
                </p>

                <div className="mt-auto pt-5">
                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
                    >
                      View Paper ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Accepted papers */}
        <div className="mt-16">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-semibold text-white">
              Accepted Papers
            </h3>
            <span className="text-sm text-slate-400">
              {accepted.length} papers
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {accepted.map((paper) => (
              <article
                key={paper.title}
                className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-[#151f31] to-[#0d1420] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35"
              >
                {paper.image ? (
                  <div className="flex h-36 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-slate-50 p-2">
                    <Image
                      src={paper.image}
                      alt={`Research figure for ${paper.title}`}
                      width={600}
                      height={400}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-36 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <span className="text-xs text-slate-500">
                      Research figure coming soon
                    </span>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {paper.venue}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    Accepted
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-semibold leading-snug text-white">
                  {paper.title}
                </h4>

                <p className="mt-3 text-sm text-slate-400">
                  {paper.category}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Papers under review */}
        <div className="mt-16">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-semibold text-white">
              Papers Under Review
            </h3>
            <span className="text-sm text-slate-400">
              {underReview.length} papers
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {underReview.map((paper) => (
              <article
                key={paper.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#151f31] to-[#0d1420] p-6 transition-all duration-300 hover:border-cyan-300/35"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {paper.venue}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    Under Review
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-semibold leading-snug text-white">
                  {paper.title}
                </h4>

                <p className="mt-3 text-sm text-slate-400">
                  {paper.category}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePreview();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Research figure: ${preview.title}`}
            className="flex max-h-[92vh] w-full max-w-6xl flex-col rounded-2xl border border-white/20 bg-[#101827] p-4 shadow-2xl sm:p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="max-w-4xl text-sm font-semibold leading-relaxed text-white sm:text-base">
                {preview.title}
              </h3>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closePreview}
                aria-label="Close research image preview"
                className="shrink-0 rounded-full border border-white/20 px-3 py-1 text-xl text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                ×
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto rounded-xl bg-white p-3">
              <Image
                src={preview.src}
                alt={`Full research figure for ${preview.title}`}
                width={1600}
                height={1600}
                className="mx-auto h-auto max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <p className="mt-3 text-center text-xs text-slate-400">
              Press Esc or click outside to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
