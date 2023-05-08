import React from "react"
import "./styles.css"

import data from "../../data"
import fibraOptica from "../../assets/fibra-optica.webp"
import internet from "../../assets/internet.webp"

import ServicesItem from "../../components/ServicesItem"
import ServicesItemText from "../../components/ServicesItemText"

function Services() { // apertar paragrefo pra services-item ficar width minimo
    return (
        <div className="services-box">
            <div className="header-services">
                <p>“A internet que conecta até o seu campo semântico”</p>
            </div>
            <div className="main-content-services">
                <ServicesItem
                    imageAlt="Fibra Óptica"
                    image={ fibraOptica }
                    text={ data.services[0] }
                    id="optic-fiber"
                    space={ 128 }
                />
                <ServicesItemText
                    text={ data.services[1] }
                    padding="0px 0px 0px"
                />
                <ServicesItem
                    imageAlt="Internet"
                    image={ internet }
                    text={ data.services[2] }
                    id="internet"
                />
            </div>
        </div>
    )
}

export default Services
