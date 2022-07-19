import React,{useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

//Components
import Security from "../Security";
import Status from "../Status";



const DownloadPage = ()=>{
    const location  = useLocation().search;
    const querry = location.split("=")[1];
    const apiUrl = "https://sharepro-api.herokuapp.com/api/check_id";

    const [status, setStatus] = useState("loading");


    useEffect(()=>{
        const checkId = ()=>{
            axios.patch(apiUrl, {id: querry})
            .then(r => r.data ? setStatus("") : null)
            .catch (e => e.response ? setStatus("notFound") : null);
    
        }

        const checkQuerry = ()=>{
            if(typeof querry === "undefined"){
                setStatus("notFound")
            }else {
                checkId();
            }
        }
        checkQuerry();
    }, [querry]);

    return(
        <section className="download-page-section">
            <Status status={status} />
            <Security id={querry}/>
        </section>
    );
};


export default DownloadPage;