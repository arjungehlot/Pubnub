type StatCardProps = {
    big: string;
    title: string;
    desc?: string;
    muted?: boolean;
};

const StatCard = ({ big, title, desc, muted }: StatCardProps) => {
    return (
        <div
            className={`
        rounded-xl border border-blue-400/40
        bg-white/5 backdrop-blur-md
        px-8 py-6
        transition-all duration-300
        hover:border-blue-400/70
        hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
        ${muted ? "opacity-70" : ""}
      `}
        >
            <div className="flex items-start gap-6">

                {/* BIG NUMBER */}
                <div className="text-4xl lg:text-5xl font-bold">
                    {big.split("").map((char, index) => {
                        const isSymbol = /[^a-zA-Z0-9.]/.test(char);

                        return (
                            <span
                                key={index}
                                className={isSymbol ? "text-orange-500" : "text-white"}
                            >
                                {char}
                            </span>
                        );
                    })}
                </div>

                {/* TEXT */}
                <div>
                    <p className="text-lg font-semibold text-white">
                        {title}
                    </p>

                    {desc && (
                        <p className="mt-1 text-xs text-blue-100">
                            {desc}
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
};

export default StatCard;

const splitStat = (value: string) => {
    const symbolMatch = value.match(/^[^0-9]+|[^a-zA-Z0-9]+$/g);
    const symbol = symbolMatch ? symbolMatch[0] : "";
    const number = value.replace(symbol, "");

    return { symbol, number };
};
