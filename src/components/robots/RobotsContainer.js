import { useEffect, useState } from "react";
import { useDarkMode } from "../../context/darkModeContext";
import { robotsData } from "../../data/robotsData"
import FavRobots from "./FavRobots";
import RobotCard from "./RobotCard";

const RobotsContainer = () => {

  const [robots, setRobots] = useState([{id:1}])
  const [loading, setLoading] = useState( true )

  const [counter, setCounter] = useState(0)

  const darkMode = useDarkMode()
  
  useEffect(() => {
    console.log('Mounting RobotsContainer ...');
    getRobots().then( data => {
      setRobots( data )
      setLoading( false )
    })
  }, [])

  useEffect(() => {
    console.log('hay render de RobotsContainer');
  })
  
  const getRobots = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(robotsData)
      }, 3000);
    })
  }

  const addCounterHandler = () => { 
    setCounter( count => { 
      return count+1
    })
  }

  // if ( loading ) {
  //   return <h1 className="text-3xl">loading ...</h1>
  // }

  return (
    <>
      <FavRobots/>
      <button className="btn" onClick={ addCounterHandler }>Aumentar contador</button>
      { <strong>Contador: {counter}</strong>}
      { loading &&  <h1 className="text-3xl">loading ...</h1> }
      { !loading && 
        <div>
          { robots.map( r => <RobotCard key={r.id} data={r} darkMode={darkMode}/> ) }
        </div>
      }
      <FavRobots/>
    </>
  )
}
export default RobotsContainer