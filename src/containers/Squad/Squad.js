import React from "react"
import "./styles.css"

import SquadImage from "../../assets/squad-image.jpg"

function Squad() {
    return (
        <div className="squad-box">
            <div className="squad-wrapper">
                <div className="squad-background">
                    <img alt="equipe" src={ SquadImage } id="squad-image" />
                </div>
                <div className="squad-squad">
                    <p id="squad-title">Equipe OntoNet</p>
                    <p>Diretor: <strong>Marcelo</strong></p>
                    <p>Marketing & Comercial: <strong>Rodrigo</strong></p>
                    <p>Suporte ao Cliente: <strong>Mariane</strong></p>
                    <p>Analista de Redes & TI: <strong>Raisson</strong></p>
                    <p>Instalador de Internet & TI: <strong>Vitório e Thales</strong></p>
                    <p>Estagiários: <strong>Eduardo e Willian</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Squad