import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { stickyNav } from "../utils/utils";

const Header = () => {
  useEffect(() => {
    stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (document.querySelector("header").className.includes("animated")) {
      setTimeout(() => {
        document.querySelector("header").classList.add("opened", "show");
      }, 800);
    }
  }, [toggle]);

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <header className={`kf-header ${toggle ? "animated" : ""}`}>
      {/* topline */}
      <div className="kf-topline">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            {/* hours */}
            <div className="kf-h-group">
              <i className="far fa-clock" /> <em>opening hours :</em> 08:00 am -
              09:00 pm
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
            {/* social */}
            <div className="kf-h-social">
              <a to="facebook.com" target="blank">
                <i className="fab fa-facebook-f" />
              </a>
              <a to="twitter.com" target="blank">
                <i className="fab fa-twitter" />
              </a>
              <a to="instagram.com" target="blank">
                <i className="fab fa-instagram" />
              </a>
              <a to="youtube.com" target="blank">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
            {/* location */}
            <div className="kf-h-group">
              <i className="fas fa-map-marker-alt" /> <em>Location :</em> 55
              main street, new york
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="kf-navbar">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            {/* logo */}
            <div className="kf-logo">
              <Link to="/">
                <img src="images/logo.png" alt="image" />
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
            {/* main menu */}
            <div className="kf-main-menu">
              <ul>
                <li>
                  <Link to="/">
                    Home
                    <i className="las la-angle-down" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/">Coffee House</Link>
                    </li>
                    <li>
                      <Link to="/index-2">Restaurant</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu-coffee">
                    Menu
                    <i className="las la-angle-down" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/menu-coffee">Menu Coffee</Link>
                    </li>
                    <li>
                      <Link to="/menu-restaurant">Menu Restaurant</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a to="#">
                    Pages
                    <i className="las la-angle-down" />
                  </a>
                  <ul>
                    <li>
                      <Link to="/services">Service</Link>
                    </li>
                    <li>
                      <Link to="/reservation">Reservation</Link>
                    </li>
                    <li>
                      <Link to="/history">History</Link>
                    </li>
                    <li>
                      <Link to="/team">Our Chefs</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="contacts">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
            {/* menu btn */}
            <a
              to="#"
              className={`kf-menu-btn ${toggle ? "active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </a>
            {/* btn */}
            <Link to="reservation" className="kf-btn h-btn">
              <span>Book a table</span>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="kf-navbar-mobile">
        {/* mobile menu */}
        <div className="kf-main-menu">
          <ul>
            <li className="has-children">
              <Link to="/">Home</Link>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("home")}
              />
              <ul style={activeLi("home")}>
                <li>
                  <Link to="/">Coffee House</Link>
                </li>
                <li>
                  <Link to="/index-2">Restaurant</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="has-children">
              <Link to="/menu-coffee">Menu</Link>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Menu")}
              />
              <ul style={activeLi("Menu")}>
                <li>
                  <Link to="/menu-coffee">Menu Coffee</Link>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a to="#">Pages</a>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Pages")}
              />
              <ul style={activeLi("Pages")}>
                <li>
                  <Link to="/services">Service</Link>
                </li>
                <li>
                  <Link to="/reservation">Reservation</Link>
                </li>
                <li>
                  <Link to="/history">History</Link>
                </li>
                <li>
                  <Link to="/team">Our Chefs</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </li>
            
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        {/* mobile topline */}
        <div className="kf-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* mobile btn */}
              <Link to="reservation" className="kf-btn h-btn">
                <span>Book a table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* social */}
              <div className="kf-h-social">
                <a to="facebook.com" target="blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a to="twitter.com" target="blank">
                  <i className="fab fa-twitter" />
                </a>
                <a to="instagram.com" target="blank">
                  <i className="fab fa-instagram" />
                </a>
                <a to="youtube.com" target="blank">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* hours */}
              <div className="kf-h-group">
                <i className="far fa-clock" /> <em>opening hours :</em> 08:00 am
                - 09:00 pm
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* location */}
              <div className="kf-h-group">
                <i className="fas fa-map-marker-alt" /> <em>Location :</em> 55
                main street, new york
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
