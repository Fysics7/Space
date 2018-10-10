import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {
	return (
		<div className="newUser">
			<h1 className="pageTitle">SPACE EXPLORER</h1>
			<Link to = "/signup" >Create Account</Link>
			<form className="mainForm">
				<label className="login">Login</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label className="loginPassword">Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button className="loginButton" type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Login</button>
			</form>
		</div>
	);
};

export default SignIn;