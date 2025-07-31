import { sliderProps } from "@/utils/sliderProps";import { Swiper, SwiperSlide } from "swiper/react";
const TestimonialsCarousel = () => {
  return (
    <section className="section gp-testimonials section-bg">
   
      <div className="container">
        <div className="gp-titles align-center">
          <h3 className="gp-title element-anim-1 scroll-animate" data-animate="active">
            What Our Customers Say
          </h3>
        </div>
        <div className="gp-google-reviews-carousel">
          <Swiper {...sliderProps.gpTestimonialsCarousel} className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="google-review-card element-anim-1 scroll-animate" data-animate="active">
                  <div className="google-review-header">
                    <img src="images/rev1.jpg" alt="Reviewer" className="google-review-avatar" />
                    <div className="google-review-info">
                      <span className="google-review-name">Arun S.</span>
                      <span className="google-review-date">July 2025</span>
                    </div>
                    <img src="images/google.png" alt="Google" className="google-review-gicon" />
                  </div>
                  <div className="google-review-stars">
                    {[...Array(5)].map((_,i)=>(<i key={i} className="fas fa-star" style={{color:'#fbbc04'}} />))}
                  </div>
                  <div className="google-review-text">
                    "Authentic Jaffna flavors! The Pittu and Crab Curry reminded me of home. Friendly staff and cozy atmosphere. Highly recommended."
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="google-review-card element-anim-1 scroll-animate" data-animate="active">
                  <div className="google-review-header">
                    <img src="images/rev2.jpg" alt="Reviewer" className="google-review-avatar" />
                    <div className="google-review-info">
                      <span className="google-review-name">Niranjani T.</span>
                      <span className="google-review-date">June 2025</span>
                    </div>
                    <img src="images/google.png" alt="Google" className="google-review-gicon" />
                  </div>
                  <div className="google-review-stars">
                    {[...Array(5)].map((_,i)=>(<i key={i} className="fas fa-star" style={{color:'#fbbc04'}} />))}
                  </div>
                  <div className="google-review-text">
                    "A must-visit for anyone craving Sri Lankan Tamil cuisine. The service was excellent and the food was bursting with flavor!"
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="google-review-card element-anim-1 scroll-animate" data-animate="active">
                  <div className="google-review-header">
                    <img src="images/rev3.jpg" alt="Reviewer" className="google-review-avatar" />
                    <div className="google-review-info">
                      <span className="google-review-name">Ramesh K.</span>
                      <span className="google-review-date">May 2025</span>
                    </div>
                    <img src="images/google.png" alt="Google" className="google-review-gicon" />
                  </div>
                  <div className="google-review-stars">
                    {[...Array(5)].map((_,i)=>(<i key={i} className="fas fa-star" style={{color:'#fbbc04'}} />))}
                  </div>
                  <div className="google-review-text">
                    "Loved the herbal juices and fresh produce. The chefs truly know how to bring out the best in Tamil recipes!"
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="google-review-card element-anim-1 scroll-animate" data-animate="active">
                  <div className="google-review-header">
                    <img src="images/rev1.jpg" alt="Reviewer" className="google-review-avatar" />
                    <div className="google-review-info">
                      <span className="google-review-name">Arun S.</span>
                      <span className="google-review-date">July 2025</span>
                    </div>
                    <img src="images/google.png" alt="Google" className="google-review-gicon" />
                  </div>
                  <div className="google-review-stars">
                    {[...Array(5)].map((_,i)=>(<i key={i} className="fas fa-star" style={{color:'#fbbc04'}} />))}
                  </div>
                  <div className="google-review-text">
                    "Authentic Jaffna flavors! The Pittu and Crab Curry reminded me of home. Friendly staff and cozy atmosphere. Highly recommended."
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="google-review-card element-anim-1 scroll-animate" data-animate="active">
                  <div className="google-review-header">
                    <img src="images/rev1.jpg" alt="Reviewer" className="google-review-avatar" />
                    <div className="google-review-info">
                      <span className="google-review-name">Arun S.</span>
                      <span className="google-review-date">July 2025</span>
                    </div>
                    <img src="images/google.png" alt="Google" className="google-review-gicon" />
                  </div>
                  <div className="google-review-stars">
                    {[...Array(5)].map((_,i)=>(<i key={i} className="fas fa-star" style={{color:'#fbbc04'}} />))}
                  </div>
                  <div className="google-review-text">
                    "Authentic Jaffna flavors! The Pittu and Crab Curry reminded me of home. Friendly staff and cozy atmosphere. Highly recommended."
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="google-review-card element-anim-1 scroll-animate" data-animate="active">
                  <div className="google-review-header">
                    <img src="images/rev1.jpg" alt="Reviewer" className="google-review-avatar" />
                    <div className="google-review-info">
                      <span className="google-review-name">Arun S.</span>
                      <span className="google-review-date">July 2025</span>
                    </div>
                    <img src="images/google.png" alt="Google" className="google-review-gicon" />
                  </div>
                  <div className="google-review-stars">
                    {[...Array(5)].map((_,i)=>(<i key={i} className="fas fa-star" style={{color:'#fbbc04'}} />))}
                  </div>
                  <div className="google-review-text">
                    "Authentic Jaffna flavors! The Pittu and Crab Curry reminded me of home. Friendly staff and cozy atmosphere. Highly recommended."
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="google-review-card element-anim-1 scroll-animate" data-animate="active">
                  <div className="google-review-header">
                    <img src="images/rev1.jpg" alt="Reviewer" className="google-review-avatar" />
                    <div className="google-review-info">
                      <span className="google-review-name">Arun S.</span>
                      <span className="google-review-date">July 2025</span>
                    </div>
                    <img src="images/google.png" alt="Google" className="google-review-gicon" />
                  </div>
                  <div className="google-review-stars">
                    {[...Array(5)].map((_,i)=>(<i key={i} className="fas fa-star" style={{color:'#fbbc04'}} />))}
                  </div>
                  <div className="google-review-text">
                    "Authentic Jaffna flavors! The Pittu and Crab Curry reminded me of home. Friendly staff and cozy atmosphere. Highly recommended."
                  </div>
                </div>
              </SwiperSlide>
              
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
