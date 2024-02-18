import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Tailored Solutions",
    description:
      "We understand that every business is unique. Our solutions are customized to align with your specific goals, ensuring maximum impact and relevance.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Cutting-Edge Technology",
    description:
      "We stay at the forefront of technological advancements. Our team leverages the latest tools and methodologies to deliver state-of-the-art analytics solutions.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Data Security",
    description:
      "Your data's security is our top priority. We implement robust measures to safeguard your information, providing you with peace of mind.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function WhyDataFish() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why DataFish Labs?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Here are a few reasons why DataFish Labs is the right choice for
            your data analytics needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
