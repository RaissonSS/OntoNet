import React from "react"
import "./styles.css"
import logoOntoNet from "../../assets/logo-ontonet.png"

function Header({ section, setSection }) {

    const clickSection = (_section) => {
        if (section === _section) return
        setSection(_section)
    }

    return (
        <div className="header">
            <img alt="OntoNet logo" src={ logoOntoNet }  onClick={ () => { clickSection(1) } } />
            <div className="header-sections">
                <p onClick={ () => { clickSection(1) } }>Serviços</p>
                <p onClick={ () => { clickSection(2) } }>Clientes</p>
                <p onClick={ () => { clickSection(3) } }>Equipe</p>
                <p onClick={ () => { clickSection(4) } }>Contato</p>
            </div>
        </div>
    )
}

export default Header