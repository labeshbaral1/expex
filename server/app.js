const express = require("express");
const moment = require("moment");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");

const db = require("./firebase/firebase")


const cors = require("cors");
const plaid = require("plaid");


const { PLAID_CLIENT_ID, PLAID_SECRET } = require("./key");

const client = new plaid.Client({
  clientID: PLAID_CLIENT_ID,
  secret: PLAID_SECRET,
  env: plaid.environments.sandbox,
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


  app.get("/", (req, res) => {
    res.send("Server is Currently running...");
  });


  app.post("/create_link_token", (req, res) => {
    let { uid } = req.body;
    console.log(`Recieved: ${uid} as token!!!`);

      client.createLinkToken(
        {
          user: {
            client_user_id: uid,
          },
          client_name: "Expex",
          products: ["transactions"],
          country_codes: ["US"],
          language: "en",
        },
        (err, linkTokenResponse) => {
          res.json({ link_token: linkTokenResponse.link_token });
        }
      );
    ;
  });

  app.post("/get_access_token", (req, res) => {

    let { public_token, uid, email} = req.body;

    console.log(public_token)
um
    client.exchangePublicToken(public_token, (err, response) => {
      if (err) return res.json({ error: "Oops" });

      let { access_token, item_id } = response;


      console.log(access_token, item_id)

      db.collection("users")
      .doc(email)
      .collection("user-info")
      .doc("register-settings")
      .set({
        items: { access_token: access_token, item_id: item_id },
      });
     
      
    
    });


  });

  app.post("/transactions", (req, res) => {
    let { uid } = req.body;

    User.findById(uid, (err, doc) => {
      if (err) {
        res.sendStatus(400);
        return;
      }
      res.send({ transactions: doc.transactions });
    });
  });

  app.post("/accounts", (req, res) => {
    let { uid } = req.body;

    User.findById(uid, (err, doc) => {
      if (err) {
        res.sendStatus(400);
        return;
      }
      res.send({ accounts: doc.items });
    });
  });

  app.listen(port, () => {
    console.log(`Listending on port ${port}`);
  });