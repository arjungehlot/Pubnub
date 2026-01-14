import React, { useState } from "react";

/* ================= ICONS ================= */
const Check = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-green-600 text-green-600 text-sm font-bold">
    ✓
  </span>
);

const Cross = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-red-500 text-red-500 text-sm font-bold">
    ✕
  </span>
);

/* ================= TYPES ================= */
type Plan = "Standard" | "Gold" | "Platinum" | "Enterprise";
type FeatureValue = string | boolean | React.ReactNode;

interface Feature {
  label: string;
  info?: boolean;
  values: Record<Plan, FeatureValue>;
}

/* ================= PLANS ================= */
const mobilePlans: Plan[] = ["Standard", "Gold", "Platinum", "Enterprise"];

const desktopPlans = [
  { key: "standard", label: "Standard", cta: "Create an Account", primary: false },
  { key: "gold", label: "Gold", cta: "Contact Sales", primary: false },
  { key: "platinum", label: "Platinum", cta: "Contact Sales", primary: true },
  { key: "enterprise", label: "Enterprise", cta: "Contact Sales", primary: false },
];

/* ================= DATA (UNCHANGED) ================= */
const features: Feature[] = [
  {
    label: "Support availability",
    info: true,
    values: {
      Standard: "Reasonable Effort",
      Gold: "24/5",
      Platinum: "24/7",
      Enterprise: "24/7",
    },
  },
  {
    label: "Guaranteed response time",
    values: {
      Standard: "1–2 Days",
      Gold: "2 hours",
      Platinum: "1 hour",
      Enterprise: "30 mins",
    },
  },
  {
    label: "Support channel",
    values: {
      Standard: "Email & chat",
      Gold: "Standard + Video Call",
      Platinum: "Gold + Private Slack/Teams",
      Enterprise: "Platinum + Hotline",
    },
  },
  {
    label: "Health check & business review",
    values: {
      Standard: false,
      Gold: "Annual",
      Platinum: "Bi-Annual",
      Enterprise: "Quarterly",
    },
  },
  {
    label: "Custom origin setup",
    values: {
      Standard: false,
      Gold: false,
      Platinum: true,
      Enterprise: true,
    },
  },
  {
    label: "Dedicated live event monitoring",
    values: {
      Standard: false,
      Gold: false,
      Platinum: "Limited hours",
      Enterprise: true,
    },
  },
  {
    label: "Real-time operational dashboards",
    values: {
      Standard: false,
      Gold: false,
      Platinum: "1 Dashboard",
      Enterprise: "Unlimited Dashboards with Export Capability",
    },
  },
  {
    label: "Dedicated solution architect",
    values: {
      Standard: false,
      Gold: false,
      Platinum: true,
      Enterprise: true,
    },
  },
  {
    label: "Code review",
    values: {
      Standard: false,
      Gold: false,
      Platinum: true,
      Enterprise: true,
    },
  },
  {
    label: "Early product release access",
    values: {
      Standard: false,
      Gold: false,
      Platinum: true,
      Enterprise: true,
    },
  },
  {
    label: "Direct engineer access",
    values: {
      Standard: false,
      Gold: false,
      Platinum: false,
      Enterprise: true,
    },
  },
  {
    label: "Hosted customer certificates",
    values: {
      Standard: false,
      Gold: false,
      Platinum: false,
      Enterprise: true,
    },
  },
  {
    label: "Critical incident paging mechanism",
    values: {
      Standard: false,
      Gold: false,
      Platinum: false,
      Enterprise: true,
    },
  },
];

/* ================= COMPONENT ================= */
export default function SupportFeaturesComparison() {
  const [activePlan, setActivePlan] = useState<Plan>("Standard");

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <section className="hidden md:block bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Sticky Header */}
          <div className="sticky top-20 z-30 bg-white rounded-xl border shadow-sm mb-8">
            <div className="grid grid-cols-5 items-center px-6 py-6">
              <div className="font-semibold text-lg">Support Features</div>

              {desktopPlans.map((plan) => (
                <div key={plan.key} className="text-center">
                  <div className="font-semibold mb-3">{plan.label}</div>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                      plan.primary
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "border border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Header */}
          <div className="bg-slate-100 rounded-lg px-6 py-4 font-semibold text-lg mb-2">
            Features
          </div>

          {/* Rows */}
          <div className="divide-y bg-white rounded-xl overflow-hidden">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-5 px-6 py-5 text-sm hover:bg-slate-100 ${
                  idx % 2 === 1 ? "bg-slate-50" : ""
                }`}
              >
                <div className="font-medium">{feature.label}</div>

                {mobilePlans.map((plan, i) => {
                  const value = feature.values[plan];
                  return (
                    <div key={i} className="flex justify-center items-center">
                      {value === false ? <Cross /> : value === true ? <Check /> : value}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MOBILE ================= */}
      <section className="block md:hidden bg-white">
        {/* Sticky Plan Selector (navbar safe) */}
        <div className="sticky top-[74px] z-30 bg-white border-b">
          <div className="flex justify-between px-4 pt-4 text-sm font-medium">
            {mobilePlans.map((plan) => (
              <button
                key={plan}
                onClick={() => setActivePlan(plan)}
                className={`pb-2 ${
                  activePlan === plan
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-500"
                }`}
              >
                {plan}
              </button>
            ))}
          </div>
        </div>

        {/* Feature List */}
        <div className="px-4 py-6">
          <div className="bg-gray-50 rounded-xl p-4 mb-3 font-semibold">
            Features
          </div>

          <div className="bg-white rounded-xl border divide-y">
            {features.map((feature, i) => {
              const value = feature.values[activePlan];

              return (
                <div
                  key={i}
                  className="flex justify-between items-center px-4 py-4"
                >
                  <span className="font-medium text-sm">
                    {feature.label}
                    {feature.info && (
                      <span className="ml-1 text-gray-400">ⓘ</span>
                    )}
                  </span>

                  <span className="text-sm">
                    {value === false ? (
                      <Cross />
                    ) : value === true ? (
                      <Check />
                    ) : (
                      value
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
