import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@/src/lib/products";

import PageBanner from "@components/PageBanner";

const ProjectsGrid = dynamic( () => import("@components/ProjectsGrid"), { ssr: false } );

const Portfolio = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Our Products"} pageDesc={"Creative studio at the intersection of art, designed technology."} />

      <ProjectsGrid projects={props.projects} layout={"grid"} masonry />
      
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