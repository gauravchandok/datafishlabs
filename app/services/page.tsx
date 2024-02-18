import WorkHeroSection from "../components/WorkHeroSections";

const features = [
  {
    name: "Data Visualization",
    description:
      "Establishing dashboards with clickable options for drilling down allows you to observe trends and patterns within the latest data.",
  },
  {
    name: "Data Analysis",
    description:
      "Examining your company's data will uncover insights such as trends, changing patterns, and underlying issues, which can then be conveyed through reports or preferred tools.",
  },
  {
    name: "Data Migration",
    description:
      "We can assist in the seamless transfer of entire databases, store procedures, and views, along with addressing various dependencies and conducting final tests and fixes. Collaboratively, we can devise a plan for the migration phase, handle the necessary mapping for the new system, and oversee the final testing phase upon the successful completion of the entire migration process.",
  },
  {
    name: "ETL Scripting",
    description:
      "Modifying existing ETL scripts or developing new ones to align with business requirements without disrupting your current business operations.",
  },
  {
    name: "Data Pipeline",
    description:
      "Establishing a new data pipeline, starting from a new data source and extending through the creation of its processing and ETL layer, concluding with the final layer where it is utilized by a reporting tool.",
  },
  {
    name: "Statistical Modelling",
    description:
      "Harness the full potential of your data by employing predictive models and machine learning algorithms to pinpoint the appropriate market segment or forecast outcomes tailored to your business requirements.",
  },
];

export default function Page() {
  return (
    <section className="mb-40">
      <WorkHeroSection
        heading="Services"
        subheading="Check out our Services"
        description="Whether its' building a new data pipeline, conducting data mining
        for invaluable business insights, or visualizing information to enhance
        decision-making—We’ve got the expertise to assist you every step of the
        way!"
      />

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 ">
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
