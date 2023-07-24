import React, { useContext } from 'react';
import './YourCart.css';
import { ItemProvideContext } from '../ContextApi/ItemProvider';



const YourCart = () => {

    const cartCtx = useContext(ItemProvideContext);



    return (
        <div className='max-width'>
            <h1 className='mt-3'>𝐬𝐡𝐨𝐩𝐢𝐧𝐠 𝐜𝐚𝐫𝐭</h1>
            <div className='max-width cart-page mt-5'>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    {cartCtx.items.map((product) => (
                        <>
                            <tr key={product.resId}>
                                <td>
                                    <div className='cart-info'>
                                        <img src={product.image} alt='image' />
                                        <div>
                                            <h3>{product.title}</h3> 
                                            <small>Price : ₹{product.price}{" "}for one</small>
                                            <br />
                                            <button 
                                            onClick={() => cartCtx.removeCartItem(product.resId)}
                                            type="button" 
                                            class="btn btn-outline-danger">Remove</button>

                                        </div>
                                    </div>
                                </td>

                                <td>
                                <button type="button" class="btn btn-outline-info">{product.count}{" "}X{" "}{product.price}</button>
                                </td>
                                <td><h3>Price : ₹{product.price}{" "}for one</h3></td>
                            </tr>
                            <hr/>
                        </>
                    ))}
                </table>
                <div className='total-price'>
                    <table>

                        <tr>
                            <td><h2>Total</h2></td>
                            <td> <button type="button" class="btn btn-outline-info">
                                <h3>₹{cartCtx.totalAmount}</h3>
                            </button></td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default YourCart;