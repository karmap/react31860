import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const MilanesaNapolitana = () => {

  const [milanesa, setMilanesa] = useState({})

  useEffect(() => {
    // consulta a Firestore
    getMilanesaNapolitana()
  }, [])

  useEffect(() => {
    console.log('state: ', milanesa);
  }, [milanesa])
  
  
  const getMilanesaNapolitana = () => { 
    const db = getFirestore()
    const milanesaDoc = doc(db, 'items', 'V8oow4hP4bwGaAM7Yrnk')
    getDoc( milanesaDoc ).then( result => {
      if (result.exists()) {
        console.log(result);
        console.log('id', result.id);
        console.log('data', result.data());
        setMilanesa( {'id': result.id, ... result.data()} )
      }
    })
  }

  return (
    <div>
        <div>{ milanesa.title }</div>
        <div>Precio: { milanesa.price }</div>
        <div>Stock: { milanesa.stock }</div>
    </div>
  )
}
export default MilanesaNapolitana