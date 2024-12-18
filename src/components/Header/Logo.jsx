import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../../assets/images/logo/ut-transp-logo.png";



function Logo(){
    
    return (
        <Link to="/">
            <img 
                src={logoimg} 
                alt="Unlock Travel Logo" 
                className="h-auto w-32" 
            />
        </Link>
    )
}

export default Logo;