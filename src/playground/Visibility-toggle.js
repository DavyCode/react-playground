import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './styles/style.sass'


class Visibility extends Component {
    constructor(props){
        super(props)

        this.onShowItem = this.onShowItem.bind(this)

        this.state = {
            title : "Visibility Toggle",
            option : true
        }
    }

    onShowItem(){
        this.setState((prevState) => {
           return {
               option : !prevState.option
           }
        })
        console.log(this.state.option)
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.onShowItem}>Show Item</button>
                {this.state.option &&<p>Hello fron the hidden side</p>}
            </div>
        )
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<Visibility />, appRoot)















// const appRoot = document.getElementById('app');


// let option = true

// const onShowItem = () => {
//     // option ? option = false : option = true 
//     option = !option

//     App()
// }

// const App = () => {
//     const template = (
//         <div>
//            <h1> Visibility Toggle</h1>

//            <button onClick={onShowItem}>Show Details</button>
//            { option && <p>Hello From the Hidden Side</p>}
//         </div>
//     )

//     ReactDOM.render(template, appRoot )
// }

// App()
