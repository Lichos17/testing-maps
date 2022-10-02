import { useMemo, useState } from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'

import { RestaurantCard } from './RestaurantCard'
import { Filter } from '../common'
import { Map, Marker, render } from './Map'
import { restaurants } from '../../api'

import '../../styles/components/RestaurantsPage/RestaurantsPage.css'

export const RestaurantsPage = () => {
  const [zoom, setZoom] = useState(3) // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  })

  const restaurant = useMemo(() => restaurants, [])

  const [marker, setMarker] = useState<google.maps.LatLng | null>(null)

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    setMarker(e.latLng!)
  }

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!)
    setCenter(m.getCenter()!.toJSON())
  }

  return (
    <div className='container main'>
      <Filter />
      <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} render={render}>
        <Map className='map' center={center} onClick={onClick} onIdle={onIdle} zoom={zoom}>
          {marker && <Marker position={marker} />}{' '}
        </Map>
      </Wrapper>
      <div className='restaurants'>
        {restaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}
