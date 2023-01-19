import React from "react"
import "./App.css"

//Componentes
import ComponenteUm from "./components/ComponenteUm"
import ComponenteDois from "./components/ComponenteDois"
import ComponenteTres from "./components/ComponenteTrês"
import ComponenteQuatro from "./components/ComponenteQuatro"
import ComponenteSeis from "./components/ComponenteSeis"
import ComponenteSete from "./components/ComponenteSete"
import ComponenteOito from "./components/ComponenteOito"
import ComponenteNove from "./components/ComponenteNove"
import ComponenteDez from "./components/ComponenteDez"

function App(){
    return(
        <>
            <ComponenteDez titulo="Componente Dez" />

            <ComponenteNove titulo="Componente Nove" valor="Ana"/>

            <ComponenteOito titulo="Componente Oito" valor="Osório" />
            
            <ComponenteSete titulo="Componente Sete" valor={1} />

            <ComponenteSeis titulo="Componente seis" />

            <ComponenteQuatro titulo="Componente Quatro" />
            
            <ComponenteTres titulo="teste" subtitulo="teste do componente três" />

            <ComponenteDois />
            
            <ComponenteUm />
        </>
    )
}
export default App