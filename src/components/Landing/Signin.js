import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {db, auth} from "../../firebase/firebase"
import {useDispatch} from "react-redux"
import { toggleLoggedIn } from '../../redux/loggedInSlice';

// import {loginUser} from "../../actions/signinAction"

import "./Signin.css"


function Signin() {
    const navigate = useNavigate();
    const [email, updateEmail] = useState("")
    const [password, updatePassword] = useState("")
    const dispatch = useDispatch()




  return (
    <div className="signin">

        <h1> Expex Sign In</h1>

        <form className='signin-form' onSubmit={event => {
            event.preventDefault()
            auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                dispatch(toggleLoggedIn(true))
                navigate("")
            })
            .catch(error => alert(error.message))

            console.log("sucessfully signed in")
        
      
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