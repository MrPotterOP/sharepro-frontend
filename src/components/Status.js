import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import "./status.css";

import Error404 from "./Error404";

const Status = (props)=>{
    const {status, id} = props;
    const [timer, setTimer] = useState(5);
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();

    const Loading = ()=>{
        return(
            <div className="status-container">
                <div className="status-content">
                    <div className="loading-spinner">
                    </div>
                    <p className="status-message">Loading Please Wait.</p>
                </div>
            </div>
        )
    };
    const Failure = ()=>{
        if(timer === 0){
            navigate("/");
        }else {
            setTimeout(()=> {setTimer(timer - 1)}, 1000);
        }
        return(
            <div className="status-container">
                <div className="status-content">
                    <p className="status-message">Failure to Proceed the Information. you will be redirected to the home page in {timer}</p>
                </div>
            </div>
        )
    }
    const Success = ()=>{
        const link = "https://share-pro.netlify.app/download?photo="+ id;
        const handleCopy = ()=>{
            navigator.clipboard.writeText(link);
            setCopied(true);
        }
        return(
            <div className="status-container">
                <div className="status-content-success">
                        <img src="/images/share.png" alt="share"></img>
                    <div>
                        <p className="status-message">Successfuly Uploaded the photo. <br></br> Now Copy the Below Link and share with your friends.</p>
                        <div className="copy-to-clipboard-container">
                            <p>{link}</p>
                            {copied ? <p className="text-copied">Link Copied to Clipboard</p> : <button onClick={()=> handleCopy()} className="copy-btn">Click to Copy</button>}
                            
                        </div>
                        <button onClick={()=> navigate("/")} className="hero-btn">Back to Homepage</button>
                    </div>
                </div>
            </div>
        )
    }
    
    if(status === "success"){
        return <Success />
    }else if(status === "failure"){
        return <Failure />
    }else if(status === "loading"){
        return <Loading />
    }else if (status === "notFound"){
        return <Error404 />
    }else {
        return <></>
    }
};


export default Status;