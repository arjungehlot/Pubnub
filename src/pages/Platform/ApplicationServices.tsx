import React from "react";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    title: "Presence",
    description:
      "Track user and device activity in real time, with instant awareness of who’s online, offline, or active in a specific channel. Build richer experiences like live participant counters, activity indicators, or dynamic matchmaking with just a few lines of code.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F15c8c1899b41420eb725706ebf12a853?format=webp&width=2000",
  },
  {
    title: "App Context",
    description:
      "Store and access user or app metadata in a flexible, always-available data layer. This allows you to enrich message processing, personalize interactions, and drive intelligent automation across your application.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fcb25403276594aaea31f535e0546cd04?format=webp&width=2000",
  },
  {
    title: "BizOps Workspace",
    description:
      "Get a full suite of admin tools to monitor, configure, and moderate users, channels, and interactions in real time. Easily tune live services like presence and content controls—without needing to redeploy or write additional backend code.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fbcc7895f56064d0eaddf84a8d99c4b16?format=webp&width=2000",
  },
  {
    title: "Functions",
    description:
      "Run custom logic at the edge to process, route, filter, or transform messages as they move through the network. Build event-driven features like moderation, sentiment analysis, and real-time alerts without scaling backend infrastructure.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fcd29055b554c4590a96fbfacc70e0c25?format=webp&width=2000",
  },
  {
    title: "PubNub Chat",
    description:
      "Launch rich, scalable chat experiences with prebuilt SDKs and UI kits for web, mobile, and gaming apps—complete with typing indicators, reactions, moderation, and AI-powered content filtering.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F9c77eb634a6b4fa990bb99f6b67bf323?format=webp&width=2000",
  },
  {
    title: "File Sharing",
    description:
      "Share large files like images, videos, documents, or firmware updates in real time between users or devices. Ideal for social, enterprise, and IoT use cases where seamless data delivery is a core part of the experience.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F65e4a6e8f8cc495eb43aa36387a0acb0?format=webp&width=2000",
  },
];

const ApplicationServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#ffff] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Applications Services
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            Build smarter, more interactive apps with real-time context,
            control, and communication tools.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col rounded-2xl bg-white p-5 sm:p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Image */}
              <div className="mt-6 flex flex-1 items-end justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-h-32 sm:max-h-36 md:max-h-44 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApplicationServicesSection;
