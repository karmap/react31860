import { useEffect, useState } from "react"

const Contador = () => {

  const [suma, setSuma] = useState(0)
  const [otraSuma, setOtraSuma] = useState(0)
  
  useEffect( ()=>{
    console.log('Efecto');
  })

  useEffect( ()=>{
    console.log('Efecto en mounting');
  }, [])

  useEffect( ()=>{
    console.log('Efecto en cambio en suma');
  }, [suma])

  useEffect( ()=>{
    console.log('Efecto en cambio en otraSuma');
  }, [otraSuma])
  
  const onClickHandler = () => {
    console.log('click onClickHandler')
    setSuma( suma + 1 ) // esto no -> suma++ -> suma = suma + 1
  }

  const otraSumaHandler = () => {
    console.log('click otraSumaHandler')
    setOtraSuma( otraSuma + 1 ) // esto no -> suma++ -> suma = suma + 1
  }

  return (
    <div>
      <button onClick={onClickHandler} className="btn">Click aquí</button>
      {suma}

      <button onClick={otraSumaHandler} className="btn">Otra Suma</button>
      {otraSuma}
    </div>
  )
}
export default Contador