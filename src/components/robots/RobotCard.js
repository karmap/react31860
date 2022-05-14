import { useContext } from "react"
import { Link } from "react-router-dom"
import { FavRobotsContext } from "../../context/favRobotsContext"

const RobotCard = ( {data, darkMode = false} ) => {

  const { addToFavorites } = useContext(FavRobotsContext)

  return (
    <div className={`border-4 border-indigo-600 m-2 p-2 ${darkMode ? 'bg-indigo-300' : ''}`}>
        <img className="h-20" src={`https://robohash.org/${data.id}`}/>
        <div>{data.name}</div>
        <div>{data.battery}</div>
        <button onClick={ () => { addToFavorites(data.id) }} className="btn">Agregar a favoritos</button>
        <Link to={`/robots/${data.id}`}>Detalle</Link>
    </div>
  )
}
export default RobotCard