import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import ScrollDownButton from "../components/ScrollDownButton";
import { scrollAnimation } from "../utils/utils";
import Footer from "./Footer";
import Header from "./Header";
const Layouts = ({ children }) => {
  useEffect(() => {
    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  useEffect(() => {
    let splittingInstance;
    import("splitting").then((SplittingModule) => {
      splittingInstance = SplittingModule.default ? SplittingModule.default() : SplittingModule();
    });
  }, []);

  useEffect(() => {
    import("jarallax").then((jarallaxModule) => {
      const { jarallax, jarallaxVideo } = jarallaxModule;
      jarallaxVideo();
      jarallax(document.querySelectorAll(".js-parallax"), {
        speed: 0.65,
        type: "scroll",
      });
    });
  }, []);

  return (
    <Fragment>
      <ImageView />
      <ScrollDownButton />
      <div className="bg">
        <Header />
        <div className="wrapper">{children}</div>
        <Footer />
      </div>
    </Fragment>
  );
};
export default Layouts;
