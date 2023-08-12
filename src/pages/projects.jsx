import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

import PageBanner from "@components/PageBanner";

import PricingSection from "@components/sections/Pricing"
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";

const ProjectsGrid = dynamic( () => import("@components/ProjectsGrid"), { ssr: false } );

const Portfolio = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Our Products"} pageDesc={"Our dedication to quality has positioned our products at the industry's zenith."} />
      
      <PricingSection hiddenHeading />
      
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}



const Pricing = () => {
  return (
    <Layouts contactButton cartButton>
      <PageBanner pageTitle={"Pricing Plans"} pageDesc={"It helps you choose prices to maximise."} />
      
      <PricingSection hiddenHeading />

      <CallToActionSection />

      <PartnersSection paddingTop />

    </Layouts>
  );
};