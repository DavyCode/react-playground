import React, { Component } from 'react'

import Option from './Option'



class Options extends Component {
    constructor(props){
        super(props)
    }

    displayOptions(){
        const template = this.props.options.map(item => (<Option key={item} option={item} />))
        return template;
    }

    render(){
        return (
            <div>
                Options : {this.props.options.length}
                <button onClick={this.props.handleRemoveAll}>Remove all</button>
                <ol>{this.displayOptions()}</ol>
            </div>
        );
    }
}

export default Options;