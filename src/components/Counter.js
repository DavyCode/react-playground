import React from 'react'
import ReactDOM from 'react-dom'

import './styles/style.sass'






let count = 0;

const addOne = () => {
    count +=1;
    console.log('Add+', count)
    Index()
}
const minusOne = () => {
    count -=1
    console.log('Remove-', count)
    Index()
}
const reset = () => {
    count = 0;
    console.log('reset', count)
    Index()
}



const appRoot =  document.getElementById('app');


const Index = () => {
    const template =(
        <div>
            <h1> Count : {count}</h1>
            <button onClick={addOne} >+1</button>
            <button onClick={minusOne} >-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

    ReactDOM.render(template , appRoot)
}

Index()





