import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { addItem } from "../../redux/cart/cart.actions";
import { decreaseItemQuantity } from "../../redux/cart/cart.actions";

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, decreaseItemQuantity }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    return (    
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt='item'/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => {cartItem.quantity===1 ? clearItem(cartItem) : decreaseItemQuantity(cartItem)}}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => {clearItem(cartItem)}}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseItemQuantity: item => dispatch(decreaseItemQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);