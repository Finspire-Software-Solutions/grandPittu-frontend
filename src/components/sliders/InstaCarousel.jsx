import { sliderProps } from "@/utils/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const InstaCarousel = () => {
  return (
    <div
      className="section gp-insta-carousel element-anim-1 scroll-animate"
      data-animate="active"
    >
      <div className="container">
        <Swiper {...sliderProps.gpInstaCarousel} className="swiper-container">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal1.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal2.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal3.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal4.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal5.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal6.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal1.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal2.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal3.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal4.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal5.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image gp-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal6.webp" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default InstaCarousel;
