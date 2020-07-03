import React, { Component } from 'react';

import { CardList } from './components/card-lists/card-list.components';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      magicians : [],      
    }
  }

  // * Left 
  componentDidMount() {
    const api = "http://hp-api.herokuapp.com/api/characters";

    fetch(api)
      .then((response) => response.json())
      .then(data => this.setState({magicians : data}))
  }



  render() {
  return (
    <div className="App">
      <CardList magicians={this.state.magicians} />
    </div>
  )
  }
}

export default App;
