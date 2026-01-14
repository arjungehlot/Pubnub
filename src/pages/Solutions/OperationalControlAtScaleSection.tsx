import React from "react";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";


/* ----------------------------------
   Component
----------------------------------- */
const OperationalControlAtScaleSection: React.FC = () => {
  return (
    <section className="w-full bg-[#001244] py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT TEXT BLOCK */}
          <div className="flex flex-col justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400 mb-4">
                <ForumOutlinedIcon className="text-white text-[32px]" />
              </div>

            <div className="flex items-start gap-4">
            
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold">
                  Operational Control at Scale
                </h2>
                <p className="mt-3 text-blue-100 max-w-md">
                  Simplify the complexity of running secure, reliable chat at
                  scale.
                </p>
              </div>
            </div>
          </div>

          {/* TOP RIGHT CARD */}
          <div className="rounded-3xl bg-white/10 backdrop-blur-md overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fb6ace92572a544c6866ae36e1b00b999?width=966"
              alt="Moderation"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">
                Moderation & Role-Based Permissions
              </h3>
              <p className="mt-3 text-sm text-blue-100 leading-relaxed">
                Enforce chat policies with profanity filtering, user bans,
                message deletion, fine-grained access control, and security
                features built for compliance and user safety.
              </p>
            </div>
          </div>

          {/* BOTTOM LEFT CARD */}
          <div className="rounded-3xl bg-white/10 backdrop-blur-md overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Ff8633b0902294dc6b077a0f901110335?width=966"
              alt="Monitoring"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">
                Real-Time Channel Monitoring
              </h3>
              <p className="mt-3 text-sm text-blue-100 leading-relaxed">
                Inspect live message flow, monitor user activity, and debug
                issues in real time to stay ahead of disruptions.
              </p>
            </div>
          </div>

          {/* BOTTOM RIGHT CARD */}
          <div className="rounded-3xl bg-white/10 backdrop-blur-md overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F1cd2afb7400f483eb543e627876f5767?width=966"
              alt="Presence"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">
                Presence & Typing Indicators
              </h3>
              <p className="mt-3 text-sm text-blue-100 leading-relaxed">
                Drive real-time engagement with online status, session
                tracking, and typing events—all without extra engineering
                effort.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OperationalControlAtScaleSection;
