import React from "react"
import "./styles.css"

function ServicesItemText({
    text,
    padding,
}) {
    return (
        <div
            className="services-item-text"
            style={ { padding: padding } }
        >
            <p>{ text }</p>
        </div>
    )
}

export default ServicesItemText
