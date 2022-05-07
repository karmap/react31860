import { useContext } from "react"
import { DarkModeContext } from "../context/darkModeContext"

const ToggleDarkMode = ({ darkModeHandler }) => {

  const darkMode = useContext(DarkModeContext)

  return (
    <button onClick={darkModeHandler} className='btn'>
      {darkMode ? 'Desactivar' : 'Activar' } Dark Mode
    </button>
  )
}
export default ToggleDarkMode