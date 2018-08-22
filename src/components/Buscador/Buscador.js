import React,{Component} from 'react';
import './Buscador.css'

export default class Buscador extends Component {

    leerDatos = (e) => {
      //Cadena que se buscará
      const termino = e.target.value;
      //enviamos por props
      this.props.busqueda(termino)
    }

    render() {
        return (
            <form className='buscador'>
              <input type='text' placeholder='Búsqueda' onChange={this.leerDatos}/>
            </form>
        );
    }
  }