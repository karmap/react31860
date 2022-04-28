const RobotCard = ( {data} ) => {
  return (
    <div className="border-4 border-indigo-600 m-2 p-2">
        <img className="h-20" src={`https://robohash.org/${data.id}`}/>
        <div>{data.name}</div>
        <div>{data.battery}</div>
    </div>
  )
}
export default RobotCard