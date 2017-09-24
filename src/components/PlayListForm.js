import React, { Component } from 'react';

export default class PlayListForm extends Component {


    constructor(){
        super();
        this.state = {
            userName:'',
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
        this.props.addToList(songData)
     }


    render(){
        return(
            <form className = "play-list-form" onSubmit={this.addToList}>
            <h5>Username:</h5>
            <input type="text" name="userName" placeholder="Name or Username" onChange={this._handleChange} value={this.state.userName} />
            <h5>Artist/Band:</h5>
            <input type="text" name="songArtist" placeholder="Song Artist" onChange={this._handleChange} value={this.state.songArtist} />
            <h5>Song title:</h5>
            <input type="text" name="songTitle" placeholder="Song Title" onChange={this._handleChange} value={this.state.songTitle} />
            <h5>Notes about song:</h5>
            <textarea name="songNotes" rows="5" cols="50" placeholder="Place any notes here ..." onChange={this._handleChange} value={this.state.songNotes} />
            <br />
            <input className = "btn btn-secondary" type="submit" value="Submit" />
            </form>
        )
    }
}
    