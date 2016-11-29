import React from 'react'
import $ from 'jquery';
// import '../css/style.css';
import { Router, Route, Link, browserHistory } from 'react-router'
import Login from './login';
import CreateCupcake from './CreateCupcake';
import Cart from './Cart';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null,
      loggedIn: true,
      cupcakes: [],
      cart: {}
    };
    this.addCupcake = this.addCupcake.bind(this);
    this.deleteCupcake = this.deleteCupcake.bind(this);
    this.createLineItem = this.createLineItem.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  addCupcake(cupcake) {
    // update our state
    // get cupcakes, if empty initialize cupcakes object
    let cupcakes = this.state.cupcakes || [] ;
    $.ajax({
      url: "/api/cakes",
      method: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(cupcake),
      success: (data) => {
        this.createLineItem(data);
        // append new cupcake to object list using name as key
        cupcakes.push(data);
        this.setState({cupcakes});

      }
    })
  }

  createLineItem(data) {
    let cart = this.state.cart || [] ;
    console.log(data);
    const item = {
      item: {
        cake: data.cake,
        icing: data.icing,
        image: data.image,
        toppings: data.toppings,
      }
    }
    console.log(item);

    $.ajax({
      url: "/api/cart",
      method: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(item),
      success: (data) => {
        // append new cupcake to object list using name as key
        cart.push(data);
        this.setState({cart});
      }
    })
  }

  deleteCupcake(id) {
    let url = `/api/cakes/${id}`;
    $.ajax({
      url: url,
      method: "DELETE",
      contentType: "application/json; charset=utf-8",
      success: () =>  {
        let cupcakes = this.state.cupcakes;
        let cupcakeIndex = cupcakes.findIndex((cupcake) => cupcake._id === id)
        cupcakes.splice(cupcakeIndex, 1);
        this.setState({ cupcakes: cupcakes });
      }
    });
  }


  render() {
    if (this.state.loggedIn) {
      if (this.props.children) {
        return React.cloneElement(this.props.children, {
          cupcakes: this.state.cupcakes
        });
      } else {
        return (
          <div>
          <CreateCupcake addCupcake={this.addCupcake}/>
          <Cart cupcakes={this.state.cupcakes} deleteCupcake={this.deleteCupcake}/>
        </div>
        )
      }
    } else {
      return (
        <Login onLogin={ this.loginUser } />
      )
    }
  }

  componentDidMount() {
    $.ajax({
      url: "/api/cakes",
      method: "GET",
      success: (data) => {
        this.setState({ cupcakes: data })
      }
    });
    $.ajax({
      url: "/api/cart",
      method: "GET",
      success: (data) => {
        console.log(data);
        this.setState({ cart: data })
        console.log(this.state.cart)
      }
    })

  }

  loginUser(email) {
    this.setState({loggedIn: true, currentUser: email});
  }
}

export default App;
