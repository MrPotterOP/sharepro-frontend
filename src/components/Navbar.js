import React,{useState} from "react";
import { HashLink } from "react-router-hash-link";
import "./navbar.css";


const Navbar = ()=>{

    const [isActive, setIsActive] = useState(false);
    const [onPage, setOnPage] = useState(false);

    const handleClick = ()=>{
        setIsActive(!isActive);
    };
    const handleScroll = ()=>{
        const position= window.pageYOffset;
        if(position > 0){
            setOnPage(true);
        }else {
            setOnPage(false);
        }
    }
    
    window.addEventListener("scroll", handleScroll)

    return (
        <header className={onPage ? "nav-shadow" : ""}>
            <nav>
                <div className="logo-container">
                    <h2 className="logo-text">Share<span>Pro</span></h2>
                </div>

                <div className="nav-menu-container" id={isActive ? "active" : "inactive"}>
                    <ul>
                        <li><HashLink to="/" onClick={()=> setIsActive(false)}>Home</HashLink></li>
                        <li><HashLink to="/#how-it-works" onClick={()=> setIsActive(false)}>How It Works</HashLink></li>
                        <li><HashLink to="/#faqs" onClick={()=> setIsActive(false)}>FAQs</HashLink></li>
                        <li><HashLink to="/platform" onClick={()=> setIsActive(false)}>Getting Started</HashLink></li>
                    </ul>
                </div>

                <div className="nav-icon-container" onClick={()=> handleClick()}>
                    <i className={isActive ? "gg-close nav-menu-icon" : "gg-menu nav-menu-icon"}></i>
                </div>
            </nav>
        </header>
        
    )
}

export default Navbar;