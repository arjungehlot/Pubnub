import { Search, Menu, X } from "lucide-react";
import { useState} from "react";
import {
  Boxes,
  Globe,
  Brain,
  Lightbulb,
  BarChart3,
  Settings,
  Sparkles,
  Server,
  MessageSquare,
  Radio,
  Users,
  Cpu,
  Workflow,
  MapPin,
  Share2,
  Zap,
  TrendingUp,
  Gamepad2,
  ShieldCheck,
  PlayCircle,
  HeartPulse,
  ShoppingCart,
  Building2,
  Truck,
  Headphones,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/* ================= TYPES ================= */
type ClickHandler = () => void;

interface MenuItemProps {
  icon: any;
  title: string;
  desc?: string;
  onClick?: ClickHandler;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isPlatformOpen, setIsPlatformOpen] = useState(false); // platform hover
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isDeveloperOpen, setIsDeveloperOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [mobilePlatform, setMobilePlatform] = useState(false);
const [mobileSolutions, setMobileSolutions] = useState(false);
const [mobileDeveloper, setMobileDeveloper] = useState(false);
const [mobileResources, setMobileResources] = useState(false);


  const handleNavigate = (path: string) => {
    navigate(path);

    // close all toggles
    setIsOpen(false);
    setIsPlatformOpen(false);
    setIsSolutionsOpen(false);
    setIsDeveloperOpen(false);
    setIsResourcesOpen(false);
  };

  /* ================= SCROLL LOCK (FIXED) ================= */


  const navigate = useNavigate();



  return (
    <nav className="sticky top-0 z-50 w-full border-b shadow-lg border-gray-200 bg-white">
      <div className="max-w-8xl px-6 md:px-20 py-1">
        <div className="flex h-16 items-center justify-between">

          {/* LEFT SECTION */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link to="/" aria-label="Go to home">
              <img
                src="/Assets/pubnub_logo.png"
                alt="PubNub Logo"
                className="h-8 w-auto cursor-pointer hover:opacity-90 transition"
              />
            </Link>



            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-3 text-gray-700 font-medium">

              {/* PLATFORM */}
              <li
                className="relative rounded-md px-3 py-2 hover:bg-gray-100 text-black cursor-pointer"
                onMouseEnter={() => setIsPlatformOpen(true)}
                onMouseLeave={() => setIsPlatformOpen(false)}
              >
                Platform

                {/* PLATFORM MEGA MENU */}
                <div
                  className={`absolute left-0 top-full mt-4 w-[900px] rounded-2xl border bg-white shadow-xl z-50 transition-all duration-300
                  ${isPlatformOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-3 invisible"
                    }`}
                >
                  <div className="grid grid-cols-12 gap-6 p-6">

                    {/* LEFT CARD */}
                    <div className="col-span-4 rounded-xl bg-gradient-to-br from-black via-gray-900 to-red-900 text-white p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          Platform Overview
                        </h3>
                        <p className="mt-2 text-sm text-gray-300">
                          Your platform for interactive experiences
                        </p>
                      </div>
                      <span className="text-sm font-medium mt-6 cursor-pointer">
                        Explore our platform →
                      </span>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="col-span-8 grid grid-cols-2 gap-2">
                      <MenuItem
                        icon={Boxes}
                        title="Core Services"
                        desc="Real-time communication with low-latency"
                        onClick={() => navigate("/core-services")}
                      />

                      <MenuItem icon={Settings} title="Integrations" desc="Best-in-class third-party services" />
                      <MenuItem icon={Globe} title="Global Network" desc="Secure, scalable infrastructure" />
                      <MenuItem icon={Sparkles} title="Generative AI" desc="Build AI-native real-time apps" />
                      <MenuItem icon={Brain} title="Decision Intelligence" desc="Power decisions with real-time data" />
                      <MenuItem icon={Server} title="MCP Server" desc="Unlock real-time code with AI" />
                      <MenuItem icon={Lightbulb} title="Illuminate" desc="Turn live user data into results" />
                      <MenuItem icon={BarChart3} title="Insights" desc="Visibility into app performance" />
                    </div>

                  </div>
                </div>
              </li>

              <li
                className="relative hover:text-black cursor-pointer"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <span className="rounded-md px-3 py-2 hover:bg-gray-100 text-black">
                  Solutions
                </span>

                {/* SOLUTIONS MEGA MENU */}
                <div
                  className={`fixed left-1/2 top-[72px] w-[1100px] max-w-[calc(100vw-3rem)]
  -translate-x-1/2 rounded-2xl border bg-white shadow-2xl z-50
  transition-all duration-300
  ${isSolutionsOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-3 invisible"
                    }`}
                >


                  <div className="grid grid-cols-12 gap-5 px-10 py-8">

                    {/* LEFT: BY USE CASE */}
                    <div className="col-span-8">
                      <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-red-600">
                        By Use Case
                      </p>

                      <div className="grid grid-cols-2 gap-x-10 gap-y-1">
                        <UseItem onClick={() => navigate("/chat")} icon={MessageSquare} title="Chat" desc="Provide chat experiences your users need" />
                        <UseItem icon={Share2} title="Edge Messaging" desc="Never worry about latency issues again" />
                        <UseItem icon={Radio} title="Live Audience Engagement" desc="From live events to social workouts" />
                        <UseItem icon={Zap} title="Event-Driven Architecture" desc="Launch faster with Events, not endpoints" />
                        <UseItem icon={Users} title="Multi-User Collaboration" desc="Bring the team together" />
                        <UseItem icon={TrendingUp} title="LiveOps" desc="Real-time decisions, zero lag" />
                        <UseItem icon={Cpu} title="IoT Device Control" desc="Build & manage IoT devices" />
                        <UseItem icon={Gamepad2} title="Gamification" desc="Drive engagement in real time" />
                        <UseItem icon={Workflow} title="Real-Time Workflows" desc="Stream data. Orchestrate actions" />
                        <UseItem icon={ShieldCheck} title="Auto-Moderation" desc="AI-powered message filtering" />
                        <UseItem icon={MapPin} title="Geolocation & Dispatch" desc="Track your fleet’s cars" />
                        <UseItem icon={Lightbulb} title="App Optimization" desc="Maximize efficiency — made easy" />
                      </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="col-span-1 flex justify-center">
                      <div className="h-full w-px bg-gray-200" />
                    </div>

                    {/* RIGHT: BY INDUSTRY */}
                    <div className="col-span-3">
                      <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-red-600">
                        By Industry
                      </p>

                      <div className="">
                        <IndustryItem icon={PlayCircle} title="Sports, Media & Entertainment" />
                        <IndustryItem icon={HeartPulse} title="Digital Healthcare" />
                        <IndustryItem icon={Building2} title="iGaming, Betting & Casino" />
                        <IndustryItem icon={Gamepad2} title="Gaming" />
                        <IndustryItem icon={ShoppingCart} title="eCommerce" />
                        <IndustryItem icon={Building2} title="FinTech" />
                        <IndustryItem icon={Truck} title="Transport, Delivery & Logistics" />
                        <IndustryItem icon={Headphones} title="Call Centers & Customer Care" />
                        <IndustryItem icon={UsersRound} title="Social & Lifestyle" />
                        <IndustryItem icon={Building2} title="Enterprise SaaS" />
                      </div>
                    </div>

                  </div>
                </div>
              </li>


              <li onClick={() => navigate("/pricing")} className="rounded-md px-3 py-2 hover:bg-gray-100 text-black cursor-pointer">Pricing</li>
              <li
                className="relative hover:text-black cursor-pointer"
                onMouseEnter={() => setIsDeveloperOpen(true)}
                onMouseLeave={() => setIsDeveloperOpen(false)}
              >
                <span className="rounded-md px-3 py-2 hover:bg-gray-100 text-black">
                  Developer
                </span>

                {/* DEVELOPER MENU */}
                <div
                  className={`fixed left-1/2 top-[72px] w-[560px] max-w-[calc(100vw-2rem)]
    -translate-x-1/2 rounded-xl border bg-white shadow-xl z-50
    transition-all duration-300
    ${isDeveloperOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-2 invisible"
                    }`}
                >
                  <div className="grid grid-cols-12 gap-6 px-6 py-6">

                    {/* LEFT LINKS */}
                    <div className="col-span-5 font-bold space-y-3">
                      <DevLink onClick={() => navigate("/developer-home")} icon="</>" title="Developer Home" />
                      <DevLink onClick={() => navigate("/developer-docs")} icon="📄" title="Documentation" />
                      <DevLink onClick={() => navigate("/developer-tutorials")} icon="▶" title="Tutorials" />
                      <DevLink onClick={() => navigate("/developer-tour")} icon="🧭" title="Tour" />
                      <DevLink onClick={() => navigate("/developer-network")} icon="🌐" title="Network" />
                    </div>

                    {/* DIVIDER */}
                    <div className="col-span-1 flex justify-center">
                      <div className="h-full w-px bg-gray-200" />
                    </div>

                    {/* SDK LOGOS */}
                    <div className="col-span-6">
                      <p className="mb-4 text-sm font-semibold text-gray-900 flex items-center gap-2">
                        <span>🔧</span> SDKs
                      </p>

                      <div className="grid grid-cols-4 gap-4">
                        <SdkLogo src="/Assets/sdks/js.png" alt="JavaScript" />
                        <SdkLogo src="/Assets/sdks/java.png" alt="Java" />
                        <SdkLogo src="/Assets/sdks/unreal.png" alt="Unreal" />
                        <SdkLogo src="/Assets/sdks/kotlin.png" alt="Kotlin" />
                        <SdkLogo src="/Assets/sdks/ruby.png" alt="Ruby" />
                        <SdkLogo src="/Assets/sdks/apple.png" alt="apple" />
                        <SdkLogo src="/Assets/sdks/swift.png" alt="Swift" />
                        <SdkLogo src="/Assets/sdks/c.png" alt="C" />
                        <SdkLogo src="/Assets/sdks/unity.png" alt="Unity" />
                        <SdkLogo src="/Assets/sdks/python.png" alt="Python" />
                        <SdkLogo src="/Assets/sdks/php.png" alt="PHP" />
                        <SdkLogo src="/Assets/sdks/go.png" alt="Go" />
                      </div>
                    </div>

                  </div>
                </div>
              </li>


              <li
                className="relative hover:text-black cursor-pointer"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <span className="rounded-md px-3 py-2 hover:bg-gray-100 text-black">
                  Resources
                </span>

                {/* RESOURCES DROPDOWN */}
                <div
                  className={`absolute left-1/2 top-full mt-4 w-[260px]
    -translate-x-1/2 rounded-xl border bg-white shadow-xl z-50
    transition-all duration-200
    ${isResourcesOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-2 invisible"
                    }`}
                >
                  <div className="py-3">
                    <ResourceItem onClick={() => navigate("/pubnub-wins")} icon="🏆" title="Why PubNub Wins" />
                    <ResourceItem onClick={() => navigate("/blog")} icon="📰" title="Blog" />
                    <ResourceItem onClick={() => navigate("/demos")} icon="▶" title="Demos" />
                    <ResourceItem onClick={() => navigate("/customers")} icon="👥" title="Customers" />
                    <ResourceItem onClick={() => navigate("/ebooks")} icon="📘" title="eBooks" />
                    <ResourceItem onClick={() => navigate("/careers")} icon="⭐" title="Careers" />
                    <ResourceItem onClick={() => navigate("/about-us")} icon="ℹ️" title="About Us" />
                  </div>
                </div>
              </li>

            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="p-2 rounded-full hover:bg-gray-100 hidden md:flex">
              <Search size={20} />
            </button>

            {/* Buttons */}
            <button className="hidden md:inline-flex rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition">
              Contact Sales
            </button>

            <button className="hidden md:inline-flex rounded-md border border-blue-300 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition">
              Try for free
            </button>

            <button className="hidden md:inline-flex rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
              Login
            </button>

            {/* MOBILE MENU ICON */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen((p) => !p)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
     <div
  className={`fixed inset-x-0 top-16 bottom-0 z-50 bg-white md:hidden
  transform transition-transform duration-300
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
>
          {/* SINGLE SCROLL CONTAINER */}
          <div className="h-auto bg-white overflow-y-visible touch-pan-y overscroll-contain px-4 py-6">
            <ul className="flex flex-col space-y-2 text-gray-800 font-medium">

              {/* PLATFORM */}
              <li>
                <button
                  onClick={() => setMobilePlatform((p) => !p)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 hover:bg-gray-100"
                >
                  <span>Platform</span>
                  <span>{mobilePlatform ? "−" : "+"}</span>
                </button>

                {mobilePlatform && (
                  <div className="mt-2 space-y-2 pl-4">
                    <MenuItem icon={Boxes} title="Core Services" desc="Low-latency real-time APIs" onClick={() => handleNavigate("/core-services")} />
                    <MenuItem icon={Settings} title="Integrations" desc="Third-party services" />
                    <MenuItem icon={Globe} title="Global Network" desc="Secure & scalable infra" />
                    <MenuItem icon={Sparkles} title="Generative AI" desc="AI-native apps" />
                    <MenuItem icon={Brain} title="Decision Intelligence" desc="Real-time insights" />
                    <MenuItem icon={Server} title="MCP Server" desc="AI code execution" />
                    <MenuItem icon={Lightbulb} title="Illuminate" desc="Live user data" />
                    <MenuItem icon={BarChart3} title="Insights" desc="App performance" />
                  </div>
                )}
              </li>

              {/* SOLUTIONS */}
              <li>
                <button
                  onClick={() => setMobileSolutions((p) => !p)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 hover:bg-gray-100"
                >
                  <span>Solutions</span>
                  <span>{mobileSolutions ? "−" : "+"}</span>
                </button>

                {mobileSolutions && (
                  <div className="mt-2 space-y-1 pl-4 text-sm text-gray-700">
                    <p className="mt-2 mb-1 font-semibold text-gray-900">Use cases</p>
                    <UseItem onClick={() => handleNavigate("/chat")} icon={MessageSquare} title="Chat" desc="User messaging" />
                    <UseItem onClick={() => handleNavigate("/live-engagement")} icon={Radio} title="Live Engagement" desc="Audience interaction" />
                    <UseItem onClick={() => handleNavigate("/event-driven-apps")} icon={Zap} title="Event-Driven Apps" desc="Real-time triggers" />
                    <UseItem onClick={() => handleNavigate("/collaboration")} icon={Users} title="Collaboration" desc="Team workflows" />
                    <UseItem onClick={() => handleNavigate("/iot-control")} icon={Cpu} title="IoT Control" desc="Device management" />

                    <p className="mt-4 mb-1 font-semibold text-gray-900">Industries</p>
                    <IndustryItem icon={Gamepad2} title="Gaming" />
                    <IndustryItem icon={HeartPulse} title="Healthcare" />
                    <IndustryItem icon={ShoppingCart} title="eCommerce" />
                    <IndustryItem icon={Truck} title="Logistics" />
                    <IndustryItem icon={Building2} title="FinTech" />
                  </div>
                )}
              </li>

              <li
                onClick={() => handleNavigate("/pricing")}
                className="rounded-md px-3 py-2 hover:bg-gray-100 text-black cursor-pointer"
              >
                Pricing
              </li>

              {/* DEVELOPER */}
              <li>
                <button
                  onClick={() => setMobileDeveloper((p) => !p)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 hover:bg-gray-100"
                >
                  <span>Developer</span>
                  <span>{mobileDeveloper ? "−" : "+"}</span>
                </button>

                {mobileDeveloper && (
                  <div className="mt-2 space-y-2 pl-4">
                    <DevLink icon="</>" title="Developer Home" onClick={() => handleNavigate("/developer-home")} />
                    <DevLink icon="📄" title="Docs" onClick={() => handleNavigate("/developer-docs")} />
                    <DevLink icon="▶" title="Tutorials" />
                    <DevLink icon="🧭" title="Tour" />
                    <DevLink icon="🌐" title="Network" />
                  </div>
                )}
              </li>

              {/* RESOURCES */}
              <li>
                <button
                  onClick={() => setMobileResources((p) => !p)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 hover:bg-gray-100"
                >
                  <span>Resources</span>
                  <span>{mobileResources ? "−" : "+"}</span>
                </button>

                {mobileResources && (
                  <div className="mt-2 space-y-1 pl-4 text-sm">
                    <ResourceItem icon="🏆" title="Why PubNub Wins" />
                    <ResourceItem icon="📰" title="Blog" />
                    <ResourceItem icon="▶" title="Demos" />
                    <ResourceItem onClick={() => handleNavigate("/customers")} icon="👥" title="Customers" />
                    <ResourceItem icon="📘" title="eBooks" />
                    <ResourceItem icon="⭐" title="Careers" />
                    <ResourceItem icon="ℹ️" title="About Us" />
                  </div>
                )}
              </li>

              <hr className="my-3" />

              {/* CTA BUTTONS */}
              <button className="w-full rounded-md bg-red-600 py-3 text-white font-semibold">
                Contact Sales
              </button>

              <button className="w-full rounded-md border border-blue-300 py-3 text-blue-600 font-semibold">
                Try for free
              </button>

              <button className="w-full rounded-md border border-gray-300 py-3 text-gray-700 font-medium">
                Login
              </button>
            </ul>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;

/* REUSABLE ITEM */
const MenuItem = ({ icon: Icon, title, desc, onClick }: MenuItemProps) => (
  <div
    onClick={onClick}
    className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
  >
    {Icon && <Icon size={20} className="text-gray-500" />}
    <div>
      <p className="font-medium">{title}</p>
      {desc && <p className="text-sm text-gray-500">{desc}</p>}
    </div>
  </div>
);

const UseItem = ({ icon: Icon, title, desc, onClick }: any) => (
  <div
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    className="flex gap-4 p-3 rounded-lg cursor-pointer 
               hover:bg-gray-50 transition-all duration-200">
    <Icon size={22} className="text-gray-400 mt-1" />
    <div>
      <p className="text-lg font-semibold text-gray-900">
        {title}
      </p>
      <p className="text-sm text-gray-600 leading-snug">
        {desc}
      </p>
    </div>
  </div>
);

const IndustryItem = ({ icon: Icon, title, onClick }: any) => (
  <div
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    className="flex gap-4 p-3 rounded-lg cursor-pointer 
               hover:bg-gray-50 transition-all duration-200">
    <Icon size={22} className="text-gray-400 mt-1" />
    <p className="text-sm font-semibold text-gray-900">
      {title}
    </p>
  </div>
);

const DevLink = ({ icon, title, onClick }: any) => (
  <div onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick?.()} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 transition cursor-pointer">
    <span className="text-gray-500 text-sm w-6">{icon}</span>
    <span className="text-lg font-medium text-gray-900">{title}</span>
  </div>
);

const SdkLogo = ({ src, alt }: any) => (
  <div className="flex items-center justify-center h-12 rounded-lg border bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition cursor-pointer">
    <img src={src} alt={alt} className="h-6 w-auto" />
  </div>
);

const ResourceItem = ({ icon, title, onClick }: any) => (
  <div onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick?.()} className="flex items-center gap-3 px-8 py-3 hover:bg-gray-50 transition cursor-pointer">
    <span className="text-gray-400 text-lg w-5 text-center">{icon}</span>
    <span className="text-lg font-semi-bold text-gray-900">{title}</span>
  </div>
);



