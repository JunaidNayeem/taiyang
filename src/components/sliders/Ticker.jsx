import Data from "@data/sliders/ticker.json";
import Link from "next/link";

import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const TickerSlider = () => {
  return (
    <>
      {/* Onovo Ticker */}
      <section className="onovo-section">
        {/* Ticker swiper */}
        <div className="onovo-ticker-slider gap-top-30 gap-bottom-30">
          <Swiper
            {...sliderProps.tickerSlider}
            className="swiper-container js-ticker-slider"
          >
            {Data.items.map((item, key) => (
              <SwiperSlide key={`ticker-slide-${key}`} className="swiper-slide">
                <h5 className="title onovo-text-white">
                  <Link href={item.link} style={{ fontSize: "80px" }}>
                    <span>{item.label}</span>
                  </Link>
                </h5>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TickerSlider;
