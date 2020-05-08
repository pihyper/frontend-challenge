import React, { forwardRef } from 'react'
import { sortUnique } from '../helpers/utils'

export default forwardRef(({ label = 'From', values }, ref) => {
  return (
    <select className='custom-select d-block w-100' ref={ref}>
      <option value=''>{label}</option>
      {sortUnique(values).map(val => <option key={val} value={val}>{val}</option>)}
    </select>
  )
})
