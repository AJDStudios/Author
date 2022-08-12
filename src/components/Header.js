import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom"

function Header(){
    return(
        <nav className="header">
            <Link to="/" className="site-title">
                Aaron James Dodd
            </Link>

            <Navigation />
        </nav>
    )
}

export default Header