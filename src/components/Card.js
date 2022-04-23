const Card = ( {title, otroComponente} ) => {
  return (
    <div style={{border:'solid blue 2px', margin:'20px', padding:'20px'}}>
        <strong>{title}</strong>
        {otroComponente( {name:'Luis', age:'42'} )}
    </div>
  )
}
export default Card