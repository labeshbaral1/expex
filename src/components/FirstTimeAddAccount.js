import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePlaidLink } from "react-plaid-link";
import { db } from "../firebase/firebase";
import axios from "axios";
import "./FirstTimeAddAccount.css";
import { toggleFirstTimeLogin } from "../redux/stateSlice";

export default function FirstTimeAddAccount() {
  const [token, setToken] = useState(null);
  const email = useSelector((state) => state.user.email);
  const uid = useSelector((state) => state.user.uid);
  const dispatch = useDispatch()

  //API call to create_link_token

  console.log("_________________________________")
  console.log(uid)

  useEffect(() => {
    const createLinkToken = async () => {
      const linkTokenResponse = await fetch(
        "http://localhost:8000/api/create_link_token/",
        {
          method: "POST",
          body: JSON.stringify({ uid }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { link_token } = await linkTokenResponse.json();
      setToken(link_token);
    };

    createLinkToken();
  }, []);

  const isOAuthRedirect = window.location.href.includes("?oauth_state_id=");

  // generate a link_token when component mounts
  useEffect(() => {
    // do not generate a new token if page is handling an OAuth redirect.
    // instead setLinkToken to previously generated token from localStorage
    // https://plaid.com/docs/link/oauth/#reinitializing-link
    if (isOAuthRedirect) {
      return;
    }
  }, []);

  const onSuccess = useCallback((publicToken, metadata) => {
    // send public_token to your server
    // https://plaid.com/docs/api/tokens/#token-exchange-flow

    const setAccessToken = async () => {
      const accessTokenResponse = await axios.post(
        "http://localhost:8000/api/set_access_token",
        { publicToken: publicToken },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const access_token = accessTokenResponse.data.access_token;

      db.collection("users")
        .doc(btoa(email))
        .collection("accounts")
        .doc("accessTokens")
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            let updatedTokens;

            if (data.accessTokens) {
              // accesTokens array is not empty

              updatedTokens = [...data.accessTokens, access_token];
            } else {
              // accesTokens array is empty
              updatedTokens = [access_token];
            }

            db.collection("users")
              .doc(btoa(email))
              .collection("accounts")
              .doc("accessTokens")
              .update({
                accessTokens: updatedTokens,
              });
          } else {
            db.collection("users")
              .doc(btoa(email))
              .collection("accounts")
              .doc("accessTokens")
              .set({ accessTokens: [access_token] });
          }
        });
    };

    setAccessToken();

    dispatch(toggleFirstTimeLogin(false))

    // updateBalance(dispatch);
  }, []);

  const onEvent = useCallback((eventName, metadata) => {
    // log onEvent callbacks from Link
    // https://plaid.com/docs/link/web/#onevent
    // console.log(eventName, metadata);
  }, []);

  const onExit = useCallback((error, metadata) => {
    // log onExit callbacks from Link, handle errors
    // https://plaid.com/docs/link/web/#onexit
    // console.log(error, metadata);
  }, []);

  const config = {
    // token must be the same token used for the first initialization of Link
    token,
    onSuccess,
    onEvent,
    onExit,
  };

  if (isOAuthRedirect) {
    // receivedRedirectUri must include the query params
    config.receivedRedirectUri = window.location.href;
  }

  const {
    open,
    ready,
    // error,
    // exit
  } = usePlaidLink(config);

  // No need to render a button on OAuth redirect as link opens instantly
  return isOAuthRedirect ? (
    <> </>
  ) : (
    <div className="landing-page">
      <div className="landing-content">


        <h1>Take Control of Your Finances</h1>
        <p>On the worlds #1 trusted platform</p>
        <div
          className="linkAccountButton"
          onClick={() => {
            open();
          }}
        >
          Link Your First Account
        </div>

      </div>

      <div className="carouselSlideShow"></div>
    </div>
  );
}
