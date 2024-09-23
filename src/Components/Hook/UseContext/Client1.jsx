import React, { useContext } from 'react'
import {user} from './Bank1'
import Client2 from './Client2'

export default function Client1() {
    const amount = useContext(user)
  return (
    <div>
        <h2>Client</h2>
        <h2>{amount}</h2>
        <Client2></Client2>
    </div>
  )
}
