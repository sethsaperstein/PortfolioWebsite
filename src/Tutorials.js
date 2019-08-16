import React from 'react';
import './Styles/Tutorials.css';
import Tutorial1 from './Images/tutorial-1.png';
import Tutorial2 from './Images/tutorial-2.png';
import Tutorial3 from './Images/tutorial-3.png';
import Tutorial5 from './Images/tutorial-5.png';
import Tutorial6 from './Images/tutorial-6.png';
import Tutorial7 from './Images/tutorial-7.png';

class Tutorials extends React.Component {

	render() {
		return (
			<div className="Tutorials">
				<div className="TutorialsHeading">
					Tutorials
				</div>
				<div className="TutorialContainer">
					<a className="TutorialItem" href="https://www.youtube.com/watch?v=vLHJbJgfbYQ&t=11s" target="_blank">
						<img src={Tutorial1} alt="How to Collect Location and Visitation Data in Swift" />
					</a>
					<a className="TutorialItem" href="https://www.youtube.com/watch?v=LopcHgp1Y-4&t=38s" target="_blank">
						<img src={Tutorial2} alt="How to Collect and Store Fields for Visitation Data in Swift" />
					</a>
					<a className="TutorialItem" href="https://www.youtube.com/watch?v=-B-SZgytyzU&t=2s" target="_blank">
						<img src={Tutorial3} alt="How to Make an API Request in Swift" />
					</a>
				</div>
				<div className="TutorialContainer">
					<a className="TutorialItem" href="https://www.youtube.com/watch?v=0UxiV5sUlcA&t=3s" target="_blank">
						<img src={Tutorial5} alt="How to Use API Gateway with Kinesis to Send Data to S3 in AWS" />
					</a>
					<a className="TutorialItem" href="https://www.youtube.com/watch?v=PLtMYA7LpbE&t=3s" target="_blank">
						<img src={Tutorial6} alt="How to Use Athena with Json Data in AWS" />
					</a>
					<a className="TutorialItem" href="https://www.youtube.com/watch?v=jr54fOkT25w&t=3s" target="_blank">
						<img src={Tutorial7} alt="How to Schedule Athena Queries With Lambda in AWS" />
					</a>
				</div>
			</div>
		)
	}
}

export default Tutorials;
