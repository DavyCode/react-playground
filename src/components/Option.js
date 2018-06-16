import React, { Component } from 'react'

const Option = (props) => {
    return (
        <div>
            <li>
            {props.option} 
            <button 
                onClick={(e) => (props.handleRemoveOne(props.option))}
            >remove
            </button>
            </li>
        </div>
    );
}


export default Option;