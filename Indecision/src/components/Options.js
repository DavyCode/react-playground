import React, { Component } from 'react'

import Option from './Option'



const Options = (props) => {
    
    function displayOptions(){
        return props.options.map((item, index) => (
            <Option 
                key={item} 
                option={item}
                count={index + 1} 
              handleRemoveOne={props.handleRemoveOne}
            />
        ))     
    }

    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                    className="button button--link"
                    onClick={props.handleRemoveAll}
                >Remove all
                </button>
            </div>

            {props.options.length < 1  && <p className="widget__message">Please add in some options</p> }
            {displayOptions()}
        </div>
    );
}

export default Options;