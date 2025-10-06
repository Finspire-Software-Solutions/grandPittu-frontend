import { CMSButton, CMSTitles, ErrorMessage, LoadingSpinner } from "@/components/cms/CMSComponents";
import { Link } from "react-router-dom";
import PhotoGalleryIsotope from "@/components/PhotoGalleryIsotope";
import { useGalleryData, usePageContent } from "@/hooks/useCMSData";
import Layouts from "@/layouts/Layouts";

// Rooftop-specific image data
const rooftopImages = [
  {
    id: "rooftop-1",
    image: "rooftop_view1.webp",
    category: "rooftop"
  },
  {
    id: "rooftop-2", 
    image: "rooftop_view2.webp",
    category: "rooftop"
  },
  {
    id: "rooftop-3",
    image: "rooftop_dining1.webp", 
    category: "rooftop"
  },
  {
    id: "rooftop-4",
    image: "rooftop_dining2.webp",
    category: "rooftop"
  },
  {
    id: "rooftop-5",
    image: "rooftop_event1.webp",
    category: "rooftop"
  },
  {
    id: "rooftop-6",
    image: "rooftop_event2.webp",
    category: "rooftop"
  }
];

const Rooftop = () => {
  const { galleryImages, loading: galleryLoading, error: galleryError } = useGalleryData();
  const { content: ctaContent, loading: ctaLoading } = usePageContent('roofTop', 'cta');

  const loading = galleryLoading || ctaLoading;

  if (loading) return <LoadingSpinner message="Loading..." />;
  if (galleryError) return <ErrorMessage error={galleryError} />;

  return (
    <Layouts>
      {/* Rooftop Experience Section */}
      <section className="section gp-rooftop-experience">
        <div className="container text-center py-5">
          <h2 className="display-4 fw-bold mb-3">
            Grand Pittu Rooftop Experience
          </h2>
          <p className="lead mb-4">
            Enjoy breathtaking city views, curated ambience, and exclusive
            rooftop events. Our rooftop offers a unique dining experience with
            signature cocktails, live music, and a special menu crafted for
            memorable evenings.
          </p>
          <ul className="list-unstyled mb-4">
            <li>🌇 Panoramic city views</li>
            <li>🎶 Blend with nature vibe</li>
            <li>🍸 Rooftop-exclusive menu & cocktails</li>
            <li>✨ Elegant, cozy ambience</li>
          </ul>
          <div className="gp-bts">
            <Link to="/contact" className="gp-btn">
              <span>Call us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Gallery with rooftop-specific images */}
      <PhotoGalleryIsotope images={rooftopImages} />

      {/* Section CTA */}
      <section
        className="section gp-cta gp-parallax"
        style={{ backgroundImage: "url(images/cta_bg3.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <CMSTitles
                subtitle={
                  ctaContent?.attributes?.subtitle ||
                  "Need a Table On Grandpittu?"
                }
                title={
                  ctaContent?.attributes?.title ||
                  "Booking Table For Your & Family Members"
                }
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
      {/* Section Brands */}
      <div className="section gp-brands">
        <div className="container">
          <div className="gp-brands-items row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="gp-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand1.webp" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="gp-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand2.webp" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="gp-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand3.webp" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="gp-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand4.webp" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="gp-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand5.webp" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="gp-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand6.webp" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Rooftop;
