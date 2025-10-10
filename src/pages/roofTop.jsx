import { CMSButton, CMSTitles, ErrorMessage, LoadingSpinner } from "@/components/cms/CMSComponents";
import { Link } from "react-router-dom";
import PhotoGalleryIsotope from "@/components/PhotoGalleryIsotope";
import { useGalleryData, usePageContent } from "@/hooks/useCMSData";
import Layouts from "@/layouts/Layouts";

// Rooftop-specific image data
const rooftopImages = [
  {
    id: "rooftop-1",
    image: "rooftop (6).jpg",
    category: "rooftop"
  },
  {
    id: "rooftop-2", 
    image: "rooftop (1).jpg",
    category: "rooftop"
  },
  {
    id: "rooftop-3",
    image: "rooftop (2).jpg", 
    category: "rooftop"
  },
  {
    id: "rooftop-4",
    image: "rooftop (3).jpg",
    category: "rooftop"
  },
  {
    id: "rooftop-5",
    image: "rooftop (4).jpg",
    category: "rooftop"
  },
  {
    id: "rooftop-6",
    image: "rooftop (5).jpg",
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
            <li>🌇 Sea-view views</li>
            <li>🎶 Blend with nature vibe</li>
            <li>🍸 Rooftop-exclusive menu</li>
            <li>✨ Elegant, cozy ambience</li>
            <li>👑 VIP/private premium booking</li>
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
     
    </Layouts>
  );
};

export default Rooftop;
