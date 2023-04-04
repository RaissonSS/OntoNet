import React from "react"
import "./styles.css"

import data from "../../data/index"

function Clients() {
    return (
        <div className="box-clients">
            <div className="content-clients">
                <div className="clients-text">
                    <p>{ data.clients }</p>
                </div>
                <div className="clients-images">
                    <img alt="foto 01" />
                    <img alt="foto 02" />
                </div>
            </div>
        </div>
    )
}

export default Clients