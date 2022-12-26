import axios from 'axios'
import { setTransactions } from '../redux/userSlice'

export const generateLinkTransactions = (public_token, uid, email, dispatch, callback) => {
    axios.post('https://localhost:3001/get_access_token', {public_token, uid, email})
    .then(res => {
        
        if(res.status == 200){
            dispatch(setTransactions(res.data.transactions))
            if(callback){
                callback(uid)
            }
        }

    })
}  