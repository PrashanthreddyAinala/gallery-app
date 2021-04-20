import React from "react"

const Title = ({dark, setDark}) => {

    return (
        <div className="title">
            <h1>My<span className="sub-title">Gallery</span></h1>
            <h1 onClick={()=>setDark(prevTheme => !prevTheme)} className="theme">{dark ? (<i className="fa fa-sun-o fa-sm" aria-hidden="true" />) : (<i className="fa fa-moon-o fa-sm" />) }</h1>
        </div>
    )
}

export default Title;