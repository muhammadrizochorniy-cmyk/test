import React from 'react'

const Card = (telefon) => {
    console.log(telefon)
  return (
    <div>
      <h1>{telefon.users.price}</h1>
      <h1>{telefon.users.text}</h1>
    </div>
  )
}

export default Card

