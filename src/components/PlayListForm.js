import React, { Component } from 'react';

export default class PlayListForm extends Component {



    render(){
        return(
            <div className="test">
            <form className = "play-list-form">
            <h3>Username:</h3>
            <input type="text" name="userName" placeholder="Name or Username" />
            <h3>Artist/Band:</h3>
            <input type="text" name="songArtist" placeholder="Name or Username" />
            <h3>Song title:</h3>
            <input type="text" name="songTitle" placeholder="Name or Username" />
            <h3>Notes about song:</h3>
            <textarea name="songNotes" rows="10" cols="50" placeholder="Place any notes here ..." />
            <br />
            <input className = "submitButton" type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}
    