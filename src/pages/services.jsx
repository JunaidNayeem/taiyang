import { useState } from 'react';

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Link from "next/link";

import { getSortedServicesData } from "@library/services";

import Services2Section from "@components/sections/Services2";
import CountersSection from "@components/sections/Counters";
import VideoSection from "@components/sections/Video";
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";

const Services = (props) => {

  return (
    <Layouts>
      <PageBanner pageTitle={"Our Services"} pageDesc={"Our values have propelled us to the forefront of our industry."} />

      <Services2Section introHidden noPaddingBottom />

      <CountersSection />

      <VideoSection />
      
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}