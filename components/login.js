import React from 'react';
import firebase from 'firebase';

class Login extends React.Component {
  constructor() {
    super();
    this.state={
      email: '',
      password: '',
      mode: 'login',
      error: null
    };

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setMode = this.setMode.bind(this);

    this.login = this.login.bind(this);
  }

  render() {
    return <div>
      { this.state.error ? <div className="errorState">{ this.state.error }</div> : null }
      <div className="login-background">
      <img src="logo.png" className="signin-logo"alt="Cupcake Nation Logo"/>
        <div className="loginType">
          <label>
            <input type='radio' value='login' checked={ this.state.mode ==='login' } onChange={ this.setMode } />
            Login
          </label>
          <label>
            <input type='radio' value='signup' checked={ this.state.mode === 'signup' } onChange={ this.setMode } />
            Signup
          </label>
        </div>
        <div className="inputArea">
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' value={ this.state.email } onChange={ this.setEmail } />
        </div>
        <div className="inputArea">
          <label htmlFor='email'>Password</label>
          <input type='password' name='password' value={ this.state.password } onChange={ this.setPassword } />
        </div>
        <div>
          <button onClick={this.login}>
          { this.state.mode === 'login' ? "Login" : "Sign Up" }
          </button>
        </div>
      </div>
      </div>
  }

  setEmail(evt) {
    this.setState({ email: evt.target.value });
  }

  setPassword(evt) {
    this.setState({ password: evt.target.value });
  }

  setMode(evt) {
    this.setState({ mode: evt.target.value });
  }


  login() {
    var component = this;

    if (this.state.mode === 'login') {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function() {
        component.props.onLogin(component.state.email)
      })
      .catch(function(error) {
        component.setState({ error: error.message })
      })
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function() {
        component.props.onLogin(component.state.email)
      })
      .catch(function(error) {
        component.setState({ error: error.message })
      })
    }
  }
}

export default Login;
