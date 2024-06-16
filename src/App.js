import React, { Component } from "react";
import './App.css';
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      luckText: ``,
      status: false,
    }
    this.luck = [
      `Null`,
      `Luck is small`,
      `Luck is large`,
      `Luck is giant`
    ]
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.reset = this.reset.bind(this);
  }
  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.luck.length);
    state.luckText = `" ${this.luck[numeroAleatorio]} "`;
    state.status = true;
    this.setState(state);
  }
  reset(){
    let state = this.state;
    state.luckText = ``;
    state.status = false;
    this.setState(state);
  }
  render(){
    return(
      <div className="container">
        <p>Biscoito da sorte - Criado por Victor - Projeto Aula do Fabrica de Apps</p>
        {this.state.status ? 
        <div className="container">
        <img src={require("./assets/biscoitoAberto.png")} className="img"/>
        <br/>
        <button onClick={this.quebraBiscoito}> Tentar a sorte </button>
        <p className="textLuck">{this.state.luckText}</p>
        <button onClick={this.reset}> Resetar </button>
        </div>
        :
        <div className="container">
        <img src={require("./assets/biscoito.png")} className="img"/>
        <br/>
        <button onClick={this.quebraBiscoito}> Tentar a sorte </button>
        <p className="textLuck">{this.state.luckText}</p>
        </div>
        } 
        
      </div>
        );
  }
}
