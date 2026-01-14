const Illuminate = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Badge */}
                <div className="flex justify-center mb-4">
                    <span className="bg-red-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                        New premium add-on
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    PubNub Illuminate: Real-Time Intelligence
                </h1>

                <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
                    Go beyond messaging with AI-powered real-time decision making. Process
                    live data streams and trigger instant actions across your entire
                    application ecosystem.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
                    {/* LEFT : Discover Card (50%) */}
                    <div className="bg-white rounded-2xl border shadow-sm p-8 hover:shadow-md transition flex flex-col">
                        <h3 className="font-semibold text-xl mb-2">
                            Discover Illuminate
                        </h3>
                        <p className="text-gray-600 text-sm mb-5">
                            Watch how real-time intelligence transforms user experiences with
                            instant, automated responses to live data.
                        </p>

                        {/* Video */}
                        <div className="relative rounded-xl overflow-hidden border mb-5 flex-1">
                            <img
                                src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                                alt="Discover Illuminate"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition">
                                    <span className="text-white text-2xl ml-1">▶</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm">
                            Perfect for content moderation, fraud detection, personalization engines,
                            real-time recommendations, and automated user engagement.
                        </p>
                    </div>

                    {/* RIGHT : Features + CTA (50%) */}
                    <div className="flex flex-col gap-6">
                        {/* Features */}
                        <div className="bg-white rounded-2xl border shadow-sm p-8 hover:shadow-md transition">
                            <h3 className="font-semibold text-xl mb-4">Illuminate</h3>

                            <ul className="space-y-4 text-sm text-gray-700">
                                <li className="flex gap-3">
                                    <span className="text-red-600 text-lg">✦</span>
                                    Turn live app data into real-time metrics and actionable insights
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-red-600 text-lg">✦</span>
                                    Decision rules that trigger alerts, rewards, and prompts — no coding required
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-red-600 text-lg">✦</span>
                                    Act instantly with real-time decisioning to boost engagement,
                                    personalization, and monetization
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="bg-white rounded-2xl border shadow-sm p-8 hover:shadow-md transition">
                            <h3 className="font-semibold text-xl mb-2">
                                Try Illuminate Free
                            </h3>
                            <p className="text-gray-600 text-sm mb-6">
                                Get full access to all features for 2 weeks — no setup required.
                                Instantly generate a custom demo tailored to your use case.
                            </p>

                            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition">
                                Start Free Trial
                            </button>

                            <p className="text-xs text-gray-500 mt-4 text-center">
                                Illuminate is available as an add-on to any PubNub plan.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Illuminate;
