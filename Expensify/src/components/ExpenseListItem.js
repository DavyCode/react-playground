import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'


const ExpenseListItem = (props) =>  (
  <div>
    <h3>Description : {props.description}</h3>
    <p>
      {numeral(props.amount / 100).format('$0,0.00')} 
      :-: 
      {moment(props.createdAt).format('MMMM Do, YYYY')}  
    </p>
    <Link to={`edit/${props.id}`} >Edit Item</Link>
  </div>
)


export default ExpenseListItem
