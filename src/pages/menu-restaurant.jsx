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
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="gp-menu-items-2">
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/pittu.jpg" className="has-popup-image">
                      <img src="images/pittu.jpg" alt="Pittu" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Pittu & Katta Sambol</h5>
                    <div className="subname">Steamed rice flour cylinders served with spicy coconut sambol</div>
                    <div className="price">
                      <span>Rs. 350</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/aattukari_soru.jpg" className="has-popup-image">
                      <img src="images/aattukari_soru.jpg" alt="Aattukari Soru" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Aattukari Soru</h5>
                    <div className="subname">Traditional mutton biryani with aromatic spices</div>
                    <div className="price">
                      <span>Rs. 650</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/fish_kulambu.jpg" className="has-popup-image">
                      <img src="images/fish_kulambu.jpg" alt="Fish Kulambu" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Fish Kulambu</h5>
                    <div className="subname">Tangy and spicy fish curry, a Jaffna specialty</div>
                    <div className="price">
                      <span>Rs. 400</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/idiyappam.jpg" className="has-popup-image">
                      <img src="images/idiyappam.jpg" alt="Idiyappam" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Idiyappam & Coconut Milk</h5>
                    <div className="subname">String hoppers served with sweet coconut milk</div>
                    <div className="price">
                      <span>Rs. 300</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gp-menu-image-2 left element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/history1.jpg)" }}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="gp-menu-image-2 right element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/history2.jpg)" }}
              />
              <div className="gp-menu-items-2">
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/odiyal_kool.jpg" className="has-popup-image">
                      <img src="images/odiyal_kool.jpg" alt="Odiyal Kool" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Odiyal Kool</h5>
                    <div className="subname">Hearty seafood and root vegetable soup from the North</div>
                    <div className="price">
                      <span>Rs. 500</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/crab_curry.jpg" className="has-popup-image">
                      <img src="images/crab_curry.jpg" alt="Crab Curry" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Crab Curry</h5>
                    <div className="subname">Spicy lagoon crab cooked in traditional Jaffna style</div>
                    <div className="price">
                      <span>Rs. 1200</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/gummy.png" className="has-popup-image">
                      <img src="images/gummy.png" alt="Palmyra Jaggery Sweets" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Palmyra Jaggery Sweets</h5>
                    <div className="subname">Traditional sweets made from palmyra jaggery</div>
                    <div className="price">
                      <span>Rs. 150</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/fresh.png" className="has-popup-image">
                      <img src="images/fresh.png" alt="Fresh Toddy" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Fresh Toddy</h5>
                    <div className="subname">Natural palm wine, a festive Tamil beverage</div>
                    <div className="price">
                      <span>Rs. 200</span>
                    </div>
                  </div>
                </div>
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
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="gp-menu-items-2">
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/soup.jpg" className="has-popup-image">
                      <img src="images/soup.jpg" alt="Kool Soup" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Kool Soup</h5>
                    <div className="subname">A rich seafood and root vegetable stew, a northern Tamil delicacy</div>
                    <div className="price">
                      <span>Rs. 600</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/mutton.jpg" className="has-popup-image">
                      <img src="images/mutton.jpg" alt="Mutton Varuval" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Mutton Varuval</h5>
                    <div className="subname">Spicy dry-fried mutton, a festive dinner favorite</div>
                    <div className="price">
                      <span>Rs. 850</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/dosa.jpg" className="has-popup-image">
                      <img src="images/dosa.jpg" alt="Jaffna Dosa" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Jaffna Dosa</h5>
                    <div className="subname">Crispy rice pancakes served with sambar and chutney</div>
                    <div className="price">
                      <span>Rs. 200</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/prawncurry.jpg" className="has-popup-image">
                      <img src="images/prawncurry.jpg" alt="Prawn Curry" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Prawn Curry</h5>
                    <div className="subname">Juicy prawns simmered in spicy coconut gravy</div>
                    <div className="price">
                      <span>Rs. 700</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gp-menu-image-2 left element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/menu5.jpg)" }}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="gp-menu-image-2 right element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/menu6.jpg)" }}
              />
              <div className="gp-menu-items-2">
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/eggappam.jpg" className="has-popup-image">
                      <img src="images/eggappam.jpg" alt="Egg Appam" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Egg Appam</h5>
                    <div className="subname">Bowl-shaped rice pancakes with a soft egg center</div>
                    <div className="price">
                      <span>Rs. 250</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/kottu.jpg" className="has-popup-image">
                      <img src="images/kottu.jpg" alt="Vegetable Kottu" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Vegetable Kottu</h5>
                    <div className="subname">Chopped roti stir-fried with vegetables and spices</div>
                    <div className="price">
                      <span>Rs. 350</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/watt.jpg" className="has-popup-image">
                      <img src="images/watt.jpg" alt="Wattalappam" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Wattalappam</h5>
                    <div className="subname">Rich coconut custard pudding with jaggery and spices</div>
                    <div className="price">
                      <span>Rs. 180</span>
                    </div>
                  </div>
                </div>
                <div
                  className="gp-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image gp-image-hover">
                    <a href="images/banana.jpg" className="has-popup-image">
                      <img src="images/banana.jpg" alt="Jaggery Banana" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Jaggery Banana</h5>
                    <div className="subname">Sweet bananas drizzled with palm jaggery syrup</div>
                    <div className="price">
                      <span>Rs. 120</span>
                    </div>
                  </div>
                </div>
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
