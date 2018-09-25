import React, { Component } from 'react';
import './App.css';

//NOTE: semantic-ui has handy react components we can import after placing a semantic-ui script tag in our HTML file and running `npm install semantic-ui-react`
import { Header } from 'semantic-ui-react'

//NOTE: Importing the 'Search' component where the user name is collected via form. Importing 'Info' component which conditionally renders info based on the input from search form.
import Search from './components/Search.js'
import Info from './components/Info.js'

const URL = 'https://api.github.com/users/'

class App extends Component {

  state = {
    user: null
  }

  fetchUserInfo = (username) => {
    console.log(username)
    fetch(URL + `${username}`)
    .then(response => {
      if (response.status === 404) {
        alert("Oops. Username not found!")
      } else {
        return response.json()
      }
    })
    .then(userData => {
      console.log('User Data', userData)
      this.setState({
        user: userData
      })
    })
  }

  render() {
    return (
        <div className="App">
          <Header as='h1' dividing>
            GitHub Username Search
          </Header>
          <Search fetchUserInfo={this.fetchUserInfo}/>
        <br></br>
          {/* NOTE: We only want to render the 'Info' component after we've recieved a user. */}
          {this.state.user !== null ? (
            <Info user={this.state.user} />
            ) : (
              null
            )}
        </div>
    );
  }
}

export default App;
