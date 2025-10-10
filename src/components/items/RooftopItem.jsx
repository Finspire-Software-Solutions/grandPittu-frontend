import { Link } from "react-router-dom";

const CategoryItem = ({ 
  image, 
  alt, 
  name, 
  link = "/experience",
  className = "" 
}) => {
  return (
    <div className={`gp-category-item ${className}`}>
      <div className="image gp-image-hover">
        <Link to={link}>
          <img src={image} alt={alt} />
        </Link>
      </div>
      <div className="desc">
        <h5 className="name">{name}</h5>
      </div>
    </div>
  );
};

export default CategoryItem;