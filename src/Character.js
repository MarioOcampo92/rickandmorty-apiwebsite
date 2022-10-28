import React from "react";
import "./style.css"
import closeBtn from "./btn-cl.png"

const Character = ({avatar = [], chrName= [], closeModal}) => {
    return(
        <div className="card position-relative chr-card d-flex flex-column align-items-center">
            <div className="position-absolute" onClick={() => closeModal(false)} style={{top:-28,left:-28}}>
                <img className="btn-close" src={closeBtn}/>
            </div>
            <img src={avatar} className="chr-img"/>
            <div className="card-body text-center" style={{maxWidth: 250}}>
                <hr />
                <h5 className="card-title">
                    Your random Character is <br />
                    <span className=" text-capitalize text-success">¡{chrName}!</span>
                </h5>
            </div>
        </div>
    )
}

export default Character