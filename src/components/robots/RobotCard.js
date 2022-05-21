import { memo, useEffect } from "react"
import { Link } from "react-router-dom"
import { useFavs } from "../../context/favRobotsContext"

const RobotCard = memo( ( {data, darkMode = false} ) => {

  const { addToFavorites } = useFavs()

  // useEffect(() => {
  //   console.log('Mounting robot card...');
  // }, [])

  // useEffect(() => {
  //   console.log('Render robot card... por darkmode');
  // }, [darkMode])

  useEffect(() => {
    console.log('hay render de RobotCard');
  })
  
  return (
    <div className={`border-4 border-indigo-600 m-2 p-2 ${darkMode ? 'bg-indigo-300' : ''}`}>
        <img className="h-20" src={`https://robohash.org/${data.id}`}/>
        <div>{data.name}</div>
        <div>{data.battery}</div>
        <button onClick={ () => { addToFavorites(data.id) }} className="btn">Agregar a favoritos</button>
        <Link to={`/robots/${data.id}`}>Detalle</Link>
    </div>
  )
})
export default RobotCard