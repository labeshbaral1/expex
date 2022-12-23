import {useState} from 'react'
import "./Signup.css"

function Signup() {
    const [email, updateEmail] = useState("")
    const [password, updatePassword] = useState("")


  return (

    <div className="signup">

        <h1> Expex Sign Up</h1>

        <form className='signup-form ' onSubmit={event => {
            event.preventDefault() 
        }}>


            <input type="text" id="email" placeholder="Enter email" value={email} onChange={(e)=> updateEmail(e.target.value)}/>
            <input type="text" id="password" placeholder="Enter password" value={password} onChange={(e)=> updatePassword(e.target.value)}/>
            <button>Sign Up</button>
        </form> 
        

    </div>
  )
}

export default Signup