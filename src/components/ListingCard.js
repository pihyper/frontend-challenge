import React from 'react'

// eslint-disable-next-line
export default function ListingCard ({ cabins, country, guests, imageUrl, length, locality, marina, name, price, reviews: { total }, type, year, ...rest }) {
  return (
    <div className='media'>
      <img className='d-flex align-self-start' src={imageUrl} alt={name} />
      <div className='media-body pl-3'>
        <div className='price'>{name}<small>{marina}, {locality},  {country}</small></div>
        <div className='stats'>
          <span><i className='fa fa-dollar' />From ${price}</span>
          <span><i className='fa fa-ship' />{cabins} Cabins {type.split('_').join(' ')}</span>
          <span><i className='fa fa-star' />{total} Reviews</span>
          <span><i className='fa fa-arrows-alt' />{length} m</span>
          <span><i className='fa fa-users' />{guests} Guests</span>
          <span><i className='fa fa-calendar' />{year}</span>
        </div>
        <div className='address' />
      </div>
    </div>
  )
}
