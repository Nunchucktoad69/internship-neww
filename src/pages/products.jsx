import { IonIcon } from "@ionic/react";
import classNames from "classnames";
import { useState } from "react";
import AppLayout from "src/components/layout";
import Product from "src/components/product";
import "src/styles/products.scss";
import { useImmer } from "use-immer";
import { cartOutline, close } from "ionicons/icons";
import ProductCartItem from "src/components/cart-item";

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

  const [cart, setCart] = useImmer([]);

  const total = cart.reduce(
    (prev, item) => prev + products[item.index].price * Number(item.count),
    0
  );

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
  };

  const onProductClick = (index) => {
    setCartOpen(true);
    const cartItemIndex = cart.findIndex((item) => item.index === index);
    console.log(cartItemIndex);
    if (cartItemIndex === -1) {
      setCart((cart) => {
        cart.push({ index, count: 1 });
      });
    } else {
      setCart((cart) => {
        cart[cartItemIndex].count++;
      });
    }
  };

  const onCountChange = (index, newCount) => {
    if (newCount < 0) return;
    setCart((cart) => {
      const cartItem = cart.find((item) => item.index === index);
      cartItem.count = newCount;
    });
  };

  const onCartRemove = (index) => {
    setCart((cart) => {
      return cart.filter((item) => item.index !== index);
    });
  };

  const onCheckout = () => {
    alert(`Thank you for your purchase! Your total is Rs ${total}`);
    setCart([]);
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
              <IonIcon
                id="cart-icon"
                className="cart-icon"
                icon={cartOutline}
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
                onClick={() => onProductClick(i)}
              />
            ))}
          </div>
        </div>

        {/* Products Cart */}
        <div className={classNames("cart", { active: isCartOpen })}>
          <h2 className="cart-title">Your Cart</h2>

          <div className="cart-content">
            {cart.map((item) => (
              <ProductCartItem
                key={item.index}
                count={item.count}
                product={products[item.index]}
                onCountChange={onCountChange.bind(undefined, item.index)}
                onCartRemove={() => onCartRemove(item.index)}
              />
            ))}
          </div>

          <div className="total">
            <div className="total-title">Total</div>
            <div className="total-price">{`Rs ${total.toLocaleString()}`}</div>
          </div>

          <button type="button" className="btn-buy" onClick={onCheckout}>
            Buy Now
          </button>

          <button id="close-cart" onClick={handleCartClick}>
            <IonIcon icon={close} />
          </button>
        </div>
      </main>
    </AppLayout>
  );
}
