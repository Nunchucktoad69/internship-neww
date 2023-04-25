import classNames from "classnames";
import { useState } from "react";
import AppLayout from "src/components/layout";
import Product from "src/components/product";
import "src/styles/products.scss";

const products = [
  {
    name: "Creatine",
    price: 1000,
    image: "/images/creatine.jpg",
  },
  {
    name: "Whey",
    price: 5000,
    image: "/images/whyprotien.jpg",
  },
  {
    name: "Shaker",
    price: 300,
    image: "/images/shaker.jpg",
  },
  {
    name: "Gloves",
    price: 500,
    image: "/images/gloves.jpg",
  },
  {
    name: "Oats",
    price: 800,
    image: "/images/oats.jpg",
  },
  {
    name: "Towel",
    price: 250,
    image: "/images/sweat.jpg",
  },
];

export default function ProductRoute() {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <AppLayout>
      <main>
        <div className="container">
          <span className="subheading">Our products</span>
          <div className="heading-secondary">
            Need gym equipments? we got you
          </div>
          <div className="cart-flex">
            <p className="cart-text">OPEN CART</p>
            <button className="nav-link" onClick={handleCartClick}>
              <ion-icon
                className="cart-icon"
                id="cart-icon"
                name="cart-outline"
              />
            </button>
          </div>
        </div>
        <div className="container">
          <div className="grid products-grid">
            {products.map((product, i) => (
              <Product
                key={i}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>

        {/* Products Cart */}
        <div className={classNames("cart", { active: isCartOpen })}>
          <h2 className="cart-title">Your Cart</h2>
          <div className="cart-content"></div>
          <div className="total">
            <div className="total-title">Total</div>
            <div className="total-price">Rs0</div>
          </div>

          <button type="button" className="btn-buy">
            Buy Now
          </button>

          <button id="close-cart" onClick={handleCartClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
      </main>
    </AppLayout>
  );
}
