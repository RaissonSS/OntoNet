import React from "react"
import "./styles.css"

function Contact() {
    return (
        <div className="contact-box">
            <p>Entre em contato conosco através de nossas redes:</p>
            <div className="contact-social-medias">
                <p><strong>Instagram:</strong>{ " @ontonet_oficial" }</p>
                <p><strong>WhatsApp:</strong>{ " +55 96784-2218" }</p>
                <p><strong>E-mail:</strong>{ " contato_ontonet@ontonet.com.br" }</p>
            </div>
        </div>
    )
}

export default Contact