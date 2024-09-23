import React, { useContext } from 'react'
import { user } from './Bank'


export default function Clinentone() {
    const amount = useContext(user)
  return (
    <div>
        <h1>Clinentone</h1>
        {/* <h2>{event.amt}</h2> */}
        <h2>{amount}</h2>
    </div>
  )
}
