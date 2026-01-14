import FeatureCard from "../Cards/FeatureCard";
import PubNubNumbersSection from "./PubNubNumbersSection";

const FeaturesSection = () => {
  return (
    <section className="relative bg-[#020c3a]py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* LARGE CARD */}
          <FeatureCard
            title="In-App Messaging"
            desc="In-app messaging combines Pub/Sub with persistence, file sharing functions, and 3rd party integrations to manage channels and boost engagement."
            image="/Assets/features/app-messaging.png"
            large
          />

          {/* SMALL */}
          <FeatureCard
            title="Presence"
            desc="Real-time awareness to seamlessly monitor and manage user activity & engagement."
            image="/Assets/features/presence.png"
          />

          {/* SMALL */}
          <FeatureCard
            title="PubNub Chat"
            desc="Chat development simplified with SDKs, UI Templates & moderation tools."
            image="/Assets/features/pubnub-chat.png"
          />

          {/* LARGE */}
          <FeatureCard
            title="Live Analytics and Decisioning"
            desc="PubNub Illuminate enables real-time analytics, decisioning, and automation with no-code tools."
            image="/Assets/features/analytics.png"
            large
          />

          {/* LARGE */}
          <FeatureCard
            title="Live Data Sync"
            desc="PubNub App Context ensures real-time consistency by syncing critical app data across users and devices."
            image="/Assets/features/data-sync.png"
            large
          />

          {/* SMALL */}
          <FeatureCard
            title="Mobile Push Notifications"
            desc="Mobile Push Notifications deliver immediate updates using APNS & FCM."
            image="/Assets/features/push.png"
          />

        </div>
      </div>
      <PubNubNumbersSection />
    </section>
  );
};

export default FeaturesSection;
