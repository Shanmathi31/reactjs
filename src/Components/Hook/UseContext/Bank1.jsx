import React, { createContext } from 'react'
import Client1 from './Client1';
import Client2 from './Client2';

export const user = createContext();

export default function Bank1() {
  const amount = 10000

  return (
    <div>
      <h1>Bank1</h1>
      <user.Provider value={amount}>
        <Client1></Client1>
        <Client2></Client2>
      </user.Provider>
    </div>
  )
}
