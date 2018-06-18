import React, { Component } from 'react'

const EditExpenses = (props) => {
    console.log(props)
    return (
        <div>
            EditExpenses : {props.match.params.id}
        </div>
    )
}


export default EditExpenses
