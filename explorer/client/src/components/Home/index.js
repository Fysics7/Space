// ***************** Home Selection Page *************** //
// Home landing page of the application after logging in

import React from 'react';
import "./style.css";

const Home = (props) =>{
	return (
		<div>
			<h1>MAIN PAGE ===> This page will display the players' card -> with ship information / race / ship
				information.  Below the player card, it will show the combat area.
			</h1>
			<p>{props.auth.username}</p>
			<button onClick = {props.handleLogout}>Log Out</button>
		</div>
	);
};

export default Home;