import React, { useMemo, useState } from "react";

/* ----------------------------------
   Types
----------------------------------- */
interface CaseStudy {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
}

const ALL_CASES: CaseStudy[] = Array.from({ length: 58 }).map((_, i) => ({
    id: i + 1,
    title: `Company ${i + 1}`,
    description:
        "This company uses real-time communication to deliver scalable digital experiences.",
    image:
        "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F80dce197f77c439e86f8000b84d8537e",
    tags: ["In-App chat", "Push notifications", "Live entertainment"],
}));

const SOLUTIONS = [
    "In-App chat",
    "Geolocation",
    "Virtual events",
    "Push notifications",
    "IoT",
];

const USE_CASES = [
    "Gaming",
    "Telemedicine",
    "E-Learning",
    "Live entertainment",
    "Fleet transportation/delivery",
    "Marketplaces",
    "Real-Time data & dashboard",
];

const ITEMS_PER_PAGE = 9;

const WorldRunsOnPubNubSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"All" | "Solution" | "Use case">(
        "All"
    );
    const [openDropdown, setOpenDropdown] = useState<
        null | "Solution" | "Use case"
    >(null);
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(ALL_CASES.length / ITEMS_PER_PAGE);

    const currentItems = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return ALL_CASES.slice(start, start + ITEMS_PER_PAGE);
    }, [page]);

    return (
        <section className="w-full bg-white py-9 md:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-16 max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        The world runs on PubNub
                    </h2>
                    <p className="mt-4 text-sm text-gray-600">
                        See how over 2000 companies are building digital products—websites,
                        apps, devices—with real-time communication at their core.
                    </p>
                </div>

                {/* Tabs */}
                <div className="relative mb-10 flex gap-10 border-b">
                    {/* All */}
                    <button
                        onClick={() => {
                            setActiveTab("All");
                            setOpenDropdown(null);
                            setPage(1);
                        }}
                        className={`pb-3 text-sm font-medium ${activeTab === "All"
                                ? "border-b-2 border-red-500 text-red-600"
                                : "text-gray-500 hover:text-gray-800"
                            }`}
                    >
                        All
                    </button>

                    {/* Solution */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setActiveTab("Solution");
                                setOpenDropdown(
                                    openDropdown === "Solution" ? null : "Solution"
                                );
                            }}
                            className={`flex items-center gap-1 pb-3 text-sm font-medium ${activeTab === "Solution"
                                    ? "border-b-2 border-red-500 text-red-600"
                                    : "text-gray-500 hover:text-gray-800"
                                }`}
                        >
                            Solution
                            <span
                                className={`transition-transform ${openDropdown === "Solution" ? "rotate-180" : ""
                                    }`}
                            >
                                ▾
                            </span>
                        </button>

                        {openDropdown === "Solution" && (
                            <div className="absolute left-0 top-full z-20 mt-3 w-56 rounded-xl bg-white p-3 shadow-xl">
                                {SOLUTIONS.map((item) => (
                                    <div
                                        key={item}
                                        className="cursor-pointer rounded-lg px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Use Case */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setActiveTab("Use case");
                                setOpenDropdown(
                                    openDropdown === "Use case" ? null : "Use case"
                                );
                            }}
                            className={`flex items-center gap-1 pb-3 text-sm font-medium ${activeTab === "Use case"
                                    ? "border-b-2 border-red-500 text-red-600"
                                    : "text-gray-500 hover:text-gray-800"
                                }`}
                        >
                            Use case
                            <span
                                className={`transition-transform ${openDropdown === "Use case" ? "rotate-180" : ""
                                    }`}
                            >
                                ▾
                            </span>
                        </button>

                        {openDropdown === "Use case" && (
                            <div className="absolute left-0 top-full z-20 mt-3 w-72 rounded-xl bg-white p-3 shadow-xl">
                                {USE_CASES.map((item) => (
                                    <div
                                        key={item}
                                        className="cursor-pointer rounded-lg px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {currentItems.map((item) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            <div className="p-6">
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-red-50 px-3 py-1 text-xs text-red-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer / Pagination */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* Results text */}
                    <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                        Showing {(page - 1) * ITEMS_PER_PAGE + 1} to{" "}
                        {Math.min(page * ITEMS_PER_PAGE, ALL_CASES.length)} of{" "}
                        {ALL_CASES.length} results
                    </p>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">

                        {/* Prev */}
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((p) => p - 1)}
                            className="rounded-md bg-gray-100 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm disabled:opacity-50"
                        >
                            ←
                        </button>

                        {Array.from({ length: totalPages }).map((_, i) => {
                            const pageNum = i + 1;

                            // MOBILE: show only first, current, last
                            if (window.innerWidth < 640) {
                                if (
                                    pageNum !== 1 &&
                                    pageNum !== page &&
                                    pageNum !== totalPages
                                )
                                    return null;
                            } else {
                                // DESKTOP: limit middle pages
                                if (pageNum > 5 && pageNum < totalPages) return null;
                            }

                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => setPage(pageNum)}
                                    className={`rounded-md px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm ${page === pageNum
                                            ? "bg-red-600 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}

                        {/* Next */}
                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage((p) => p + 1)}
                            className="rounded-md bg-gray-100 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm disabled:opacity-50"
                        >
                            →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WorldRunsOnPubNubSection;
