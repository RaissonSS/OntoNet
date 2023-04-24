import React from "react"
import "./styles.css"

import data from "../../data/index"

import TechnologicalSphereImage from "../../assets/technological-sphere.png"
import ClientImage from "../../assets/client-image.jpg"

function Clients() {
    return (
        <div className="clients-box">
            <div
                className="clients-content"
            >
                <p>{ data.clients[0] }</p>
                <img alt="client" src={ ClientImage } id="client-image" />
            </div>
            <div
                className="clients-content"
                style={ { flexDirection: "row-reverse" } }
            >
                <p>{ data.clients[0] }</p>
                <img alt="sphere" src={ TechnologicalSphereImage } />
            </div>
        </div>
    )
}

export default Clients