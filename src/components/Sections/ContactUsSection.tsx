const ContactUsSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-transparent">
      <div
        className="
          mx-auto bg-white
          rounded-t-3xl sm:rounded-t-[48px] lg:rounded-t-[88px]
          px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40
          pt-12 sm:pt-16
          max-w-7xl
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT – Start Building */}
          <div className="bg-[#f1f6ff] rounded-2xl p-6 sm:p-8 flex flex-col justify-between md:row-span-2">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black mb-4">
                Start building
              </h2>

              <p className="font-semibold mb-6 text-sm sm:text-base">
                Get started building real-time apps now!
              </p>

              <ul className="space-y-3 text-sm sm:text-base">
                {[
                  "Always free for up to 200 MAUs",
                  "No Credit Card Required",
                  "Every PubNub SDK available",
                  "Complete Feature Access to 100+ Integrations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className="mt-6 text-red-500 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Learn more →
            </a>
          </div>

          {/* RIGHT TOP – Talk to an Expert */}
          <div className="md:col-span-2 bg-white border rounded-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="p-6 sm:p-8 flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Talk to an expert
              </h2>

              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Let us share with you industry best practices and how we can help
                you accelerate your real-time application and growth.
              </p>

              <button className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition">
                Contact us
              </button>
            </div>

            <div className="w-full md:w-[260px] h-48 sm:h-56 md:h-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0ee4d50ccdc943eda308d1099e2b1915/8c2c102683e32e7250018337aacdb8640745d5f8841e377123a2e53dcbe56901?format=webp&width=400"
                alt="support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT BOTTOM – Pricing */}
          <div className="md:col-span-2 bg-[#f1f6ff] rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              See our pricing
            </h2>

            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Almost limitless pricing options from simple pay-as-you-go to
              custom models to best match your business needs and growth
              objectives.
            </p>

            <a
              href="#"
              className="text-red-500 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Learn more →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
