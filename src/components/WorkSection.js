import React from "react";
import "./worksection.css";

const WorkSection = ()=>{
    return(
        <section className="section-how-it-works" id="how-it-works">
            <div className="work-brief-container">
                <div className="work-brief-title-container">
                    <h2>How It Works</h2>
                </div>
                <p>Follow these easy steps to share your photos securely over the internet.</p>
            </div>
            <div className="work-process-container">
                <div className="work-step-container">
                    
                        <img src="/images/step1.png" alt="process-step-icon"></img>
                    
                    <div className="work-step-description-container">
                        <h3>Add Photo</h3>
                        <p>Firstly you need to seelect and add the photo you want to share.</p>
                    </div>
                </div>

                <div className="work-step-container">
                    
                        <img src="/images/step2.png" alt="process-step-icon"></img>
                    
                    <div className="work-step-description-container">
                        <h3>Set Password and Limit</h3>
                        <p>Now set a Password for it and also set the limit that how many times the photo should be there on the database.</p>
                    </div>
                </div>

                <div className="work-step-container">
                    
                        <img src="/images/step3.png" alt="process-step-icon"></img>
                    
                    <div className="work-step-description-container">
                        <h3>Upload and get a Link</h3>
                        <p>After that click on upload and you will get a link to download the photo.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;