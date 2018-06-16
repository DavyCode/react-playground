import React, { Component } from 'react'

class Option extends Component {
    render(){
        return (
            <div>
              <li>{this.props.option}</li>
            </div>
        );
    }
}

export default Option;