import React from "react";

const Faq_content = (props) => {
    return (
        <>
            <div className="faq-content">
                <p>{props.p1}</p>
                <p>{props.p2}</p>
            </div>
        </>
    );
}

export default Faq_content;