import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Infrom() {

    const [rollno, setrollno] = useState(0)
    const [name, setname] = useState('')
    const [course, setcourse] = useState('')
    const [batch, setbatch] = useState('')

    const [view, setview] = useState([])

    const send = () => {
        console.log(rollno, name, course, batch);
        axios.post('https://6690c29bc0a7969efd9d5c7d.mockapi.io/users', {
            Rollno: rollno,
            Name: name,
            Course: course,
            Batch: batch
        })
            .then(alert('data sented Successfully'))
            .catch((err) => console.log(err)
            )

    }

    useEffect(() => {
        axios.get('https://6690c29bc0a7969efd9d5c7d.mockapi.io/users')
            .then((res) => setview(res.data))
            .catch((err) => console.log(err))
    },[])

    const maps = view.map((item, index) => {
        return(
        <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.Rollno}</td>
            <td>{item.Name}</td>
            <td>{item.Course}</td>
            <td>{item.Batch}</td>
            <td>
                <Link className='btn btn-success' to={`/update/${item.id}`}>Edit</Link>
                <Link className='btn btn-success' onClick={() => {
                    axios.delete(`https://6690c29bc0a7969efd9d5c7d.mockapi.io/users/${item.id}`)
                        .then(()=>{
                            alert('data deleted')
                            window.location.reload();
                        })
                        .catch((err) => console.log(err))
                }}>Delete</Link>
            </td>
        </tr>)
    })


    



    return (
        <div>
            <input type="text" placeholder='enter ur rollno' name='rollno' value={rollno} onChange={(e) => setrollno(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder='enter ur name' name='name' value={name} onChange={(e) => setname(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder='enter ur course' name='course' value={course} onChange={(e) => setcourse(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder='enter ur batch' name='batch' value={batch} onChange={(e) => setbatch(e.target.value)} />
            <br />
            <br />
            <button onClick={send}>Submit</button>
            <div>
             <table>
                <thead>
                    <tr>
                        <th>rollno</th>
                        <th>Name</th>
                        <th>course</th>
                        <th>batch</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        maps
                    }
                </tbody>
             </table>
            </div>
        </div>
        
    )
}
