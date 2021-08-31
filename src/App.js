import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Landing from './Landing';
import About from './About';
import Tutorials from './Tutorials';
import Projects from './Projects';
import Blogs from './Blogs';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToAbout = this.scrollToAbout.bind(this);
    this.scrollToTutorials = this.scrollToTutorials.bind(this);
    this.scrollToProjects = this.scrollToProjects.bind(this);
    this.scrollToBlogs = this.scrollToBlogs.bind(this);

    this.aboutRef = React.createRef();
    this.tutorialsRef = React.createRef();
    this.projectsRef = React.createRef();
    this.blogsRef = React.createRef();
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

  scrollToBlogs(e) {
    window.scroll(0, this.blogsRef.current.offsetTop);
  }


  render() {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        <NavBar scrollAbout={this.scrollToAbout} scrollTutorials={this.scrollToTutorials} scrollProjects={this.scrollToProjects} scrollBlogs={this.scrollToBlogs} />
        <Landing />
        <div ref={this.aboutRef} />
        <About />
        <div ref={this.projectsRef} />
        <Projects/>
        <div ref={this.blogsRef} />
        <Blogs />
        <div ref={this.tutorialsRef} />
        <Tutorials />
      </div>
    );
  }

}

export default App;
