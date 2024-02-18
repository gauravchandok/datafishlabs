export default function ResponsiveInsights() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                Case Study Two
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Responsive Insights: Cisco&apos;s Approach to Ad Hoc Reporting
                Success
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                In 2019 Cisco had urgent reporting needs to service its sales,
                marketing, and billing departments whilst supplying its
                executive-level staff with new reports detailing the progress of
                its newly launched smart licenses.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Our services involved various ad hoc requirements and delivering
                the reporting needs to completion company-wide.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Early work at Cisco consisted of meetings outlining the
                requirements into user stories, planning the development
                timeline, and working on a schedule to deliver the reports to
                production.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Our reports analyzed the trend of users migrating from
                traditional licensing to smart licensing, the billing habits of
                various clients by each quarter, and the impact on sales of
                specific campaigns the marketing team was focused on.
              </p>
            </div>
          </div>
          <img
            src="/cisco.jpg"
            alt="cisco"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
