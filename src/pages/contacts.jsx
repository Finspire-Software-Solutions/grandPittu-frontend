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
      {/* Section 1: Contact Info & Map Side by Side */}
      <section className="section gp-contacts-main">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="gp-contacts-items">
                <div className="gp-contacts-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <i className="las la-map-marked-alt" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Address</h5>
                    <ul>
                      <li>{globalData?.attributes?.contactAddress || "Colombo, Sri Lanka"}</li>
                    </ul>
                  </div>
                </div>
                <div className="gp-contacts-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <i className="las la-envelope-open-text" />
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
                <div className="gp-contacts-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <i className="las la-headset" />
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
            <div className="col-lg-6 col-md-12">
              <div className="gp-map-container h-100">
                <iframe
                  src={globalData?.attributes?.googleMapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.256610365696!2d79.86058539999999!3d6.859818000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bd68bd99b05%3A0xcc2e80ef6ebedb7f!2sGrand%20Pittu!5e0!3m2!1sen!2slk!4v1759045248735!5m2!1sen!2slk"}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Grandpittu Restaurant Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="section gp-contacts-form">
        <div className="container">
          <div className="gp-reservation-form element-anim-1 scroll-animate" data-animate="active">
            <CMSTitles 
              subtitle="Contact Us"
              title="Send Us Message"
              alignment="align-center"
            />
            <ContactForm  />
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Contacts;
