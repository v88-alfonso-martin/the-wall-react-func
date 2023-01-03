import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EMAIL, PASSWORD } from "../../__config/constant";
import illustration from "../../assets/images/Group_2019.png";
import "./signup.scss";
import { useForm } from "react-hook-form";

export default function Signup() {
	const { register, handleSubmit, formState: { errors }, watch } = useForm();


    function submitSignupUser() {
		window.location.href = "./wall";	
	}

	return (
		<div className="signup_container">
			<div className="form_container">
				<form
					method="post"
					onSubmit={handleSubmit(submitSignupUser)}
				>
					<h3>The Wall</h3>
					<h1>Register</h1>
					<div className="form_group">
						<label htmlFor="email_input">Email</label>
						<input
							type="text"
							id="email_input"
							tabIndex="1"
							autoFocus
							{...register("email", {
								required: "Email is required.",
								pattern: { value: EMAIL.is_valid, message: "Email is not valid" }
							})}
							className={errors.email ? "show_error_color" : ""}
						/>
						<div className={`error_message ${errors.email ? "show_error_message" : ""}`}>{errors?.email?.message}</div>
					</div>
					<div className="form_group">
						<label htmlFor="password_input">Password</label>
						<input
							type="password"
							id="password_input"
							tabIndex="2"
							{...register("password", {
								required: "Pasword is required.",
								minLength: { value: 8, message: "Password should be more than 8 characters."}
							})}
							className={errors.password ? "show_error_color" : ""}
						/>
						<div className={`error_message ${errors.password ? "show_error_message" : ""}`}>{errors?.password?.message}</div>
					</div>
					<div className="form_group">
						<label htmlFor="confirm_password_input">Confirm Password</label>
						<input
							type="password"
							id="confirm_password_input"
							tabIndex="3"
							{...register("confirm_password", {
								required: "Confirm Pasword is required.",
								validate: (value) => watch("password") === value || "Password does not match."
							})}
							className={errors.confirm_password ? "show_error_color" : ""}
						/>
						<div className={`error_message ${errors.confirm_password ? "show_error_message" : ""}`}>{errors?.confirm_password?.message || "Confirm Password not valid"}</div>
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
