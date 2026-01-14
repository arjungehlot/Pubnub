import React from "react";

const ContactUsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-blue-200 bg-white lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Want to see what real-time decision intelligence can do for your
              app and bottom line? Contact sales or sign up free to start
              building with PubNub today.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-700">
                Contact Sales
              </button>

              <button className="rounded-md border border-blue-300 px-6 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-50">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-64 w-full lg:h-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F972da3b242544eecb5e3ec4f26095b15"
              alt="Customer support"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;