// ***************** Home Selection Page *************** //
// Home landing page of the application after logging in

import React from 'react';
import "./style.css";

const Home = (props) =>{
	return (
		<div>
			<h1>MAIN PAGE ===> This page will display the players' card -> with ship information / race / ship
				information.  Below the player card, it will show the combat area.
				This AREA will have the means to select what galaxy they want to play in and that here they can
				create a game.
				-- There will be images of galaxies to select
				-- At the bottom, they will be able to select create game.

	
			</h1>
			<p>{props.auth.username}</p>
			<button onClick = {props.handleLogout}>Log Out</button>
		</div>
	);
};

export default Home;