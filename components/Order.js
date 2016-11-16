import $ from 'jquery';
import React from 'react';

class Order extends React.Component {

  render() {
    let cupcakes = this.props.cupcakes;
    // console.log(cupcakes);
    if ($(Object.keys(cupcakes)).length > 0) {
      return (
        <div className="order"><h2>Order Form</h2><ul>
              { Object.keys(cupcakes).map( (cupcake, id) => {
                let toppings = cupcakes[cupcake].toppings || [];
                let cake = cupcakes[cupcake].cake;
                cake = cake.replace(/[-]/g, ' ');
                let icing = cupcakes[cupcake].icing;
                icing = icing.replace(/[-]/g, ' ');
                return <li key={ id } >
                  <img width="40%" height="auto;" alt="star" src={cupcakes[cupcake].image }/>
                  <div className="details">
                  <div className="cakedetails">{ cake }</div>
                  <div className="icingdetails">{ icing }</div>
                  <div className="toppingsdetails">{toppings.join(" ")}</div>
                  <div><button onClick={()=>this.props.deleteCupcake(cupcake) }><i className="fa fa-times" aria-hidden="true"></i></button></div>
                  </div>
                  </li>
              })}
        </ul></div>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default Order;
