import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsset } from "../../../redux/accountSlice";
import "./Modal.css";
import { db } from "../../../firebase/firebase";

function Modal({ email, closeModal }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAsset({ name: name, value: value }));

    const docRef = db
      .collection("users")
      .doc(btoa(email))
      .collection("additional_assets")
      .doc("assets");

    docRef.get().then((doc) => {
      const userAssets = doc.data().user_assets;

      docRef.update({
        user_assets: [...userAssets, { name: name, value: value }],
      });
    });

    setName("");
    setValue("");
    closeModal();
  };

  return (
    <>
      <div className="modal-tile">
        <div className="modal-header">
          <span className="modal-close" onClick={closeModal}>
            &times;
          </span>
          <h1> Add an Asset</h1>
        </div>
        <div className="modal-content">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              Enter Asset Description (e.g. house or car):
              <input
                required
                type="text"
                name="assetName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Enter Asset Value (in dollars $):
              <span>
                $
                <input
                  required
                  type="text"
                  name="assetValue"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </span>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="modalcover"></div>
    </>
  );
}

export default Modal;
