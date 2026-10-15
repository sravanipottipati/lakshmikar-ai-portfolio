import Image from "next/image";
const companyLogos: Record<string, string> = {
  "Quantegy Analytics Inc.": "/logos/quantegy.svg",
  "Modali Consulting": "/logos/modali.png",
  "Cyient Ltd.": "/logos/cyient.svg",
  "Tech Mahindra": "/logos/tech-mahindra.png",
  "Infotech Enterprises IT Services Pvt Ltd": "/logos/infotech.svg",
  "Yeshiva University": "/logos/yeshiva-university.jpg",
};

const roles = [
  {
    type: "Industry Experience",
    items: [
      {
        role: "Data Scientist",
        organization: "Quantegy Analytics Inc.",
        period: "Jun–Aug 2025 · Jun–Aug 2026",
        location: "New York, NY",
        details: [
          "Built a correctional healthcare analytics product with 60+ interactive reports covering patient census, medications, laboratory services, chronic care, PPD screening, and staff productivity.",
          "Developed SIOP analytics for a global endurance sports organization, combining athlete-registration data and predictive forecasts for sales, event capacity, and inventory planning.",
          "Engineered data pipelines and interactive applications using Python, Pandas, SQL, Snowflake, and Streamlit.",
        ],
      },
      {
        role: "AI Intern",
        organization: "Modali Consulting",
        period: "Sep–Dec 2023",
        location: "New York, NY",
        details: [
          "Developed an LLM-powered plugin for dynamic form generation, integrating APIs and prompting with a Streamlit conversational interface.",
        ],
      },
      {
        role: "Technical Leader",
        organization: "Cyient Ltd.",
        period: "Feb 2014 – Jun 2022",
        location: "Hyderabad, India",
        details: [
          "Built Tableau dashboards for operational KPIs, including first-time-right, on-time delivery, and utilization; used Python for data preparation, exploratory analysis, and visualization.",
        ],
      },
      {
        role: "Senior Design Engineer",
        organization: "Tech Mahindra",
        period: "2011–2013",
        location: "India",
        details: [
          "Contributed to engineering design and technical delivery in cross-functional project environments.",
        ],
      },
      {
        role: "Senior Design Engineer",
        organization: "Infotech Enterprises IT Services Pvt Ltd",
        period: "Jun 2007 – Aug 2010",
        location: "Hyderabad, India",
        details: [
          "Worked on engineering design and technical project delivery.",
        ],
      },
    ],
  },
  {
    type: "Research & Teaching Experience",
    items: [
      {
        role: "Research Assistant",
        organization: "Yeshiva University",
        period: "Jan 2024 – Present",
        location: "New York, NY",
        details: [
          "Developed multimodal architectures for reasoning-guided 2D and 3D medical image segmentation, combining vision-language models, encoder–decoder networks, and geometric representations.",
          "Researched medical image synthesis using diffusion models, Transformers, and Mamba architectures; investigated information-theoretic limits of diffusion models and developed the MedNet dataset and a medical image generation framework.",
          "Introduced a positional reasoning score for evaluating spatial reasoning and visual–text consistency.",
        ],
      },
      {
        role: "Graduate Adjunct Instructor",
        organization: "Yeshiva University",
        period: "May–Jul 2025 · Jul–Aug 2026",
        location: "New York, NY",
        details: [
          "Delivered introductory statistics instruction covering probability, statistical inference, and hypothesis testing.",
          "Guided students through applied statistical analysis using R, RStudio, and Excel.",
        ],
      },
      {
        role: "Graduate Teaching Assistant",
        organization: "Yeshiva University",
        period: "Sep–Dec 2025 · Jan–May 2026",
        location: "New York, NY",
        details: [
          "Supported graduate-level Deep Learning and Neural Networks coursework and technical problem-solving.",
          "Assisted with experimental workflows, neural network evaluation, and interpretation of model results.",
        ],
      },
      {
        role: "Adjunct Faculty",
        organization: "Yeshiva University",
        period: "May–Aug 2024",
        location: "New York, NY",
        details: [
          "Mentored MS Artificial Intelligence students on VetMed GPT, generative image models, and retrieval-augmented generation (RAG) chatbots.",
          "Provided guidance on model benchmarking, experimental evaluation, and technical research writing.",
        ],
      },
    ],
  },
];

const education = [
  {
    degree: "PhD in Mathematics and Computer Science",
    institution: "Yeshiva University",
    period: "Jan 2024 – Present · Expected Dec 2026",
  },
  {
    degree: "MS in Artificial Intelligence",
    institution: "Yeshiva University",
    period: "Dec 2023",
  },
  {
    degree: "BTech in Mechanical Engineering",
    institution: "Sri Venkateswara University",
    period: "May 2007",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/[0.08] bg-[#0a101b] px-6 py-12 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Career & Academic Journey
        </p>
        <h2 className="mt-4 text-[26px] font-semibold tracking-tight text-white sm:text-[36px]">
          Experience that connects research and practice
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Industry delivery, academic research, and teaching across AI,
          medical imaging, data analytics, and engineering.
        </p>

        {roles.map((group) => (
          <div key={group.type} className="mt-10">
            <h3 className="mb-5 text-[22px] font-semibold tracking-tight text-white">
              {group.type}
            </h3>
            <div className={`grid gap-5 ${
                group.type === "Industry Experience"
                  ? "md:grid-cols-2 xl:grid-cols-6"
                  : "lg:grid-cols-2"
              }`}>
              {group.items.map((item) => (
                <article
                  key={`${item.role}-${item.organization}`}
                  className={`rounded-2xl border border-white/10 bg-gradient-to-br from-[#121d2d] to-[#0c1420] shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)] ${
                    group.type === "Industry Experience" &&
                    group.items.indexOf(item) < 2
                      ? "p-4 sm:p-5"
                      : "p-5 sm:p-6"
                  } ${
                    group.type === "Industry Experience"
                      ? group.items.indexOf(item) < 2
                        ? "xl:col-span-3"
                        : "xl:col-span-2"
                      : ""
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    {item.period}
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-white">
                    {item.role}
                  </h4>
                  <div className="mt-3 flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.08] p-1 text-lg font-bold text-cyan-300"
                    >
                      {companyLogos[item.organization] ? (
                         <Image
                           src={companyLogos[item.organization]}
                           alt={`${item.organization} logo`}
                           width={44}
                           height={44}
                           className="h-full w-full object-contain"
                         />
                       ) : (
                         item.organization.charAt(0)
                       )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-200">
                        {item.organization}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <ul className={
                      group.type === "Industry Experience" &&
                      group.items.indexOf(item) < 2
                        ? "mt-4 space-y-2"
                        : "mt-5 space-y-3"
                    }>
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className={`flex gap-3 text-sm text-slate-400 ${
                          group.type === "Industry Experience" &&
                          group.items.indexOf(item) < 2
                            ? "leading-6"
                            : "leading-7"
                        }`}
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-[22px] font-semibold tracking-tight text-white">Education</h3>
            <div className="mt-5 space-y-3">
              {education.map((item) => (
                <article
                  key={item.degree}
                  className="rounded-xl border border-white/15 bg-[#141e2d] p-5 transition-colors hover:border-cyan-400/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.06]">
                      {item.institution === "Yeshiva University" ? (
                        <Image
                          src="/logos/yeshiva-university.jpg"
                          alt="Yeshiva University logo"
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <Image
                          src="/logos/sv-university-emblem.png"
                          alt="Sri Venkateswara University logo"
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-semibold text-white">
                        {item.degree}
                      </h4>
                      <p className="mt-2 text-sm font-medium text-slate-300">
                        {item.institution}
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        {item.period}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-[22px] font-semibold tracking-tight text-white">
                Certifications & Recognition
              </h3>
              <div className="mt-5 space-y-3">
                {[
                  "AWS Certified Cloud Practitioner",
                  "Advanced Certificate Programme in Data Science — IIIT Bangalore",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/15 bg-[#141e2d] p-5 transition-colors hover:border-cyan-400/30"
                  >
                    <p className="text-base font-medium leading-7 text-slate-100">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold tracking-tight text-white">
                Academic Service
              </h3>
              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-sm leading-7 text-slate-300">
                  Peer reviewer for NeurIPS, ICLR, BMVC, IEEE Healthcom,
                  ICASSP, and Knowledge-Based Systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
