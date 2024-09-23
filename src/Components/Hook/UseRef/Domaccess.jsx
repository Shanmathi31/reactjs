// use ref is used for  get element by id in react, previos value, no render.
// only used in event handle and useEffect

import React, { useEffect, useRef, useState } from 'react'

export default function Domaccess() {
    // dom access 
    // const textRef = useRef(0)

    // useEffect(()=>{
    //     textRef.current.focus()
    // })

    //  no render 


    // const textRef = useRef(0)
    // const [count,setcount] = useState(0)




    // function add(){
    //     textRef.current++
    // }

    // function counts(){
    //   setcount(count+1)
    // }

    // console.log("render");

    // previos value

    const textRef = useRef(0)
    const [name,setname] = useState('')

    function send(){
        textRef.current = name
    }
    
  return (
    <div>
        {/* <input type="text" ref={textRef} /> */}
        {/* <h1>{count}</h1>
        <button onClick={counts}>count</button>

        <h1>{textRef.current}</h1>
        <button onClick={add}>send</button> */}

        <h1>{name}</h1>
        <input type="text" onChange={(e)=>setname(e.target.value)} />
        <h1>{textRef.current}</h1>
        <button onClick={send}>useref</button>


    </div>
  )
}
