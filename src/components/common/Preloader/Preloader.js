import React from "react";
import preloader from "../../../assets/images/loader3s200px.svg";

let Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader}/>
    </div>
}

export default Preloader;