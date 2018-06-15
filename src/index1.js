import React from 'react'
import ReactDOM from 'react-dom'

import './styles/style.sass'




var options = [];

const onFormSubmit = (e) => {
  e.preventDefault();
  let val = e.target.elements.option.value
  console.log(val)


  if(val){
    options.push(val) 
    e.target.elements.option.value = '';

    Index();
  }
}

//Remove All
const onRemoveAll = () => {
  options = [];
  Index()
}

const renderOptions = () => {
  let template = options.map(item => <li key={item}>{item}</li>)
  return template;
}


const onMakeDecision = () => {
  let randomNum = Math.floor(Math.random() * options.length)
  let option = options[randomNum]

  console.log(option)
}

const appRoot =  document.getElementById('app');

const Index = () => {
    const template = (
      <div>
        <h1>Indecision App</h1>
        <div>
          <h1>{options.length}</h1>
        </div>
            <button disabled={options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
        <div>
          <ol>
            {renderOptions()}
          </ol>
        </div>
        
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" id=""/>
          <button>Add Option</button>
        </form>
      </div>
    );

    ReactDOM.render(template , appRoot)
}

Index()








