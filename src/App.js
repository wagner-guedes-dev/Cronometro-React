import React, { Component } from 'react';
import './style.css'
//cronometro*******************
class App extends Component{
  constructor(props){
    super(props);
    this.state={
        numero: 0,
        vai : 'Iniciar'
    }
    this.timer = null
    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }
  vai(){
    let state = this.state
    if(this.timer !== null){ 
      clearInterval(this.timer);
      this.timer = null // transformado para nul para cair no else
      state.vai = 'Iniciar'
    }else{
      this.timer = setInterval( () => {
        state.numero += 0.10
        this.setState(state)
      }, 100)
        state.vai='Pausar'
    }
    this.setState(state)//atualizar as states
  }
  limpar(){
    if(this.timer == null){ // == null signigica quando o relogio estiver parado
      let state = this.state
      state.numero=0
      this.setState(state)
    }else{
      let state = this.state
      clearInterval(this.timer) //parar o tempo
      this.timer = null //transformar valor em null, para cair no else la em cima
      state.numero=0
      state.vai='Iniciar'
      this.setState(state)
    }
  }
  render(){
    return(
      <div className='container'>
        <img className='image' src={require('./assets/cronometro.png')}/>
        <a className='time'>{this.state.numero.toFixed(1)}</a>
        <div className='areabtn'>
          <a className='button' onClick={this.vai}>{this.state.vai}</a>
          <a className='button' onClick={this.limpar}>Zerar</a>
        </div>
      </div>
    ) }
}

export default App