import React from "react";
import { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@/src/lib/products";
import { getSortedTeamData } from "@library/team";
import { circleText } from "@common/utilits";
import AboutSection from "@components/sections/About";
import TeamSection from "@components/sections/Team";
import VideoSection from "@components/sections/Video";
import CountersSection from "@components/sections/Counters";

const HeroSection = dynamic( () => import("@components/sections/Hero"), { ssr: false } );
const TickerSlider = dynamic( () => import("@components/sliders/Ticker"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const Home1 = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  return (
    <Layouts>
      <>
        <HeroSection />
        <CountersSection />
        <AboutSection />
        <TickerSlider />
        <TeamSection team={props.team} />
        <TestimonialSlider />
        <VideoSection />


      </>
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();
  const allTeam = getSortedTeamData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects,
      team: allTeam
    }
  }
}