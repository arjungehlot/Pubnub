import React from "react";

/* ----------------------------------
   Types
----------------------------------- */
interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

/* ----------------------------------
   Top Feature Cards (image bottom)
----------------------------------- */
const topCards: FeatureCard[] = [
  {
    title: "Integrate with AI, Analytics & Business Systems",
    description:
      "Use PubNub Functions or third-party APIs to plug in bots, CRMs, analytics platforms, transcription, and translation tools.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Ffd23473fa0974f7cb69829bdcb081fd8?format=webp&width=2000",
  },
  {
    title: "Personalised, Context-Aware Chat",
    description:
      "Create dynamic, AI-native chat experiences with workflows that adapt based on user behavior and real-time context.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F3375d1c32463459aa97eb634085fedbe?format=webp&width=2000",
  },
  {
    title: "Infrastructure You Don’t Have to Think About",
    description:
      "No sharding, no message brokers, no server maintenance—just a globally distributed pub/sub network trusted by mission-critical apps.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fa518ba66cc6a4916a035bd2e2789be15?format=webp&width=2000",
  },
];

/* ----------------------------------
   Why PubNub Points
----------------------------------- */
const whyPoints = [
  {
    icon: "⚡",
    text: "Accelerate development with prebuilt SDKs, components, and integrations",
  },
  {
    icon: "📈",
    text: "Confidently scale from MVP to millions of concurrent users",
  },
  {
    icon: "🛡️",
    text: "Maintain control with built-in moderation, observability, and permissions",
  },
  {
    icon: "🧰",
    text: "Simplify operations with built-in security, moderation, and observability",
  },
  {
    icon: "📚",
    text: "Backed by demos, tutorials, and a proven track record powering chat at global scale",
  },
];

/* ----------------------------------
   Component
----------------------------------- */
const ScaleWithoutReEngineeringSection: React.FC = () => {
  return (
    <section className="w-full bg-[#001244] py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl  text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Scale Without Re-Engineering
          </h2>
          <p className="mt-6 text-lg text-blue-100">
            PubNub is built for scale, so you don’t have to re-architect when
            your user base grows or your requirements evolve.
          </p>
        </div>

        {/* Top Cards */}
        <div className="mb-28 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between rounded-3xl bg-white/10 p-6 backdrop-blur-md"
            >
              <div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-blue-100">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Why PubNub */}
        <div className="mb-28 rounded-3xl border border-white bg-white/5 p-10">
          <h3 className="mb-10 text-3xl font-semibold">Why PubNub?</h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {whyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg">
                  {point.icon}
                </div>
                <p className="text-sm text-blue-100">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="grid overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-center p-10">
            <h3 className="text-3xl font-semibold">Speak to an Expert</h3>
            <p className="mt-4 max-w-xl text-blue-100">
              Whether you build apps for digital healthcare, fintech, ecommerce,
              or the gaming industry, now’s the time to enhance your user
              experience with real-time chat. Connect with our experts to learn
              how you can build secure, scalable, and interactive chat
              experiences.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white hover:bg-red-700">
                Contact Sales
              </button>
              <button className="rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-64 lg:h-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F9187c27646c8459eb0a2aa9751d146ad?format=webp&width=2000"
              alt="Speak to an expert"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleWithoutReEngineeringSection;