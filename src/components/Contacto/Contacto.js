import React,{ Component } from 'react';
import './Contacto.css'

export default class Contacto extends Component {

    render() {
        return (
           <form>
             <legend>Formulario de Contactos</legend>
             <div className= 'input-field'>
              <label>Nombre: </label>
              <input type='text' placeholder= 'Tu Nombre'></input>
             </div>
             <div className= 'input-field'>
              <label>Email: </label>
              <input type='email' placeholder='Tu Email' />
             </div>
             <div className = 'input-field'>
              <label>Mensaje: </label>
              <textarea></textarea>
             </div>
             <div className= 'input-field enviar'>
              <input type='submit' value='Enviar'/>
             </div>
           </form>
        );
    }
}