import React from 'react';
import './Styles/About.css';

class About extends React.Component {

	render() {
		return (
			<div className="About">
				<div className="AboutHeading">About</div>
				<div className="AboutParagraph">
					<p>
						I'm currently a Big Data Engineer at Rocket Homes, focused on building tooling to simplify processes related to data ingestion, transformation, storage, and analysis, primarily in relation to real-estate data. I graduated from University of Michigan in 2019 after pursuing my Bachelors in Data Science, Economics, and Mathematics of Finance and Risk Management. I am particularly interested in harnessing alternative and emerging data for social good. I also have a growing interest in data ethics and data transparency with a firm belief that the rights to our data are human rights.
						<br/><br/>
						My interests vary widely though, both in and out of software engineering. Whether it's designing large scale systems such as betting exchanges or hitting the slopes to catch some fresh "pow", I'm passionate about all I do.
						<br/><br/>
						Competencies: AWS Big Data Technologies, Spark, Kafka, Airflow, Terraform, CloudFormation, Troposphere
						<br/><br/>
						Primary Languages: Python, Scala, ReactJS, Swift, C++
						<br/><br/>
						I'm always interested to hear from other professionals in the industry and would love to connect with you! Also feel free to reach out if you're looking to collaborate on a project!
					</p>
				</div>
			</div>
			
		)
	}
}

export default About;