import TestimonialsCarousel from "@/components/sliders/TestimonialsCarousel";

import Layouts from "@/layouts/Layouts";
import { sliderProps } from "@/utils/sliderProps";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const Index2 = () => {
  return (
    <Layouts>
      {/* Section Started Slider */}
      <section className="section gp-started-slider">
        <Swiper
          {...sliderProps.mainSliderSelector}
          className="swiper-container"
        >
          <div className="swiper-wrapper">
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
                      <Link href="reservation" className="gp-btn dark-btn">
                        <span>get delivery</span>
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
        // style={{ backgroundImage: "url(images/category_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="gp-category-items element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="gp-category-item">
                  <div className="image gp-image-hover">
                    <Link href="menu-restaurant">
                      <img src="images/category1.jpg" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">Traditional pittu</h5>
                  </div>
                </div>
                <div className="gp-category-item">
                  <div className="image gp-image-hover">
                    <Link href="menu-restaurant">
                      <img src="images/category2.jpg" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">Vegetarian special</h5>
                  </div>
                </div>
                <div className="gp-category-item">
                  <div className="image gp-image-hover">
                    <Link href="menu-restaurant">
                      <img src="images/category3.jpg" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">Seafood Platter</h5>
                  </div>
                </div>
                <div className="gp-category-item">
                  <div className="image gp-image-hover">
                    <Link href="menu-restaurant">
                      <img src="images/category4.jpg" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">Chicken fiesta</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
              <div className="gp-titles">
                <div
                  className="gp-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Popular Categories
                </div>
                <h3
                  className="gp-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Choose Your Favourite Food <br />
                  From Categories
                </h3>
              </div>
              <div
                className="gp-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Experience the rich heritage of Sri Lankan Tamil cuisine through our most beloved categories. From the time-honored flavors of traditional pittu to vibrant vegetarian dishes, fresh seafood platters, and festive chicken specialties, every bite celebrates the warmth and culture of the Tamil community. Discover authentic tastes and traditions—explore our menu and savor the spirit of the North!
                </p>
              </div>
              <Link
                href="menu-restaurant"
                className="gp-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more Category</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section Menu */}
      <section className="section gp-menu-classic section-bg">
        <div className="container">
          <div className="gp-titles align-center">
            <div className="gp-subtitle element-anim-1 scroll-animate" data-animate="active">
              Jaffna Tamil Specialties
            </div>
            <h3 className="gp-title element-anim-1 scroll-animate" data-animate="active">
              Discover the Flavors of Northern Sri Lanka
            </h3>
          </div>
          <div className="gp-menu-grid" style={{ background: "var(--gp-bg, #fff)" }}>
            <div className="gp-menu-row">
              <div className="gp-menu-card">
                <img src="images/odiyal_kool.jpg" alt="Odiyal Kool" className="gp-menu-img" />
                <div className="gp-menu-content">
                  <h4 className="gp-menu-title">Odiyal Kool</h4>
                  <p className="gp-menu-desc">A hearty seafood stew with crab, prawns, fish, cuttlefish, palmyrah flour, and local greens. A true taste of Jaffna tradition.</p>
                </div>
              </div>
              <div className="gp-menu-card">
                <img src="images/crab_curry.jpg" alt="Jaffna Crab Curry" className="gp-menu-img" />
                <div className="gp-menu-content">
                  <h4 className="gp-menu-title">Jaffna Crab Curry</h4>
                  <p className="gp-menu-desc">Spicy and aromatic crab cooked in roasted spices, coconut milk, and tamarind. Famous for its bold flavors.</p>
                </div>
              </div>
              <div className="gp-menu-card">
                <img src="images/aattukari_soru.jpg" alt="Aattukari Soru" className="gp-menu-img" />
                <div className="gp-menu-content">
                  <h4 className="gp-menu-title">Aattukari Soru</h4>
                  <p className="gp-menu-desc">A unique mutton rice dish blending Jaffna spices and Muslim culinary influences. Rich, fragrant, and deeply satisfying.</p>
                </div>
              </div>
            </div>
            <div className="gp-menu-row">
              <div className="gp-menu-card">
                <img src="images/pittu.jpg" alt="Pittu" className="gp-menu-img" />
                <div className="gp-menu-content">
                  <h4 className="gp-menu-title">Pittu</h4>
                  <p className="gp-menu-desc">Steamed cylinders of rice flour and coconut, served with curries or sweet accompaniments. A staple of Tamil tradition.</p>
                </div>
              </div>
              <div className="gp-menu-card">
                <img src="images/fish_kulambu.jpg" alt="Fish Kulambu" className="gp-menu-img" />
                <div className="gp-menu-content">
                  <h4 className="gp-menu-title">Fish Kulambu</h4>
                  <p className="gp-menu-desc">A spicy fish curry with a Jaffna twist, featuring fresh fish simmered in a blend of local spices and tamarind.</p>
                </div>
              </div>
              <div className="gp-menu-card">
                <img src="images/idiyappam.jpg" alt="Idiyappam" className="gp-menu-img" />
                <div className="gp-menu-content">
                  <h4 className="gp-menu-title">Idiyappam</h4>
                  <p className="gp-menu-desc">Soft string hoppers made from rice flour, perfect with coconut milk or spicy curries. A breakfast favorite in Jaffna homes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Section About-2 */}
      <section
        className="section gp-about-2 section-bg"
        // style={{ backgroundImage: "url(images/category_bg.jpg)" }}
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
                  At Grandpittu, we celebrate the vibrant heritage of Sri Lankan Tamil tradition. Our kitchen is inspired by the flavors, warmth, and hospitality of the North—where every meal is a reflection of centuries-old recipes, family gatherings, and the spirit of togetherness. From the aroma of freshly ground spices to the comfort of authentic dishes, we invite you to experience the true essence of Tamil culture in every bite.
                </p>
              </div>
              {/* <div className="gp-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon2.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">100% ISO Certification</h5>
                      <div className="subname">
                        Sed ut perspiciatis unde omnis iste natus error
                        voluptate accusantium doloremque
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
              <Link
                href="about"
                className="gp-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more us</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1 align-self-center">
              <div className="gp-services-items-2 row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="gp-services-item-2 element-anim-1 scroll-animate" data-animate="active">
                    <div className="image">
                      <img src="images/gummy.png" alt="Palmyrah Sweets" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Palmyrah Sweets & Snacks</h5>
                      <div className="subname">Delight in traditional Jaffna sweets and snacks made from palmyrah fruit, jaggery, and coconut—an authentic taste of Tamil heritage.</div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="gp-services-item-2 element-anim-1 scroll-animate" data-animate="active">
                    <div className="image">
                      <img src="images/fresh.png" alt="Fresh Foods" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Farm-Fresh Tamil Produce</h5>
                      <div className="subname">Locally sourced vegetables, fruits, and herbs, bringing the freshness of Jaffna’s fields to your table every day.</div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="gp-services-item-2 element-anim-1 scroll-animate" data-animate="active">
                    <div className="image">
                      <img src="images/chef.png" alt="Skilled Chefs" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Skilled Tamil Chefs</h5>
                      <div className="subname">Our chefs are masters of Sri Lankan Tamil cuisine, blending tradition and creativity to craft memorable dining experiences.</div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="gp-services-item-2 element-anim-1 scroll-animate" data-animate="active">
                    <div className="image">
                      <img src="images/orange-juice.png" alt="Organic Juice" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Herbal & Organic Juices</h5>
                      <div className="subname">Refreshing drinks made from native fruits and herbs, inspired by Tamil wellness traditions and natural ingredients.</div>
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
        className="section gp-cta gp-parallax"
        style={{ backgroundImage: "url(images/cta_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="gp-titles">
                <div
                  className="gp-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Need a Table On Grandpittu
                </div>
                <h3
                  className="gp-title-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Booking Table For Your &amp; Family Members
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="reservation"
                className="gp-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>booking table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section Insta Carousel
      <InstaCarousel /> */}
      
    </Layouts>
  );
};
export default Index2;
