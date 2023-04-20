import React from "react";
import "./downloadphoto.css";
import {saveAs} from "file-saver";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DownloadPhoto = (props)=>{
    const navigate = useNavigate();
    const {url, limit, downloaded, name, id, photoID} = props;
    const fileName = `sharepro-${Date.now()}.${url.split(".")[3]}`;

    const apiUrl = "https://sharepro.cyclic.app/api/download";
    // const apiUrl = "https://sharepro-api.herokuapp.com/api/download";

    const downloadRequest = ()=>{
        axios.put(apiUrl, {id, photoID})
        .then(r => r.data ? navigate("/") : null)
        .catch(e => e.response ? navigate("/") : null);
    }

    const handleDownload = ()=>{
        saveAs(url, fileName);
        downloadRequest();
    }

    return(
        <div className="download-photo-container">
            <img onContextMenu={(e)=> e.preventDefault()} className="shared-img" src={url} alt="shared-img"></img>
            <div className="shared-img-details-container">
                <h3>Uploaded By</h3>
                <p>{name}</p>

                <h3>Downloaded</h3>
                <p>{downloaded} times.</p>

                <h4><span>{limit - downloaded}</span> Downloads Remaining.</h4>
                <button onClick={()=> handleDownload()} className="hero-btn">Download</button>
                
            </div>
            
        </div>
    );
};

export default DownloadPhoto;