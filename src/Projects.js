import React from 'react';
import './Styles/Projects.css';
import Project1 from './Images/project-1.png';
import Project2 from './Images/project-2.png';
import Project3 from './Images/project-3.png';
import Project4 from './Images/project-4.png';

class Projects extends React.Component {

	render() {
		return (
			<div className="Projects">
				<div className="ProjectsHeading">
					Projects
				</div>
				<div className="ProjectContainer">
					<a className="ProjectItem" href="https://www.youtube.com/channel/UC4qLRnMVVs1TMoGE-bisZ-w/playlists" target="_blank">
						<img src={Project1} alt="tutorial 1" />
					</a>
					<a className="ProjectItem" href="https://github.com/sethsaperstein/XMode-Portfolio/tree/master/stock_project" target="_blank">
						<img src={Project2} alt="tutorial 2" />
					</a>
				</div>
				<div className="ProjectContainer">
					<a className="ProjectItem" href="https://github.com/sethsaperstein/XMode-Portfolio/tree/master/home_work_project" target="_blank">
						<img src={Project3} alt="tutorial 5" />
					</a>
					<a className="ProjectItem">
						<img src={Project4} alt="tutorial 6" />
					</a>
				</div>
			</div>
		)
	}
}

export default Projects;