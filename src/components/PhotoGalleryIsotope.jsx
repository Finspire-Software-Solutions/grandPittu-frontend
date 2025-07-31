import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const PhotoGalleryIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gp-gallery-items", {
        itemSelector: ".gp-gallery-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".gp-gallery-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // Isotope instance cleanup can be added here if needed.
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".gp-filter a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-href");
      if (filterValue == key) {
        filter.classList.add("active");
      } else {
        filter.classList.remove("active");
      }
    });
  };
  return (
    <section className="section gp-gallery">
      <div className="container">
        <div className="gp-titles align-center">
          <div
            className="gp-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Our Photo Gallery
          </div>
          <h3
            className="gp-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            Looks Our Photo Gallery
          </h3>
        </div>
        <div
          className="gp-filter gp-filter-gal element-anim-1 scroll-animate"
          data-animate="active"
        >
          <button
            type="button"
            className="c-pointer active"
            onClick={handleFilterKeyChange("*")}
            data-href="*"
            aria-label="Show all"
          >
            All
          </button>
          <button
            type="button"
            className="c-pointer"
            onClick={handleFilterKeyChange("fast-food")}
            data-href="fast-food"
            aria-label="Show fast food"
          >
            Fast food
          </button>
          <button
            type="button"
            className="c-pointer"
            onClick={handleFilterKeyChange("hot-coffee")}
            data-href="hot-coffee"
            aria-label="Show hot coffee"
          >
            Hot coffee
          </button>
          <button
            type="button"
            className="c-pointer"
            data-href="dinner-menu"
            onClick={handleFilterKeyChange("dinner-menu")}
            aria-label="Show dinner menu"
          >
            Dinner menu
          </button>
          <button
            type="button"
            className="c-pointer"
            data-href="special-pizza"
            onClick={handleFilterKeyChange("special-pizza")}
            aria-label="Show special pizza"
          >
            Special pizza
          </button>
        </div>
        <div className="gp-gallery-items row">
          <div className="gp-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="gp-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image gp-image-hover">
                <a href="images/ins_gal1.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal1.jpg" alt="Italian burger" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">italian burger</div>
                </div>
                <div className="subname">
                  <div className="value">fast food</div>
                </div>
              </div>
            </div>
          </div>
          <div className="gp-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-menu">
            <div
              className="gp-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image gp-image-hover">
                <a href="images/ins_gal2.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal2.jpg" alt="Italian pasta" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">italian pasta</div>
                </div>
                <div className="subname">
                  <div className="value">dinner menu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="gp-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="gp-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image gp-image-hover">
                <a href="images/ins_gal3.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal3.jpg" alt="Chicken burger" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Chicken burger</div>
                </div>
                <div className="subname">
                  <div className="value">fast food</div>
                </div>
              </div>
            </div>
          </div>
          <div className="gp-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all special-pizza">
            <div
              className="gp-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image gp-image-hover">
                <a href="images/ins_gal4.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal4.jpg" alt="Italian pizza" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">italian pizza</div>
                </div>
                <div className="subname">
                  <div className="value">special pizza</div>
                </div>
              </div>
            </div>
          </div>
          <div className="gp-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all hot-coffee">
            <div
              className="gp-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image gp-image-hover">
                <a href="images/ins_gal5.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal5.jpg" alt="Cappuccino" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">cappuccino</div>
                </div>
                <div className="subname">
                  <div className="value">hot coffee</div>
                </div>
              </div>
            </div>
          </div>
          <div className="gp-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="gp-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image gp-image-hover">
                <a href="images/ins_gal6.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal6.jpg" alt="Chicken nuggets" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Chicken nuggets</div>
                </div>
                <div className="subname">
                  <div className="value">fast food</div>
                </div>
              </div>
            </div>
          </div>
          <div className="gp-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all hot-coffee">
            <div
              className="gp-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image gp-image-hover">
                <a href="images/grid_gal1.jpg" className="has-popup-gallery">
                  <img src="images/grid_gal1.jpg" alt="Black coffee" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Black coffee</div>
                </div>
                <div className="subname">
                  <div className="value">hot coffee</div>
                </div>
              </div>
            </div>
          </div>
          <div className="gp-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-menu">
            <div
              className="gp-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image gp-image-hover">
                <a href="images/menu_r4.jpg" className="has-popup-gallery">
                  <img src="images/menu_r4.jpg" alt="Spaghetti" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Spaghetti</div>
                </div>
                <div className="subname">
                  <div className="value">dinner menu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="gp-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-menu">
            <div
              className="gp-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image gp-image-hover">
                <a href="images/menu_r6.jpg" className="has-popup-gallery">
                  <img src="images/menu_r6.jpg" alt="Sea Fish" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Sea Fish</div>
                </div>
                <div className="subname">
                  <div className="value">dinner menu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhotoGalleryIsotope;
