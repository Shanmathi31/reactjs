import React, { Component } from 'react'

export default class Sample extends Component {
    
         a = 100;

  render() {
    return (
      <div>
      {
        this.a
      }
      </div>
    )
  }
}
