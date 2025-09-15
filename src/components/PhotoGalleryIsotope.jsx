import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState, useMemo, memo } from "react";

// Memoized gallery item component for better performance
const GalleryItem = memo(({ item }) => {
  const imagePath = `images/gallery/${item.image}`;
  
  return (
    <div className={`gp-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all ${item.category}`}>
      <div
        className="gp-gallery-item element-anim-1 scroll-animate"
        data-animate="active"
      >
        <div className="image gp-image-hover">
          <a href={imagePath} className="has-popup-gallery">
            <img 
              src={imagePath} 
              alt={`Gallery Image ${item.id}`}
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
            />
          </a>
        </div>
      </div>
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';

const PhotoGalleryIsotope = () => {
  // Isotope
  const isotope = useRef();
  const containerRef = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [isotopeReady, setIsotopeReady] = useState(false);

  // Memoize gallery data to prevent unnecessary re-renders
  const galleryData = useMemo(() => [
    { id: 1, category: "fast-food", image: "gallery (1).webp" },
    { id: 2, category: "dinner-menu", image: "gallery (2).webp" },
    { id: 3, category: "beverages", image: "gallery (3).webp" },
    { id: 4, category: "fast-food", image: "gallery (4).webp" },
    { id: 5, category: "dinner-menu", image: "gallery (5).webp" },
    { id: 6, category: "beverages", image: "gallery (6).webp" },
    { id: 7, category: "fast-food", image: "gallery (7).webp" },
    { id: 8, category: "dinner-menu", image: "gallery (8).webp" },
    { id: 9, category: "beverages", image: "gallery (9).webp" },
    { id: 10, category: "fast-food", image: "gallery (10).webp" },
    { id: 11, category: "dinner-menu", image: "gallery (11).webp" },
  ], []);

  // Initialize Isotope with optimizations
  useEffect(() => {
    let timeoutId;
    
    const initIsotope = () => {
      if (containerRef.current && !isotope.current) {
        isotope.current = new Isotope(containerRef.current, {
          itemSelector: ".gp-gallery-col",
          percentPosition: true,
          masonry: {
            columnWidth: ".gp-gallery-col",
            gutter: 0,
          },
          transitionDuration: "0.3s",
          hiddenStyle: {
            opacity: 0,
            transform: "scale(0.9)",
          },
          visibleStyle: {
            opacity: 1,
            transform: "scale(1)",
          },
        });
        setIsotopeReady(true);
      }
    };

    // Use requestAnimationFrame for better performance
    timeoutId = setTimeout(() => {
      requestAnimationFrame(initIsotope);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (isotope.current) {
        isotope.current.destroy();
        isotope.current = null;
        setIsotopeReady(false);
      }
    };
  }, []);

  // Optimized filter effect
  useEffect(() => {
    if (isotope.current && isotopeReady) {
      const filter = filterKey === "*" ? "*" : `.${filterKey}`;
      isotope.current.arrange({ filter });
    }
  }, [filterKey, isotopeReady]);

  // Memoized filter handler
  const handleFilterKeyChange = useCallback((key) => (e) => {
    e.preventDefault();
    if (key === filterKey) return; // Prevent unnecessary updates
    
    setFilterKey(key);
    
    // Optimized active class management
    const filterLinks = containerRef.current?.parentElement?.querySelectorAll(".gp-filter a");
    if (filterLinks) {
      filterLinks.forEach((filter) => {
        const filterValue = filter.getAttribute("data-href");
        filter.classList.toggle("active", filterValue === key);
      });
    }
  }, [filterKey]);
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
        
        {/* <div className="gp-filter align-center">
          <a
            href="#"
            className="active"
            data-href="*"
            onClick={handleFilterKeyChange("*")}
          >
            All
          </a>
          <a
            href="#"
            data-href="fast-food"
            onClick={handleFilterKeyChange("fast-food")}
          >
            Fast Food
          </a>
          <a
            href="#"
            data-href="dinner-menu"
            onClick={handleFilterKeyChange("dinner-menu")}
          >
            Dinner Menu
          </a>
          <a
            href="#"
            data-href="beverages"
            onClick={handleFilterKeyChange("beverages")}
          >
            Beverages
          </a>
        </div> */}
        
        <div className="gp-gallery-items row" ref={containerRef}>
          {galleryData.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PhotoGalleryIsotope;
