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
					<a className="ProjectItem" href="https://medium.com/@sethsaper/my-data-lake-story-how-i-built-a-serverless-data-lake-on-aws-95a820a28891" target="_blank">
						<img src={Project1} alt="My Data Lake Story: How I Built a Serverless Data Lake on AWS" />
					</a>
					<a className="ProjectItem" href="https://github.com/sethsaperstein/XMode-Portfolio/tree/master/stock_project" target="_blank">
						<img src={Project2} alt="Stock Project" />
					</a>
				</div>
				<div className="ProjectContainer">
					<a className="ProjectItem" href="https://github.com/sethsaperstein/XMode-Portfolio/tree/master/home_work_project" target="_blank">
						<img src={Project3} alt="Home Work Project" />
					</a>
					<a className="ProjectItem" href="https://medium.com/@sethsaper/problem-roulette-effectiveness-study-3bdbd5b7dca8" target="_blank">
						<img src={Project4} alt="Problem Roulette Effectiveness Study" />
					</a>
				</div>
			</div>
		)
	}
}

export default Projects;