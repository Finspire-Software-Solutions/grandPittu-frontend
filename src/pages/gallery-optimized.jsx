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
      {/* Section Started Inner */}
      <section className="section gp-started-inner">
        <div 
          className="gp-parallax-bg js-parallax" 
          style={{ 
            backgroundImage: `url(${galleryImages[0]?.attributes?.backgroundImage?.url || "images/gallery_inner_bg.jpg"})`
          }} 
        />
        <div className="container">
          <h1 className="gp-h-title text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
            Gallery
          </h1>
        </div>
      </section>

      {/* Section Gallery */}
      <PhotoGalleryIsotope images={galleryImages} />

      {/* Section CTA */}
      <section 
        className="section gp-cta gp-parallax" 
        style={{ 
          backgroundImage: `url(${ctaContent?.attributes?.backgroundImage?.url || "images/cta_bg3.jpg"})`
        }}
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
    </Layouts>
  );
};

export default Gallery;
