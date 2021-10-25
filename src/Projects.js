import React from 'react';
import './Styles/CardSections.css';
import Card from './components/card/Card';

class Projects extends React.Component {

	render() {
		return (
			<div className="container" style={{backgroundColor: "#1CAFA9"}}>
				<div className="title" style={{color: "white"}}>
					Projects
				</div>
				<div className="body">
					<Card 
						imageUrl={require('../src/Images/coming-soon.jpeg')}
						title='Coming Soon — How I Built This: A Sports Betting Exchange (Part 4: The Retro)'
						text="In this post, I'll walk you through my journey of what it was like bringing an idea from inception to reality, including all the hurdles faced along the way."
						link='https://medium.com/@sethsaper/coming-soon-how-i-built-this-a-sports-betting-exchange-part-4-the-retro-7d45f36f5b0f'
						date='November 8 2021'
					/>
					<Card 
						imageUrl={require('../src/Images/coming-soon.jpeg')}
						title='Coming Soon — How I Built This: A Sports Betting Exchange (Part 3: The Exchange)'
						text="In this post, I'll walk you through my journey of what it was like bringing an idea from inception to reality, including all the hurdles faced along the way."
						link='https://medium.com/@sethsaper/coming-soon-how-i-built-this-a-sports-betting-exchange-part-3-the-exchange-64d5494b4bda'
						date='November 5 2021'
					/>
					<Card 
						imageUrl={require('../src/Images/coming-soon.jpeg')}
						title='Coming Soon — How I Built This: A Sports Betting Exchange (Part 2: The Backend)'
						text="In this post, I'll walk you through my journey of what it was like bringing an idea from inception to reality, including all the hurdles faced along the way."
						link='https://medium.com/@sethsaper/coming-soon-how-i-built-this-a-sports-betting-exchange-part-2-the-backend-2eaccbb802a9'
						date='November 1 2021'
					/>
					<Card 
						imageUrl={require('../src/Images/coming-soon.jpeg')}
						title='Coming Soon — How I Built This: A Sports Betting Exchange (Part 1: The UI)'
						text="In this post, I'll walk you through my journey of what it was like bringing an idea from inception to reality, including all the hurdles faced along the way."
						link='https://medium.com/@sethsaper/coming-soon-how-i-built-this-a-sports-betting-exchange-part-1-the-ui-391fb6c61266'
						date='October 29 2021'
					/>
					<Card 
						imageUrl={require('../src/Images/data-lake-story.png')}
						title='My Data Lake Story: How I Built a Serverless Data Lake on AWS'
						text='In this post, I’ll explain the design decisions, trade-offs, and complications of building a cloud-native data lake.'
						link='https://medium.com/@sethsaper/my-data-lake-story-how-i-built-a-serverless-data-lake-on-aws-95a820a28891'
						date='Aug 21 2019'
					/>
					<Card 
						imageUrl={require('../src/Images/home-work.png')}
						title='Home and Work Location Based Predictive Modeling'
						text="In this deck, I'll explain the models used to predict a users home and work locations based on a series of location points over the course of months."
						link='https://github.com/sethsaperstein/XMode-Portfolio/tree/master/home_work_project'
						date='Aug 15 2018'
					/>
					<Card 
						imageUrl={require('../src/Images/location.jpeg')}
						title='Location Based Algorithmic Trading Strategy'
						text="In this deck, I'll explain the strategies tested on quarterly revenue predictions based on location data."
						link='https://github.com/sethsaperstein/XMode-Portfolio/tree/master/stock_project'
						date='Aug 15 2018'
					/>
				</div>
			</div>
		)
	}
}

export default Projects;