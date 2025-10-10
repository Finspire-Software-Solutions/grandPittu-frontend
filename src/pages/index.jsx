import RooftopItem from "@/components/items/RooftopItem";
import CategoryItem from "@/components/items/CategoryItem";
import {
  CMSButton,
  CMSTitles,
  LoadingSpinner
} from "@/components/cms/CMSComponents";
import MenuCard from "@/components/MenuCard";
import TestimonialsCarousel from "@/components/sliders/TestimonialsCarousel";
import VideoPlayer from "@/components/VideoPlayer";
import {
  useGlobalData,
  useMenuData,
  usePageContent,
  useServicesData,
} from "@/hooks/useCMSData";
import Layouts from "@/layouts/Layouts";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
  useGlobalData(); // Apply global styles
  const { content: homeContent, loading: homeLoading } = usePageContent("home");
  const { content: ctaContent, loading: ctaLoading } = usePageContent(
    "home",
    "cta"
  );
  const { menuItems, categories, loading: menuLoading } = useMenuData();
  const { services, loading: servicesLoading } = useServicesData();

  const loading = homeLoading || ctaLoading || menuLoading || servicesLoading;

  if (loading) return <LoadingSpinner message="Loading page content..." />;

  return (
    <Layouts>
      {/* Section Started Slider */}
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
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="gp-started-item">
                <div
                  className="slide js-parallax"
                  style={{ backgroundImage: "url(images/started_img7.webp)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to the Grandpittu</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                      Northern Flavours. <br />
                      Colombo Vibe.
                    </h2>
                    <div className="gp-bts">
                      <Link href="menu-restaurant" className="gp-btn">
                        <span>explore more</span>
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
                  style={{ backgroundImage: "url(images/started_img_n3.webp)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to the Grandpittu</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                      Jaffna's Heart <br />
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
                  style={{ backgroundImage: "url(images/started_img6.webp)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to the Grandpittu</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                      True Tamil Food <br />
                      from the North
                    </h2>
                    <div className="gp-bts">
                      <Link href="menu-restaurant" className="gp-btn">
                        <span>explore more</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </Swiper>
      </section>
      {/* Section Category */}
      <section
        className="section gp-category"
        // style={{ backgroundImage: "url(images/category_bg.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="gp-category-items element-anim-1 scroll-animate"
                data-animate="active"
              >
                <CategoryItem
                  image="images/category1.webp"
                  alt="Traditional pittu"
                  name="Traditional pittu"
                />
                <CategoryItem
                  image="images/category2.webp"
                  alt="Vegetarian special"
                  name="Vegetarian special"
                />
                <CategoryItem
                  image="images/category3.webp"
                  alt="Seafood Platter"
                  name="Seafood Platter"
                />
                <CategoryItem
                  image="images/category4.webp"
                  alt="Chicken fiesta"
                  name="Chicken fiesta"
                />
              </div>
             
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
              <div className="gp-titles">
                <div
                  className="gp-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Why Choose Us
                </div>
                <h3
                  className="gp-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                   Treat for your nostalgic cravings
                </h3>
              </div>
              
              <div
                className="gp-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Explore our diverse menu of authentic Tamil dishes, each
                  prepared with traditional recipes passed down through
                  generations.
                </p>
              </div>
               <CMSButton
                text={
                  homeContent?.attributes?.categoryButtonText ||
                  "explore more Category"
                }
                link="/menu-restaurant"
                className="gp-btn element-anim-1 scroll-animate"
              />
              {/* <div
                className="gp-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Explore our diverse menu of authentic Tamil dishes, each
                  prepared with traditional recipes passed down through
                  generations.
                </p>
                <CMSContent 
                content={homeContent?.attributes?.categoryDescription || "Explore our diverse menu of authentic Tamil dishes, each prepared with traditional recipes passed down through generations."}
              />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Section Video */}
      <section className="section gp-video">
        <div className="container">
          <VideoPlayer
            videoBg={""}
            extraClass={"gp-image-hover"}
          />
        </div>
      </section>

      {/* Section Menu */}
      <section className="section gp-menu-classic section-bg">
        <div className="container">
          <CMSTitles
            subtitle={
              homeContent?.attributes?.menuSubtitle ||
              "Jaffna Tamil Specialties"
            }
            title={
              homeContent?.attributes?.menuTitle ||
              "Discover the Flavors of Northern Sri Lanka"
            }
            alignment="align-center"
          />
          <div
            className="gp-menu-grid"
            style={{ background: "var(--gp-bg, #fff)" }}
          >
            <div className="gp-menu-row">
              <MenuCard
                image="images/odiyal_kool.webp"
                alt="Odiyal Kool"
                title="Odiyal Kool"
                description="A hearty seafood stew with crab, prawns, fish, cuttlefish, palmyrah flour, and local greens. A true taste of Jaffna tradition."
              />
              <MenuCard
                image="images/category1.webp"
                alt="Jaffna Crab Curry"
                title="Jaffna Crab Curry"
                description="Spicy and aromatic crab cooked in roasted spices, coconut milk, and tamarind. Famous for its bold flavors."
              />
              <MenuCard
                image="images/aattukari_soru.webp"
                alt="Aattukari Soru"
                title="Aattukari Soru"
                description="A unique mutton rice dish blending Jaffna spices and Muslim culinary influences. Rich, fragrant, and deeply satisfying."
              />
            </div>
            <div className="gp-menu-row">
              <MenuCard
                image="images/pittu.webp"
                alt="Pittu"
                title="Pittu"
                description="Steamed cylinders of rice flour and coconut, served with curries or sweet accompaniments. A staple of Tamil tradition."
              />
              <MenuCard
                image="images/category2.webp"
                alt="Fish Kulambu"
                title="Fish Kulambu"
                description="A spicy fish curry with a Jaffna twist, featuring fresh fish simmered in a blend of local spices and tamarind."
              />
              <MenuCard
                image="images/category3.webp"
                alt="Idiyappam"
                title="Idiyappam"
                description="Soft string hoppers made from rice flour, perfect with coconut milk or spicy curries. A breakfast favorite in Jaffna homes."
              />
            </div>
          </div>
          <div className="align-center">
            <CMSButton
              text={homeContent?.attributes?.menuButtonText || "View Full Menu"}
              link="/menu-restaurant"
              className="gp-btn"
            />
          </div>
        </div>
      </section>

      {/* Section About-2 */}
      <section
        className="section gp-about-2 section-bg"
        // style={{ backgroundImage: "url(images/category_bg.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
              <div className="gp-titles">
                <div
                  className="gp-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  About Grandpittu
                </div>
                <h3
                  className="gp-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Have Nice &amp; Enjoyable <br />
                  Time With Our Foods
                </h3>
              </div>
              <div
                className="gp-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  At Grandpittu, we celebrate the vibrant heritage of Sri Lankan
                  Tamil tradition. Our kitchen is inspired by the flavors,
                  warmth, and hospitality of the North—where every meal is a
                  reflection of centuries-old recipes, family gatherings, and
                  the spirit of togetherness. From the aroma of freshly ground
                  spices to the comfort of authentic dishes, we invite you to
                  experience the true essence of Tamil culture in every bite.
                </p>
              </div>
              
              <Link
                href="about"
                className="gp-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more us</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-lg-6 offset-lg-1 align-self-center">
              <div className="gp-services-items-2 row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="gp-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/gummy.webp" alt="Palmyrah Sweets" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Palmyrah Sweets & Snacks</h5>
                      <div className="subname">
                        Delight in traditional Jaffna sweets and snacks made
                        from palmyrah fruit, jaggery, and coconut—an authentic
                        taste of Tamil heritage.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="gp-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/fresh.webp" alt="Fresh Foods" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Farm-Fresh Tamil Produce</h5>
                      <div className="subname">
                        Locally sourced vegetables, fruits, and herbs, bringing
                        the freshness of Jaffna’s fields to your table every
                        day.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="gp-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/chef.webp" alt="Skilled Chefs" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Skilled Tamil Chefs</h5>
                      <div className="subname">
                        Our chefs are masters of Sri Lankan Tamil cuisine,
                        blending tradition and creativity to craft memorable
                        dining experiences.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="gp-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/orange-juice.webp" alt="Organic Juice" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Herbal & Organic Juices</h5>
                      <div className="subname">
                        Refreshing drinks made from native fruits and herbs,
                        inspired by Tamil wellness traditions and natural
                        ingredients.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Section CTA */}
      <section
        className="section gp-cta gp-category"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="gp-category-items element-anim-1 scroll-animate"
                data-animate="active"
              >
                <RooftopItem
                  image="images/gallery/rooftop (1).jpg"
                  alt=""
                  name=""
                />
                <RooftopItem
                  image="images/gallery/rooftop (2).jpg"
                  alt=""
                  name=""
                />
                <RooftopItem
                  image="images/gallery/rooftop (3).jpg"
                  alt="Seafood Platter"
                  name="Seafood Platter"
                />
                <RooftopItem
                  image="images/gallery/rooftop (4).jpg"
                  alt="Chicken fiesta"
                  name="Chicken fiesta"
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
              <div className="gp-titles">
                <div
                  className="gp-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  {ctaContent?.attributes?.subtitle || "Experience the Sky"}
                </div>
                <h3
                  className="gp-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  {ctaContent?.attributes?.title || "Pittu Rooftop Lounge"}
                </h3>
              </div>
              
              <div
                className="gp-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  {ctaContent?.attributes?.description || "Elevate your dining experience with breathtaking city views, signature cocktails, and live music at our exclusive rooftop lounge."}
                </p>
              </div>
              <CMSButton
                text={ctaContent?.attributes?.buttonText || "Experience Here"}
                link="/experience"
                className="gp-btn element-anim-1 scroll-animate"
              />
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Index;
