import { useState } from "react"

const Contador = () => {

  const [suma, setSuma] = useState(0)
  
  const onClickHandler = () => {
    console.log('click')
    setSuma( suma + 1 ) // esto no -> suma++ -> suma = suma + 1
  }

  console.log('Aquí hay un render');

  return (
    <div>
      <button onClick={onClickHandler} className="btn">Click aquí</button>
      {suma}
    </div>
  )
}
export default Contador