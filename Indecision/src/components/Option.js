import React, { Component } from 'react'

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">
                {props.count}. {props.option}
            </p>
            <button 
                className="button button--link"
                onClick={(e) => (props.handleRemoveOne(props.option))}
            >
                remove
            </button>      
        </div>
    );
}


export default Option;