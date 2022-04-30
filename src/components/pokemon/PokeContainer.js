import { useEffect, useState } from "react"

const PokeContainer = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])
  
  const getPokemons = () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=30'

    fetch( URL ) // -> axios
      .then( response => response.json() )
      .then( data => {
        console.log(data);
        setPokemons(data.results)
      })
  }

  return (
    <div>
      { pokemons.map( p => <li key={p.url}>{ p.name }</li> ) }
    </div>
  )
}
export default PokeContainer