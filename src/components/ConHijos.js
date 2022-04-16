const ConHijos = ( {children} ) => {
  return (
    <div style={{border:'solid red 2px', margin: '20px'}}>
        <div>Inicia componente con Children</div>
        {children}
        <div>Termina componente con Children</div>
    </div>
  )
}
export default ConHijos