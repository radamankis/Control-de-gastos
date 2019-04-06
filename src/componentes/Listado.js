import React,{Component} from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

 class Listado extends Component {
//contiene los gastos en una lista de gastos
//el props va a llegar como un arreglo, por lo tanto debo
//iterarlos por eso creo el Object.keys para crear la llave
// y el map me permite iterar la llave 
    render() {
        return (
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {Object.keys(this.props.gastos).map(key => (
                    <Gasto
                    //almanceno la llave para no perder la referencia
                        key={key}
                        //y agrego el gasto con la referencia de la llave
                        gasto={this.props.gastos[key]}
                    />

                ))}
                
            </div>
        );
    }
}
Listado.propTypes ={
    gastos: PropTypes.object.isRequired
}
export default Listado;