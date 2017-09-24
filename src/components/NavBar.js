import React, { Component } from 'react';

export default class NavBar extends Component{


    render(){
        return(
            <div className = "navbar">
                <div className="jumbotron d-flex align-items-center flex-title">
                <h1>dopeTunes</h1>
                <h4>What you jammin', bro?</h4>
                </div>
            </div>
        )
    }
}