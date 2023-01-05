import { useState } from "react";
import "./Modal.css";

function Modal({ closeModal }) {
	const [name, setName] = useState("");
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		closeModal();
		setName("");
		setValue("");
	};

	return (	
		<div className="modal-overlay">
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
		</div>
	);
}

export default Modal;
