import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import MilanesaCard from "./MilanesaCard"

const Milanesas = () => {

  const [milanesas, setMilanesas] = useState([])
  const [milanesasBaratas, setMilanesasBaratas] = useState([])

  useEffect(() => {
    getMilanesas()
    getMilanesasBaratas()
  }, [])
  
  const getMilanesas = () => {
    const db = getFirestore()
    const milanesasCollection = collection(db, 'items')
    getDocs( milanesasCollection ).then( snapshot => {
      if (snapshot.size > 0) {
        // console.log(snapshot.docs);
        // const ids = snapshot.docs.map( d => d.id ).join(',')
        // console.log('ids: ', ids);

        const milanesasData = snapshot.docs.map( d => ({'id': d.id, ... d.data()}) )
        // console.log(milanesasData);
        setMilanesas(milanesasData)
      }
    })
  }

  const getMilanesasBaratas = async () => {
    const db = getFirestore()
    const milanesasCollection = collection(db, 'items')
    const q = query( milanesasCollection, where( 'price', '<', 20 ) )
    
    const snapshot = await getDocs( q )

    if (snapshot.size > 0) {
      const milanesasBaratasData = snapshot.docs.map( d => ({'id': d.id, ... d.data()}) )
      setMilanesasBaratas(milanesasBaratasData)
    }
  }

  return (
    <>
      <div>Milanesas</div>
      { milanesas.map( m => <MilanesaCard key={m.id} item={m}/>)}
      <div>Milanesas Baratas</div>
      { milanesasBaratas.map( m => <li key={m.id}> { m.title } </li>)}
    </>
  )
}
export default Milanesas