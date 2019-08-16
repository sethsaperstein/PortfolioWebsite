import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Landing from './Landing';
import About from './About';
import Tutorials from './Tutorials';
import Projects from './Projects';

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
        <div ref={this.tutorialsRef} />
        <Tutorials />
        <div ref={this.projectsRef} />
        <Projects />
      </div>
    );
  }

}

export default App;

/*


*/