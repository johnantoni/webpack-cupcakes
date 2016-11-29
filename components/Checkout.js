import React from 'react'

class Checkout extends React.Component {
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
      <div className="subtotal">
        <h2>Subtotal</h2>
      </div>
      <div>
        { LineItem.map( (item, index) => {
          let id = item._id;
          let toppings = item.item.toppings || [];
          let cake = item.item.cake;
          cake = cake.replace(/[-]/g, ' ');
          let icing = item.item.icing;
          icing = icing.replace(/[-]/g, ' ');
          console.log(item.item.toppings)
          return <div key={ index } >
            <div className="item">
              <img width="40%" height="auto;" alt="star" src={ item.item.image }/>
              <div className="details">
                <div className="cakedetails">{ id }</div>
                <div className="cakedetails">{ cake }</div>
                <div className="icingdetails">{ icing }</div>
                <div className="toppingsdetails">{toppings}</div>
              </div>
            </div>
            <div className="price">
              { item.price }
            </div>
            <div className="quanity">
             <input type="number" name="quanity" />
            </div>
          </div>
        })}
      </div>
      </div>
    )
    } else {
      return (<div></div>)
    }
  }
}



export default Checkout;
