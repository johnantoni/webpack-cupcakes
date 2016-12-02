import $ from 'jquery';
import React from 'react';
import { Link} from 'react-router'
import Checkout from './Checkout';

class Cart extends React.Component {

  handleChange(id, e) {
    console.log("The id " + id + " now contains " + e.target.value);
    let evt = e.target.value
    this.props.changeQuantity(id, evt)
   }

  render() {
    let LineItem = this.props.cart;
    if (LineItem.length > 0) {
      return (
        <div>
          <div className="Cart">
            <h2>Cart</h2>
              <ul>
              { LineItem.map( (item, index) => {
                let id = item._id;
                let image = item.item.image;
                let toppings = item.item.toppings || [];
                let cake = item.item.cake;
                cake = cake.replace(/[-]/g, ' ');
                let icing = item.item.icing;
                icing = icing.replace(/[-]/g, ' ');
                console.log(item.item.toppings);
                let value = item.quantity;
                  return <li key={ index } >
                    <img width="40%" height="auto;" alt="star" src={ image }/>
                    <div className="details">
                    <div className="cakedetails">{ cake }</div>
                    <div className="icingdetails">{ icing }</div>
                    <div className="toppingsdetails">{toppings.join(" ")}</div>
                    <input type="number" onChange={this.handleChange.bind(this, id)} placeholder={item.quantity} />
                    <div><button onClick={()=>this.props.deleteCupcake(id)}><i className="fa fa-times" aria-hidden="true"></i></button></div>
                    </div>
                    </li>
                })}
            </ul>
            </div>
            <div className="Checkout">
                <Link to="/checkout">checkout</Link>
            </div>
            // {this.props.children}
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default Cart;
