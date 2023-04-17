import React from "react"
import "../Styles/styles.css"

import data from "../../data/index"

function Clients() {
    return (
        <div className="clients-box">
            <p>{ data.clients[0] }</p>
            <img alt="foto 01" />
            <p>{ data.clients[0] }</p>
            <img alt="foto 02" />
        </div>
    )
}

export default Clients