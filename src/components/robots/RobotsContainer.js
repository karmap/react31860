import { useEffect, useState } from "react";
import FavRobotsProvider from "../../context/favRobotsContext";
import { robotsData } from "../../data/robotsData"
import FavRobots from "./FavRobots";
import RobotCard from "./RobotCard";

const RobotsContainer = () => {

  const [robots, setRobots] = useState([])
  const [loading, setLoading] = useState( true )
  
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

  if ( loading ) {
    return <h1 className="text-3xl">loading ...</h1>
  }

  return (
    <>
      <FavRobots/>
      <div>
        { robots.map( r => <RobotCard key={r.id} data={r} /> ) }
      </div>
      <FavRobots/>
    </>
  )
}
export default RobotsContainer