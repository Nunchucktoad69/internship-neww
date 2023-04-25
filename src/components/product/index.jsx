import PropTypes from "prop-types";
import "./style.scss";

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default function Product(props) {
  return (
    <div className="grid-item">
      <img src={props.image} className="p-img" />
      <div className="products-text">
        <div className="products-text-inner">
          <p className="product-name">{props.name}</p>
          <p className="product-price">
            <span className="product-rs">₹</span>
            {props.price}
          </p>
        </div>
        <button href="#" className="btn-products add-cart">
          buy
        </button>
      </div>
    </div>
  );
}
