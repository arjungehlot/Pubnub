type IndustryCardProps = {
  tag: string;
  image: string;
  title: string;
  desc: string;
};

const IndustryCard = ({ tag, image, title, desc }: IndustryCardProps) => {
  return (
    <div className="group rounded-2xl border border-blue-200 bg-white overflow-hidden hover:shadow-lg transition">

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover
                     transition-transform duration-500 ease-out
                     group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Tag */}
        <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>

        <a
          href="#"
          className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:underline"
        >
          Read their story →
        </a>
      </div>
    </div>
     
  );
};

export default IndustryCard;
