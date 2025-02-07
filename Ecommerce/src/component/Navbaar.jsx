import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbaar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="#">LA COLECTION</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/products">Products</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                            </li>
                          
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                     <div className="buttons">
                        <NavLink to="auth/register" className="btn btn-outline-dark ms-2">
                            <i className='fa fa-user-plus me-1'>Register</i>
                        </NavLink>

                        <NavLink to="auth/login" className="btn btn-outline-dark ms-2">
                            <i className='fa fa-sign-in me-1'>Login</i>
                        </NavLink>


                        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                            <i className='fa fa-shopping-cart me-1'>Cart(0)</i>
                        </NavLink>
                     </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
