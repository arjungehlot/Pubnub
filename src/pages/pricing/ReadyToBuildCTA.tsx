const ReadyToBuildCTA = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* CTA Card */}
        <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] border rounded-2xl overflow-hidden shadow-sm">
          
          {/* LEFT CONTENT (70%) */}
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Build Real-Time Apps?
            </h2>

            <p className="text-gray-600 mb-8 max-w-xl">
              Join millions of developers building the future of real-time
              experiences. Start free, scale as you grow.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition">
                Start Free - No Credit Card
              </button>
              <button className="border px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                Talk to Sales
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE (30%) */}
          <div className="relative w-full h-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F99af7ff7f3844ddeac17d0d1b021cfcd?format=webp&width=1600"
              alt="Support headset on laptop"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* MAU INFO */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <h3 className="font-semibold mb-2">What is MAU?</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            A Monthly Active User is a unique user who connects to your app at
            least once in a monthly billing cycle.{" "}
            <span className="underline cursor-pointer">
              Learn more in our FAQ
            </span>
            . Our free plan is designed for you to build and test your
            application. When you're ready for production, you can seamlessly
            upgrade to a paid plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBuildCTA;
