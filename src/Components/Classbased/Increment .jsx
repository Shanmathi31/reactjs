import React, { Component} from 'react'

export default class Increment  extends Component {

        state ={
            count:0
        }
    increment= () =>{
        this.setState ({
            count: this.state.count +1
        })
    } 
    decrement= () =>{
        this.setState  ({
            count: this.state.count  -1
        })
    } 
  render() {
    return (
      <div>
         <h2>{this.state.count}</h2>
         <button onClick={this.increment}>+ 1</button>  
         <button onClick={this.decrement}>- 1</button>
      </div>
    )
  }
}
