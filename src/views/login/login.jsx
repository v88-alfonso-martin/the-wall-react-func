import React, { useState } from "react";
import { Link } from "react-router-dom";
import illustration from "../../assets/images/Group_2019.png";
import "./login.scss";

export default function Login() {
	const [form_value, setFormValue] = useState({
		email: "",
		password: "",
	});

	const [is_error, setIsError] = useState(false);

	function submitLoginUser(event) {
		event.preventDefault();
		let { email, password } = form_value;

		if (email === "test@test.com" && password === "password") {
			window.location.href = "/wall";
		} 
        else {
			setFormValue({
				email: "",
				password: "",
			});
			setIsError(true);
		}
	}

	function changeFormState(event) {
		setFormValue(prev_state => ({ ...prev_state, [event.target.name]: event.target.value }));
	}

	return (
		<div className="login_container">
			<div className="form_container">
				<form method="post" onSubmit={submitLoginUser}>
					<h3>The Wall</h3>
					<h1>Log In</h1>
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
							className={is_error ? "show_error_color" : ""}
						/>
						<div className={is_error ? "error_message show_error_message" : "error_message"}>Incorrect Email</div>
					</div>
					<div className="form_group">
						<div className="forgot_password_container">
							<label htmlFor="password_input">Password</label>
							<a href="#">Forgot Password ?</a>
						</div>
						<input
							type="password"
							name="password"
							id="password_input"
							tabIndex="2"
							value={form_value.password}
							onChange={changeFormState}
							className={is_error ? "show_error_color" : ""}
						/>
						<div className={is_error ? "error_message show_error_message" : "error_message"}>Incorrect Password</div>
					</div>
					<button type="submit" tabIndex="3">SIGN IN</button>
					<p>
						I don't have an account ? <Link to="/signup">Sign up</Link>
					</p>
				</form>
			</div>
			<div className="illustration_container">
				<img src={illustration} alt="illustration" />
			</div>
		</div>
	);
}
