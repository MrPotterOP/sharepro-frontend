import React from "react";
import { useNavigate } from "react-router-dom";


const Error404 = ()=>{
        const navigator = useNavigate();

    return(
        <div className="status-container">
                <div className="status-content-success">
                        <img src="/images/error404.png" alt="share"></img>
                    <div>
                        <p className="status-message">OOPS <br></br>The requested path is no more available.</p>
                        <button onClick={()=> navigator("/")} className="hero-btn">Back to Homepage</button>
                    </div>
                </div>
        </div>
    )
};


export default Error404;