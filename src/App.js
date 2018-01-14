import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'



class TextInput extends React.Component{
  render(){
    return(
      <input type = "text" id = "textBox"/>
      
   
      );
  }
}

class DropDown extends React.Component{
  
  
  render(){
    
    var values = [];
    for(var i = 5 ; i<=50; i = i+5){
      var id = "option#"+i;
      values.push(<option id = {id} className = "selectElement">{i}</option>)
    }
    return(
      <select id = "dropdown">
      {values}
      </select>
      );
  }}
  
class SubmitButton extends React.Component{
  clickHandler(event){
    event.preventDefault();
    axios.get('https://webdeadline-gpp96.c9users.io/?subject=earth&number=1')
    .then(repons => alert(repons));
  }
  render(){
    return(
      <input type = "submit" 
      id="submitButton" 
      value = "Cauta tweet-uri"
      onClick ={this.clickHandler}/>)
  }
  
}

class App extends React.Component{
  render(){
    return(
      <form className="myForm">
        <TextInput/>
        <DropDown/>
        <SubmitButton/>
      </form>
    );
  }
}

export default App;
