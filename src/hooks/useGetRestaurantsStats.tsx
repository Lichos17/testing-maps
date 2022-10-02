import { useMemo } from 'react'
import { Restaurant } from '../interfaces'

export const useGetRestaurantsStats = (restaurants: Restaurant[]) => {
  const averageRating = useMemo<number>(
    () =>
      restaurants.length > 0
        ? restaurants.map((restaurant) => restaurant.rating).reduce((a, b) => a + b) /
          restaurants.length
        : 0,
    [restaurants],
  )
  const standarDevRestaurants = useMemo(() => {
    console.log(restaurants.map((restaurant) => restaurant.rating))

    return restaurants.length > 1
      ? Math.pow(
          restaurants
            .map((restaurant) => Math.pow(restaurant.rating - averageRating, 2))
            .reduce((a, b) => a + b) /
            (restaurants.length - 1),
          0.5,
        )
      : 0
  }, [restaurants, averageRating])

  return [averageRating, standarDevRestaurants]
}
