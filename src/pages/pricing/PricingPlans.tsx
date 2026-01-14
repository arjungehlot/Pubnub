import PredictablePricingSection from "./PredictablePrice";
import ComparePlans from "./ComparePlans";
import Illuminate from "./Illuminate";
import PricingFAQ from "./PricingFAQ";
import TrustAndCompliance from "./TrustAndCompliance";
import ReadyToBuildCTA from "./ReadyToBuildCTA";
import SupportFeaturesComparison from "./SupportFeaturesComparison";

const PricingPlans = () => {
  return (
    <>
      {/* =========================
          SIMPLE TRANSPARENT PRICING
      ========================== */}
      <section className="bg-white w-full py-20 border-t">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>

          <p className="text-gray-600 mt-5 text-base sm:text-lg">
            Start building for free, then scale with confidence. Our
            pay-as-you-grow pricing is based on one simple metric: Monthly Active
            Users. No hidden fees, no surprises.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition">
              Start Free - No Credit Card
            </button>
            <button className="border border-gray-300 px-8 py-3 rounded-md hover:bg-gray-50 transition">
              Calculate Your Costs
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          CHOOSE YOUR PLAN SECTION
      ========================== */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Choose Your Plan
            </h1>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              All plans include unlimited channels and all core features. You
              only pay for what you use: MAU.
            </p>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold">Free Plan</h3>
              <p className="text-2xl font-bold mt-2">Free</p>
              <p className="text-sm text-gray-500 mt-1">
                Forever free • No credit card required
              </p>

              <div className="mt-6 text-sm text-gray-700">
                <p className="border-l-2 border-red-500 pl-4">
                  <strong>200 MAU</strong> or <strong>1M transactions</strong>
                  <br />
                  Best for testing and prototypes.
                </p>
              </div>

              <button className="mt-6 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition">
                Start Building Free
              </button>

              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>✔ 1GB data storage (7 days)</li>
                <li>✔ Community support</li>
                <li>✔ Up to 1M transactions monthly</li>
              </ul>

              <p className="mt-6 text-sm underline cursor-pointer">
                Full Feature Breakdown
              </p>
            </div>

            {/* Starter Plan (no scale on mobile) */}
            <div className="border rounded-xl p-8 shadow-lg bg-white md:scale-105">
              <h3 className="text-xl font-semibold">Starter Plan</h3>
              <p className="text-2xl font-bold mt-2">$98/month</p>
              <p className="text-sm text-gray-500 mt-1">Pay as you grow</p>

              <div className="mt-6 text-sm text-gray-700">
                <p className="border-l-2 border-red-500 pl-4">
                  <strong>1,000 MAU</strong> included
                  <br />
                  Ideal for launching apps.
                </p>
              </div>

              <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                Create Starter Account
              </button>

              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>✔ BizOps Workspace</li>
                <li>✔ Up to 6 months data storage</li>
                <li>✔ Standard support (24/5)</li>
                <li>✔ User & message insights</li>
              </ul>

              <p className="mt-6 text-sm underline cursor-pointer">
                Full Feature Breakdown
              </p>
            </div>

            {/* Pro Plan */}
            <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold">Pro Plan</h3>
              <p className="text-2xl font-bold mt-2">Custom</p>
              <p className="text-sm text-gray-500 mt-1">
                The more you grow, the more you save
              </p>

              <div className="mt-6 text-sm text-gray-700">
                <p className="border-l-2 border-red-500 pl-4">
                  Custom MAU packages
                  <br />
                  Built for production apps.
                </p>
              </div>

              <button className="mt-6 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition">
                Contact Sales
              </button>

              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>✔ Unlimited data storage</li>
                <li>✔ Dedicated support team</li>
                <li>✔ Advanced analytics</li>
                <li>✔ 99.999% uptime SLA</li>
                <li>✔ Custom integrations</li>
              </ul>

              <p className="mt-6 text-sm underline cursor-pointer">
                Full Feature Breakdown
              </p>
            </div>
          </div>

          {/* Pay-As-You-Go */}
          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold mb-10">
              Pay-As-You-Go Pricing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Free Plan",
                  price: "$0/month",
                  desc: "for up to 200 MAU",
                },
                {
                  title: "Starter Plan",
                  price: "$98/month",
                  desc: "for 1,000 MAU",
                },
                {
                  title: "Pro Plan",
                  price: "Volume Discounts",
                  desc: "for 10,000+ MAU",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-6 text-center shadow-sm bg-white"
                >
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <h3 className="text-2xl font-bold mt-2">{item.price}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Sections (already responsive) */}
      <PredictablePricingSection />
      <ComparePlans />
      <Illuminate />
      <SupportFeaturesComparison />
      <PricingFAQ />
      <TrustAndCompliance />
      <ReadyToBuildCTA />
    </>
  );
};

export default PricingPlans;
