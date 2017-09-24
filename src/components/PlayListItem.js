import React, { Component } from 'react';

export default class PlayListItem extends Component{


    render(){
        const {songInfo}=this.props
        return(
            <div className="card margin">
                <div className="bg-primary text-white">
                <h6>User: <span>{songInfo.userName}</span></h6>
                <h6>Artist: <span>{songInfo.songArtist}</span></h6>
                <h6>Title: <span>{songInfo.songTitle}</span></h6>
                <h6>Notes: <span>{songInfo.songNotes}</span></h6>
                </div>
            </div>
        )
    }
}