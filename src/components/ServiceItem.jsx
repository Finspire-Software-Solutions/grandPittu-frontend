const ServiceItem = ({ 
  image, 
  alt, 
  name, 
  subname,
  className = "" 
}) => {
  return (
    <div className={`gp-services-item-2 element-anim-1 scroll-animate ${className}`} data-animate="active">
      <div className="image">
        <img src={image} alt={alt} />
      </div>
      <div className="desc">
        <h5 className="name">{name}</h5>
        <div className="subname">{subname}</div>
      </div>
    </div>
  );
};

export default ServiceItem;