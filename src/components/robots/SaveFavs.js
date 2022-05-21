import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useFavs } from "../../context/favRobotsContext"

const SaveFavs = () => {
    const { favorites } = useFavs()
    
    const saveFavsHandler = () => {
      const user = {
        name: 'Juan',
        phone: '545454545454',
        email: 'juan@gmail.com'
      }
      // equivalente a orden
      const favs = {
        buyer: user,
        // favs equivale a items
        favs: favorites,
        total: favorites.length
      }
      console.log( favs );
      saveToFirestore( favs )
    }

    // const saveToFirestore = (favs) => {
    //   const db = getFirestore()
    //   const favsCollection = collection(db, 'favs')

    //   addDoc(favsCollection, favs).then( (response) => {
    //     console.log( response.id );
    //   })
    // }

    const saveToFirestore = async (favs) => {
      const db = getFirestore()
      const { id } = await addDoc(collection(db, 'favs'), favs)
      console.log(id);
    }
    
    const updateHandler = async () => {
      const id = 'Y7mzR47j2CvPyOdAZaHG'
      // const id = 'idnoexiste'
      const db = getFirestore()
      const docToUpdate = doc(db,'favs', id)
      try {
        await updateDoc(docToUpdate, {otraprop: 22})
      } catch (error) {
        console.log('hubo algún error', error);
      }
    }

    const batchHandler = () => {
      const db = getFirestore()
      const batch = writeBatch(db)

      const doc1 = doc(db, 'favs', 'Y7mzR47j2CvPyOdAZaHG')
      batch.update(doc1, { total: 33 })

      const doc2 = doc(db, 'favs', 'h96eOXywfWrSN9fnfOPq')
      batch.update(doc2, { total: 55 })

      const doc3 = doc(db, 'favs', 'Bk9p9k7sMjb7shHZWE1L')
      batch.delete(doc3)

      batch.commit()
    }


    return (
    <div>
        { favorites.map( f => <li key={f}> {f} </li>) }
        <button onClick={saveFavsHandler} className='btn'>Salvar lista de favoritos</button>    
        <button onClick={updateHandler} className='btn ml-5'>Actualizar Total</button>
        <button onClick={batchHandler} className='btn ml-5'>Batch</button>
    </div>
  )
}
export default SaveFavs