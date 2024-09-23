import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'Change':
            return {
                ...state,
                [action.field]: action.value
            }
        default:
            return state
    }
}

export default function Formss() {
    const initialstate = {
        Name: '',
        Email: '',
        Password: ''

    }
    const [formstate, dispatch] = useReducer(reducer, initialstate)

    const Handlechange = (e) => {
        e.preventDefault();
        // let fields = ;
        // let Values = ;

        dispatch({
            type: 'Change',
            field: e.target.name,
            Value: e.target.value
        })

    }

    // const onclick = () => {
        formstate.map((item) => {
            return (
                `
                <ol>
                <li>${item.Name}</li>
                </ol>`
            )

        })
    // }



    return (
        <div>
            <div>
                {/* <label htmlFor="text">Name</label> */}
                <input type="text" name="Name" value={formstate.Name} onChange={(e) => Handlechange(e)} />
            </div>
            {/* <br />
            <div>
                 <label htmlFor="text">Email</label> 
                <input type="text" name="Email" value={form.Email} onChange={(e)=>Handlechange(e)} />
            </div><br />
             <div>
                <label htmlFor="text">Password</label> 
                <input type="text" name="Password" value={form.Password} onChange={(e)=>Handlechange(e)} />
            </div> */}
            <button onClick={onclick}>send</button>

        </div>
    )
}
