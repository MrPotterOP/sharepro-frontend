import React,{useState} from "react";
import "./faqs.css";


const FAQs = ()=>{
    const [active, setActive] = useState({
        "question-1": false,
        "question-2": false,
        "question-3": false,
        "question-4": false
    });

    const handleClick = (id)=>{
        setActive({...active, [id]: !active[id]});
    };

    return(
        <section className="section-faqs" id="faqs">
            <div className="work-brief-title-container faqs-title-container">
                <h2>FAQ's</h2>
            </div>
                <div className="faqs-container">
                    <div className={active["question-1"] ? "faq-container faq-container-active" : "faq-container"} onClick={()=> handleClick("question-1")}>
                        <ul>
                            <li>This is an question</li>
                            <li>This is the answer</li>
                        </ul>
                    </div>
                    <div className={active["question-2"] ? "faq-container faq-container-active" : "faq-container"} onClick={()=> handleClick("question-2")}>
                        <ul>
                            <li>This is an question</li>
                            <li>This is the answer</li>
                        </ul>
                    </div>
                    <div className={active["question-3"] ? "faq-container faq-container-active" : "faq-container"} onClick={()=> handleClick("question-3")}>
                        <ul>
                            <li>This is an question</li>
                            <li>This is the answer</li>
                        </ul>
                    </div>
                    <div className={active["question-4"] ? "faq-container faq-container-active" : "faq-container"} onClick={()=> handleClick("question-4")}>
                        <ul>
                            <li>This is an question</li>
                            <li>This is the answer</li>
                        </ul>
                    </div>
                    
                </div>
        </section>
    );
};


export default FAQs;