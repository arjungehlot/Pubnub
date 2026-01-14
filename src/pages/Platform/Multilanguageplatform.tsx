import React, { useState } from "react";

/* ----------------------------------
   Wipe Text Component
----------------------------------- */
interface WipeTextProps {
  text: string;
}

const WipeText: React.FC<WipeTextProps> = ({ text }) => {
  return (
    <span className="relative inline-block">
      {/* Keeps layout width stable */}
      <span className="invisible">{text}</span>

      {/* Animated wipe text */}
      <span
        key={text}
        className="absolute inset-0 overflow-hidden whitespace-nowrap animate-wipe"
      >
        {text}
        <span className="ml-1 animate-pulse">|</span>
      </span>
    </span>
  );
};

/* ----------------------------------
   SDK Logos Data (ORDER MATTERS)
----------------------------------- */
interface SdkLogo {
  label: string;
  src: string;
}

const sdkLogos: SdkLogo[] = [
  { label: "Unreal Engine", src: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F26ccbd004a9348b4b925bdd4ce447caa" },
  { label: "C++", src: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F10eec7d6f2e645559c8d768073b34591" },
  { label: "Unity", src: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fcca44e0b97244ec6869afc261e315b21" },
  { label: "Swift", src: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fc86e2cff0a49404caf0ebeb9f80add23" },
  { label: "Python", src: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F05bc12f3bd144a3f9448e01632e2b165" },
  { label: "Kotlin", src: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F07c045a272e34a8883871bb605fb493d" },
  { label: "Javascript", src: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fec9465336d3a4b4aaf9f296efcf46a7a" },
  { label: "Java", src: "https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F08a2c2c6ff26414a85df4ea3178af777" },
];
/* ----------------------------------
   Main Section
----------------------------------- */
const MultiLanguagePlatformSection: React.FC = () => {
  const [activeText, setActiveText] = useState("50+ SDKs");

  return (
    <section className="w-full bg-[#f7f9fb] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            Multi-Language, Multi-Platform
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Accelerate development with tools and SDKs built for speed, scale,
            and AI-powered productivity.
          </p>
        </div>

        {/* SDK Support Card */}
        <div className="mb-24 rounded-3xl bg-gradient-to-r from-[#020b3a] to-[#03145c] p-20 text-white">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <p className="text-sm text-blue-200">Support for</p>

              <h3 className="mt-2 text-4xl font-semibold tracking-tight">
                <WipeText text={activeText} />
              </h3>

              <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-200 hover:text-white">
                See all <span>→</span>
              </button>
            </div>

            {/* SDK Logos */}
            <div className="flex flex-wrap justify-start gap-2 lg:justify-end">
              {sdkLogos.map((logo) => (
                <button
                  key={logo.label}
                  onMouseEnter={() => setActiveText(logo.label)}
                  onFocus={() => setActiveText(logo.label)}
                  onMouseLeave={() => setActiveText("50+ SDKs")}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm transition hover:scale-105 focus:outline-none"
                >
                  <img
                    src={logo.src}
                    alt={logo.label}
                    className="h-8 w-8 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Row 1 */}
        <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#020b3a] to-[#03145c] p-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F9b5a48704db2409684beceadd734124f?format=webp&width=2000"
              alt="Ask AI"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Built-in AI Coding Assistance
            </h3>
            <p className="mt-4 text-gray-600">
              Speed up development with your favorite AI tools. Popular LLMs are
              already trained on the platform’s APIs, making it easy to generate
              functions, integrate services, and bring real-time features to
              life—faster.
            </p>

            <button className="mt-6 text-sm font-medium text-blue-600 hover:underline">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Row 2 */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Solution Kits & Templates
            </h3>
            <p className="mt-4 text-gray-600">
              Jumpstart your project with curated kits, templates, and how-to
              guides built around proven real-time use cases. Whether you’re
              launching a web chat app, IoT system, SaaS product, or live
              dashboard, you’ll save time and reduce risk with pre-tested
              components and best practices.
            </p>

            <button className="mt-6 text-sm font-medium text-blue-600 hover:underline">
              Learn More
            </button>
          </div>

          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#020b3a] to-[#03145c] p-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1fcb015a109a40cf966b557d33af92b0?format=webp&width=2000"
              alt="Templates"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiLanguagePlatformSection;