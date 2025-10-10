import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { stickyNav } from "../utils/utils";

const Header = () => {
  useEffect(() => {
    stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");
    if (toggle) {
      // A small delay to allow the 'animated' class to be applied for the animation
      const openTimeout = setTimeout(() => {
        header.classList.add("opened", "show");
      }, 100);
      return () => clearTimeout(openTimeout);
    } else {
      header.classList.remove("opened", "show");
    }
  }, [toggle]);

  const handleMenuToggle = (e) => {
    e.preventDefault();
    const header = document.querySelector("header");
    if (toggle) {
      header.classList.remove("animated", "opened", "show");
      setToggle(false);
    } else {
      header.classList.add("animated");
      setToggle(true);
    }
  };

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <header className={`gp-header ${toggle ? "animated" : ""}`}>
      {/* topline */}
      <div className="gp-topline">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            {/* hours */}
            <div className="gp-h-group">
              <i className="far fa-clock" /> <em>opening hours :</em> 08:00 am -
              09:00 pm
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
            {/* social */}
            <div className="gp-h-social">
              <a href="https://facebook.com/pittu.lk" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.tiktok.com/@grandpittucolombo?_t=ZN-8zy7RO04G74&_r=1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok" />
              </a>
              <a href="https://www.instagram.com/grand_pittu/?utm_source=qr#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
            {/* location */}
            <div className="gp-h-group">
              <i className="fas fa-map-marker-alt" /> <em>Location :</em> No. 65,
              gp Mawatha, Colombo 07
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="gp-navbar">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            {/* logo */}
            <div className="spinner-logo">
              <Link to="/">
                <img src="images/logo.webp" alt="image" />
              </Link>
            </div>

          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
            {/* main menu */}
            <div className="gp-main-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/menu">Menu</Link>
                </li>

                <li>
                  <Link to="/reservation">Reservation</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contacts</Link>
                </li>
              
              </ul>
            </div>

          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
            {/* menu btn */}
            <a
              href="#"
              className={`gp-menu-btn ${toggle ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                const header = document.querySelector("header");
                if (toggle) {
                  header.classList.remove("animated", "opened", "show");
                  setToggle(false);
                } else {
                  header.classList.add("animated");
                  setToggle(true);
                }
              }}
            >
              <span />
            </a>
            {/* btn */}

            <Link to="/reservation" className="gp-btn h-btn">
              <span>Book a table</span>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="gp-navbar-mobile-header">
          {/* mobile logo */}
          <div className="spinner-logo">
            <Link to="/">
              <img src="images/logo.webp" alt="Grand Pittu Logo" />
            </Link>
          </div>
          
          {/* mobile book table button */}
          <Link to="/reservation" className="gp-btn ">
            <span>Book Table</span>
          </Link>
          
          {/* menu toggle button */}
          <a
            href="#"
            className={`gp-menu-btn ${toggle ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              const header = document.querySelector("header");
              if (toggle) {
                header.classList.remove("animated", "opened", "show");
                setToggle(false);
              } else {
                header.classList.add("animated");
                setToggle(true);
              }
            }}
          >
            <span />
          </a>
        </div>
      <div className="gp-navbar-mobile">
        
        {/* mobile menu */}
        <div className="gp-main-menu">
          <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/menu">Menu</Link>
                </li>

                <li>
                  <Link to="/reservation">Reservation</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contacts</Link>
                </li>
              </ul>
        </div>
        {/* mobile topline */}
        <div className="gp-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* mobile btn */}
              <Link to="/reservation" className="gp-btn h-btn">
                <span>Book a table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* social */}
              <div className="gp-h-social">
                <a href="https://facebook.com/pittu.lk" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.tiktok.com/@grandpittucolombo?_t=ZN-8zy7RO04G74&_r=1" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.instagram.com/grand_pittu/?utm_source=qr#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* hours */}
              <div className="gp-h-group">
                <i className="far fa-clock" /> <em>opening hours :</em> 08:00 am
                - 09:00 pm
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* location */}
              <div className="gp-h-group">
                <i className="fas fa-map-marker-alt" /> <em>Location :</em> No. 65,
              gp Mawatha, Colombo 07
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
