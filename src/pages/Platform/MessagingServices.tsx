import React from "react";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    title: "In App Messaging",
    description:
      "Deliver real-time updates across devices and servers in under 100ms using a pub/sub model built for scale. Perfect for sending messages, signals, or notifications where speed and responsiveness are mission-critical.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F97bafd91215142e99211cc112ce3f528?format=webp&width=2000",
  },
  {
    title: "Mobile Push Notifications",
    description:
      "Ensure critical communications always reach users—even when they’re offline—with built-in push fallback to Apple and Android devices via FCM and APNS. Automatically switch from in-app delivery to native push for seamless reliability.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Ff4e487598fe043a39e9b1e2b12b8bdee?format=webp&width=2000",
  },
  {
    title: "Event Hub",
    description:
      "Streamline integrations with an Event Hub that filters, processes, and triggers actions from user or device events—directly to your backend or analytics stack. Ideal for powering event-driven workflows and automation in real time.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fc0cb335e93014219b2e70cf803409eb5?format=webp&width=2000",
  },
];

const MessagingServices: React.FC = () => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Messaging Services
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70">
            Power real-time, event-driven experiences with messaging tools built
            for scale, speed, and seamless integration.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col overflow-hidden rounded-2xl bg-[#1a2956] backdrop-blur-md border border-white/10"
            >
              {/* Content */}
              <div className="p-6 md:p-8 flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
              </div>

              {/* Bottom Image */}
              <div className="relative h-48 w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B2C]/80 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessagingServices;