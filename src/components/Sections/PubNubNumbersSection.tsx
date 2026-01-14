import StatCard from "../Cards/StatCard";

const PubNubNumbersSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT — STICKY TITLE */}
          <div className="lg:sticky lg:top-28 self-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              PubNub <br className="hidden sm:block" /> by the Numbers
            </h2>

            <p className="mt-4 max-w-md text-sm sm:text-base text-white/70">
              Trusted at massive scale to power real-time experiences across
              industries and continents.
            </p>
          </div>

          {/* RIGHT — STATS */}
          <div className="space-y-5 sm:space-y-6">
            <StatCard
              big="#1"
              title="World’s Largest Event-Driven Network"
              desc="Globally-distributed edge messaging for IoT, Mobile, Server, Web"
            />

            <StatCard
              big="<30ms"
              title="Latency with global delivery and unlimited concurrency"
            />

            <StatCard
              big="2K+"
              title="Customers, 800M Devices, 3T API Transactions/Month"
            />

            <StatCard
              big="99.999%"
              title="Best in class SLA and compliance: SOC2, HIPAA, GDPR, CCPA, ISO 27001"
            />

            <StatCard
              big=">60"
              title="Patent Claims Granted"
              muted
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PubNubNumbersSection;
