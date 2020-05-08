import React from 'react'

export default function Head ({ title }) {
  return (
    <section className='head'>
      <div className='container'>
        <h2 className='text-center'><span>{title}</span></h2>
      </div>
    </section>
  )
}
