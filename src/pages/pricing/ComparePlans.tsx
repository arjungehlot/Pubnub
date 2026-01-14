import React, { useState } from "react";

/* ================= ICONS ================= */
const Check = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-green-600 text-green-600">
    ✓
  </span>
);

const Cross = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-red-500 text-red-500">
    ✕
  </span>
);

const Trial = () => (
  <span className="text-xs font-medium text-slate-600">Trial</span>
);

/* ================= TYPES ================= */
type PlanKey = "free" | "starter" | "pro";
type Cell = React.ReactNode;

interface Plan {
  key: PlanKey;
  label: string;
  cta: string;
  style: "border" | "primary";
}

interface Row {
  label: string;
  description?: string;
  link?: string;
  free: Cell;
  starter: Cell;
  pro: Cell;
  highlight?: boolean;
}

interface SectionData {
  title: string;
  rows: Row[];
}

/* ================= PLANS ================= */
const plans: Plan[] = [
  { key: "free", label: "Free", cta: "Create an Account", style: "border" },
  { key: "starter", label: "Starter", cta: "Start Free Trial", style: "primary" },
  { key: "pro", label: "Pro", cta: "Contact Sales", style: "border" },
];

/* ================= DATA (UNCHANGED) ================= */
const sections: SectionData[] = [
  {
    title: "Scale & Performance",
    rows: [
      { label: "99.999% SLA", free: <Cross />, starter: <Cross />, pro: <Check /> },
      { label: "Advanced Network Tuning", free: <Cross />, starter: <Cross />, pro: <Check /> },
      {
        label: "<100ms latency worldwide",
        free: <Cross />,
        starter: <Check />,
        pro: <Check />,
        highlight: true,
      },
      { label: "Unlimited concurrent users", free: <Check />, starter: <Check />, pro: <Check /> },
      { label: "Unlimited channels", free: <Check />, starter: <Check />, pro: <Check /> },
      { label: "Unlimited devices", free: <Check />, starter: <Check />, pro: <Check /> },
      {
        label: "Data Retention",
        free: "Up to 7 days and up to 1 GB",
        starter: "Up to 6 months",
        pro: "Unlimited",
      },
    ],
  },
  {
    title: "Security & Compliance",
    rows: [
      { label: "SAML SSO", free: <Cross />, starter: <Cross />, pro: <Check /> },
      { label: "Custom Domain", free: <Cross />, starter: <Cross />, pro: <Check /> },
      {
        label: "BAA signed for HIPAA Compliance",
        free: <Cross />,
        starter: <Cross />,
        pro: <Check />,
      },
      {
        label: "Network Access Control",
        free: <Cross />,
        starter: <Check />,
        pro: <Check />,
        highlight: true,
      },
      { label: "Encryption", free: <Check />, starter: <Check />, pro: <Check /> },
      { label: "Unlimited devices", free: <Check />, starter: <Check />, pro: <Check /> },
    ],
  },
  {
    title: "Real-Time Features",
    rows: [
      { label: "Pub/Sub Network", free: <Check />, starter: <Check />, pro: <Check /> },
      { label: "Message Reactions", free: <Check />, starter: <Check />, pro: <Check /> },
      {
        label: "Message Persistence",
        free: <Check />,
        starter: <Check />,
        pro: <Check />,
        highlight: true,
      },
      { label: "Message Filtering", free: <Check />, starter: <Check />, pro: <Check /> },
      { label: "Channels", free: <Check />, starter: <Check />, pro: <Check /> },
      { label: "Functions", free: <Check />, starter: <Check />, pro: <Check /> },
      { label: "Presence", free: <Check />, starter: <Check />, pro: <Check /> },
      { label: "Mobile Push Notifications", free: <Check />, starter: <Check />, pro: <Check /> },
      { label: "App Context", free: <Check />, starter: <Check />, pro: <Check /> },
      { label: "Access Manager", free: <Check />, starter: <Check />, pro: <Check /> },
      { label: "File Sharing", free: <Check />, starter: <Check />, pro: <Check /> },
    ],
  },
  {
    title: "Premium Add-ons",
    rows: [
      {
        label: "Events & Actions",
        description:
          "Manage events and send real-time data to third-party systems for storage, analytics, or AI without writing code.",
        link: "Learn more",
        free: <Trial />,
        starter: <Check />,
        pro: <Check />,
      },
      {
        label: "Illuminate",
        description:
          "Real-time decisioning and analytics customizable to your unique use case.",
        link: "Learn more",
        free: <Trial />,
        starter: <Check />,
        pro: (
          <div className="flex flex-col items-center gap-1">
            <Check />
            <span className="text-xs text-slate-600">Included</span>
          </div>
        ),
      },
    ],
  },
];

/* ================= COMPONENT ================= */
export default function ComparePlans() {
  const [activePlan, setActivePlan] = useState<PlanKey>("free");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(sections.map((s) => [s.title, true]))
  );

  const toggleSection = (title: string) =>
    setOpenSections((p) => ({ ...p, [title]: !p[title] }));

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <section className="hidden md:block bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold mb-12">
            Compare Plans & Features
          </h2>

          <div className="sticky top-20 z-30 bg-white border-b">
            <div className="grid grid-cols-4 px-6 py-4 items-center">
              <div className="font-semibold">Feature by</div>
              {plans.map((p) => (
                <div key={p.key} className="text-center">
                  <div className="font-semibold mb-2">{p.label}</div>
                  <button
                    className={`px-4 py-2 rounded-md text-sm ${
                      p.style === "primary"
                        ? "bg-red-600 text-white"
                        : "border"
                    }`}
                  >
                    {p.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="mt-10">
              <div className="sticky top-[180px] z-20 bg-slate-50 border rounded-lg">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center gap-2 px-6 py-3 font-semibold"
                >
                  <span
                    className={`transition-transform ${
                      openSections[section.title] ? "rotate-180" : ""
                    }`}
                  >
                    ▴
                  </span>
                  {section.title}
                </button>
              </div>

              {openSections[section.title] && (
                <div className="divide-y">
                  {section.rows.map((row) => (
                    <div
                      key={row.label}
                      className={`grid grid-cols-4 px-6 py-4 text-sm ${
                        row.highlight ? "bg-slate-50" : ""
                      }`}
                    >
                      <div>
                        <div className="font-semibold">{row.label}</div>
                        {row.description && (
                          <p className="text-xs text-slate-600 mt-1">
                            {row.description}
                          </p>
                        )}
                        {row.link && (
                          <a className="text-xs text-blue-600 underline">
                            {row.link}
                          </a>
                        )}
                      </div>
                      <div className="flex justify-center">{row.free}</div>
                      <div className="flex justify-center">{row.starter}</div>
                      <div className="flex justify-center">{row.pro}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= MOBILE ================= */}
      <section className="block md:hidden bg-white">
        {/* Sticky selector (offset for navbar) */}
        <div className="sticky top-[74px] z-30 px-8 bg-white border-b">
          <div className="flex justify-between px-4 pt-4 text-sm font-medium">
            {plans.map((p) => (
              <button
                key={p.key}
                onClick={() => setActivePlan(p.key)}
                className={`pb-2 ${
                  activePlan === p.key
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-500"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="px-4 py-3">
            {plans.map(
              (p) =>
                p.key === activePlan && (
                  <button
                    key={p.key}
                    className={`w-full py-2 rounded-md text-sm font-medium ${
                      p.style === "primary"
                        ? "bg-red-600 text-white"
                        : "border"
                    }`}
                  >
                    {p.cta}
                  </button>
                )
            )}
          </div>
        </div>

        {/* Sections */}
        <div className="px-4 py-6 space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3 font-semibold"
              >
                {section.title}
                <span
                  className={`transition-transform ${
                    openSections[section.title] ? "rotate-180" : ""
                  }`}
                >
                  ▴
                </span>
              </button>

              {openSections[section.title] && (
                <div className="mt-3 bg-white border rounded-xl divide-y">
                  {section.rows.map((row) => {
                    const value =
                      activePlan === "free"
                        ? row.free
                        : activePlan === "starter"
                        ? row.starter
                        : row.pro;

                    return (
                      <div
                        key={row.label}
                        className="flex justify-between gap-4 px-4 py-4"
                      >
                        <div className="max-w-[70%]">
                          <div className="font-medium text-sm">
                            {row.label}
                          </div>
                          {row.description && (
                            <p className="text-xs text-gray-500 mt-1">
                              {row.description}
                            </p>
                          )}
                          {row.link && (
                            <a className="text-xs text-blue-600 underline">
                              {row.link}
                            </a>
                          )}
                        </div>
                        <div className="text-sm">{value}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
