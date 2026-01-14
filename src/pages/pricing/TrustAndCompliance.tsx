const TrustAndCompliance = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* TRUST HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
          Trusted by 3M+ Developers Worldwide
        </h2>

        {/* STATS CARD */}
        <div className="bg-white border rounded-2xl shadow-sm p-6 sm:p-8 mb-14 sm:mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: "99.999%", label: "Uptime SLA" },
              { value: "<100ms", label: "Global Latency" },
              { value: "3M+", label: "Developers" },
              { value: "25M+", label: "Concurrent Connections" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {item.value}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPLIANCE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 sm:mb-20">
          {/* LEFT - COMPLIANCE LOGOS */}
          <div className="flex justify-center md:justify-start">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">
              {[
                {
                  name: "GDPR",
                  desc: "Compliant",
                  logo:
                    "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F4fe8a673cf9c4a84ab2bc076524e4167?format=webp&width=2000",
                },
                {
                  name: "HIPAA",
                  desc: "Compliant",
                  logo:
                    "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F45e90446d2ea462fa3e33dfd026c1f9d?width=64",
                },
                {
                  name: "SOC 2 Type 2",
                  desc: "Certified",
                  logo:
                    "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F3dc05027a49544a68e2e5ab9a249b7d3?width=64",
                },
                {
                  name: "ISO 27001",
                  desc: "Certified",
                  logo:
                    "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F0156be6873d945929418d72fee329f9a?width=64",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-full border shadow-sm">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-8 sm:h-10 object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium mt-2 sm:mt-3">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - TEXT */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Enterprise-Grade Compliance
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Compliance is handled out of the box, with support for GDPR,
              HIPAA, SOC 2 Type 2, and ISO 27001. You can control how and where
              data is stored and routed — including locking it to U.S.-only
              data centers when needed. Access controls and audit logs are
              built in, so meeting requirements doesn’t add extra overhead.
            </p>
          </div>
        </div>

        {/* FULL WIDTH SECURITY FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 max-w-6xl mx-auto text-center">
          {[
            {
              title: "Data Residency",
              desc: "Control where your data is stored and processed",
              icon: "🔒",
            },
            {
              title: "Audit Logs",
              desc: "Complete audit trails built into the platform",
              icon: "📋",
            },
            {
              title: "Access Controls",
              desc: "Granular permissions and role-based access",
              icon: "🛡️",
            },
          ].map((item, i) => (
            <div key={i}>
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">{item.icon}</span>
              </div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustAndCompliance;
