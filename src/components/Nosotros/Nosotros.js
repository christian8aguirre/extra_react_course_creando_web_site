import React,{ Component } from 'react';
import './Nosotros.css'

export default class Nosotros extends Component {

    render() {
        return (
            <div className='contenedor-nosotros'>
                <div className='imagen'>
                    <img src = '/img/camisa_8.png' alt = 'imagen nosotros' />
                </div>
                <div className='contenido'>
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget orci eu sapien luctus accumsan. Suspendisse pharetra leo et sem vehicula eleifend. Vestibulum sollicitudin dolor eros, vitae convallis felis ullamcorper vel. Nam tempor mauris leo. Integer pharetra est consectetur, rutrum ipsum sit amet, euismod ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed est turpis. Nulla volutpat lobortis felis, eget interdum dolor venenatis id. Aliquam odio nisl, molestie id dui non, sollicitudin consequat enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed rutrum interdum diam sit amet pulvinar.</p>
                </div>
            </div>
        );
    }
}