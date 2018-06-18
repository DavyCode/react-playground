import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './styles/style.sass'



class Counter extends Component{
    constructor(props){
        super(props)

        this.onAddOne = this.onAddOne.bind(this)
        this.onMinusOne = this.onMinusOne.bind(this)
        this.onReset = this.onReset.bind(this)

        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        try {
            const countInt = localStorage.getItem('count')
            const count = parseInt(countInt, 10)

            if(!isNaN(count)) this.setState(() => ({ count }));
        } catch (error) {
            //Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            const countJson = JSON.stringify(this.state.count)
            localStorage.setItem('count', this.state.count)
        }
    }

    onAddOne(){
        this.setState(prevState => ({ count : prevState.count +=1 }))
    }
    onMinusOne(){
        this.setState(prevState => ({ count : prevState.count -=1 }))
    }
    onReset(){
        this.setState( () => ({ count : 0}))
    }

    render(){
        return (
            <div>
                <h2>Counter App</h2>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.onAddOne}>+1</button>
                <button onClick={this.onMinusOne}>-1</button>
                <button onClick={this.onReset}>Reset Count</button>
            </div>
        )
    }
}


// Counter.defaultProps = {
//     count : 10
// }

const appRoot = document.getElementById('app')

ReactDOM.render(<Counter />, appRoot)















// let count = 0;

// const addOne = () => {
//     count +=1;
//     console.log('Add+', count)
//     Index()
// }
// const minusOne = () => {
//     count -=1
//     console.log('Remove-', count)
//     Index()
// }
// const reset = () => {
//     count = 0;
//     console.log('reset', count)
//     Index()
// }



// const appRoot =  document.getElementById('app');


// const Index = () => {
//     const template =(
//         <div>
//             <h1> Count : {count}</h1>
//             <button onClick={addOne} >+1</button>
//             <button onClick={minusOne} >-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(template , appRoot)
// }

// Index()





