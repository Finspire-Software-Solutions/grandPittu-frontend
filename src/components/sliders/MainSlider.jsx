import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const MainSlider = () => {
  return (
    <section className="section gp-started-slider">
      <Swiper
        className="swiper-container"
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1000}
        parallax={true}
        watchSlidesProgress={true}
        navigation={{
          prevEl: ".mainSlider-prev",
          nextEl: ".mainSlider-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
      >
      <SwiperSlide className="swiper-slide">
              <div className="gp-started-item">
                <div
                  className="slide js-parallax"
                  style={{ backgroundImage: "url(images/started_img7.jpg)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to the Grandpittu</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                      Northern Flavours.  <br />
                      Colombo Vibe.
                    </h2>
                    <div className="gp-bts">
                      <Link href="menu-restaurant" className="gp-btn">
                        <span>explore more</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                      {/* <Link href="reservation" className="gp-btn dark-btn">
                        <span>get delivery</span>
                        <i className="fas fa-chevron-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gp-started-item">
                <div
                  className="slide js-parallax"
                  style={{ backgroundImage: "url(images/started_img_n3.jpg)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to the Grandpittu</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                     Jaffna's Heart  <br />
                    in Every Bite
                    </h2>
                    <div className="gp-bts">
                      <Link href="menu-restaurant" className="gp-btn">
                        <span>explore more</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                      {/* <Link href="reservation" className="gp-btn dark-btn">
                        <span>get delivery</span>
                        <i className="fas fa-chevron-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gp-started-item">
                <div
                  className="slide js-parallax"
                  style={{ backgroundImage: "url(images/started_img6.jpg)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to the Grandpittu</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                      True Tamil Food  <br />
                      from the North
                    </h2>
                    <div className="gp-bts">
                      <Link href="menu-restaurant" className="gp-btn">
                        <span>explore more</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                      {/* <Link href="reservation" className="gp-btn dark-btn">
                        <span>get delivery</span>
                        <i className="fas fa-chevron-right" />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
      </Swiper>
      <div className="mainSlider-prev swiper-button-prev" />
      <div className="mainSlider-next swiper-button-next" />
    </section>
  );
};
export default MainSlider;



