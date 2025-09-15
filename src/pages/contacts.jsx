import InstaCarousel from "@/components/sliders/InstaCarousel";
import ContactForm from "@/components/ContactForm";
import Layouts from "@/layouts/Layouts";

const Contacts = () => {
  return (
    <Layouts>
     
      {/* Section Contacts Info */}
      <section className="section gp-contacts-info">
        <div className="container">
          <div className="gp-contacts-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="gp-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon1.webp" alt="" />*/}
                  <i className="las la-map-marked-alt" />
                </div>
                <div className="desc">
                  <h5 className="name">Main Location</h5>
                  <ul>
                    <li>
                      No. 65, gp Mawatha, Colombo 07, Sri Lanka.
                    </li>
                    <li>
                      No. 65, gp Mawatha, Colombo 07, Sri Lanka.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="gp-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon2.webp" alt="" />*/}
                  <i className="las la-envelope-open-text" />
                </div>
                <div className="desc">
                  <h5 className="name">Email Address</h5>
                  <ul>
                    <li>
                      info@grandpittu.lk <br />
                      www.grandpittu.lk
                    </li>
                    <li>
                      info@grandpittu.lk <br />
                      www.grandpittu.lk
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="gp-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon3.webp" alt="" />*/}
                  <i className="las la-headset" />
                </div>
                <div className="desc">
                  <h5 className="name">Phone Number</h5>
                  <ul>
                    <li>
                      +9477 1465 896 <br />
                      123456780
                    </li>
                    <li>
                      +9477 1465 896 <br />
                      123456780
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Contacts Form */}
      <section className="section gp-contacts-form">
        <div className="container">
          <div
            className="gp-reservation-form element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="gp-titles align-center">
              <div className="gp-subtitle">Contact Us</div>
              <h3 className="gp-title">Send Us Message</h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      {/* Section Insta Carousel */}
      {/* <InstaCarousel /> */}
      
    </Layouts>
  );
};
export default Contacts;
