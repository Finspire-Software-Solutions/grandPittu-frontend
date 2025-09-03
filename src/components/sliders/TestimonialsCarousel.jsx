import { useTestimonialsData } from "@/hooks/useCMSData";
import { LoadingSpinner, ErrorMessage, CMSTitles } from "@/components/cms/CMSComponents";
import { sliderProps } from "@/utils/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialsCarousel = () => {
  const { testimonials, loading, error } = useTestimonialsData();

  if (loading) return <LoadingSpinner message="Loading testimonials..." />;
  if (error) return <ErrorMessage error={error} />;

  // Fallback testimonials if CMS data is not available
  const fallbackTestimonials = [
    {
      id: 1,
      attributes: {
        name: "Arun S.",
        date: "July 2025",
        rating: 5,
        comment: "Authentic Jaffna flavors! The Pittu and Crab Curry reminded me of home. Friendly staff and cozy atmosphere. Highly recommended.",
        avatar: { url: "images/rev1.jpg" }
      }
    },
    {
      id: 2,
      attributes: {
        name: "Niranjani T.",
        date: "June 2025",
        rating: 5,
        comment: "A must-visit for anyone craving Sri Lankan Tamil cuisine. The service was excellent and the food was bursting with flavor!",
        avatar: { url: "images/rev2.jpg" }
      }
    },
    {
      id: 3,
      attributes: {
        name: "Ravi M.",
        date: "June 2025",
        rating: 5,
        comment: "Grandpittu brings the essence of Jaffna to Colombo. Every dish tells a story of tradition and passion. Simply outstanding!",
        avatar: { url: "images/rev3.jpg" }
      }
    }
  ];

  const displayTestimonials = testimonials?.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <section className="section gp-testimonials section-bg">
      <div className="container">
        <CMSTitles 
          title="What Our Customers Say"
          alignment="align-center"
        />
        <div className="gp-google-reviews-carousel">
          <Swiper {...sliderProps.gpTestimonialsCarousel} className="swiper-container">
            <div className="swiper-wrapper">
              {displayTestimonials.map((testimonial) => {
                const attrs = testimonial.attributes;
                return (
                  <SwiperSlide key={testimonial.id} className="swiper-slide">
                    <div className="google-review-card element-anim-1 scroll-animate" data-animate="active">
                      <div className="google-review-header">
                        <img 
                          src={attrs.avatar?.url || "images/default-avatar.jpg"} 
                          alt={attrs.name} 
                          className="google-review-avatar" 
                        />
                        <div className="google-review-info">
                          <span className="google-review-name">{attrs.name}</span>
                          <span className="google-review-date">{attrs.date}</span>
                        </div>
                        <img src="images/google.png" alt="Google" className="google-review-gicon" />
                      </div>
                      <div className="google-review-stars">
                        {[...Array(attrs.rating || 5)].map((_, i) => (
                          <i key={i} className="fas fa-star" style={{ color: '#fbbc04' }} />
                        ))}
                      </div>
                      <div className="google-review-text">
                        "{attrs.comment}"
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
