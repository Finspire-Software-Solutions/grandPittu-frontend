import { useGalleryData, usePageContent } from "@/hooks/useCMSData";
import { LoadingSpinner, ErrorMessage, CMSTitles, CMSButton } from "@/components/cms/CMSComponents";
import Layouts from "@/layouts/Layouts";
import PhotoGalleryIsotope from "@/components/PhotoGalleryIsotope";

const Gallery = () => {
  const { galleryImages, loading: galleryLoading, error: galleryError } = useGalleryData();
  const { content: ctaContent, loading: ctaLoading } = usePageContent('gallery', 'cta');

  const loading = galleryLoading || ctaLoading;

  if (loading) return <LoadingSpinner message="Loading gallery..." />;
  if (galleryError) return <ErrorMessage error={galleryError} />;

  return (
    <Layouts>

      {/* Section Gallery */}
      <PhotoGalleryIsotope images={galleryImages} />

      {/* Section CTA */}
      <section
        className="section gp-cta gp-parallax"
        style={{ backgroundImage: "url(images/cta_bg3.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <CMSTitles 
                subtitle={ctaContent?.attributes?.subtitle || "Need a Table On Coffee House"}
                title={ctaContent?.attributes?.title || "Booking Table For Your & Family Members"}
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

export default Gallery;
