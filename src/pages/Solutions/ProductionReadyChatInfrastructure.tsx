import React from "react";

/* ----------------------------------
   Card Data Types
----------------------------------- */
type ImagePosition = "top" | "bottom";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  imagePosition: ImagePosition;
}

/* ----------------------------------
   Cards Data (ORDER MATCHES UI)
----------------------------------- */
const featureCards: FeatureCard[] = [
  {
    title: "Simple APIs, SDKs & Quickstarts",
    description:
      "Build your MVP fast with simple SDKs for JavaScript, Kotlin, Swift, Unity, and more. Our Quickstarts help you validate ideas and iterate in minutes.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F0dcfa0c5260b4a16b62a4d789b079a70?format=webp&width=2000",
    imagePosition: "bottom",
  },
  {
    title: "Live Chat Building Blocks",
    description:
      "Leverage production-ready features, typing indicators, presence, message history, read receipts, reactions, and threads, which are all available out of the box in our SDKs.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F5538417d48ab4b76a1806d3c27618642?format=webp&width=2000",
    imagePosition: "bottom",
  },
  {
    title: "Push Notifications",
    description:
      "A straightforward push system with support for FCM, APNs, and fallback delivery—built to handle the majority of use cases without added complexity.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fd13f111470b240e4afaaefd0a6d07799?format=webp&width=2000",
    imagePosition: "bottom",
  },
//   {
//     title: "Moderation & Role-Based Permissions",
//     description:
//       "Enforce chat policies with profanity filtering, user bans, message deletion, fine-grained access control, and security features built for compliance and user safety.",
//     image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fb6ace92572a544c6866ae36e1b00b999?format=webp&width=2000",
//     imagePosition: "top",
//   },
//   {
//     title: "Real-Time Channel Monitoring",
//     description:
//       "Inspect live message flow, monitor user activity, and debug issues in real time to stay ahead of disruptions.",
//     image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Ff8633b0902294dc6b077a0f901110335?format=webp&width=2000",
//     imagePosition: "top",
//   },
//   {
//     title: "Presence & Typing Indicators",
//     description:
//       "Drive real-time engagement with online status, session tracking, and typing events—all without extra engineering effort.",
//     image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1cd2afb7400f483eb543e627876f5767?format=webp&width=2000",
//     imagePosition: "top",
//   },
];

/* ----------------------------------
   Feature Card Component
----------------------------------- */
const FeatureCard: React.FC<FeatureCard> = ({
  title,
  description,
  image,
  imagePosition,
}) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl bg-white/10 p-6 backdrop-blur-md">
      {imagePosition === "top" && (
        <div className="mb-6 overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full object-cover"
          />
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-blue-100">
          {description}
        </p>
      </div>

      {imagePosition === "bottom" && (
        <div className="mt-6 overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

/* ----------------------------------
   Main Section
----------------------------------- */
const ProductionReadyChatInfrastructureSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#001244] pt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-3xl lg:text-4xl">
            Launch Faster with Production-Ready Chat Infrastructure
          </h2>
          <p className="mt-6 text-lg text-blue-100">
            Skip the boilerplate and build fast, reliable chat with a backend
            that lets you focus on core functionality.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionReadyChatInfrastructureSection;