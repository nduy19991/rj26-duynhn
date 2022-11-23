import React from 'react'
import garena from '../../../images/garena.png'

function ReduxUserForm() {
  
  return (
    <div>
      <div className="form">
            <img className="imgga" src={garena} />
            <form className="input">
                <label>Username</label>
                <br />
                <input className="input-item"
                    type="text"
                    placeholder="Enter your Username"
                /> <br />
                <label>Password</label>
                <br />
                <input className="input-item"
                    type="text"
                    placeholder="Enter your Password"
                /> <br />
                <button className="btn-submit">Submit</button>
                <button className="btn-create">Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default ReduxUserForm