import React from "react";
import "./Footer.css";
import LinkedIn from "../assets/linkedin.png";
import { AiOutlineMail } from "react-icons/ai";
import { VscGithubInverted } from "react-icons/vsc";
import { BsNewspaper } from "react-icons/bs";

function Fotter() {


	
	return (
		<div className="footer">
			<div className="contact-menu">
				<div className="footerObject">
					<AiOutlineMail
						className="footerObject-icon"
						onClick={() =>
							window.open(
								"mailto:labeshbaral1@gmail.com?subject=SendMail&body=Description"
							)
						}
					/>
				</div>

				<div className="footerObject">
					<a href="https://github.com/labeshbaral1" target="_blank">
						<VscGithubInverted className="footerObject-icon" />
					</a>
				</div>

				<div className="footerObject">
					<a target="_blank"
						href="https://www.linkedin.com/in/labesh-baral-0787a0204">
						<img className="footerObject-icon" src={LinkedIn} />
					</a>
				</div>

				<div className="footerObject">
					<a
						href={require("../assets/resume.pdf")}
						download="Labesh-Baral Resume"
					>
						<BsNewspaper className="footerObject-icon" />
					</a>

				</div>

			</div>
        <p> &#169;Labesh Baral 2022</p>
		</div>
	);
}

export default Fotter;
