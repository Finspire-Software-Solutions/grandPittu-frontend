import InstaCarousel from "@/components/sliders/InstaCarousel";
import ReservationForm from "@/components/forms/ReservationForm";
import CategoryItem from "@/components/items/CategoryItem";
import { CMSButton } from "@/components/cms/CMSComponents";
import { usePageContent } from "@/hooks/useCMSData";
import Layouts from "@/layouts/Layouts";

const Reservation = () => {
  const { content: ctaContent } = usePageContent('home', 'cta');
  
  return (
    <Layouts>
      
      {/* Section Reservation */}
      <section className="section gp-reservation">
        <div className="container">
          <div
            className="gp-reservation-form element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="gp-titles align-center">
              <div className="gp-subtitle">Booking Table</div>
              <h3 className="gp-title">Make Your Reservation</h3>
            </div>
            <ReservationForm />
          </div>
        </div>
      </section>

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
                <CategoryItem
                  image="images/started_img6.webp"
                  alt="Rooftop Dining"
                  name="Rooftop Experience"
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
                text={ctaContent?.attributes?.buttonText || "Explore Rooftop"}
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
export default Reservation;
