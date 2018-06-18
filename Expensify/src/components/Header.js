import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true} >Dashboard</NavLink>
      <NavLink to="/add" activeClassName="is-active">Create New Expenses</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
  )
}


export default Header
