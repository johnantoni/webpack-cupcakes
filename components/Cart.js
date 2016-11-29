import $ from 'jquery';
import React from 'react';
import { Link} from 'react-router'
import Checkout from './Checkout';

class Cart extends React.Component {
  render() {
    let cupcakes = this.props.cupcakes;
    if (cupcakes.length > 0) {
      return (
        <div>
          <div className="Cart">
            <h2>Cart</h2>
              <ul>
                { cupcakes.map( (cupcake, index) => {
                  let id = cupcake._id;
                  let toppings = cupcake.toppings || [];
                  let cake = cupcake.cake;
                  cake = cake.replace(/[-]/g, ' ');
                  let icing = cupcake.icing;
                  icing = icing.replace(/[-]/g, ' ');
                  return <li key={ index } >
                    <img width="40%" height="auto;" alt="star" src={cupcake.image }/>
                    <div className="details">
                    <div className="cakedetails">{ cake }</div>
                    <div className="icingdetails">{ icing }</div>
                    <div className="toppingsdetails">{toppings.join(" ")}</div>
                    <div><button onClick={()=>this.props.deleteCupcake(id) }><i className="fa fa-times" aria-hidden="true"></i></button></div>
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
