import FeaturesSection from "../components/Sections/FeaturesSection";
import LandingSection from "../components/Sections/LandingSection";

const HomePage = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020c3a] via-[#03124f] to-[#020c3a]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        
        {/* 👇 10 column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-10 items-center gap-16">

          {/* LEFT CONTENT – 70% */}
          <div className="lg:col-span-6 text-white z-10">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-yorkten font-extrabold leading-tight">
              The market leading platform <br />
              for real-time interactive apps
            </h1>

            <p className="mt-16 text-lg text-blue-100 max-w-2xl">
              <span className="font-semibold">The PubNub promise:</span> real-time innovation.<br></br>
              Efficiently and effectively build, manage, and monetize engaging apps that captivate and delight users.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-md bg-[#0a3cff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0832cc] transition">
                Start Building
              </button>
              <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#020c3a] hover:bg-gray-100 transition">
                Contact sales
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL – 30% */}
          <div className="lg:col-span-4 relative h-[480px] hidden lg:block">

            {/* Glow Background */}
            <div className="absolute inset-0 rounded-[40px] bg-white/10 blur-3xl" />

            {/* RIGHT → CENTER */}
            <div className="absolute right-0 top-24 p-2 animate-slide-right">
              <img
                src="/Assets/home/live-events.png"
                className="w-64 rounded-xl"
                alt="Live events"
              />
            </div>

            {/* TOP → DOWN */}
            <div className="absolute left-10 -top-10  p-2 animate-slide-down">
              <img
                src="/Assets/home/healthcare.png"
                className="w-56 rounded-xl"
                alt="Healthcare"
              />
            </div>

            {/* LEFT → CENTER */}
            <div className="absolute left-0 bottom-24  p-2 animate-slide-left">
              <img
                src="/Assets/home/e-commerce.png"
                className="w-56 rounded-xl"
                alt="E-commerce"
              />
            </div>

            {/* FLOATING EMOJI */}
            <img
              src="/Assets/home/emoji.png"
              className="absolute right-10 bottom-10 w-14 animate-float"
              alt="Emoji"
            />
          </div>

        </div>
      </div>
      <LandingSection />
      <FeaturesSection />
   
    </section>

  );
};

export default HomePage;
