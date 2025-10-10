import { useEffect, useState } from 'react';

const ScrollDownButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollBottom = scrollTop + windowHeight;
      
      // Show scroll-to-top when near bottom (within 200px)
      setShowScrollTop(documentHeight - scrollBottom < 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (showScrollTop) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to next section
      const currentScrollPos = window.scrollY;
      const sections = Array.from(document.querySelectorAll('section'));
      
      const nextSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top > 100; // Find next section below current view
      });
      
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <button 
      className="scroll-down-button" 
      onClick={handleClick}
      aria-label={showScrollTop ? "Scroll to top" : "Scroll to next section"}
    >
      <div className="scroll-down-icon">
        <i className={`fas fa-chevron-${showScrollTop ? 'up' : 'down'}`}></i>
      </div>
    </button>
  );
};

export default ScrollDownButton;
