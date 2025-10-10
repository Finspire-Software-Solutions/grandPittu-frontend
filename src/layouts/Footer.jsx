const Footer = () => {
  return (
    <div className="gp-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}
            <div
              className="spinner-logo element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="index.html">
                <img src="images/logo.webp" alt="image" />
              </a>
            </div>

             {/* hours */}
            <div
              className="gp-f-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              <ul>
                <li>
                  Sunday - Thursday
                  <em>08:00 am - 09:00pm</em>
                </li>
                <li>
                  Only Friday
                  <em>03:00 pm - 09:00pm</em>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            {/* map */}
            <div
              className="element-anim-1 scroll-animate h-[100%]"
              data-animate="active"
            >
              <h5>Find Us Here</h5>
             
                <iframe
                  src={ "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.256610365696!2d79.86058539999999!3d6.859818000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bd68bd99b05%3A0xcc2e80ef6ebedb7f!2sGrand%20Pittu!5e0!3m2!1sen!2slk!4v1759045248735!5m2!1sen!2slk"}
                  width="100%"
                  height="100%"
                  style={{ borderRadius: '5px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Grandpittu Restaurant Location"
                />
                
              
            </div>
          </div>
          
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="gp-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <i className="las la-map-marker" />
                  <em>Location :</em>
                  No. 65, gp Mawatha, Colombo 07, Sri Lanka.
                </li>
                <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email :</em>
                  info@grandpittu.lk
                </li>
                <li>
                  <i className="las la-phone" />
                  <em>Phone :</em>
                  +9477 1465 896
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* copyright */}
            <div
              className="gp-copyright element-anim-1 scroll-animate"
              data-animate="active"
            >
              Copyright © 2025 Grandpittu. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
