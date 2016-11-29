import React from 'react'

class Checkout extends React.Component {
  render() {
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
      </div>
    )

      // <form onSubmit={(e) => this.createLineitem)}>
      //   { cupcakes.map( (cupcake, index) => {
      //     let id = cupcake._id;
      //     let toppings = cupcake.toppings || [];
      //     let cake = cupcake.cake;
      //     cake = cake.replace(/[-]/g, ' ');
      //     let icing = cupcake.icing;
      //     icing = icing.replace(/[-]/g, ' ');
      //     return <div key={ index } >
      //       <div className="item">
      //         <img width="40%" height="auto;" alt="star" src={cupcake.image }/>
      //         <div className="details">
      //           <div className="cakedetails">{ cake }</div>
      //           <div className="icingdetails">{ icing }</div>
      //           <div className="toppingsdetails">{toppings.join(" ")}</div>
      //         </div>
      //       </div>
      //       <div className="price">
      //         <h3>$1.99</h3>
      //       </div>
      //       <div className="quanity">
      //        <input type="number" name="quanity" />
      //       </div>
      //     </div>
      //   })}
      // </form>
    // </div>
  }

}

export default Checkout;
