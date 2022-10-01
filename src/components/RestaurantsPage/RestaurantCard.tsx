import { Menu, MenuItem } from '@szhsin/react-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faEllipsisVertical,
  faLocationDot,
  faEnvelope,
  faPhone,
  faShare,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'

import { Restaurant } from '../../interfaces'

import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import '../../styles/components/RestaurantsPage/RestaurantCard.css'

export const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <article className='card'>
      <div className='card__header'>
        <h3 className='card__title'>{restaurant.name}</h3>
        <div>
          <Menu menuButton={<FontAwesomeIcon className='menu' icon={faEllipsisVertical} />}>
            <MenuItem>
              <FontAwesomeIcon className='menu__icon' icon={faShare} /> Share on facebook
            </MenuItem>
            <MenuItem
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${restaurant.contact.site}`,
                )
              }
            >
              <FontAwesomeIcon className='menu__icon' icon={faThumbsUp} /> Share on facebook
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className='card__rating'>
        {Array.from(Array(restaurant.rating).keys()).map((num) => (
          <FontAwesomeIcon key={num} className='card__star' icon={faStar} />
        )).length > 0
          ? Array.from(Array(restaurant.rating).keys()).map((num) => (
              <FontAwesomeIcon key={num} className='card__star' icon={faStar} />
            ))
          : '-'}
      </div>
      <div className='info info--first'>
        <FontAwesomeIcon className='info__icon' icon={faLocationDot} />
        <p className='info__text'>{`${restaurant.address.street}, ${restaurant.address.state} ${restaurant.address.city}`}</p>
      </div>
      <div className='info'>
        <FontAwesomeIcon className='info__icon' icon={faEnvelope} />
        <p className='info__text'>{restaurant.contact.email}</p>
      </div>
      <div className='info'>
        <FontAwesomeIcon className='info__icon' icon={faPhone} />
        <p className='info__text'>{restaurant.contact.phone}</p>
      </div>
      <a href={restaurant.contact.site} target='__blank' className='card__button'>
        Visit Website
      </a>
    </article>
  )
}
