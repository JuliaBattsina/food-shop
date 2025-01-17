import { getCartItems, getTotalPrice } from "../Redux/cartSlice";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart =() => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return (
        <div >
        <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cart"/> 
        <p>${totalPrice}</p>
{cartItems.map (cartItem => <CartItem cartItem={cartItem}/>)}

        </div>
    )
}
export default  Cart;