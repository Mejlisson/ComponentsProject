//Träna på onChange

import { useState } from "react";

export default function MyComponent() {
    const [name, setName] = useState("Guest"); //text input
    const [quantity, setQuantity] = useState(); //number input
    const [comment, setComment] = useState(""); //Comment box
    const [payment, setPayment] = useState(""); //Dropdown
    const [shipping, setShipping] = useState(""); //Radio buttons




    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name:{name}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Comment"/>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value={""}>Select an option</option>
                <option value={"Visa"}>Visa</option>
                <option value={"Master card"}>Master Card</option>
                <option value={"Gigtcard"}>GiftCard</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" value={"Pick up"} checked={shipping === "Pick up"} onChange={handleShippingChange}/> Pick Up</label>
            <label> 
            <input type="radio" value={"Delivery"} checked={shipping === "Delivery"} onChange={handleShippingChange}/>Delivery</label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}