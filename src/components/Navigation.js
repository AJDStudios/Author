import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)
    
    let theMenu
    let menuMask

    if(showMenu){
        theMenu = 
        <div className="menu">
            <h1>The Menu</h1>
        </div>

        menuMask = 
        <div className="menumask"
        onClick ={() => setShowMenu(false)}
        >

        </div>
    }

    return(
        <nav className="nav">
            <FontAwesomeIcon 
                icon= { faBars }
                onClick ={()=> setShowMenu(!showMenu)}
            />

            { menuMask }

            { theMenu }
        </nav>
    )
}

export default Navigation