import React, { createContext } from 'react'
import Client from './Client';
import Clinentone from './Clinentone';


export const user = createContext();


export default function Bank() {
    const amount = 2000;
    return (
        <div>
            <h1>Bank</h1>
            <user.Provider value={amount}>
                <Client ></Client>
                <Clinentone></Clinentone>
            </user.Provider>
        </div>
    )
}
