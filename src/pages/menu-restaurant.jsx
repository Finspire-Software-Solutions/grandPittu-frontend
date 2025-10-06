
import { useCMSData } from "@/hooks/useCMSData";
import { LoadingSpinner, ErrorMessage, CMSTitles, CMSImage } from "@/components/cms/CMSComponents";
import InstaCarousel from "@/components/sliders/InstaCarousel";
import Layouts from "@/layouts/Layouts";
import { useState } from "react";

const MenuRestaurant = () => {
  // Fetch menu cards (menu images) instead of individual items
  const { data: menuCards, loading, error } = useCMSData('menu-cards');
  const [activeCategory, setActiveCategory] = useState('all');

  if (loading) return <LoadingSpinner message="Loading menu..." />;
  if (error) return <ErrorMessage error={error} />;

  // Fallback menu cards if CMS data is not available
  const fallbackMenuCards = [
    {
      id: 1,
      attributes: {
        title: "Traditional Lunch Menu",
        category: "lunch",
        image: { url: "images/menu1.jpg" },
        description: "Authentic Tamil lunch dishes served with traditional sides"
      }
    },
    {
      id: 2,
      attributes: {
        title: "Dinner Specialties",
        category: "dinner", 
        image: { url: "images/menu2.jpg" },
        description: "Evening specialties featuring fresh seafood and meat dishes"
      }
    },
    {
      id: 3,
      attributes: {
        title: "Appetizers & Starters",
        category: "appetizers",
        image: { url: "images/menu3.jpg" },
        description: "Traditional appetizers to start your meal"
      }
    },
    {
      id: 4,
      attributes: {
        title: "Beverages & Desserts",
        category: "beverages",
        image: { url: "images/menu4.jpg" },
        description: "Refreshing drinks and sweet endings to your meal"
      }
    },
    {
      id: 5,
      attributes: {
        title: "Coffee & Tea Menu",
        category: "beverages",
        image: { url: "images/menu5.jpg" },
        description: "Hot beverages and traditional coffee preparations"
      }
    },
    {
      id: 6,
      attributes: {
        title: "Weekend Specials",
        category: "specials",
        image: { url: "images/menu6.jpg" },
        description: "Special dishes available on weekends only"
      }
    }
  ];

  const displayMenuCards = menuCards?.length > 0 ? menuCards : fallbackMenuCards;

  // Get unique categories
  const categories = [...new Set(displayMenuCards.map(card => card.attributes.category))];

  // Filter menu cards by category
  const filteredCards = activeCategory === 'all' 
    ? displayMenuCards 
    : displayMenuCards.filter(card => card.attributes.category === activeCategory);

  return (
    <Layouts>

      {/* Section Menu Cards */}
      <section className="section gp-menu">
        <div className="container">
          <CMSTitles 
            subtitle="Sri Lankan Tamil Tradition"
            title="Discover Our Complete Menu Collection"
            alignment="align-center"
          />
          <div className="align-center" style={{ margin: "2rem 0" }}>
            <a href="/menu-card.pdf" download className="gp-btn">
              <span>Download Menu Card (PDF)</span>
              <i className="fas fa-download" />
            </a>
          </div>
        </div>
      </section>

      {/* Section Insta Carousel */}
      <InstaCarousel />
    </Layouts>
  );
};

export default MenuRestaurant;
