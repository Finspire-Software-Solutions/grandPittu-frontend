import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalData } from '@/hooks/useCMSData';

/**
 * Loading component with customizable message
 */
export const LoadingSpinner = ({ message = "Loading..." }) => (
  <div className="gp-loading">
    <div className="gp-spinner">
      <div className="gp-spinner-inner"></div>
    </div>
    <p>{message}</p>
  </div>
);

/**
 * Error component with retry functionality
 */
export const ErrorMessage = ({ error, onRetry }) => (
  <div className="gp-error">
    <div className="gp-error-content">
      <h3>Oops! Something went wrong</h3>
      <p>{error}</p>
      {onRetry && (
        <button onClick={onRetry} className="gp-btn">
          <span>Try Again</span>
        </button>
      )}
    </div>
  </div>
);

/**
 * Generic section wrapper with CMS content
 */
export const CMSSection = ({ 
  className = "", 
  children, 
  backgroundImage, 
  sectionId,
  parallax = false 
}) => {
  const sectionClass = `section ${className} ${parallax ? 'gp-parallax' : ''}`;
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section id={sectionId} className={sectionClass} style={backgroundStyle}>
      {children}
    </section>
  );
};

/**
 * Dynamic titles component
 */
export const CMSTitles = ({ 
  subtitle, 
  title, 
  alignment = "align-center",
  className = "gp-titles" 
}) => (
  <div className={`${className} ${alignment}`}>
    {subtitle && (
      <div className="gp-subtitle element-anim-1 scroll-animate" data-animate="active">
        {subtitle}
      </div>
    )}
    {title && (
      <h3 className="gp-title element-anim-1 scroll-animate" data-animate="active">
        {title}
      </h3>
    )}
  </div>
);

/**
 * Dynamic CTA button component
 */
export const CMSButton = ({ 
  text, 
  link, 
  className = "gp-btn",
  icon = "fas fa-chevron-right",
  external = false 
}) => {
  if (!text || !link) return null;

  const buttonContent = (
    <>
      <span>{text}</span>
      {icon && <i className={icon} />}
    </>
  );

  if (external) {
    return (
      <a 
        href={link} 
        className={`${className} element-anim-1 scroll-animate`} 
        data-animate="active"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Link 
      to={link} 
      className={`${className} element-anim-1 scroll-animate`} 
      data-animate="active"
    >
      {buttonContent}
    </Link>
  );
};

/**
 * Image component with fallback
 */
export const CMSImage = ({ 
  image, 
  alt, 
  fallback = "/images/placeholder.jpg",
  className = "",
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(image?.url || fallback);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImgSrc(image?.url || fallback);
    setImageError(false);
  }, [image, fallback]);

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setImgSrc(fallback);
    }
  };

  return (
    <img 
      src={imgSrc}
      alt={alt || image?.alternativeText || "Image"}
      className={className}
      onError={handleImageError}
      {...props}
    />
  );
};

/**
 * Flexible content renderer for rich text or HTML
 */
export const CMSContent = ({ content, className = "gp-text" }) => {
  if (!content) return null;

  // If content is a string, render as paragraph
  if (typeof content === 'string') {
    return (
      <div 
        className={`${className} element-anim-1 scroll-animate`} 
        data-animate="active"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // If content is an object (rich text from Strapi), handle accordingly
  if (content && typeof content === 'object') {
    return (
      <div 
        className={`${className} element-anim-1 scroll-animate`} 
        data-animate="active"
      >
        {/* Handle different content types from Strapi rich text */}
        {Array.isArray(content) ? content.map((item, index) => (
          <div key={index}>{item.children?.[0]?.text || ''}</div>
        )) : (
          <p>{content.toString()}</p>
        )}
      </div>
    );
  }

  return null;
};

/**
 * Global layout wrapper that applies global styles
 */
export const CMSLayoutWrapper = ({ children }) => {
  const { globalData, loading } = useGlobalData();

  if (loading) {
    return <LoadingSpinner message="Loading site configuration..." />;
  }

  return (
    <div className="cms-layout-wrapper">
      {children}
    </div>
  );
};

// Re-export Link from react-router-dom for convenience
export { Link } from 'react-router-dom';
