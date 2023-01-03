import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import illustration from "../../assets/images/Group_2019.png";
import "./login.scss";

export default function Login() {
	const { register, handleSubmit, formState: { errors }, setError } = useForm();

	function submitLoginUser({ email, password }) {
		if (email === "test@test.com" && password === "password") {
			window.location.href = "/wall";
		} 
        else {
			setError("email",  { type: "server", message: "Incorrect Email."});
			setError("password",  { type: "server", message: "Incorrect Password."});
		}
	}
	
	return (
		<div className="login_container">
			<div className="form_container">
				<form method="post" onSubmit={handleSubmit(submitLoginUser)}>
					<h3>The Wall</h3>
					<h1>Log In</h1>
					<div className="form_group">
						<label htmlFor="email_input">Email</label>
						<input
							type="text"
							id="email_input"
							tabIndex="1"
							autoFocus
							className={errors.email ? "show_error_color" : ""}
							{...register("email", {
								required: "Email is required."
							})}
						/>
						<div className={`error_message ${errors.email ? "show_error_message" : ""}`}>{errors?.email?.message}</div>
					</div>
					<div className="form_group">
						<div className="forgot_password_container">
							<label htmlFor="password_input">Password</label>
							<a href="#">Forgot Password ?</a>
						</div>
						<input
							type="password"
							id="password_input"
							{...register("password", {
								required: "Password is required."
							})}
							tabIndex="2"
							className={errors.password ? "show_error_color" : ""}
						/>
						<div className={`error_message ${errors.password ? "show_error_message" : ""}`}>{errors?.password?.message}</div>
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
