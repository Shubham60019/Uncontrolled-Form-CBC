import React, { Component } from 'react'
import { createRef } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.userRef=createRef()
    this.passRef=createRef()
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    let username=this.userRef.current.value;
    let password=this.passRef.current.value;
    console.log({username,password});
  }
  render() {
    return (
      <div>
        <form action="">
          <fieldset>
            <legend>Sign Up</legend>
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' ref={this.userRef} /><br /><br />
            <label htmlFor="password">Password:</label>
            <input type="text" id='password' ref={this.passRef} /><br /><br />
            <button onClick={this.handleSubmit}>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
