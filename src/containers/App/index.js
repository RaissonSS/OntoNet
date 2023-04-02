import React, { useState } from "react"
import "./styles.css"

import Header from "../Header"
import Services from "../Services/Services"
import Clients from "../Clients/Clients"
import Squad from "../Squad/Squad"
import Contact from "../Contact/Contact"

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
      return <Services />
    case 2:
      return <Clients />
    case 3:
      return <Squad />
    case 4:
      return <Contact />
    default:
      return <Services />
  }
}

export default App;
