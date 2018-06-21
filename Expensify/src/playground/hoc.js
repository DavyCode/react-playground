import React from 'react'
import ReactDOM from 'react-dom'



const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The wrapped page: {props.info} </p>
  </div>
)

/******
 * Higher order components
 * **********/
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <div>
          <h1>Welcome</h1>
          <WrappedComponent {...props}/>
        </div>
      ) : (
        <div>
          <h1>Sorry</h1>
          <p>You need to be authorized</p>
        </div>
       )}
    </div>
  )
}

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo 
    isAuthenticated={1} 
    info="The props passed to info"
  />,
  document.getElementById('app')
)

