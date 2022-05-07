import { useContext } from "react"
import { DarkModeContext } from "../context/darkModeContext"
import FavRobots from "./robots/FavRobots"

const Saludo = (props) => {
    const darkMode = useContext(DarkModeContext)
    // props.action ---> miFuncion()
    return (
        <div className={ darkMode && 'bg-gray-400'}>
            <h1 className="text-3xl">Mi primer componente</h1>
            <div className="text-3xl">Saludos {props.name}</div>
            <div>Tienes {props.age} años</div>
            <strong>
                { darkMode ? 'Dark mode: activado' :
                 'Dark mode: desactivado' }
            </strong>
            <FavRobots/>
        </div>
    )
}

export default Saludo