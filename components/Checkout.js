import React from 'react'

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }

  render() {
    console.log(this.props.cupcakes)
    let cupcakes = this.props.cupcakes;
    return (
      <div>
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
      </div>
    )
  }

}

export default Checkout;
