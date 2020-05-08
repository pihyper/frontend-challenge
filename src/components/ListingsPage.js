import React, { useEffect, useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import SearchFilter from './SearchFilter'
import ListingCard from './ListingCard'
import Head from './Head'
import Loader from './Loader'

const GET_LISTINGS = gql`
    {
        getBoats(input: {active: true}) {
            id
            name
            type
            year
            reviews {
                total
                score
            }
            marina
            locality
            country
            skipper
            active
            cabins
            guests
            length
            price
            imageUrl
        }
    }
`

export default function ListingsPage () {
  const [listings, setListings] = useState([])
  const { loading, error, data } = useQuery(GET_LISTINGS)

  error && console.error('graphql api error', error)

  useEffect(() => {
    setListings((data && data.getBoats) || [])
  }, [data])

  const filterResults = ({ boatLength, boatYear }) => {
    const truthChecker = (attr, attrArray) => {
      let flag = true
      if (attrArray.length && attrArray[0]) {
        flag = attr >= parseInt(attrArray[0])
        if (flag && attrArray[1]) {
          flag = attr <= parseInt(attrArray[1])
        }
      }
      return flag
    }
    setListings(data.getBoats.filter(l => truthChecker(l.length, boatLength) && truthChecker(l.year, boatYear)))
    document.getElementById('results-block').scrollTo(0, 0) // Scroll the results div to top after each search, for better UX
  }

  return (
    <>
      <Head title='Zizoo Boat Rentals' />
      <div className='clearfix' />
      <section className='search-box'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4 listing-block'>
              <SearchFilter filterResults={filterResults} boatLengthArray={data && data.getBoats.map(listing => listing.length)} boatYearArray={data && data.getBoats.map(listing => listing.year)} />
            </div>
            <div className='col-md-8 listing-block' id='results-block'>
              {loading && <Loader />}
              {!loading && (
                <>
                  {!!listings.length && <h5>Displaying {listings.length} results</h5>}
                  {listings.map(listing => (<ListingCard key={listing.id} {...listing} />))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
