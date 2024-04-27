import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, useNavigate } from 'react-router-dom';
import './SubHeader.css';
const SubHeader = () => {
    return (
        <>
            <div className='links-header'>
                <Link to={'/'} className='link-header' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Inicio</Link>
                <HashLink to='#categorias' smooth offset={-1000} className='link-header'>Categorías</HashLink>
                <Link to={"/sobrenosotros"} className='link-header'>Sobre nosotros</Link>
                <Link className='link-header'>Contacto</Link>
            </div>
        </>
    )
}

export default SubHeader