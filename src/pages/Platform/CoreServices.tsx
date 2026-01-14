import ApplicationServicesSection from "./ApplicationServices";
import MessagingServices from "./MessagingServices";
import MultiLanguagePlatformSection from "./Multilanguageplatform";
import ContactUsSection from "./ContactUsSection";

const CoreServices = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#020c3a] via-[#03124f] to-[#020c3a] overflow-hidden">
      
      {/* ================= HEADER + HERO ================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28">
        
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            PubNub Core Services
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/70">
            Enable real-time communication and power low-latency, event-driven
            logic across your entire application architecture.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative mt-10 sm:mt-14 md:mt-16">
          <div className="mx-auto max-w-5xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F8daadb111d4a401d96a94b88e50e0bac?format=webp&width=2000"
              alt="PubNub Core Services Diagram"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* ================= SECTIONS ================= */}
      <div className="">
        <MessagingServices />
        <ApplicationServicesSection />
        <MultiLanguagePlatformSection />
        <ContactUsSection />
      </div>
    </section>
  );
};

export default CoreServices;
