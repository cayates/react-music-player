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
      <div className = "container">
        <div className = "row justify-content-around flex-me">
          <div className = "col">
        <PlayListForm 
          addNewSong={this._addNewSong}
        />
          </div>
          <div className = "col">
            <div className="col-lg-4 h-scroll resize-height">
        <PlayList 
          songInfo={this.state.songInfo}
        />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;

