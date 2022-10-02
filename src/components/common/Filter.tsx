import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import '../../styles/components/commons/Filter.css'

export const Filter = () => {
  return (
    <div className='filtersbar'>
      <div className='filters'>
        <div className='filter'>
          <label htmlFor='filter' className='filter__title'>
            Filter by:
          </label>
          <select id='filter' className='filter__input'>
            <option>Rating</option>
            <option>Alphabetically</option>
          </select>
        </div>
        <div className='filter'>
          <label htmlFor='radius' className='filter__title'>
            Radius:
          </label>
          <input id='radius' className='filter__input' type='number' />
        </div>
      </div>
      <div className='stats'>
        <div className='stat'>
          <p className='stat__title'>Average Rating</p>
          <div className='stat__content'>
            <p className='stat__text'>4.5</p>
            <FontAwesomeIcon className='stat__icon' icon={faStar} />
          </div>
        </div>
        <div className='stat'>
          <p className='stat__title'>Total Restaurants</p>
          <div className='stat__content'>
            <p className='stat__text'>4.5</p>
          </div>
        </div>
        <div className='stat'>
          <p className='stat__title'>Ratings SD</p>
          <div className='stat__content'>
            <p className='stat__text'>4.5</p>
          </div>
        </div>
      </div>
    </div>
  )
}
