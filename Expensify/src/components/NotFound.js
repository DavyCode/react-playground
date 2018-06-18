import React, { Component } from 'react'
import { Link  } from 'react-router-dom'


class NotFound extends Component {
  render() {
    return (
      <div>
        <h1> 404! -- <Link to="/">Go Back</Link> </h1> 
      </div>
    )
  }
}

export default NotFound

