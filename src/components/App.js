import React, { Component } from 'react'

import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'


class App extends Component {
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handleRemoveOne = this.handleRemoveOne.bind(this)
        this.handleMakeDecision = this.handleMakeDecision.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            options : props.options,
            title : props.title,
            subtitle : props.subtitle
        }
    }

   /* *********************
    LIFECYCLE METHODS
    *************************************** */
    componentDidMount(){
        try {
            const jsonOption = localStorage.getItem('options')
            const options = JSON.parse(jsonOption)
            
            if(options) this.setState(() => ({ options }));
        } catch (error) {
            //Do nothing
        }  
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const jsonOption = JSON.stringify(this.state.options)
            localStorage.setItem('options', jsonOption)
        }
    }


   /* *********************
    EVENT HANDLERS
    *************************************** */
    handleRemoveAll(){
        this.setState(() =>({ options : []}))
    }

    handleRemoveOne(optionToBeRemoved){
        this.setState((prevState) => {
            return {
                options : prevState.options.filter((option) => option !== optionToBeRemoved)
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
        this.setState ((prevState) => ({options: prevState.options.concat(option)}))
    }



    render(){
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action hasOptions={!this.state.options.length > 0}
                    handleMakeDecision={this.handleMakeDecision}
                />
                <Options options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOne={this.handleRemoveOne}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}


 /* *********************
    DEFAULT PROPS
    *************************************** */
App.defaultProps = {
    options: [],
    title :'INDECISION',
    subtitle :'Put your life in the hands of a computer'
}

export default App;

