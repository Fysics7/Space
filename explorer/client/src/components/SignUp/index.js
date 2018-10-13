import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignUp = (props)=> {
	return (
		<div>
			<h1>ACCOUNT CREATION</h1>
			
			<form className="createForm">
				<label className="labelForm">First Name</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='name' type='text' placeholder = 'first name here'/>
				<br />
				<label>Last Name</label><br/>
				<input name='name' type='text' placeholder = "last name here" value = {props.username} onChange = {props.handleChange} />
				<br />
				<label>Email Address</label><br/>
				<input name='name' type='email' placeholder = "email@email.com" value = {props.username} onChange = {props.handleChange} />
				<br />
				<label>Create a Password</label><br/>
				<input name='password' type='password' placeholder = "6 characters" value = {props.password} onChange = {props.handleChange} />
				<br />
				<label>Name your Captain</label><br/>
				<input name='username' type='name' value = {props.username} onChange = {props.handleChange} />
				<br />
				<label>Name your Ship</label><br/>
				<input name='username' type='name' placeholder = "ship name here" value = {props.username} onChange = {props.handleChange} />
				<br />
        		<label>Captain Biography:
				<br />
				<textarea className="textarea" name="username" type="text" placeholder="Create a Bio for your Captain" value = {props.username} onChange = {props.handleChange} />
				</label>
				<br />
				<button className="createButton" type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Create Account</button>
			</form>
		</div>
	);
};
// Beside the form being on the sign up page, this will be where the user will select there species and ship


export default SignUp;