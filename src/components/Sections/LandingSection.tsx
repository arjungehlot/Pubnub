import IndustriesSection from "./IndustriesSection";

const brands = [
  "/Assets/brands/aliexpress.svg",
  "/Assets/brands/amazonaws.svg",
  "/Assets/brands/applepay.svg",
  "/Assets/brands/dotnet.svg",
  "/Assets/brands/ebay.svg",
  "/Assets/brands/fiverr.svg",
  "/Assets/brands/googlepay.svg",
  "/Assets/brands/imdb.svg",
  "/Assets/brands/intel.svg",
  "/Assets/brands/kaggle.svg",
  "/Assets/brands/nasa.svg",
  "/Assets/brands/openssl.svg",
  "/Assets/brands/paytm.svg",
  "/Assets/brands/playstation.svg",
  "/Assets/brands/uber.svg",
  "/Assets/brands/visa.svg",
  "/Assets/brands/zomato.svg",
  "/Assets/brands/zoom.svg",
];

const LandingSection = () => {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-20">
      <div className="max-w-full">

        {/* WHITE CONTAINER */}
        <div
          className="
            relative mx-auto bg-white shadow-xl
            rounded-3xl sm:rounded-[48px] lg:rounded-[92px]
            px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32
            py-14 sm:py-16 lg:py-20
          "
        >

          {/* BRAND MARQUEE */}
          <div className="mb-14 sm:mb-16 lg:mb-20 overflow-hidden">
            <div className="flex w-max animate-marquee gap-10 sm:gap-14 lg:gap-20">
              {[...brands, ...brands].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="Brand"
                  className="
                    h-10 sm:h-12 md:h-14 lg:h-20
                    w-auto opacity-80
                    transition hover:opacity-100
                  "
                />
              ))}
            </div>
          </div>

          {/* FEATURES */}
          <div
            className="
              grid grid-cols-1 gap-8
              md:grid-cols-3 md:gap-10
              border border-blue-200 rounded-2xl
              p-6 sm:p-8 lg:p-10
            "
          >

            {/* CARD 1 */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Unleash creativity
              </h3>
              <p className="mt-3 sm:mt-4 text-sm text-gray-600 leading-relaxed">
                Focus on value creation leveraging real-time APIs, SDKs and
                software to accelerate development and management while
                retaining control and flexibility.
              </p>
              <a
                href="#"
                className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                Read the Docs →
              </a>
            </div>

            {/* CARD 2 */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Scale infinitely
              </h3>
              <p className="mt-3 sm:mt-4 text-sm text-gray-600 leading-relaxed">
                Scalable infrastructure that provides flexible options to reach
                millions of concurrent users and devices safely, securely, and
                with no additional fees.
              </p>
              <a
                href="#"
                className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                Explore the platform →
              </a>
            </div>

            {/* CARD 3 */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Surpass your KPIs
              </h3>
              <p className="mt-3 sm:mt-4 text-sm text-gray-600 leading-relaxed">
                Increase engagement and retention with real-time data analysis
                and automated decisioning for continuous optimization.
              </p>
              <a
                href="#"
                className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                Discover Illuminate →
              </a>
            </div>
          </div>

          {/* INDUSTRIES */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <IndustriesSection />
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingSection;
