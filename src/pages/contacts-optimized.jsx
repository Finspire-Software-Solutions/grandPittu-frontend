import { useGlobalData } from "@/hooks/useCMSData";
import { LoadingSpinner, ErrorMessage, CMSTitles } from "@/components/cms/CMSComponents";
import InstaCarousel from "@/components/sliders/InstaCarousel";
import ContactForm from "@/components/ContactForm";
import Layouts from "@/layouts/Layouts";

const Contacts = () => {
  const { globalData, loading, error } = useGlobalData();

  if (loading) return <LoadingSpinner message="Loading contact information..." />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section gp-started-inner">
        <div className="gp-parallax-bg js-parallax" style={{ backgroundImage: "url(images/contact_inner_bg.jpg)" }} />
        <div className="container">
          <h1 className="gp-h-title text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Section Contacts Info */}
      <section className="section gp-contacts-info">
        <div className="container">
          <div className="gp-contacts-items row">
            <div className="col-lg-4 align-center">
              <div className="gp-contacts-item element-anim-1 scroll-animate" data-animate="active">
                <div className="image">
                  <img src="images/contact_icon1.png" alt="Location" />
                </div>
                <div className="desc">
                  <h5 className="name">Address</h5>
                  <ul>
                    <li>{globalData?.attributes?.contactAddress || "Colombo, Sri Lanka"}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-center">
              <div className="gp-contacts-item element-anim-1 scroll-animate" data-animate="active">
                <div className="image">
                  <img src="images/contact_icon2.png" alt="Email" />
                </div>
                <div className="desc">
                  <h5 className="name">Email Address</h5>
                  <ul>
                    <li>
                      <a href={`mailto:${globalData?.attributes?.contactEmail}`}>
                        {globalData?.attributes?.contactEmail || "info@grandpittu.com"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-center">
              <div className="gp-contacts-item element-anim-1 scroll-animate" data-animate="active">
                <div className="image">
                  <img src="images/contact_icon3.png" alt="Phone" />
                </div>
                <div className="desc">
                  <h5 className="name">Phone Number</h5>
                  <ul>
                    <li>
                      <a href={`tel:${globalData?.attributes?.contactPhone}`}>
                        {globalData?.attributes?.contactPhone || "+94 11 234 5678"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Business Hours */}
      {globalData?.attributes?.businessHours && (
        <section className="section gp-business-hours">
          <div className="container">
            <CMSTitles 
              title="Business Hours"
              alignment="align-center"
            />
            <div className="gp-hours-grid">
              {globalData.attributes.businessHours.map((hour, index) => (
                <div key={index} className="gp-hour-item">
                  <span className="day">{hour.day}</span>
                  <span className="time">{hour.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section Google Map */}
      {globalData?.attributes?.mapEmbedUrl && (
        <section className="section gp-map">
          <div className="container-fluid">
            <div className="gp-map-container">
              <iframe
                src={globalData.attributes.mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grandpittu Restaurant Location"
              />
            </div>
          </div>
        </section>
      )}

      {/* Section Contacts Form */}
      <section className="section gp-contacts-form">
        <div className="container">
          <div className="gp-reservation-form element-anim-1 scroll-animate" data-animate="active">
            <CMSTitles 
              subtitle="Contact Us"
              title="Send Us Message"
              alignment="align-center"
            />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Section Insta Carousel */}
      <InstaCarousel />
    </Layouts>
  );
};

export default Contacts;
