import { useEffect, useState } from "react";
import { dogs as dogsData } from "../data/dogs";
import DogCard from "./DogCard";

const DogsContainer = () => {

  const [dogs, setDogs] = useState([])

  useEffect(() => {
    const getDogs = new Promise( (resolve, reject) => {
      setTimeout( () =>{
        resolve(dogsData)
        // reject('error en la promesa')
      }, 1000)
    })

    getDogs.then( (result) => {
      console.log('Se completó la promesa', result);
      setDogs(result)
    // }, (err) => {
    //   console.log('hubo un error', err);
    // }
    }).catch((err) => {
        console.log('hubo un error', err);
    })

    console.log('Se terminó el efecto');
  }, [])

  return (
    <div>
      {dogs.map( dog => <DogCard key={dog.id} dogData={dog}/> )}
    </div>
  )
}
export default DogsContainer