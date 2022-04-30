import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { robotsData } from "../../data/robotsData"

const RobotDetail = () => {

  const { robotId } = useParams()
  const [robot, setRobot] = useState( {} )

  useEffect( () => {

    (async () => {
      const robotData = await getRobotDetail()
      if (robotData) {
        setRobot(robotData)
      }
    })()
    
  }, [robotId])

  const getRobotDetail = () => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve( robotsData.find( r => r.id == robotId) )
      }, 1000);
    })
  }
  
  return (
    <>
      <div>RobotDetail - {robotId}</div>
      <strong className="p-2">{robot.id}</strong>
      <strong className="p-2">{robot.name}</strong>
      <strong className="p-2">{robot.battery}</strong>
      <div className="m-5">
        <Link to='/robots/1'>Bender</Link>
      </div>
    </>
  )
}
export default RobotDetail