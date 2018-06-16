import React, { Component } from 'react'

import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'


class App extends Component {
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handleMakeDecision = this.handleMakeDecision.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            options : []
        }
    }


    handleRemoveAll(){
        this.setState(() => {
            return {
                options : []
            }
        })
    }

    handleMakeDecision(){
       const randNum = Math.floor(Math.random() * this.state.options.length)

       let selected = this.state.options[randNum]
        alert(selected)
    }

    handleAddOption(option){
        if(!option){
            return "Please enter a valid item"
        }else if(this.state.options.indexOf(option) > -1){
            return "This item is has already been added"
        }

        this.setState ((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    render(){
        const 
            title = 'INDECISION',
            subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={!this.state.options.length > 0}
                    handleMakeDecision={this.handleMakeDecision}
                />
                <Options options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}


export default App;

