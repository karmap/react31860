import { useEffect, useState } from "react";
import { useDarkMode } from "../../context/darkModeContext";
import { robotsData } from "../../data/robotsData"
import FavRobots from "./FavRobots";
import RobotCard from "./RobotCard";

const RobotsContainer = () => {

  const [robots, setRobots] = useState([{id:1}])
  const [loading, setLoading] = useState( true )

  const darkMode = useDarkMode()
  
  useEffect(() => {
    getRobots().then( data => {
      setRobots( data )
      setLoading( false )
    })
  }, [])
  
  const getRobots = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(robotsData)
      }, 3000);
    })
  }

  // if ( loading ) {
  //   return <h1 className="text-3xl">loading ...</h1>
  // }

  return (
    <>
      <FavRobots/>
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