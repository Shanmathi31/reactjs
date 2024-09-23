import React, { Component } from 'react'

export default class Decrement extends Component {

    // constructor() {
    //     super()
    state = {
        count: 0,
        
    }


    // }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    increment = () => {
        this.setState(
            {
                count: this.state.count + 1
            }
        )
    }




    render() {
        console.log(this.state.count)

        // console.log(this.count)
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}
