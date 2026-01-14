import { useState } from "react";

const PredictablePricingSection = () => {
  const [mau, setMau] = useState(1000);

  return (
    <section className="bg-white py-20 border-t">
      <div className="max-w-6xl mx-auto px-4 border border-black/5 rounded-xl shadow-lg p-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Predictable Pricing — No Hidden Fees
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Other providers have unexpected charges for concurrency, channels,
            and messaging, making costs unpredictable. With MAU pricing, you
            only pay for Monthly Active Users. That’s it.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-20 ">
          <div className="border rounded-xl shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 font-semibold">Billing Metric</th>
                  <th className="p-4 font-semibold text-red-600">pubnub</th>
                  <th className="p-4 font-semibold">Other Platforms</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Monthly Active Users (MAU)", "The only thing you pay for", "One of many charges"],
                  ["Peak Concurrent Connections", "Included", "Extra Cost"],
                  ["Message & API Call Volume", "Included", "Extra Cost"],
                  ["Active Channel / Connection Time", "Included", "Extra Cost"],
                  ["Storage & Bandwidth", "Included", "Extra Cost"],
                  ["Advanced Feature Add-ons", "Included", "Extra Cost"],
                ].map((row, index) => (
                  <tr key={index} className="border-b last:border-none">
                    <td className="p-4">{row[0]}</td>
                    <td className="p-4 text-green-600 font-medium">✔ {row[1]}</td>
                    <td className="p-4 text-red-500">✖ {row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Annual Discount Section */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold">
            Commit & Save Big: Annual Discounts
          </h3>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Switch to annual pricing and unlock deep discounts on our Pro plan.
            Your monthly costs are estimated by Monthly Active Users (MAU).
          </p>
        </div>

        {/* Slider + Pricing Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Slider */}
          <div>
            <label className="block text-sm font-medium mb-3">
              Monthly Active Users (MAU)
            </label>

            <input
              type="range"
              min={1000}
              max={50000}
              step={1000}
              value={mau}
              onChange={(e) => setMau(Number(e.target.value))}
              className="w-full accent-red-600"
            />

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>1k</span>
              <span>5k</span>
              <span>10k</span>
              <span>25k</span>
              <span>50k+</span>
            </div>

            <input
              type="number"
              value={mau}
              onChange={(e) => setMau(Number(e.target.value))}
              className="mt-4 w-32 border rounded-md px-3 py-2"
            />
          </div>

          {/* Pricing Card */}
          <div className="border rounded-xl p-8 shadow-sm text-center">
            <p className="text-sm text-gray-500">Platform Pro (Estimated)</p>
            <h4 className="text-3xl font-bold mt-3">
              ${(mau * 0.17).toFixed(2)}
              <span className="text-base font-normal">/month</span>
            </h4>
            <p className="text-gray-600 mt-2">
              Your estimated price for {mau.toLocaleString()} MAU.
            </p>

            <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition">
              Contact Sales
            </button>

            <p className="text-xs text-gray-500 mt-3">
              Pricing shown represents common use cases.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-10">
          Need more than 50,000 MAU?{" "}
          <span className="text-red-600 underline cursor-pointer">
            Contact sales for volume discounts
          </span>
        </p>
      </div>
    </section>
  );
};

export default PredictablePricingSection;
