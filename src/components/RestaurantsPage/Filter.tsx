import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { IRestaurantsContext, RestaurantsContext } from '../../contexts'

import { restaurants as restaurantsData } from '../../api'

import { useGetRestaurantsStats, useSortAndFilterRestaurants } from '../../hooks'

import '../../styles/components/RestaurantsPage/Filter.css'

export const Filter = () => {
  const { restaurants, setRestaurants, marker } =
    useContext<IRestaurantsContext>(RestaurantsContext)
  const [sortBy, setSortBy] = useState<'rating' | 'alpha'>('rating')
  const [radius, setRadius] = useState(5000)
  const [rating, setRating] = useState(0)
  const [averageRating, standarDevRestaurants] = useGetRestaurantsStats(restaurants)

  useSortAndFilterRestaurants(setRestaurants, restaurantsData, marker, radius, sortBy, rating)

  return (
    <div className='filtersbar'>
      <div className='filters'>
        <div className='filter'>
          <label htmlFor='filter' className='filter__title'>
            Filter by:
          </label>
          <select
            onChange={(e) => setSortBy(e.target.value as 'rating' | 'alpha')}
            value={sortBy}
            id='filter'
            className='filter__input'
          >
            <option value='rating'>Rating</option>
            <option value='alpha'>Alphabetically</option>
          </select>
        </div>
        <div className='filter'>
          <label htmlFor='radius' className='filter__title'>
            Radius:
          </label>
          <input
            onChange={(e) => setRadius(Number(e.target.value))}
            value={Number(radius).toString()}
            id='radius'
            className='filter__input'
            type='number'
            min={1}
          />
        </div>
        <div className='filter'>
          <label htmlFor='rating' className='filter__title'>
            Rating:
          </label>
          <input
            onChange={(e) => setRating(Number(e.target.value))}
            value={Number(rating).toString()}
            id='rating'
            className='filter__input'
            type='number'
            min={0}
          />
        </div>
      </div>
      <div className='stats'>
        <div className='stat'>
          <p className='stat__title'>Average Rating</p>
          <div className='stat__content'>
            <p className='stat__text'>{averageRating.toFixed(2)}</p>
            <FontAwesomeIcon className='stat__icon' icon={faStar} />
          </div>
        </div>
        <div className='stat'>
          <p className='stat__title'>Total Restaurants</p>
          <div className='stat__content'>
            <p className='stat__text'>{restaurants.length}</p>
          </div>
        </div>
        <div className='stat'>
          <p className='stat__title'>Ratings SD</p>
          <div className='stat__content'>
            <p className='stat__text'>{standarDevRestaurants.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
