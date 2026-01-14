import React from "react";

/* ----------------------------------
   Developer Cards Data
----------------------------------- */
interface DeveloperCard {
  title: string;
  description: string;
  icon: string;
}

const developerCards: DeveloperCard[] = [
  {
    title: "Documentation",
    description:
      "Get started quickly with PubNub’s SDKs, APIs and 3rd party integrations",
    icon: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fac7f5be4145c4c5b93f8ff0a1039a7ec?width=200",
  },
  {
    title: "Live Code Tour",
    description:
      "Explore PubNub's core features in our interactive live coding tour",
    icon: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F5bf57c8e88884497913c2d318ecf4f24?width=200",
  },
  {
    title: "Tutorials",
    description:
      "Start building chat, geolocation, IOT solutions, and more with PubNub by exploring our step-by-step tutorials",
    icon: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F865719c39dc2444d9700259556d29f49?width=200",
  },
  {
    title: "Blog",
    description:
      "Understand key concepts to architect and build your application with PubNub",
    icon: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F786e5017823a4b3a84748058cecbf440?width=200",
  },
  {
    title: "Demos",
    description: "Working demos and sample code of data streams in action.",
    icon: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1e786911052942a68f85e76c09590b4d?width=200",
  },
];

const PubNubForDevelopersSection: React.FC = () => {
  return (
    <>
      {/* ================= Developers Section ================= */}
      <section className="w-full bg-[#f7f9fb] md:mb-20 py-6 sm:py-16 lg:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <h2 className="mb-12 sm:mb-16 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            PubNub for Developers
          </h2>

          {/* Developer Cards */}
          <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {developerCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-white p-6 sm:p-8 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="mb-5 h-16 w-16 sm:h-20 sm:w-20 object-contain"
                />

                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Contact Sales CTA ================= */}
      <section className="mb-16 sm:mb-20">
        <div
          className="
            mx-auto max-w-7xl overflow-hidden rounded-3xl
            border border-blue-200 bg-white
            grid grid-cols-1 lg:grid-cols-2
          "
        >
          {/* Left */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Contact sales
            </h3>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-600">
              Start building real-time experiences today. Try PubNub for free or
              contact sales to get started.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white hover:bg-red-700 transition">
                Contact Sales
              </button>

              <button className="rounded-md border border-blue-300 px-6 py-3 text-sm font-medium text-blue-700 hover:bg-blue-50 transition">
                Try for Free
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-56 sm:h-64 lg:h-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F99af7ff7f3844ddeac17d0d1b021cfcd?format=webp&width=2000"
              alt="Contact sales"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PubNubForDevelopersSection;
