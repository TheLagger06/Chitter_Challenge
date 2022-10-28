import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo3 from './Images/logo3.png';



function Header() {
    const [cookies, setCookie, removeCookie] = useCookies([]);
    
  

    const logOut = () => {
    removeCookie("jwt");
    };
    useEffect(() => {
            if (!cookies.jwt) {
           document.getElementById("logout").style.display = "none";
            } else {
        document.getElementById("logout").style.display = "show";
      }
   
        
     }, [cookies, removeCookie]);
    
    return (
     <>
            <nav class="navbar navbar-dark bg-dark navbar-expand-sm backgroundHF ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
            <img src={logo3} alt="" class="logoImage" />Digital Futures</a>

         
          <div className="navbar-collapse collapse flex-grow-1 justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                             <a id="logout" onClick={logOut} className="nav-item nav-link 4" href="/">Log out </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;