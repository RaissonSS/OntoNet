import React from "react"
import "../Styles/styles.css"

import data from "../../data"
import fibraOptica from "../../assets/fibra-optica.webp"
import internet from "../../assets/internet.webp"

function Services() { // apertar paragrefo pra services-item ficar width minimo
    return (
        <div className="services-box">
            <div className="header-services">
                <p>“A internet que conecta até o seu campo semântico”</p>
            </div>
            <div className="main-content-services">
                <div className="services-item">
                    <div className="services-item-text">
                        <p>{ data.services[0] }</p>
                    </div>
                    <img id="optical-fiber" src={ fibraOptica } alt="Imagem Fibra Óptica" />
                </div>
                <div className="services-item">
                    <div className="services-item-text">
                        <p>{ data.services[1] }</p>
                    </div>
                </div>
                <div className="services-item" style={ { flexDirection: "row-reverse" } }>
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