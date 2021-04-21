import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectCartItems } from "../../redux/cart/cart.selectors";
import {
  addCartItem,
  decreaseItemQuantity,
  removeCartItem,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, removeItem, addItem, decreaseQuantity }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="img" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={
            quantity === 1
              ? () => removeItem(cartItem)
              : () => decreaseQuantity(cartItem)
          }
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeCartItem(item)),
  addItem: (item) => dispatch(addCartItem(item)),
  decreaseQuantity: (item) => dispatch(decreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
