import React, { useState } from 'react'
import './Login.css';


export default function Login() {

    const [name, setname] = useState('')
    const [age, setage] = useState(0)
    const [pw, setpw] = useState('')

    async function send() {
        console.log(name, age, pw);
        const login = {
            Name: name,
            Age: age,
            Pw: pw
        }
        alert('deliverd to API')

        await fetch('https://6690c29bc0a7969efd9d5c7d.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(login)
        })
    }


    return (
        <div>

        <form className='form mb-4 mx-auto'>
            <h1>Login</h1>
            <div>
                <input type="text" placeholder='username' onChange={(e) => {
                    setname(e.target.value)
                }} />
                <input type="number" placeholder='age' onChange={(e) => {
                    setage(e.target.value)
                }} />

                <input type="password" placeholder='password' onChange={(e) => {
                    setpw(e.target.value)
                }} />
            </div>


        </form>
                <button onClick={send}>send</button>
        </div>


    )
}
