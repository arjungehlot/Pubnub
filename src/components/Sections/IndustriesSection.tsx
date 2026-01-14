import IndustryCard from "../Cards/IndustryCard";

const IndustriesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900">
          Powering global real-time interactive experiences in{" "}
          <span className="font-bold">40+ Industries</span>
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Top Row */}
          <IndustryCard
            tag="Sports, Media, Entertainment"
            image="/Assets/industries/sports.jpeg"
            title="Increase Fan Engagement"
            desc="through real-time fan interactions with chat, notifications, alerts, and more"
          />

          <IndustryCard
            tag="Digital Health"
            image="/Assets/industries/doctor.jpeg"
            title="Enhance patient care"
            desc="with user status, full-featured chat and push notifications, all with HIPAA compliance"
          />

          <IndustryCard
            tag="Digital Commerce"
            image="/Assets/industries/ecommerce.jpeg"
            title="Elevate buyer experiences"
            desc="with instant user status, chat, and automated push notifications"
          />

          {/* Bottom Row */}
          <IndustryCard
            tag="Gaming"
            image="/Assets/industries/gaming.jpg"
            title="Improve retention and engagement"
            desc="through in-game updates, chat and all types of player interactions"
          />

          <IndustryCard
            tag="Contact & Control Centers"
            image="/Assets/industries/contact-center.jpg"
            title="Boost customer delight"
            desc="through real-time user collaboration and notifications"
          />

          <IndustryCard
            tag="Transportation & Logistics"
            image="/Assets/industries/logistics.jpg"
            title="Optimize driver logistics"
            desc="for trucking telemetry, driver communication, and process improvement"
          />

        </div>
      </div>
    <div className="flex justify-center mt-5">
  <button className="mt-4 px-6 py-2 flex items-center justify-center bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out">
    Discover more
  </button>
</div>

    </section>
  );
};

export default IndustriesSection;
