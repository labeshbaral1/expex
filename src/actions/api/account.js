import { db } from "../../firebase/firebase";
import { setAccounts } from "../../redux/accountSlice";
import axios from "axios";
import { removeAccount } from "../../redux/accountSlice";

export const unLinkAccount = async (access_token, item_id, dispatch) => {

    const itemResponse = await axios.post(
        "http://localhost:8000/api/remove_item",
        { accessToken: access_token },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
    const r = await itemResponse.data

      
    dispatch(removeAccount({item_id: item_id}))


}