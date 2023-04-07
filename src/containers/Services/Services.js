import React from "react"
import "./styles.css"

import data from "../../data"
import fibraOptica from "../../assets/fibra-optica.webp"
import internet from "../../assets/internet.webp"

function Services() {
    return (
        <div className="services-box">
            <div className="header-services">
                <p>“A internet que conecta até o seu campo semântico”</p>
            </div>
            <div className="main-content-services">
                <div className="services-textimage services-item">
                    <div className="services-item-text">
                        <p>{ data.services[0] }</p>
                    </div>
                    <img id="fibra-optica" src={ fibraOptica } alt="Imagem Fibra Óptica" />
                </div>
                <div className="services-text services-item">
                    <p>{ data.services[1] }</p>
                </div>
                <div className="services-textimage services-item" style={ { flexDirection: "row-reverse" } }>
                    <div className="services-item-text">
                        <p>{ data.services[2] }</p>
                    </div>
                    <img id="internet" src={ internet } alt="Imagem Internet" />
                </div>
            </div>
        </div>
    )
}

export default Services