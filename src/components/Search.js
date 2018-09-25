import React, {Component} from 'react'
import {Header, Form} from 'semantic-ui-react'

class Search extends Component {

  state = {
    query: ''
  }

  //NOTE: This handler function is updating our local state as we type inside the form input.
  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header as='h4'>Search for Github users by their username:</Header>
        <Form
          onSubmit={e => {
            e.preventDefault()
            //NOTE: Here we are sending our 'query' value/state to a fetch function in App.js
            this.props.fetchUserInfo(this.state.query)
          }}>
          <Form.Input
            onChange={this.handleChange}
            icon='search'
            width={10}
            iconPosition='left'
            action='Search'
            placeholder='Type username here'
          />
        </Form>
      </React.Fragment>
    )
  }
}

export default Search
