import PropTypes from "prop-types";
import "./style.scss";

ProductCartItem.propTypes = {
  product: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onCartRemove: PropTypes.func.isRequired,
  onCountChange: PropTypes.func.isRequired,
};

export default function ProductCartItem(props) {
  const { product } = props;

  return (
    <div className="cart-box">
      <img src={product.image} alt={product.title} className="cart-img" />

      <div className="details-box">
        <div className="cart-product-title">{product.title}</div>
        <div className="cart-price">${product.price}</div>
        <input
          type="number"
          value={props.count}
          onChange={(e) => props.onCountChange(Number(e.target.value))}
          className="cart-quantity"
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-trash-fill cart-remove "
        viewBox="0 0 16 16"
        id="cart-remove"
        onClick={props.onCartRemove}
      >
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
      </svg>
    </div>
  );
}
