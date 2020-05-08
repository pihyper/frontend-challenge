import React, { useRef } from 'react'
import SelectInput from './SelectInput'

export default function SearchFilter ({ filterResults, boatLengthArray = [], boatYearArray = [] }) {
  const boatLengthA = useRef()
  const boatLengthB = useRef()
  const boatYearA = useRef()
  const boatYearB = useRef()
  const submitSearch = () => {
    filterResults({
      boatLength: [boatLengthA.current.value, boatLengthB.current.value],
      boatYear: [boatYearA.current.value, boatYearB.current.value]
    })
  }

  return (
    <>
      <h4>Search Filter</h4>

      <div className='row mb-3'>
        <div className='col-md-12'><label>Boat Length (in m)</label></div>
        <div className='col-md-6'>
          <SelectInput ref={boatLengthA} values={boatLengthArray} />
        </div>
        <div className='col-md-6'>
          <SelectInput ref={boatLengthB} label='To' values={boatLengthArray} />
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-md-12'><label>Boat Year</label></div>
        <div className='col-md-6'>
          <SelectInput ref={boatYearA} values={boatYearArray} />
        </div>
        <div className='col-md-6'>
          <SelectInput ref={boatYearB} label='To' values={boatYearArray} />
        </div>
      </div>
      <hr className='mb-4' />
      <button className='btn btn-primary btn-lg btn-block' type='submit' onClick={() => submitSearch()}>Search</button>
    </>
  )
}
