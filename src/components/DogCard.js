const DogCard = ( {dogData} ) => {
  return (
    <div style={{border:'solid green 5px', margin:'10px', padding:'5px'}}>
        <strong>{dogData.name}</strong>
        <div>{dogData.breed}</div>
    </div>
  )
}
export default DogCard