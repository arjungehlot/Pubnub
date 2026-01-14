import React from "react";
import ProductionReadyChatInfrastructureSection from "./ProductionReadyChatInfrastructure";
import ScaleWithoutReEngineeringSection from "./ScaleWithoutReEngineeringSection";
import OperationalControlAtScaleSection from "./OperationalControlAtScaleSection";

const AccelerateTimeToMarketSection: React.FC = () => {
  return (
    <>
    
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-32"
      style={{
        backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F56f16d7fc2a64f1fa1019eca72a17861')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl">
          Accelerate Time to Market With
          <br />
          Uncompromising Scale and Control
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">
          PubNub gives your team the tools to launch high-performance chat
          rapidly, manage complexity as you grow, and eliminate the
          infrastructure overhead.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-blue-700">
            Start Building
          </button>

          <button className="rounded-md bg-white px-8 py-3 text-sm font-medium text-gray-900 shadow-lg transition hover:bg-gray-100">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
    <ProductionReadyChatInfrastructureSection />
    <OperationalControlAtScaleSection />
    <ScaleWithoutReEngineeringSection />
    </>
    
  );
};

export default AccelerateTimeToMarketSection;