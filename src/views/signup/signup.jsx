import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EMAIL, PASSWORD } from "../../__config/constant";
import illustration from "../../assets/images/Group_2019.png";
import "./signup.scss";

export default function Signup() {
	const [form_value, setFormValue] = useState({
		email: "",
		password: "",
		confirm_password: "",
	});

	const [error, setError] = useState({
        email: "",
		password: "",
		confirm_password: "",
    });


	function changeFormState(event) {
		setFormValue(prev_state => ({ ...prev_state, [event.target.name]: event.target.value }));
	}

    function submitSignupUser(event) {
		event.preventDefault();
		const error_message ={
			email: "",
			password: "",
			confirm_password: "",
		}

		if(!EMAIL.is_valid.test(form_value.email)) {
			error_message.email = "Email is not valid."
		}
		else {
			error_message.email = "";
		}

		if(!form_value.password){
			error_message.password = "Password must not be blank.";
		}
		else if(form_value.password.length <= PASSWORD.min) {
			error_message.password = "Password must have a minimum of 8 characters.";
		}
		else {
			error_message.password = "";
		}

		if(!form_value.confirm_password){
			error_message.confirm_password = "Confirm Password must not be blank.";
		}
		else if(form_value.confirm_password !== form_value.password) {
			error_message.confirm_password = "Confirm Password must match with password."
		}
		else {
			error_message.confirm_password = "";
		}

		if (!error_message.email && !error_message.password && !error_message.confirm_password) {
			window.location.href = "./wall";
		}
		else {
			setError(error_message);
		}
	}
	
	return (
		<div className="signup_container">
			<div className="form_container">
				<form
					method="post"
					onSubmit={submitSignupUser}
				>
					<h3>The Wall</h3>
					<h1>Register</h1>
					<div className="form_group">
						<label htmlFor="email_input">Email</label>
						<input
							type="text"
							name="email"
							id="email_input"
							tabIndex="1"
							autoFocus
							value={form_value.email}
							onChange={changeFormState}
							className={error.email ? "show_error_color" : ""}
						/>
						<div className={error.email ? "error_message show_error_message" : "error_message"}>{error.email || "Email not valid"}</div>
					</div>
					<div className="form_group">
						<label htmlFor="password_input">Password</label>
						<input
							type="password"
							name="password"
							id="password_input"
							tabIndex="2"
							value={form_value.password}
							onChange={changeFormState}
							className={error.password ? "show_error_color" : ""}
						/>
						<div className={error.password ? "error_message show_error_message" : "error_message"}>{error.password || "Password not valid"}</div>
					</div>
					<div className="form_group">
						<label htmlFor="confirm_password_input">Confirm Password</label>
						<input
							type="password"
							name="confirm_password"
							id="confirm_password_input"
							tabIndex="3"
							value={form_value.confirm_password}
							onChange={changeFormState}
							className={error.confirm_password ? "show_error_color" : ""}
						/>
						<div className={error.confirm_password ? "error_message show_error_message" : "error_message"}>{error.confirm_password || "Confirm Password not valid"}</div>
					</div>
					<p>
						By creating an account, you agree with The W<br />
						all's <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>
					</p>
					<button
						type="submit"
						tabIndex="4"
					>
						SIGN UP
					</button>
					<p>
						<span>Already have an account ? </span>
						<Link to="/">Sign in</Link>
					</p>
				</form>
			</div>
			<div className="illustration_container">
				<img
					src={illustration}
					alt="illustration"
				/>
			</div>
		</div>
	);
}
