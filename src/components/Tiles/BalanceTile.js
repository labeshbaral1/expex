import React, { useEffect } from "react";
import "./BalanceTile.css";
import { useSelector, useDispatch } from "react-redux";
import { updateBalances } from "../../actions/api/balance";
import { unLinkAccount } from "../../actions/api/account";
import { db } from "../../firebase/firebase";

function BalanceTile() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  let accounts = useSelector((state) => state.accounts.accounts);

  useEffect(() => {
    updateBalances(email, dispatch);
  }, []);

  const mappedDictionary = Object.entries(accounts).map(([key, value]) => {
    return (
      <div key={value.id} className="account">
        <div className="account-container">
          <div className="intitution">{value.name}:</div>
          <div
            className="unLink-button"
            onClick={() => {
              unLinkAccount(value.access_token, key,  dispatch);

              async function removeAccessToken(email, access_token) {
                try {
                  const userDocRef = db
                    .collection("users")
                    .doc(btoa(email))
                    .collection("accounts")
                    .doc("accessTokens");
                  const userDoc = await userDocRef.get();
                  const accessTokens = userDoc.data().accessTokens;
                  const updatedAccessTokens = accessTokens.filter(
                    (token) => token !== access_token
                  );
                  await userDocRef.update({
                    accessTokens: updatedAccessTokens,
                  });
                  updateBalances(dispatch)
                } catch (error) {
                  console.error(error);
                }
              }
              removeAccessToken(email, value.access_token)
            }}
          >
            UNLINK
          </div>
        </div>
        <p className="balance">${value.balance}</p>
      </div>
    );
  });

  return (

    <div className="balanceTile">
      <h1 className="tile-title">Account Balances</h1>

      {accounts.length == 0 ? <>BALANCES IS EMPTY</> : mappedDictionary}
    </div>
  );
}

export default BalanceTile;
