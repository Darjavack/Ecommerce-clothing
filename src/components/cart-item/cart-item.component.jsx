import React from "react";
import { connect } from "react-redux";
import { removeCartItem } from "../../redux/cart/cart.actions";
import "./cart-item.styles.scss";

const CartItem = ({ item, removeItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <spam className="name">{name}</spam>
        <spam className="price">
          {quantity} x ${price}
        </spam>
        <spam className="remove-button" onClick={() => removeItem(item)}>
          &#10005;
        </spam>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
