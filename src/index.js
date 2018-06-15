import React from 'react'
import ReactDOM from 'react-dom'

import './styles/style.sass'


const appRoot = document.getElementById('app');


let option = true

const onShowItem = () => {
    // option ? option = false : option = true 
    option = !option

    App()
}

const App = () => {
    const template = (
        <div>
           <h1> Visibility Toggle</h1>

           <button onClick={onShowItem}>Show Details</button>
           { option && <p>Hello From the Hidden Side</p>}
        </div>
    )

    ReactDOM.render(template, appRoot )
}

App()
