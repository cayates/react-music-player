import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar';
import PlayListForm from './PlayListForm';
import PlayList from './PlayList';

class App extends Component {

  constructor(){
    super();
    this.state = {
      songInfo: []
    }
  }


  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm />
        <PlayList />
      </div>
    );
  }
}

export default App;
