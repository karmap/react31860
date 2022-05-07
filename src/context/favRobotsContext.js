import { Children, createContext, useState } from "react";

export const FavRobotsContext = createContext({
  favorites: [99],
  addToFavorites: () => {},
  deleteFromFavorites: () => {}
})

const FavRobotsProvider = ({ children }) => {
  
  const [favorites, setFavorites] = useState([])

  const addToFavorites = ( robotId ) => {
    setFavorites( currentFavorites => {
      return currentFavorites.concat( robotId )
    })
  }

  const context = {
    favorites,
    addToFavorites
  }

  return (
    <FavRobotsContext.Provider value={ context }>
      {children}
    </FavRobotsContext.Provider>
  )
}
export default FavRobotsProvider