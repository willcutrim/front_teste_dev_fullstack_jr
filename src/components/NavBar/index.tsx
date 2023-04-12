import { useState } from 'react';
import './styles.css'
import menu from '../../assets/menu.svg'
import { Link } from "react-router-dom";

export function NavBar(){
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return(
        <nav className="navbar">
            <div className="container">
                <div className="title-nav">
                <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <img src={menu} alt='menu' />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <Link to='/cadastrar-produtos' style={{ color: 'inherit', textDecoration: 'inherit'}}>Cadastrar produtos</Link>
                        </li>
                        <li>
                            <Link to='/cadastrar-fornecedor' style={{ color: 'inherit', textDecoration: 'inherit'}}>Cadastrar forncedor</Link>
                        </li>
                        <li>
                            <Link to='/categorias' style={{ color: 'inherit', textDecoration: 'inherit'}}>Categorias</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}