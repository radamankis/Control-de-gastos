import React,{Component} from 'react';
import PropTypes from 'prop-types';

 class Gasto extends Component {

    render() {
        // creo las variables q seran usadas para recibir los props
        // y crear el gasto
        const {cantidadGasto, nombreGasto}= this.props.gasto;
        return (
            <li className="gastos">
                <p>
                   {nombreGasto}
                   <span className="gasto"> ${cantidadGasto}</span> 
                </p>
            </li>
        );
    }
}

Gasto.propTypes ={
    gasto: PropTypes.object.isRequired
}
export default Gasto;