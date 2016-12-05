import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class checkout extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      tax: 0.13
    }
    this.calTax = this.calTax.bind(this);
  }

  calTax(total) {
    let tax = this.state.tax;
    return (total * tax + total).toFixed(2);
  }

  render() {
    let LineItem = this.props.cart;
    if (LineItem.length > 0) {
    console.log(LineItem);
    return (
      <div className="checkout-form">
        <button onClick={browserHistory.goBack} className='changes'> &larr; Make Changes to your order</button>
        <h2>Order Form</h2>
      <div className="cupcake-intro">
        <div className="item">
          <h3>Cupcake</h3>
        </div>
        <div className="price">
          <h3>Price Each</h3>
        </div>
        <div className="quantity">
          <h3>Quantity</h3>
        </div>
        <div className="total">
          <h3>total</h3>
        </div>
      </div>

      <div>
        { LineItem.map( (item, index) => {
          let id = item._id;
          let cake = item.item.cake;
          let icing = item.item.icing;
          let toppings = item.item.toppings || [];
          let price = item.price;
          let quantity = item.quantity;
          let total = item.total;

          cake = cake.replace(/[-]/g, ' ');
          icing = icing.replace(/[-]/g, ' ');
          toppings = toppings.join(" ").replace(/[-]/g, ' ');

          return <div key={ index } className="cupcake-row" >
            <div className="item">
              <img width="40%" height="auto;" alt="star" src={ item.item.image }/>
              <div className="details">
                <div className="cakedetails">{ cake }</div>
                <div className="icingdetails">{ icing }</div>
                <div className="toppingsdetails">{ toppings }</div>
              </div>
            </div>
            <div className="price">
              { price }
            </div>
            <div className="quantity">
              { quantity }
            </div>
            <div className="total">
              { item.total }
            </div>
          </div>
        })}
        <button onClick={browserHistory.goBack} className='changes'> &larr; Make Changes to your order</button>
        <div className="subtotal">
          <div className="label">Subtotal</div>
          <div className="value"><em>$</em>{ this.calTax(LineItem.reduce((a,b) => a + b.total, 0))}<span>Tax incl</span></div>
        </div>
      </div>

      </div>
    )
    } else {
      return (<div></div>)
    }
  }
}



export default checkout;
