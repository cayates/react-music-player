import React, { Component } from 'react';

export default class PlayListItem extends Component{


    render(){
        const {songInfo}=this.props
        return(
            <div className="playListItems">
                <h3>User: {songInfo.userName}</h3>
                <h3>Artist: {songInfo.songArtist}</h3>
                <h3>Title: {songInfo.songTitle}</h3>
                <h3>Notes: {songInfo.songNotes}</h3>
            </div>
        )
    }
}