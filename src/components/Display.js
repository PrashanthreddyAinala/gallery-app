import React from "react"
import UseFirestore from "../hooks/firestore"

function Display({setSelectedImg}) {
    const {docs} = UseFirestore('images');

    return(
        <div className="container">
        <div className="row">
            {docs && docs.map(doc=>(
                <div className="col-4 col-md-3 col-lg-3 p-1 image-div"  data-aos="fade-up" key={doc.id} onClick={()=>setSelectedImg(doc.url)}>
                    <img src={doc.url} alt="uploaded pic" className="image"/>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Display;