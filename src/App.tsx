import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUsSection from "./components/Sections/ContactUsSection";
import HomePage from "./pages/HomePage";
import Services from "./pages/Platform/CoreServices";
import AccelerateTimeToMarketSection from "./pages/Solutions/AccelerateTimeToMarket";
import PubNubForDevelopersSection from "./pages/Developer/PubNubForDevelopersSection";
import WorldRunsOnPubNubSection from "./pages/Resources/WorldRunsOnPubNubSection";
import ScrollToTop from "./components/ScrollToTop";
import PricingPlans from "./pages/pricing/PricingPlans";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Main Routing */}
      <Routes>
        <Route path="/"
          element={
            <>
              <HomePage />
              <ContactUsSection />
            </>
          }
        />
        <Route path="/core-services" element={<Services />} />
        <Route path="/chat" element={<AccelerateTimeToMarketSection />} />
        <Route path="/developer-home" element={<PubNubForDevelopersSection />} />
        <Route path="/customers" element={<WorldRunsOnPubNubSection />} />
        <Route path="/pricing" element={<PricingPlans />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
