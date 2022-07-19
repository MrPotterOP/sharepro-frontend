import React,{useState} from "react";
import "./security.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import DownloadPhoto from "./DownloadPhoto";

const Security = (props)=>{
    const {id} = props;
    const apiUrl = "https://sharepro-api.herokuapp.com/api/validation";
    const [wrongCount, setWrongCount] = useState(3);
    let password;
    const [data, setData] = useState();

    const navigate = useNavigate();

    const handleError = ()=>{
        if(wrongCount === 1){
            navigate("/");
        }else {
            setWrongCount(wrongCount - 1);
            alert("Incorrect Password.")
        }
        
    }

    const handleSubmit = ()=>{
        axios.patch(apiUrl, {id, password})
        .then(r => r.data ? setData(r.data) : null)
        .catch (e => e.response ? handleError() : null);
    }
    const handleChange = (v)=>{
        password = v;
    }
    const SecurityForm = ()=>{
        return(
        <div className="security-section-container">
            <div className="upload-inputs-container show-warnings security-form">
                    <h2>Password Required</h2>
                    <label>For Security Reasons you have to type the correct password set by the author of this perticular photo to access or download the image.</label>
                    <input className="input-primary" type="password" onChange={(e)=> handleChange(e.target.value)} placeholder="Type Password"></input>
                    <p className="success-message">After entering {wrongCount} wrong passwords you will be redirected to the homepage.</p>
                    <button className="hero-btn btn-upload" onClick={()=> handleSubmit()}>Access Photo</button>
            </div>
        </div>
    );
    }

    return(
        <>
            {data ? <DownloadPhoto id={id} name={data.name} url={data.photoURL} limit={data.limit} downloaded={data.downloaded} photoID={data.photoID}/> : <SecurityForm />}
        </>
    )
    
};


export default Security;