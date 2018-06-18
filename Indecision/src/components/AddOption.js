
import React, { Component } from 'react'

class AddOption extends Component {
    constructor(props){
        super(props)

        this.onHandleAddOption = this.onHandleAddOption.bind(this)
        
        this.state = {
            error: undefined
        }
    }

    onHandleAddOption(e){
        e.preventDefault();
        const option = e.target.optionText.value.trim();
        const error = this.props.handleAddOption(option)

        if(error){
            this.setState(() => {
                return { error } 
            })
        }
        e.target.optionText.value = '';
    }

    render(){
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p> }
               <form className="add-option" onSubmit={this.onHandleAddOption}>
                    <input  className="add-option__input" type="text" name="optionText" id=""/>
                    <button
                        className="button"
                        >
                        Add Option
                    </button>
               </form>
            </div>
        );
    }
}

export default AddOption;