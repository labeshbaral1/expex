import {useState} from 'react'
import "./Signin.css"


function Signin() {
    const [email, updateEmail] = useState("")
    const [password, updatePassword] = useState("")






  return (
    <div className="signin">

        <h1> Expex Sign In</h1>

        <form className='signin-form ' onSubmit={event => {
            event.preventDefault() 
        }}>


            <input type="text" id="email" placeholder="Enter email" value={email} onChange={(e)=> updateEmail(e.target.value)}/>
            <input type="text" id="password" placeholder="Enter password" value={password} onChange={(e)=> updatePassword(e.target.value)}/>
            <button>Sign In</button>
            
        </form>

      

        

    </div>
  )
}

export default Signin