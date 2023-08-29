import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@library/services";

import CountUp from "react-countup";
import { circleText } from "@common/utilits";
import Data from "@data/sliders/ticker.json";

import PageBanner from "@components/PageBanner";
import Team2Section from "@components/sections/Team2";
import PartnersSection from "@components/sections/Partners";
import AwardsSection from "@components/sections/Awards";
import Services4Section from "@components/sections/Services4";

const HistorySlider = dynamic(() => import("@components/sliders/History"), {
  ssr: false,
});
const Testimonial2Slider = dynamic(
  () => import("@components/sliders/Testimonial2"),
  { ssr: false }
);

const About = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add("active");
    let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute("src", videoUrl);
  };

  return (
    <Layouts>
      <PageBanner
        pageTitle={"About Us"}
        pageDesc={
          "A customer-centric company specializing in global trade, offering best technological products and comprehensive solutions."
        }
      />

      {/* Onovo About */}
      <section className="onovo-section gap-top-140 gap-bottom-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* Heading */}
              <div className="onovo-heading gap-bottom-60">
                <div className="onovo-subtitle-1">
                  <span> Welcome to Taiyang </span>
                </div>
                <h2 className="onovo-title-2">
                  <span style={{ textAlign: "justify" }}>
                    A Diverse Company Transforming Global Commerce with Dynamic
                    Products and Solutions.
                  </span>
                </h2>
                <div className="onovo-text">
                  <p style={{ textAlign: "justify" }}>
                    Taiyang is a dynamic and rapidly expanding start-up that
                    specializes in import and export, product sourcing, and
                    e-commerce sales. We have a specific focus on premium-grade
                    electronics, tech & IT products, computer parts, components,
                    and peripherals. Additionally, we engage in wholesale
                    trading of finished and unfinished goods, including
                    clothing, textiles, related items, and other fashion
                    products and accessories.
                    <br />
                    <br /> Headquartered in the heart of Singapore, our
                    strategic location provides us a distinct advantage in the
                    ever-evolving global market. Our dedication to excellence
                    drives us to meticulously curate an exceptional range of
                    products. Our team of experts diligently handpicks each
                    product, ensuring that only top-notch, premium-grade items
                    make it into our inventory.
                    <br />
                    <br />
                    At our core, we are an import-export and trading business
                    with a clear vision for the future. However, we understand
                    that our expertise extends beyond our primary sector.
                    Embracing this potential, we also offer a diverse range of
                    services to cater to the evolving needs of our clients.
                    Drawing inspiration from the rich cultural symbolism of the
                    term "Taiyang," which translates to "sun" in Chinese, we
                    aspire to leave a lasting impact on diverse industries, not
                    only in Singapore but also across international borders.
                    Much like the sun's warmth and vitality, we seek to
                    revolutionize the world of international trade by seamlessly
                    connecting consumers worldwide with new and premium-quality
                    products. Apart from our exceptional products, we also
                    provide top-notch business management consulting, Sales &
                    Marketing Consulting, IT consulting, and cybersecurity
                    solutions to safeguard businesses from modern-day threats.
                    <br />
                    <br />
                    Our team of creative minds excels in executive coaching,
                    visioning strategy, Cyber Strategy, Digital Commerce,
                    branding, design, and marketing services. This empowers our
                    clients to make a significant impact. With a firm belief in
                    our abilities and a passion for innovation, we look forward
                    to embracing new challenges and achieving success across
                    various sectors. Just as "Taiyang" guides and enlightens, we
                    are committed to delivering excellence in everything we do,
                    ensuring that our clients can trust us as their reliable
                    partners on their journey to growth and prosperity. Our name
                    reflects our mission as we strive to shine brightly in the
                    world of international trade, bringing light and energy to
                    our clients' businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Numbers items */}
          <div className="row gap-row gap-bottom-50">
            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="10"
                >
                  <CountUp
                    end="10"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> Countries Served </div>
              </div>
            </div>
            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="05"
                >
                  <CountUp
                    end="50"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> Projects Delivered </div>
              </div>
            </div>

            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="250"
                >
                  <CountUp
                    end="250"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> Products </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="onovo-video" data-onovo-overlay data-onovo-scroll>
            <div
              className="image"
              onClick={(e) => clickedVideoButton(e)}
              style={{ backgroundImage: "url(/images/ipo.jpg)" }}
            />
          </div>

          {/* Description */}
          <div className="row gap-top-100">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">Our Mission</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              Our mission is to provide cutting-edge and reliable computer parts
              that empower individuals and businesses to achieve their full
              potential in the digital world. We are committed to delivering
              exceptional quality, innovative technology, and unparalleled
              customer support.
            </div>
          </div>

          {/* Description */}
          <div className="row gap-top-60">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">Our Goal</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              Maintain a leading position in technological innovation by
              investing in research and development, exploring emerging
              technologies, and introducing groundbreaking products to the
              market.
            </div>
          </div>
        </div>
      </section>

      <Testimonial2Slider />

      <PartnersSection />
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData();

  return {
    props: {
      team: allTeam,
      services: allServices,
    },
  };
}
