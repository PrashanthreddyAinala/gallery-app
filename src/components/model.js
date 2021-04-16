import React from "react"

function Model({selectedImg, setSelectedImg}) {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }
    return(
        <div className="backdrop" onClick={handleClick} data-aos="zoom-in">
            <img src={selectedImg} alt="Enlarge pic" />
        </div>
    )
}

export default Model;