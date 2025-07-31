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
              
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to the Grandpittu</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  The London <br />
                  Coffee House
                </h2>
                <div className="gp-bts">
                  <Link to="menu-restaurant" className="gp-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link to="reservation" className="gp-btn dark-btn">
                    <span>get delivery</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="gp-started-item">
            <div
              className="slide js-parallax"
              
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to the Grandpittu</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  The Paris
                  <br />
                  Coffee House
                </h2>
                <div className="gp-bts">
                  <Link to="menu-coffee" className="gp-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link to="reservation" className="gp-btn dark-btn">
                    <span>get delivery</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="gp-started-item">
            <div
              className="slide js-parallax"
   
            />
            <div className="container">
              <div className="description align-left">
                <div className="subtitles">Welcome to the Grandpittu</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  Great Coffee <br />
                  Good Vibes
                </h2>
                <div className="gp-bts">
                  <Link to="menu-coffee" className="gp-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link to="reservation" className="gp-btn dark-btn">
                    <span>get delivery</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
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
