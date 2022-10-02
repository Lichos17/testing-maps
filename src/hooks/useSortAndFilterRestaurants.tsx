import { Dispatch, useEffect } from 'react'

import { Restaurant } from '../interfaces'

import { calculateDistance } from '../utils'

export const useSortAndFilterRestaurants = (
  setRestaurants: Dispatch<React.SetStateAction<Restaurant[]>>,
  restaurantsData: Restaurant[],
  marker: google.maps.LatLng | null,
  radius: number,
  sortBy: 'rating' | 'alpha',
) => {
  useEffect(() => {
    setRestaurants(
      restaurantsData
        .filter((restaurant) =>
          marker
            ? calculateDistance(
                marker,
                new google.maps.LatLng(
                  restaurant.address.location.lat,
                  restaurant.address.location.lng,
                ),
              ) < radius
            : true,
        )
        .sort((restaurantA, restaurantB) => {
          if (sortBy === 'alpha') return restaurantA.name.localeCompare(restaurantB.name)

          return restaurantB.rating - restaurantA.rating
        }),
    )
  }, [radius, sortBy, marker])
}
