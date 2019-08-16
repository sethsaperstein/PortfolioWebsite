import React from 'react';
import './Styles/NavBar.css';
import Pdf from './Seth_Saperstein.pdf';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			togglePressed: false
		};

		this.scrollAbout = props.scrollAbout;
		this.scrollTutorials = props.scrollTutorials;
		this.scrollProjects = props.scrollProjects;

		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(e) {
		console.log(this.state.togglePressed);
		this.setState((prevState) => ({
			togglePressed: !prevState.togglePressed
		}));
	}

	


	render() {
		return (
			<nav className="nav">
			    <ul className="NavBar-Container">
			    	<li onClick={this.handleToggle} id="Toggle">Menu</li>
			        <li><a href={Pdf} target="_blank">RESUME</a></li>
			        <li onClick={this.scrollAbout}>ABOUT</li>
			        <li id="Name">SETH SAPERSTEIN</li>
			        <li onClick={this.scrollTutorials}>TUTORIALS</li>
			        <li onClick={this.scrollProjects}>PROJECTS</li>
			    </ul>
			    <DropDown onClick={this.state.togglePressed} scrollAbout={this.scrollAbout} scrollTutorials={this.scrollTutorials} scrollProjects={this.scrollProjects}/>
		  </nav>
		)
	}
}


function DropDown(props) {
	if (props.onClick) {
		return (
			<div>
				<ul className="DropDown">
					<li><a href={Pdf} target="_blank">RESUME</a></li>
			        <li onClick={props.scrollAbout}>ABOUT</li>
			        <li onClick={props.scrollTutorials}>TUTORIALS</li>
			        <li onClick={props.scrollProjects}>PROJECTS</li>
			    </ul>
			</div>
		)
	}
	
	return (<div/>)
	
}

export default NavBar;