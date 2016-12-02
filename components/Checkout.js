import React from 'react'

class Checkout extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      tax: 0.13
    }
    this.calSubTotal = this.calSubTotal.bind(this);
    this.calTax = this.calTax.bind(this);
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount(subTotal) {
    let count  = this.state.count;
    count = count + subTotal;
    console.log("count is:" + count);
    this.setState({count});

  }

  calSubTotal(price, quantity) {
    let subTotal = quantity * price
    return subTotal;
  }

  calTotal(price, quantity) {
    return quantity * price
  }

  calTax(total) {
    let tax = this.state.tax;
    return (total * tax).toFixed(2);
  }

  render() {
    let LineItem = this.props.cart;
    if (LineItem.length > 0) {
    console.log(LineItem);
    return (
      <div>
        <h2>Order Form</h2>
      <div className="item">
        <h2>Cupcake</h2>
      </div>
      <div className="price">
        <h2>Price Each</h2>
      </div>
      <div className="quanity">
        <h2>Quantity</h2>
      </div>
      <div className="total">
        <h2>total</h2>
      </div>
      <div>
        { LineItem.map( (item, index) => {
          let id = item._id;
          let toppings = item.item.toppings || [];
          let cake = item.item.cake;
          cake = cake.replace(/[-]/g, ' ');
          let icing = item.item.icing;
          let price = item.price;
          let quantity = item.quantity;
          let total = item.total;
          let tax =  this.calTax(total);
          icing = icing.replace(/[-]/g, ' ');
          return <div key={ index } >
            <div className="item">
              <img width="40%" height="auto;" alt="star" src={ item.item.image }/>
              <div className="details">
                <div className="cakedetails">{ cake }</div>
                <div className="icingdetails">{ icing }</div>
                <div className="toppingsdetails">{toppings}</div>
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
        <div>Subtotal</div>
        { LineItem.reduce((a,b) => a + b.total, 0)}
      </div>

      </div>
    )
    } else {
      return (<div></div>)
    }
  }
}



export default Checkout;
