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
      cart: []
    };
    this.addCupcake = this.addCupcake.bind(this);
    this.deleteCupcake = this.deleteCupcake.bind(this);
    this.createLineItem = this.createLineItem.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        // append new cupcake to object list using name as key
        cupcakes.push(data);
        this.setState({cupcakes});
        this.createLineItem(data);
      }
    })
  }

  createLineItem(data) {

    const item = {
    cake: data._id,
    cake: data.cake,
    icing: data.icing,
    image: data.image,
    toppings: data.toppings
  }

    let cart = this.state.cart || [] ;

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

  handleChange(val, id) {
    console.log(id, val)
  }


  deleteCupcake(id) {
    let url = `/api/cart/${id}`;
    $.ajax({
      url: url,
      method: "DELETE",
      contentType: "application/json; charset=utf-8",
      success: () =>  {
        let cart = this.state.cart;
        let cupcakeIndex = cart.findIndex((item) => item._id === id)
        cart.splice(cupcakeIndex, 1);
        this.setState({ cart: cart });
      }
    });
  }


  render() {
    if (this.state.loggedIn) {
      if (this.props.children) {
        return React.cloneElement(this.props.children, {
          cupcakes: this.state.cupcakes,
          cart: this.state.cart
        });
      } else {
        return (
          <div>
          <CreateCupcake addCupcake={this.addCupcake}/>
          <Cart cupcakes={this.state.cupcakes} cart={this.state.cart} handleChange={this.handleChange} deleteCupcake={this.deleteCupcake}/>
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
        this.setState({ cart: data })
      }
    });
  }

  loginUser(email) {
    this.setState({loggedIn: true, currentUser: email});
  }
}

export default App;
