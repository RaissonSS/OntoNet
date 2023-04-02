import React, { useState } from "react"
import Header from "../Header";
import "./styles.css"

function App() {
    const [ section, setSection ] = useState(1)

    return (
      <div className="box">
        <Header
          section={ section }
          setSection={ setSection }
        />
        { RenderSection(section) }
      </div>
    );
}

function RenderSection(section) {
  switch(section) {
    case 1:
      return <p>Serviços</p>
    case 2:
      return <p>Clientes</p>
    case 3:
      return <p>Equipe</p>
    case 4:
      return <p>Contato</p>
    default:
      return <p>Serviços</p>
  }
}

export default App;
