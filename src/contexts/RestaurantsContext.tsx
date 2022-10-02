import { createContext, useState, ReactNode, useMemo } from 'react'

import { restaurants as restaurantsResp } from '../api'

import { Restaurant } from '../interfaces'

export type IRestaurantsContext = {
  restaurants: Restaurant[]
  setRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>
  allRestaurants: Restaurant[]
  zoom: number
  setZoom: React.Dispatch<React.SetStateAction<number>>
  center: google.maps.LatLngLiteral
  setCenter: React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral>>
  marker: google.maps.LatLng | null
  setMarker: React.Dispatch<React.SetStateAction<google.maps.LatLng | null>>
}

export const RestaurantsContext = createContext<IRestaurantsContext>({
  restaurants: restaurantsResp,
  setRestaurants: () => {},
  allRestaurants: restaurantsResp,
  zoom: 3,
  setZoom: () => {},
  center: { lat: 0, lng: 0 },
  setCenter: () => {},
  marker: null,
  setMarker: () => {},
})

export const RestaurantContextProvider = (props: { children: ReactNode }) => {
  const [zoom, setZoom] = useState(3) // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  })
  const [marker, setMarker] = useState<google.maps.LatLng | null>(null)
  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsResp)
  const allRestaurants = useMemo(() => restaurantsResp, [])

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        allRestaurants,
        zoom,
        setZoom,
        center,
        setCenter,
        marker,
        setMarker,
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  )
}
