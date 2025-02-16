import React from "react";

const Location_page = () => {
    return (
        <>
            <div className="location-page">
                <iframe
                    title="Map"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/place/Elfreth's+Alley+Museum/@39.9527439,-75.1450749,17z/data=!4m6!3m5!1s0x89c6c888a20efd9f:0x2a546ebd6fb62e96!8m2!3d39.9527178!4d-75.1424819!16zL20vMDR0dGY2?entry=ttu"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
}

export default Location_page;