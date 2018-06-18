import React, { Component } from 'react'

class Action extends Component {
    render(){
        return (
            <div>
                <button 
                    className="big-button"
                    disabled={this.props.hasOptions} 
                    onClick={this.props.handleMakeDecision}
                    >
                    What should i do?
                </button>
            </div>
        );
    }
}

export default Action;