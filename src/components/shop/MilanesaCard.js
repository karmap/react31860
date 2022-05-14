const MilanesaCard = ( {item: m} ) => {
  return (
    <div>
        <div>{ m.id }</div>
        <div className="text-3xl font-bold">{ m.title }</div>
        <div>{ m.description }</div>
        <div>Precio { m.price }</div>
        <div>{ m.stock }</div>
    </div>
  )
}
export default MilanesaCard