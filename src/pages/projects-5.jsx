import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

import PageBanner from "@components/PageBanner";

const ProjectsGrid = dynamic( () => import("@components/ProjectsGrid"), { ssr: false } );

const Portfolio5 = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Our Products"} pageDesc={"Our dedication to quality has positioned our products at the industry's zenith"} />

      <ProjectsGrid projects={props.projects} layout={"grid"} cols="3" />
      
    </Layouts>
  );
};
export default Portfolio5;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}