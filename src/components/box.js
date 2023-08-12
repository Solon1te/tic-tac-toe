import React from 'react'
import './box.css'

const box = (value, onClick) => {
  const style = value === 'X' ? "box x" : 'box o'
  return (
    <button className='box'>X</button>
  )
}

export default box