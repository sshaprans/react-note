// eslint-disable-next-line
import React,{Fragment} from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar navbar-dark navbar-expand-lg bg-secondary">

        <div className="navbar-brand p-lg-2">
            first ReactApp
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Main</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">Information</NavLink>
            </li>
        </ul>
    </nav>
)