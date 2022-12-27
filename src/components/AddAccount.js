import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LinkAccount.css";
import Jack from "../assets/jack.png";
import { FiLink } from "react-icons/fi";
import { usePlaidLink } from "react-plaid-link";
import { setLinkToken, setAccToken } from "../redux/userSlice";
import { updateBalance } from "../actions/balance";

export default function AddAccount() {
  const [token, setToken] = useState(null);
  const uid = useSelector((state) => state.user.uid);
  const dispatch = useDispatch();

  //API call to create_link_token
  useEffect(() => {
    const createLinkToken = async () => {
      const linkTokenResponse = await fetch(
        "http://localhost:8000/api/create_link_token/",
        { method: "POST", body: JSON.stringify({ uid }) }
      );

      const { link_token } = await linkTokenResponse.json();

      dispatch(setLinkToken({linkToken: link_token}));
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
      const accessTokenResponse = await fetch(
        "http://localhost:8000/api/set_access_token/",
        {
          method: "POST",
          body: JSON.stringify({ public_token: publicToken }),
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      const {access_token} = await accessTokenResponse.json();
      dispatch(setAccToken({accessToken: access_token}));
    };

    setAccessToken();
    updateBalance(dispatch);

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
    <button
      onClick={() => {
        open();
      }}
    >
      <div className="tile">
        <FiLink className="symbol" size={150} />
        <h3>Link your Account</h3>
      </div>
      <img className="jack" src={Jack} alt="" />{" "}
    </button>
  );
}
