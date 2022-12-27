import { db, auth } from "../firebase/firebase";
import { toggleLoggedIn } from "../redux/loggedInSlice";
import { setUser } from "../redux/userSlice";

export const loginUser = (email, password, dispatch, navigate) => {
  
  auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      dispatch(toggleLoggedIn(true));

      db.collection("users")
        .doc(email)
        .collection("user-info")
        .doc("register-settings")
        .onSnapshot((snap) => {
          dispatch(
            setUser({
              name: snap.data().name,
              email: snap.data().email,
              uid: snap.data().uid
              
            })
          );
          // console.log( snap.data().name + "sucessfully signed in");

        });

      navigate("/");
    })
    .catch((error) => alert(error.message));

};



// export const getTransactions = (uid, dispatch, callback) => {
//   axios.post("http://localhost:3001/transactions", { uid }).then((res) => {
//     if (res.status === 200) {
//       dispatch({
//         type: GET_TRANSACTIONS,
//         payload: { transactions: res.data.transactions },
//       });

//       if (callback) {
//         callback(res.data.transactions);
//       }
//     }
//   });
// };
