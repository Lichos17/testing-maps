import { Status } from '@googlemaps/react-wrapper'
import React from 'react'

export const Render = (status: Status) => {
  if (status === Status.LOADING) return <div className='map map--loading'>Loading</div>
  if (status === Status.FAILURE) return <div className='map map--failed'>Something went wrong</div>
  if (status === Status.SUCCESS) return <div className='map'>Success</div>

  return <h1>status</h1>
}
