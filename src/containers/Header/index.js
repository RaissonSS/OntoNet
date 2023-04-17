import React from "react"
import "./styles.css"
import logoOntoNet from "../../assets/logos/logo-ontonet.png"

function Header({ section, setSection }) {

    const clickSection = (_section) => {
        if (section === _section) return
        setSection(_section)
    }

    return (
        <div className="header">
            <img alt="OntoNet logo" src={ logoOntoNet }  onClick={ () => { clickSection(1) } } />
            <div className="header-sections">
                <p onClick={ () => { clickSection(1) } }><strong>SERVIÇOS</strong></p>
                <p onClick={ () => { clickSection(2) } }><strong>CLIENTES</strong></p>
                <p onClick={ () => { clickSection(3) } }><strong>EQUIPE</strong></p>
                <p onClick={ () => { clickSection(4) } }><strong>CONTATO</strong></p>
            </div>
        </div>
    )
}

export default Header