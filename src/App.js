import React, { Component } from 'react';

class App extends Component {
  state = {
    email: '',
    password: '',
    isSubmitted: false,
    isEmail: false,
    isPassowrd: false,
  };
  
  handleLogin = (event) => {
    const x = document.getElementById('email').value;
    const y = document.getElementById('password').value;
    if (x === '' || y === ''){
      this.setState({ isEmail:true, isPassowrd:true });
    }else{
      this.setState({ isSubmitted: true})
    }
     
    
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogout = () => {
    this.setState({ password: '', email: '', isSubmitted: false });
  };



  render() {
    return (
      <main>
        {this.state.isSubmitted === false && (
          <section>
            <div>
              <label >E-mail:</label>
              <input id="email"
                onChange={this.handleChangeEmail}
                value={this.state.email}
              />
            </div>
        
            {this.state.isEmail === true && (
            <span className="red">
                Please enter email
            </span>
            )}


            <div>
              <label>Password:</label>
              <input
                id="password"
                onChange={this.handleChangePassword}
                type="password"
                value={this.state.password}
              />
            </div>

            {this.state.isPassowrd=== true && (
                <span className="red">
                  Please enter password
                </span>
              )}
            <button onClick={this.handleLogin}>Login</button>
          </section>
        )}

        {this.state.isSubmitted === true && (
          <section>
            <div>
              <label>E-mail:</label> {this.state.email}
            </div>

            <div>
              <label>Password:</label> {this.state.password}
            </div>
            <button onClick={this.handleLogout}>Logout</button>
          </section>
        )}
      </main>
    );
  }
}

export default App;