/*import React from 'react'

export const SideBar = () => {
  return (
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

    <Link className="sidebar-brand " to="/">
        <div className="sidebar-brand-icon">
            <img className="w-100" src="/images/logo.jpg" alt="Pal-Horno"/>
        </div>
    </Link>

    
    <hr className="sidebar-divider my-0"/>

    
    <li className="nav-item active">
        <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>DASHBOARD</span></Link>
    </li>

    
    <hr className="sidebar-divider"/>

    
    <div className="sidebar-heading">NAVEGACIÓN</div>

    
    <li className="nav-item">
        <Link className="nav-link collapsed" to="/products">
            <i className="fas fa-fw fa-folder"></i>
            <span>Productos</span>
        </Link>
    </li>

    
    <li className="nav-item">
        <Link className="nav-link" to="/users">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Usuarios</span></Link>
    </li>

    
    <li className="nav-item">
        <Link className="nav-link" to="/categories">
            <i className="fas fa-fw fa-table"></i>
            <span>Categorias</span></Link>
    </li>

    
    <hr className="sidebar-divider d-none d-md-block"/>
</ul>
  )
}*/

/**------------------- */
import React from 'react'
import {Link} from 'react-router-dom';

export const SideBar = () => {
  return (
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

    <Link className="sidebar-brand " to="/">
        <div className="sidebar-brand-icon">
            <img className="w-100" src="/images/logo.jpg" alt="PalHorno"/>
        </div>
    </Link>

    
    <hr className="sidebar-divider my-0"/>

    
    <li className="nav-item active">
        <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>DASHBOARD</span></Link>
    </li>

    
    <hr className="sidebar-divider"/>

    
    <div className="sidebar-heading">NAVEGACIÓN</div>

    
    <li className="nav-item">
        <Link className="nav-link" to="/products">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>UProductos</span></Link>
    </li>
 

    
    <li className="nav-item">
        <Link className="nav-link" to="/users">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Usuarios</span></Link>
    </li>

    
    <li className="nav-item">
        <Link className="nav-link" to="/categories">
            <i className="fas fa-fw fa-table"></i>
            <span>Categorias</span></Link>
    </li>

    
    <hr className="sidebar-divider d-none d-md-block"/>
</ul>
  )
}
