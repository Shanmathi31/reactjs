import React, { useContext } from 'react'
import Clinentone from './Clinentone'
import { user } from './Bank'

export default function Client() {
    const amount = useContext(user)
  return (
    <div>
        <h1>Client</h1>
        <h1>{amount}</h1>
        <Clinentone ></Clinentone>
    </div>
  )
}
