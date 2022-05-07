import { useContext } from "react"
import { FavRobotsContext } from "../../context/favRobotsContext"

const FavRobots = () => {

  const { favorites } = useContext(FavRobotsContext)

  return (
    <div>
        FavRobots: { favorites.join(',') }
    </div>
  )
}
export default FavRobots