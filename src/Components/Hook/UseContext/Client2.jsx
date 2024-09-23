import React, { useContext } from 'react'
import {user} from './Bank1'

export default function Client2() {
    const amount = useContext(user)
  return (
    <div>
        <h2>Clientone</h2>
        <h2>{amount}</h2>
    </div>
  )
}
