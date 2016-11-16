import React from 'react'
import $ from 'jquery';
// import '../css/style.css';
import Login from './login';
import CreateCupcake from './CreateCupcake';
import Order from './Order';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      loggedIn: true,
      cupcakes: {}
    };
    this.addCupcake = this.addCupcake.bind(this);
    this.deleteCupcake = this.deleteCupcake.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  addCupcake(cupcake) {
    // update our state
    // get cupcakes, if empty initialize cupcakes object
    let cupcakes = this.state.cupcakes || {};
    console.log(cupcakes);
    $.ajax({
      url: "https://cupcakes-16999.firebaseio.com/.json",
      method: "POST",
      data: JSON.stringify(cupcake),
      success: (data) => {
        // append new cupcake to object list using name as key
        let name = `${data.name}`;
        cupcakes[name] = cupcake;
        this.setState({cupcakes});
      }
    })
  }


  deleteCupcake(id) {
    var url = `https://cupcakes-16999.firebaseio.com/${id}.json`;
    $.ajax({
      url: url,
      method: "DELETE",
      success: (data) =>  {
        const cupcakes = {...this.state.cupcakes};
        delete cupcakes[id];
        this.setState({ cupcakes: cupcakes });
      }
    });
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
        <CreateCupcake addCupcake={this.addCupcake}/>
        <Order cupcakes={this.state.cupcakes} deleteCupcake={this.deleteCupcake}/>
      </div>
      )
    } else {
      return (
        <Login onLogin={ this.loginUser } />
      )
    }
  }

  componentDidMount() {
    $.ajax({
      url: "https://cupcakes-16999.firebaseio.com/.json",
      method: "GET",
      success: (data) => {
        this.setState({ cupcakes: data });
        // console.log(data);
      }
    })
  }

  loginUser(email) {
    this.setState({loggedIn: true, currentUser: email});
  }
}

export default App;
