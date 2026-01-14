type FeatureCardProps = {
  title: string;
  desc: string;
  image: string;
  large?: boolean;
};

const FeatureCard = ({
  title,
  desc,
  image,
  large = false,
}: FeatureCardProps) => {
  return (
    <div
      className={`
        group relative rounded-2xl
        border border-blue-400/30
        bg-white/5 backdrop-blur-md
        overflow-hidden
        transition-all duration-300
        hover:border-blue-400/60
        hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
        ${large ? "md:col-span-2" : ""}
      `}
    >
      <div className="p-6 h-full flex flex-col justify-between">

        {/* IMAGE */}
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="
              w-full object-cover rounded-lg
              transition-transform duration-500 ease-out
              group-hover:scale-105
            "
          />
        </div>

        {/* CONTENT */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-blue-100 leading-relaxed">
            {desc}
          </p>

          <span className="mt-4 inline-block text-sm font-semibold text-blue-300 hover:underline cursor-pointer">
            Learn more →
          </span>
        </div>

      </div>
    </div>
  );
};

export default FeatureCard;
