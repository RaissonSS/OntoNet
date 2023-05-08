import React from "react"
import "./styles.css"

function ServicesItem({
    image,
    imageAlt,
    text,
    id,
    space = 0,
}) {
    return (
        <>
            <div className="servies-item-wrapper" id={ `wrapper-${ id }`}>
                <div className="services-item-background">
                    <img id={ id } src={ image } alt={ imageAlt } />
                </div>
                <div className="services-item-border"></div>
                <div className="services-item-text">
                    <p>{ text }</p>
                </div>
            </div>
            {
                space > 0
                    ? <div style={ { height: `${ space }px` } } />
                    : null
            }
        </>
    )
}

export default ServicesItem
