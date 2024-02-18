export default function IAFinancials() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                Case Study Four
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                IA Financial&apos;s Compass: Reporting and Compliance in the
                Modern Landscape{" "}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                IA Financial looked to create a compliance page for the various
                funds on offer to the clients by the sales team. Administrative
                and management reports about sales and compliance were also part
                of the scope.
              </p>
            </div>
          </div>
          <img
            src="/IAF.jpg"
            alt="IAF"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
