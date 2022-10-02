import { useContext } from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'

import { RestaurantCard } from './RestaurantCard'
import { Filter } from './Filter'
import { Map, Marker } from './Map'
import { Render } from './LoadingMap'

import { IRestaurantsContext, RestaurantsContext } from '../../contexts'

import '../../styles/components/RestaurantsPage/RestaurantsPage.css'

export const RestaurantsPage = () => {
  const { restaurants, zoom, setZoom, center, setCenter, marker, setMarker } =
    useContext<IRestaurantsContext>(RestaurantsContext)

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    setMarker(e.latLng ? e.latLng : marker)
  }

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom() ? m.getZoom() : zoom)

    setCenter(m.getCenter() ? m.getCenter().toJSON() : center)
  }

  return (
    <div className='container main'>
      <Filter />
      <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} render={Render}>
        <Map className='map' center={center} onClick={onClick} onIdle={onIdle} zoom={zoom}>
          {marker && <Marker position={marker} />}
          {window.google &&
            restaurants.map((restaurant) => (
              <Marker
                key={restaurant.id}
                position={
                  new window.google.maps.LatLng(
                    restaurant.address.location.lat,
                    restaurant.address.location.lng,
                  )
                }
              />
            ))}
        </Map>
      </Wrapper>
      <div className='restaurants'>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}
