import { 
  useGlobalData, 
  usePageContent, 
  useMenuData, 
  useServicesData 
} from "@/hooks/useCMSData";
import { 
  LoadingSpinner, 
  ErrorMessage, 
  CMSTitles, 
  CMSButton, 
  CMSContent,
  CMSImage
} from "@/components/cms/CMSComponents";
import TestimonialsCarousel from "@/components/sliders/TestimonialsCarousel";
import MainSlider from "@/components/sliders/MainSlider";
import Layouts from "@/layouts/Layouts";
import { Link } from "react-router-dom";

const Index2 = () => {
  const { globalData } = useGlobalData();
  const { content: homeContent, loading: homeLoading } = usePageContent('home');
  const { content: ctaContent, loading: ctaLoading } = usePageContent('home', 'cta');
  const { menuItems, categories, loading: menuLoading } = useMenuData();
  const { services, loading: servicesLoading } = useServicesData();

  const loading = homeLoading || ctaLoading || menuLoading || servicesLoading;

  if (loading) return <LoadingSpinner message="Loading page content..." />;

  return (
    <Layouts>
      {/* Section Started Slider */}
      <MainSlider />
      
      {/* Section Category */}
      <section className="section gp-category">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="gp-category-items element-anim-1 scroll-animate" data-animate="active">
                {categories.slice(0, 6).map(cat => (
                  <div className="gp-category-item" key={cat.id}>
                    <div className="image gp-image-hover">
                      <Link to="/menu-restaurant">
                        <CMSImage 
                          image={cat.attributes.image} 
                          alt={cat.attributes.name}
                        />
                      </Link>
                    </div>
                    <div className="desc">
                      <h5 className="name">{cat.attributes.name}</h5>
                    </div>
                  </div>
                ))}
                <div>Popular Categories</div>
                <CMSTitles 
                  title={homeContent?.attributes?.categoryTitle || "Choose Your Favourite Food From Categories"}
                />
              </div>
              <CMSContent 
                content={homeContent?.attributes?.categoryDescription || "Explore our diverse menu of authentic Tamil dishes, each prepared with traditional recipes passed down through generations."}
              />
              <CMSButton 
                text={homeContent?.attributes?.categoryButtonText || "explore more Category"}
                link="/menu-restaurant"
                className="gp-btn element-anim-1 scroll-animate"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Menu */}
      <section className="section gp-menu-classic section-bg">
        <div className="container">
          <CMSTitles 
            subtitle={homeContent?.attributes?.menuSubtitle || "Jaffna Tamil Specialties"}
            title={homeContent?.attributes?.menuTitle || "Discover the Flavors of Northern Sri Lanka"}
            alignment="align-center"
          />
          <div className="gp-menu-grid" style={{ background: "var(--gp-bg, #fff)" }}>
            <div className="gp-menu-row">
              {menuItems.slice(0, 3).map(item => (
                <div className="gp-menu-card" key={item.id}>
                  <CMSImage 
                    image={item.attributes.image}
                    alt={item.attributes.name}
                    className="gp-menu-img"
                  />
                  <div className="gp-menu-content">
                    <h4 className="gp-menu-title">{item.attributes.name}</h4>
                    <p className="gp-menu-desc">{item.attributes.description}</p>
                    <div className="gp-menu-price">
                      {item.attributes.price && `Rs. ${item.attributes.price}`}
                    </div>
                  </div>
                </div>
              ))}
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
      <section className="section gp-about-2 section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <CMSTitles 
                subtitle={homeContent?.attributes?.aboutSubtitle || "About Grandpittu"}
                title={homeContent?.attributes?.aboutTitle || "Have Nice & Enjoyable Time With Our Foods"}
              />
              <CMSContent 
                content={homeContent?.attributes?.aboutDescription || "At Grandpittu, we celebrate the vibrant heritage of Sri Lankan Tamil tradition. Our kitchen is inspired by the flavors, warmth, and hospitality of the North."}
              />
              <CMSButton 
                text={homeContent?.attributes?.aboutButtonText || "explore more us"}
                link="/about"
                className="gp-btn element-anim-1 scroll-animate"
              />
            </div>
            <div className="col-lg-6 offset-lg-1 align-self-center">
              <div className="gp-services-items-2 row">
                {services.slice(0, 4).map(service => (
                  <div className="col-lg-6" key={service.id}>
                    <div className="gp-services-item-2 element-anim-1 scroll-animate" data-animate="active">
                      <div className="image">
                        <CMSImage 
                          image={service.attributes.image}
                          alt={service.attributes.name}
                        />
                      </div>
                      <div className="desc">
                        <h5 className="name">{service.attributes.name}</h5>
                        <div className="subname">{service.attributes.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
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
        style={{ backgroundImage: `url(${ctaContent?.attributes?.backgroundImage?.url || 'images/cta_bg.jpg'})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <CMSTitles 
                subtitle={ctaContent?.attributes?.subtitle || "Need a Table On Grandpittu"}
                title={ctaContent?.attributes?.title || "Booking Table For Your & Family Members"}
                className="gp-titles"
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

export default Index2;
