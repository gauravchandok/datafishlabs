type WorkHeroProps = {
  heading: string;
  subheading: string;
  description?: string;
};

export default function WorkHeroSection({
  heading,
  subheading,
  description,
}: WorkHeroProps) {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 max-w-7xl mx-auto">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          {subheading}
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {heading}
        </h2>
        {description?.length && (
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        )}
      </div>
    </div>
  );
}
