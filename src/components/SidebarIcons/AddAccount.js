import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./AddAccount.css";
import { usePlaidLink } from "react-plaid-link";
import { db } from "../../firebase/firebase";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import axios from "axios";

export default function AddAccount() {
  const [token, setToken] = useState(null);
  const email = useSelector((state) => state.user.email);
  const uid = useSelector((state) => state.user.uid);

  //API call to create_link_token
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

  const onSuccess = useCallback((publicToken, metadata) => {
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
              updatedTokens = [...data.accessTokens, access_token];
            } else {
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
    <PersonAddAltOutlinedIcon
      onClick={() => {
        open();
      }}
    />
  );
}
