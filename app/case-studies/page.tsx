import DataDrivenDecisions from "../components/work/DataDrivenDecisions";
import DataInMotion from "../components/work/DataInMotion";
import IAFinancials from "../components/work/IAFinancials";
import ResponsiveInsights from "../components/work/ResponsiveInsights";
import WorkHeroSection from "../components/WorkHeroSections";

export default function Page() {
  return (
    <section className="">
      <WorkHeroSection
        heading="Case Studies"
        subheading="Check out our case studies"
      />

      <DataInMotion />

      <ResponsiveInsights />

      <DataDrivenDecisions />

      <IAFinancials />
    </section>
  );
}
