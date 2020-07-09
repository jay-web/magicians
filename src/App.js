import React, { Component } from 'react';

import { CardList } from './components/card-lists/card-list.components'; 

import {SearchBox} from './components/SearchBox/searchbox.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      magicians : [],      
      searchField: ''

    }
  }

  // * Left 
  componentDidMount() {
    const api = "http://hp-api.herokuapp.com/api/characters";

    // const api = "http://localhost:3000/api/v1/wizards";

    fetch(api)
      .then((response) => response.json())
      .then(data => this.setState({magicians : data}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }



  render() {
      const {magicians , searchField } = this.state;
      const filteredMagicians = magicians.filter(magician => {
          return magician.name.toLowerCase().includes(searchField.toLowerCase())
      });

      return (
        <div className="App">
          
          <SearchBox  
                placeholder="search favourite wizard ..." 
                handleChange={this.handleChange}
           />
          <CardList magicians={filteredMagicians} />
        </div>
      )
  }
}

export default App;
