import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import Formulario from './Fromulario'
import Listado from './Listado';
import {validarPresupuesto} from '../helper';
import ControlPresupuesto from './ControlPresupuesto';


class App extends Component {

  //crear el state
  state={
    presupuesto: "",
    restante: "",
    gastos: {}
  }
  //para preguntar el presupuesto

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es el presupuesto?');
    
    let resultado = validarPresupuesto(presupuesto);
    if(resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    } else{
      this.obtenerPresupuesto(); 
    }
  }
    componentDidMount(){
      this.obtenerPresupuesto(); 
    }

    
      
    
  //agregar un nuevo gasto al state
  agregarGasto = gasto => {
    //tomar una copia del state actual
      const gastos={...this.state.gastos};

    //agregar el gasto al objeto del state
      gastos[`gasto${Date.now()}`] = gasto;
    
    //restar al presupuesto
      this.restarPresupuesto(gasto.cantidadGasto);
      
    //ponerlo en state
    this.setState({
        gastos
    })
  }

  //restar del presupuesto cuando un gasto se crea
  restarPresupuesto = cantidad =>{

  //convertir a un numero el string recibido
  let restar= Number(cantidad);
  //hacer una copia del state para tomar el restante 
    let restante=this.state.restante;
  //lo restamos
    restante-=restar;
  //lo volvemos a convertir a string
    restante=String(restante);
  //lo agregamos al nuevo state
      this.setState({
        restante
      })
  }
  render() {
    return (
      <div className="App container">
        <Header
          titulo='Gasto Semanal'
        />
       <div className="contenido-principal contenido"> 
        <div className="row">
          <div className="one-half column">
            <Formulario
              agregarGasto = {this.agregarGasto}
            />
          </div>
          <div className="one-half column">
            <Listado
              gastos={this.state.gastos}
            />
            <ControlPresupuesto
              presupuesto={this.state.presupuesto}
              restante={this.state.restante}
            />
          </div>

        </div>
       </div>
      </div>
    );
  }
}

export default App;
