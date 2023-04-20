import React from "react";
import "./footer.css";
import {Link} from "react-router-dom";

const Footer = ()=>{
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-context-container">
                <div className="logo-container">
                    <h2 className="logo-text">Share<span>Pro</span></h2>
                </div>
                <p>SharePro is a photo/images sharing platform where you can share photo/images throught the internet securely.</p>
                </div>
                <div className="footer-context-container">
                    <h2>Quick Links</h2>
                    <Link to="#">Platform</Link>
                    <Link to="#">FAQ's</Link>
                    <Link to="#">How It Works</Link>
                </div>
                <div className="footer-context-container">
                    <h2>Contact Us</h2>
                    <p>Mail us at shubham.ubarhande69@gmail.com</p>
                </div>
                <div className="footer-context-container">
                    <h2>Follow Us</h2>
                    <Link to="#">Instagram</Link>
                    <Link to="#">Twitter</Link>
                    <Link to="#">Github</Link>
                </div>
            </div>
            <div className="footer-copyright-container">
                <p>Ⓒ made with love by Shubham Ubarhande</p>
            </div>
        </footer>
    );
};

export default Footer;