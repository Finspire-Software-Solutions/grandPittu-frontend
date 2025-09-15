import { useSliderData } from "@/hooks/useCMSData";
import { LoadingSpinner, ErrorMessage, CMSButton } from "@/components/cms/CMSComponents";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MainSlider = () => {
  const { slides, loading, error } = useSliderData();

  if (loading) return <LoadingSpinner message="Loading slider..." />;
  if (error) return <ErrorMessage error={error} />;

  // Fallback slides if CMS data is not available
  const fallbackSlides = [
    {
      id: 1,
      attributes: {
        subtitle: "Welcome to the Grandpittu",
        title: "Northern Flavours.\nColombo Vibe.",
        buttonText: "explore more",
        buttonLink: "/menu-restaurant",
        backgroundImage: { url: "images/started_img7.jpg" }
      }
    },
    {
      id: 2,
      attributes: {
        subtitle: "Welcome to the Grandpittu",
        title: "Jaffna's Heart\nin Every Bite",
        buttonText: "explore more",
        buttonLink: "/menu-restaurant",
        backgroundImage: { url: "images/started_img_n3.jpg" }
      }
    },
    {
      id: 3,
      attributes: {
        subtitle: "Welcome to the Grandpittu",
        title: "True Tamil Food\nfrom the North",
        buttonText: "explore more",
        buttonLink: "/menu-restaurant",
        backgroundImage: { url: "images/started_img6.jpg" }
      }
    }
  ];

  const displaySlides = slides?.length > 0 ? slides : fallbackSlides;

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
        {displaySlides.map((slide) => {
          const attrs = slide.attributes;
          return (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <div className="gp-started-item">
                <div
                  className="slide js-parallax"
                  style={{ backgroundImage: `url(${attrs.backgroundImage?.url})` }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">{attrs.subtitle}</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                      {attrs.title?.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < attrs.title.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </h2>
                    <div className="gp-bts">
                      <CMSButton 
                        text={attrs.buttonText || "explore more"}
                        link={attrs.buttonLink || "/menu-restaurant"}
                        className="gp-btn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="mainSlider-prev swiper-button-prev" />
      <div className="mainSlider-next swiper-button-next" />
    </section>
  );
};

export default MainSlider;



