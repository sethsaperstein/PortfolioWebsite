import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Landing from './Landing';
import About from './About';
import Tutorials from './Tutorials';
import Projects from './Projects';
import Card from './components/card/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToAbout = this.scrollToAbout.bind(this);
    this.scrollToTutorials = this.scrollToTutorials.bind(this);
    this.scrollToProjects = this.scrollToProjects.bind(this);

    this.aboutRef = React.createRef();
    this.tutorialsRef = React.createRef();
    this.projectsRef = React.createRef();
  }


  scrollToAbout(e) {
    window.scroll(0, this.aboutRef.current.offsetTop);
  }

  scrollToTutorials(e) {
    window.scroll(0, this.tutorialsRef.current.offsetTop);
  }

  scrollToProjects(e) {
    window.scroll(0, this.projectsRef.current.offsetTop);
  }


  render() {
    return (
      <div>
        <NavBar scrollAbout={this.scrollToAbout} scrollTutorials={this.scrollToTutorials} scrollProjects={this.scrollToProjects} />
        <Landing />
        <div ref={this.aboutRef} />
        <About />
        <div ref={this.projectsRef} />
        <Projects/>
        <div ref={this.tutorialsRef} />
        <Tutorials />
        {/* <div>
          blogs
          <Card 
						imageUrl='https://www.lynbrooklibrary.org/wp-content/uploads/2020/06/coming-soon-neon-sign.jpg'
						title='Coming Soon — 10 Things They Won’t Tell You About Software Engineering'
						text='Throughout the course of this guide, I will share my experiences of the constant dilemmas software engineers face each and every day.'
						link='https://medium.com/@sethsaper/coming-soon-10-things-they-wont-tell-you-about-software-engineering-7aeef0aa6072'
						date='September 12 2021'
					/>
        </div> */}
      </div>
    );
  }

}

export default App;
