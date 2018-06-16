import React, { Component } from 'react'

import Option from './Option'



const Options = (props) => {
    function displayOptions(){
        return props.options.map(item => (
            <Option key={item} option={item} 
              handleRemoveOne={props.handleRemoveOne}
            />
        ))     
    }

    return (
        <div>
            Options : {props.options.length}
            <button onClick={props.handleRemoveAll}>Remove all</button>
            <ol>{displayOptions()}</ol>
        </div>
    );
}

export default Options;