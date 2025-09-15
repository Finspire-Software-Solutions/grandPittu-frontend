import InstaCarousel from "@/components/sliders/InstaCarousel";
import Layouts from "@/layouts/Layouts";
import { Link } from "react-router-dom";

const MenuRestaurant = () => {
  return (
    <Layouts>
     
      {/* Section Menu-2 */}
      <section className="section gp-menu">
        <div className="container">
          <div className="gp-titles align-center">
            <div
              className="gp-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Sri Lankan Tamil Tradition
            </div>
            <h3
              className="gp-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Grandpittu Traditional Lunch Menu
            </h3>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="gp-menu-items-2">
               <img src="public/images/menu/menu1.jpg" alt="Dinner Menu" />
              </div>
              
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="gp-menu-items-2">
               <img src="public/images/menu/menu2.jpg" alt="Dinner Menu" />
              </div>
              
            </div>
            
          </div>
        </div>
      </section>
      {/* Section Menu-2 */}
      <section className="section gp-menu">
        <div className="container">
          <div className="gp-titles align-center">
            <div
              className="gp-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Sri Lankan Tamil Tradition
            </div>
            <h3
              className="gp-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Grandpittu Traditional Dinner Menu
            </h3>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="gp-menu-items-2">
               <img src="public/images/menu/menu3.jpg" alt="Dinner Menu" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Insta Carousel
      <InstaCarousel /> */}
    </Layouts>
  );
};
export default MenuRestaurant;
