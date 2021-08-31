import React from 'react';
import './Styles/CardSections.css';
import Card from './components/card/Card';

class Blogs extends React.Component {

	render() {
		return (
			<div className="container">
				<div className="title">
					Blogs
				</div>
				<div className="body">
                    <Card 
						imageUrl='https://www.lynbrooklibrary.org/wp-content/uploads/2020/06/coming-soon-neon-sign.jpg'
						title='Coming Soon — Training For a Marathon In 1 Month — Why You Shouldn’t and How I Did'
						text="How hard is running a marathon? How do people typically train for something like this? Is this even possible in a month? What do I need to get?
                        These are just a few of the many questions that were running through my mind at the time."
						link='https://medium.com/@sethsaper/coming-soon-training-for-a-marathon-in-1-month-why-you-shouldnt-and-how-i-did-12ecaf6dd048'
						date='October 17 2021'
					/>
                    <Card 
						imageUrl='https://www.lynbrooklibrary.org/wp-content/uploads/2020/06/coming-soon-neon-sign.jpg'
						title='Coming Soon — 10 Things They Won’t Tell You About Software Engineering'
						text='Throughout the course of this guide, I will share my experiences of the constant dilemmas software engineers face each and every day.'
						link='https://medium.com/@sethsaper/coming-soon-10-things-they-wont-tell-you-about-software-engineering-7aeef0aa6072'
						date='September 12 2021'
					/>
				</div>
			</div>
		)
	}
}

export default Blogs;