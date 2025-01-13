import {ICart} from "../../models/ICart.ts";
import "./CartComponentCss.css"

interface CartProps {
    cart:ICart
}

export const CartComponent = ({cart}:CartProps) => {
    return (
        <div className='cartContainer'>

            <h3 className='text-xl'>User Id: {cart.userId}</h3>
            <h4 className='text-l'>Cart Id: {cart.id}</h4>
            <p>Total: {cart.total}</p>
            <p>Discounted Total: {cart.discountedTotal}</p>
            <p>Total Products: {cart.totalProducts}</p>

            <h4 className='text-xl'>Products:</h4>
            <ul>
                {cart.products.map((product, index) => (
                    <li key={index}>
                        <p>Title: {product.title}</p>
                        <p>Price: {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};