import React, {useState} from "react"
import ProgressBar from "./ProgressBar"

function Upload() {
    const [input, setInput] = useState(null)
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg"]

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)) {
            setInput(selected);
            setError("");
        } else {
            setError("Please select correct file (png or jpeg)")
            setInput(null);
        }
    };

    return (
        <div className="upload">
            {input && <ProgressBar input={input} setInput={setInput}/>}
            {error && alert("Please choose an image (png or jpg)")}
            <label className="container">
                <input type="file" onChange={handleChange} />
                <span className="add">+</span>
            </label>
        </div>
    )
}

export default Upload;