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
            <div className="col-lg-6">
              <CMSTitles 
                subtitle={aboutContent?.attributes?.subtitle || "About Grandpittu"}
                title={aboutContent?.attributes?.title || "Authentic Tamil Cuisine in the Heart of Colombo"}
                alignment="align-left"
              />
              <CMSContent 
                content={aboutContent?.attributes?.description || "We bring the authentic flavors of Jaffna Tamil cuisine to Colombo, celebrating our rich cultural heritage through every dish we serve."}
              />
              
              {/* Features List */}
              {aboutContent?.attributes?.features && (
                <div className="gp-choose-list">
                  <ul>
                    {aboutContent.attributes.features.map((feature, index) => (
                      <li key={index} className="element-anim-1 scroll-animate" data-animate="active">
                        <div className="icon">
                          <CMSImage 
                            image={feature.icon}
                            alt={feature.name}
                          />
                        </div>
                        <div className="desc">
                          <h5 className="name">{feature.name}</h5>
                          <div className="subname">{feature.description}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <CMSButton 
                text={aboutContent?.attributes?.menuButtonText || "View Our Menu"}
                link="/menu"
                className="gp-btn element-anim-1 scroll-animate"
              />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="gp-choose-image element-anim-1 scroll-animate" data-animate="active">
                <CMSImage 
                  image={aboutContent?.attributes?.image}
                  alt="Grandpittu Restaurant"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Video */}
      {aboutContent?.attributes?.videoBg && (
        <section className="section gp-video">
          <div className="container">
            <VideoPlayer 
              videoBg={aboutContent.attributes.videoBg.url} 
              extraClass="gp-image-hover" 
            />
          </div>
        </section>
      )}

      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Section CTA */}
      <section 
        className="section gp-cta gp-parallax" 
        style={{ 
          backgroundImage: `url(${ctaContent?.attributes?.background?.url || "images/cta_bg2.jpg"})`
        }}
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
