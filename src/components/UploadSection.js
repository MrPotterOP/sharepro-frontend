import React,{useRef,useState} from "react";
import "./uploadsection.css";
import Axios from "axios";
import Status from "./Status";




const UploadSection = ()=>{
    const fileInput = useRef(null);
    const [fileName, setFileName] = useState("/images/step1.png");
    const [photo, setPhoto] = useState();
    const [alert, setAlert] = useState(false);
    const apiUrl = "https://sharepro-api.herokuapp.com/api/upload";

    const [responseData, setResponseData] = useState();
    const [status, setStatus] = useState("");
    const formData = new FormData();
    

    const [inputs, setInputs] = useState({
        name: "Anonymous",
        limit: 1,
        password: ""
    });
    
    const handleInput = (type, value)=>{
        if(type === "password"){
            setInputs({...inputs, password: value});
        }else if(type === "number"){
            setInputs({...inputs, limit: value});
        }else {
            setInputs({...inputs, name: value});
        }
    };
    const handleResponse = (id)=>{
        setResponseData(id);
        setStatus("success");
    }
    const handleFailure = (response)=>{
        setResponseData(response.data);
        setStatus("failure");
    }
    const appendInputs = ()=>{
        formData.append("photo", photo);
        formData.append("limit", inputs.limit);
        formData.append("name", inputs.name);
        formData.append("password", inputs.password);
    }

    
    const showWarnings = ()=>{
        setAlert(true);
    }

    const handleSubmit = ()=> {
        if(!photo || inputs.name.length <= 4 || inputs.name.length >= 20 || inputs.limit >50 || inputs.limit === 0 || inputs.password.length <= 6){
            showWarnings();
        }else{
            setStatus("loading");
            appendInputs();
            Axios.post(apiUrl, formData, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(r => r ? handleResponse(r.data.id): null)
            .catch(e => e.response ? handleFailure(e.response) : null);
        }
    }

    const handleChange = ()=>{
        const [file] = fileInput.current.files;
        setPhoto(file);
        setFileName(URL.createObjectURL(file));
    };


    return(
        <section className="section-upload">
        <Status status={status} id={responseData}/>
            <div className="upload-container">
                <div className={alert ? "upload-image-container show-warnings" : "upload-image-container"}>
                    <img src={fileName} alt="upload"></img>
                    <p>Selected Image will apper here 👆</p>
                    <p className={photo ? "success-message" : "warning-message"}>{photo ? "Photo Uploaded." : "Upload a photo."}</p>
                </div>
                <div className="upload-btn-container" onClick={()=> fileInput.current.click()}>
                    <input type="file" ref={fileInput} onChange={handleChange} style={{"display" : "none"}} name="image" accept="image/*"></input>
                    <p>Choose Image to Upload</p>
                    <i className="gg-add-r"></i>
                </div>
            </div>
            <div className="upload-submit-container">

                <div className="upload-inputs-container">
                    <h2>Uploader's Name</h2>
                    <label>This name will be shown as uploaded by the name provided.</label>
                    <input className="input-primary" type="text" onChange={(e)=>{handleInput(e.target.type, e.target.value)}} maxLength={25} placeholder="Your Name"></input>
                    <p>by default it is set to Anonymous.</p>
                </div>

                <div className={alert ? "upload-inputs-container show-warnings" : "upload-inputs-container"}>
                    <h2>Set Limit</h2>
                    <label>Set How many times your photo should be downloadable.</label>
                    <input className="input-primary" type="number" value={inputs.limit} min={1} max={50} onChange={(e)=>{handleInput(e.target.type, e.target.value)}} placeholder="1 to 50"></input>
                    <p className={inputs.limit>50 ? "warning-message" : "success-message"}>{inputs.limit>50 ? "Limit Should be less than 50" : "Limit Acceptable"}</p>
                </div>
                
                <div className={alert ? "upload-inputs-container show-warnings" : "upload-inputs-container"}>
                    <h2>Set Password</h2>
                    <label>Set the Paasword</label>
                    <input type="password" min={6} className="input-primary" onChange={(e)=>{handleInput(e.target.type, e.target.value)}} placeholder="Choose Password"></input>
                    <p className={inputs.password.length<4 ? "warning-message" : "success-message"}>{inputs.password.length<4 ? "passowrd should have more than 4 characters" : "Password Acceptable"}</p>
                </div>
                
                <button onClick={()=> handleSubmit()} className="hero-btn btn-upload">
                    Upload
                </button>
            </div>
        </section>
    );
};

export default UploadSection;