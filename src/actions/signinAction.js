import { LOGIN_USER, GENERATE_LINK_TOKEN, GET_TRANSACTIONS} from './types';
import axios from 'axios';
import {db, auth} from "../firebase/firebase"
import { toggleLoggedIn } from '../redux/loggedInSlice'
import {useSelector} from "react-redux"
import {setUser} from '../redux/userSlice'
export const loginUser = (email, password, dispatch, navigate) => {

    

    auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                dispatch(toggleLoggedIn(true))
                
                // dispatch(setUser(
                //     db
                //     .collection('users')
                //     .doc(email)
                //     .collection('user-info')
                //     .doc('register-settings')
                //     .name

                // ))

                // db
                //         .collection('users')
                //         .doc(email)
                //         .collection('user-info')
                //         .doc('register-settings')
                //         .onSnapshot(snap => {
                //             setUser({
                //                 name: "chris",
                //                 email: "status"

                //             })
                //         })
                // setUser({name: null, email: email})
                    

                console.log("logged in" )
                navigate("/")
            })
            .catch(error => alert(error.message))

            console.log("sucessfully signed in")
        
  
}

// export const generateLinkToken = (uid) => dispatch => {
//     console.log(uid);
//     axios.post('http://localhost:3001/create_link_token',{uid})
//          .then(res => {
//                 if (res.status === 200){
//                     dispatch({
//                             type: GENERATE_LINK_TOKEN,
//                             payload: {link_token: res.data.link_token}
//                         })
//                 }
//     });
// }

// export const getTransactions = (uid, callback) => dispatch => {
//     axios.post('http://localhost:3001/transactions',{uid})
//          .then(res => {
//                 if (res.status === 200){
//                     dispatch({
//                             type: GET_TRANSACTIONS,
//                             payload: {transactions: res.data.transactions}
//                         })

//                         if (callback){
//                             callback(res.data.transactions);
//                         }
//                 }
//     });
// }
