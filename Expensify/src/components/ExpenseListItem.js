import React from 'react'
import { Link } from 'react-router-dom'


const ExpenseListItem = (props) =>  (
  <div>
    <h3>Description : {props.description}</h3>
    <p>{props.amount} :-: {props.createdAt}</p>
    <Link to={`edit/${props.id}`} >Edit Item</Link>
  </div>
)


export default ExpenseListItem
