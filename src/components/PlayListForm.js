import React, { Component } from 'react';

export default class PlayListForm extends Component {


    constructor(){
        super();
        this.state = {
            username:'',
            songArtist:'',
            songTitle:'',
            songNotes:''
        }
    }

    addToList = (e) => {
        e.preventDefault();
        this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
        let listItem = JSON.stringify(this.state);
    
        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
      ).then(response => {
        console.log(response, "yay");
    
      }).catch(err => {
        console.log(err, "boo!");
      });
      this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
    }

    _handleChange = (event) => {
        let inputName = event.target.name
        this.setState({
           [inputName] : event.target.value
        })
     }

     _handleSubmit = (event) => {
        event.preventDefault();
        let songData = {
           userName: this.state.userName,
           songArtist: this.state.songArtist,
           songTitle: this.state.songTitle,
           songNotes: this.state.songNotes
        }
        this.props.addNewSong(songData)
     }


    render(){
        return(
            <div className="test">
            <form className = "play-list-form" onSubmit={this._handleSubmit}>
            <h3>Username:</h3>
            <input type="text" name="userName" placeholder="Name or Username" onChange={this._handleChange} value={this.state.userName} />
            <h3>Artist/Band:</h3>
            <input type="text" name="songArtist" placeholder="Name or Username" onChange={this._handleChange} value={this.state.songArtist} />
            <h3>Song title:</h3>
            <input type="text" name="songTitle" placeholder="Name or Username" onChange={this._handleChange} value={this.state.songTitle} />
            <h3>Notes about song:</h3>
            <textarea name="songNotes" rows="10" cols="50" placeholder="Place any notes here ..." onChange={this._handleChange} value={this.state.songNotes} />
            <br />
            <input className = "submitButton" type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}
    