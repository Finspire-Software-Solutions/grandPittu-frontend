import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { CMSImage, LoadingSpinner } from "@/components/cms/CMSComponents";

const PhotoGalleryIsotope = ({ images = [] }) => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [loading, setLoading] = useState(true);

  // Get unique categories from images
  const categories = [...new Set(images.map(img => img.attributes?.category).filter(Boolean))];

  useEffect(() => {
    const timer = setTimeout(() => {
      isotope.current = new Isotope(".gp-gallery-items", {
        itemSelector: ".gp-gallery-col",
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
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [images]);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  // Fallback images if CMS data is not available
  const fallbackImages = [
    { id: 1, attributes: { image: { url: "images/grid_gal1.jpg" }, category: "food", title: "Authentic Tamil Dishes" } },
    { id: 2, attributes: { image: { url: "images/grid_gal2.jpg" }, category: "restaurant", title: "Restaurant Interior" } },
    { id: 3, attributes: { image: { url: "images/grid_gal3.jpg" }, category: "food", title: "Traditional Preparation" } },
    { id: 4, attributes: { image: { url: "images/grid_gal4.jpg" }, category: "events", title: "Special Events" } },
    { id: 5, attributes: { image: { url: "images/grid_gal5.jpg" }, category: "food", title: "Fresh Ingredients" } },
  ];

  const displayImages = images.length > 0 ? images : fallbackImages;
  const displayCategories = categories.length > 0 ? categories : ["food", "restaurant", "events"];

  if (loading) return <LoadingSpinner message="Loading gallery..." />;

  return (
    <section className="section gp-gallery">
      <div className="container">
        {/* Gallery Filters */}
        <div className="gp-gallery-filters align-center">
          <button
            className={filterKey === "*" ? "gp-filter-btn active" : "gp-filter-btn"}
            onClick={() => setFilterKey("*")}
          >
            All
          </button>
          {displayCategories.map((category, index) => (
            <button
              key={index}
              className={filterKey === category ? "gp-filter-btn active" : "gp-filter-btn"}
              onClick={() => setFilterKey(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gp-gallery-items">
          {displayImages.map((image) => {
            const attrs = image.attributes;
            const categoryClass = attrs.category || 'uncategorized';
            
            return (
              <div
                key={image.id}
                className={`gp-gallery-col ${categoryClass} element-anim-1 scroll-animate`}
                data-animate="active"
              >
                <div className="gp-gallery-item gp-image-hover">
                  <a href={attrs.image?.url || attrs.image}>
                    <CMSImage
                      image={attrs.image}
                      alt={attrs.title || attrs.alt || "Gallery Image"}
                      className="gallery-image"
                    />
                    <div className="gp-gallery-overlay">
                      <div className="gp-gallery-content">
                        <h5>{attrs.title}</h5>
                        {attrs.description && <p>{attrs.description}</p>}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {displayImages.length === 0 && (
          <div className="gp-empty-gallery">
            <p>No images found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGalleryIsotope;
