import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "KPI Reports",
    description:
      "Key Performance Indicators (KPIs) are the compass guiding your business toward success. We assist you in defining a singular Key Performance Indicator (KPI) and delivering actionable insights.We assist you in defining a singular Key Performance Indicator (KPI) and delivering actionable insights.",
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        {...props}
      >
        <path d="M320-480v-80h320v80H320Zm0-160v-80h320v80H320Zm-80 240h300q29 0 54 12.5t42 35.5l84 110v-558H240v400Zm0 240h442L573-303q-6-8-14.5-12.5T540-320H240v160Zm480 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80Zm-480-80v-640 640Zm0-160v-80 80Z" />
      </svg>
    ),
  },
  {
    name: "Pattern Recognition",
    description:
      "Uncover hidden patterns and trends within your data with our advanced pattern recognition algorithms. Whether it's identifying customer behavior or optimizing operations, we turn complex datasets into meaningful narratives.",
    icon: LockClosedIcon,
  },
  {
    name: "Business Intelligence",
    description:
      "Elevate your decision-making process with our robust business intelligence solutions. We transform raw data into visually engaging reports and dashboards, making it easy for you to grasp critical insights at a glance.",
    icon: ArrowPathIcon,
  },
  {
    name: "ETL Script Development",
    description:
      "Efficient data processing is the backbone of successful analytics. We develop customized Extract, Transform, Load (ETL) scripts, ensuring seamless data integration, data cleanliness, and completeness.",
    icon: FingerPrintIcon,
  },
  {
    name: "Data Pipeline Management",
    description:
      "Streamline your data workflow with our end-to-end data pipeline solutions. From data extraction to storage and analysis, we create efficient and scalable pipelines that adapt to the evolving needs of your business.",
    icon: FingerPrintIcon,
  },
];

export default function ExpertiseSection() {
  return (
    <div className="bg-white py-24 sm:py-32 max-w-7xl mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Expertise
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a burgeoning team in the field of data analytics and
            insights, founded by seasoned data engineers and analysts with
            extensive experience in leading technology and publishing companies.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 text-justify">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`relative pl-16 ${
                  features.length - 1 === index &&
                  "col-span-2 place-items-center w-[60%] mx-auto"
                }`}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                      fill="#fff"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
