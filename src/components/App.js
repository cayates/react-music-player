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

  _addNewSong = (songData) => {
    let songInfo = this.state.songInfo;
    songInfo.push(songData)
    this.setState({songInfo: songInfo})

  }

  render() {
    return (
      <div className="App">
        <NavBar />
      <div className = "playlistdata">
        <PlayListForm 
          addNewSong={this._addNewSong}
        />
        <PlayList 
          songInfo={this.state.songInfo}
        />
      </div>
      </div>
    );
  }
}

export default App;
