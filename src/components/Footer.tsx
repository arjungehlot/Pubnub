import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaVimeoV,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#020c3a] text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">
              PubNub Platform
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Overview</li>
              <li>Core Services</li>
              <li>Decision Intelligence</li>
              <li>Global Network</li>
              <li>Integrations</li>
              <li>Generative AI</li>
              <li>AI MCP Server</li>
              <li>Security & Compliance</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">
              Use Case
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Chat</li>
              <li>Live Audience Engagement</li>
              <li>Multi-User Collaboration</li>
              <li>IoT Device Control</li>
              <li>Real-Time Workflows</li>
              <li>Geolocation & Dispatch</li>
              <li>Edge Messaging</li>
              <li>Event Driven Architecture</li>
              <li>LiveOps</li>
              <li>Gamification</li>
              <li>Auto-Moderation</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">
              Industry
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Sports, Media & Entertainment</li>
              <li>Digital Healthcare</li>
              <li>iGaming, Betting & Casino</li>
              <li>Gaming</li>
              <li>Enterprise SaaS</li>
              <li>Transport, Delivery & Logistics</li>
              <li>eCommerce</li>
              <li>Push Notifications</li>
              <li>Call Centers & Customer Care</li>
              <li>Social & Lifestyle</li>
              <li>FinTech</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Blog</li>
              <li>Customers</li>
              <li>Demos</li>
              <li>Tutorials</li>
              <li>eBook</li>
              <li>Glossary</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">
              About
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Our Company</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Partners</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Bug Bounty Policy</li>
              <li>Contact Us</li>
              <li>Trust Center</li>
              <li>Cookies Policy</li>
              <li>Cookie Settings</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">

          {/* Copyright */}
          <p className="text-xs text-gray-300 text-center md:text-left">
            © 2010 – 2026 PubNub Inc. All Rights Reserved. PUBNUB and the PUBNUB
            logo are trademarks or registered trademarks of PubNub Inc. in the
            U.S. and other countries.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
              <FaXTwitter />
            </span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
              <FaLinkedinIn />
            </span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
              <FaYoutube />
            </span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
              <FaVimeoV />
            </span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
              <FaInstagram />
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
