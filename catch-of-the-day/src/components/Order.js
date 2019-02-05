import React, {Component} from 'react';
import { formatPrice } from '../helpers';

class Order extends Component
{
    renderOrder=(keys)=>
    {
         const fish = this.props.fishes[keys];
         const count = this.props.order[keys];
         const removeButton = <button onClick={() => this.props.removeOrder(keys)}>&times;</button>
        if(!fish || fish.status === 'unavilable')
            {
                return <li key={keys}>Sorry, {fish?fish.name:'fish'} is not available!{removeButton}</li>
            }
        return (
            <li key={keys}>
            <span>{count}lbs {fish.name}{removeButton}</span>
            <span className="price">{formatPrice(count * fish.price)}</span>
            </li>
       )
    }


    render()
    {
        const orderId = Object.keys(this.props.order);
        const total = orderId.reduce((previousval, key)=>{
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable)
                {
                    return previousval + (count * fish.price || 0);
                    
                }
            return previousval;
        },0);

     

        return(
            <div className="order-wrap">
            <h3>Your Order</h3>
            <ul className="order">
            {orderId.map(this.renderOrder)}
            <li className ="total">
            <strong>Total:</strong>
            {formatPrice(total)}
            </li>
            </ul>
            </div>
        )
        
    }

}

export default Order;
