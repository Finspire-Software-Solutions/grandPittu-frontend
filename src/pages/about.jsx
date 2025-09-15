import { usePageContent } from "@/hooks/useCMSData";
import { LoadingSpinner, ErrorMessage, CMSTitles, CMSButton, CMSContent, CMSImage } from "@/components/cms/CMSComponents";
import VideoPlayer from "@/components/VideoPlayer";
import TestimonialsCarousel from "@/components/sliders/TestimonialsCarousel";
import Layouts from "@/layouts/Layouts";

const About = () => {
  const { content: aboutContent, loading: aboutLoading } = usePageContent('about');
  const { content: ctaContent, loading: ctaLoading } = usePageContent('about', 'cta');

  const loading = aboutLoading || ctaLoading;

  if (loading) return <LoadingSpinner message="Loading about page..." />;

  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section gp-started-inner">
        <div 
          className="gp-parallax-bg js-parallax" 
          style={{ 
            backgroundImage: `url(${aboutContent?.attributes?.backgroundImage?.url || "images/about_inner_bg.jpg"})`
          }} 
        />
        <div className="container">
          <h1 className="gp-h-title text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
            About Us
          </h1>
        </div>
      </section>

      {/* Section About */}
      <section className="section gp-about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
              <div className="gp-titles">
                <div
                  className="gp-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  About Grandpittu Restaurant
                </div>
                <h3
                  className="gp-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Experience Authentic Sri Lankan Tamil Cuisine & Heritage
                </h3>
              </div>
              <div
                className="gp-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Grandpittu is more than a restaurant—it's a celebration of Sri Lankan Tamil tradition, family, and flavor. Our recipes are passed down through generations, bringing you the true taste of Jaffna and the North. From aromatic biryanis to spicy seafood curries and sweet palmyra treats, every dish is crafted with love and authenticity. Join us for a warm, cultural dining experience that feels like home.
                </p>
              </div>
              <div className="gp-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/cooking.webp" alt="Traditional" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Traditional Recipes</h5>
                      <div className="subname">
                        Authentic dishes prepared with time-honored family methods and local spices.
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/fresh.webp" alt="Fresh" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Fresh & Local Ingredients</h5>
                      <div className="subname">
                        We source the freshest produce and seafood from local markets every day.
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/family.webp" alt="Family" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Family Atmosphere</h5>
                      <div className="subname">
                        Enjoy a welcoming space where every guest is treated like family.
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/champagne.webp" alt="Celebration" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Cultural Celebrations</h5>
                      <div className="subname">
                        Join us for Tamil festivals, special events, and traditional music nights.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="/menu-restaurant"
                className="gp-btn element-anim-1 scroll-animate"
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div
                className="gp-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/about_img2.webp" alt="Grandpittu Restaurant" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Video */}
      <section className="section gp-video">
        <div className="container">
          <VideoPlayer
            videoBg={"images/video_bg.webp"}
            extraClass={"gp-image-hover"}
          />
        </div>
      </section>
      {/* Section Services-2 */}
      {/* <section className="section gp-services">
        <div className="container">
          <div className="gp-services-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="gp-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon1.webp" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Birthday Cakes</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="gp-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon2.webp" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Fresh Foods</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="gp-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon3.webp" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Skills Chefs</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="gp-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon4.webp" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Organic Juice</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
     
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Section CTA */}
      <section
        className="section gp-cta gp-parallax"
        style={{ backgroundImage: "url(images/cta_bg.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <CMSTitles 
                subtitle={ctaContent?.attributes?.subtitle || "Experience Authentic Tamil Cuisine"}
                title={ctaContent?.attributes?.title || "Book Your Table Today"}
              />
            </div>
            <div className="col-lg-4 align-self-center align-right">
              <CMSButton 
                text={ctaContent?.attributes?.buttonText || "booking table"}
                link="/reservation"
                className="gp-btn element-anim-1 scroll-animate"
              />
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default About;
