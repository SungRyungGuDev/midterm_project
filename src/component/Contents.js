import React from 'react';
import '../App.css'


function Contents (props){
	return (
	<div className="container">
		<header className='header'>
    		<h1>Welcome to SAIT's Student List!!</h1>
		</header>
		
		<div className="display">
			<div className="description">{props.text}</div>
		</div>
		
		<footer>
        <table>
            <tbody>
                <th className="left_align">Office: 9 Springbank Rise SW, Calgary AB, T3H 4L9</th>
                <th className="center_align">E-mail: RyanGu8812@gmail.com</th>
				<th className="right_align">Phone: 587-966-2044</th>
            </tbody>
        </table>
    	</footer>
	</div>

	)
}

export default Contents;