const MenuCard = ({ 
  image, 
  alt, 
  title, 
  description,
  className = "" 
}) => {
  return (
    <div className={`gp-menu-card ${className}`}>
      <img src={image} alt={alt} className="gp-menu-img" />
      <div className="gp-menu-content">
        <h4 className="gp-menu-title">{title}</h4>
        <p className="gp-menu-desc">{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;