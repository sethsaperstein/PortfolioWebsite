import React from 'react';
import './Styles/About.css';

class About extends React.Component {

	render() {
		return (
			<div className="About">
				<div className="AboutHeading">About</div>
				<div className="AboutParagraph">
					<p>
						I am an undergraduate student at the University of Michigan pursuing my Bachelors in Data Science, Economics, and Mathematics of Finance and Risk Management. At Michigan, I focused my studies on machine learning methods for educational development tools and their implications on learning. I am particularly interested in harnessing alternative and emerging data for social good. I also have a growing interest in data ethics relating to applications in both finance and ad-tech.
						<br/><br/>
						My interests vary widely though, as many of my projects outside of academia are typically related to the crossroads of iOS app development, cloud-based technologies, and data pipelining. This unique skill set allows me the flexibility to be a team player and collaborate effectively with people of all disciplines.
						<br/><br/>
						Competencies: data science, machine learning, cloud computing, Hadoop, ETL pipelines, AWS, Python/SQL/c++/R/Swift/ReactJS
						<br/><br/>
						I am seeking data engineering, data science, and data analytics opportunities in the New York, San Francisco, and Chicago metropolitan areas, and would love to connect with you!
					</p>
				</div>
			</div>
			
		)
	}
}

export default About;