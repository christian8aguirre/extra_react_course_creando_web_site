import React,{Component} from 'react';
import { Link } from 'react-router-dom'

export default class Producto extends Component {
  // {const {nombre, imagen, precio, id } = this.props.informacion}
    render(){
      return (
          <li>
            <img src = {`img/${this.props.informacion.imagen}.png`} alt = {this.props.informacion.nombre} />
            <p>{this.props.informacion.nombre} <span>$ {this.props.informacion.precio}</span></p>
            <Link to={`/producto/${this.props.informacion.id}`}>Más informacion</Link>
            
          </li>
      );
    }
}