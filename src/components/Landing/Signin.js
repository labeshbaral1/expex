import {useState} from 'react'
import { useNavigate } from 'react-router-dom';


import {useDispatch} from "react-redux"


import "./Signin.css"
import { loginUser } from '../../actions/signinAction';


function Signin() {
    const navigate = useNavigate();
    const [email, updateEmail] = useState("")
    const [password, updatePassword] = useState("")
    const dispatch = useDispatch()




  return (
    <div className="signin">

        <h1> Expex Sign In</h1>

        <form className='signin-form' onSubmit={event => 
        
        {
            event.preventDefault()
            loginUser(email, password, dispatch, navigate)
      
        }}>


            <input type="text" id="email" placeholder="Enter email" value={email} onChange={(e)=> updateEmail(e.target.value)}/>
            <input type="text" id="password" placeholder="Enter password" value={password} onChange={(e)=> updatePassword(e.target.value)}/>
            <button>Sign In</button>

            
        </form>

        <p onClick={() => navigate('/signup') }>Havent Signed Up?</p>

      

        

    </div>
  )
}

export default Signin