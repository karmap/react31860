import { useEffect, useState } from "react";
import { robotsData } from "../../data/robotsData"
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
      }, 2000);
    })
  }

  return (
    <div>
      { loading ?
        <h1>loading ...</h1>
      :
        robots.map( r => <RobotCard key={r.id} data={r} />)
      }
    </div>
  )
}
export default RobotsContainer