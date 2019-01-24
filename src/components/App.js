import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//STYLES
import Style from '../Styles/App.css';

//COMPONENTS
import VideoGallery from './videoGallery';
import Header from './header';
import Footer from './footer';
import Tagebuch from './tagebuch';
import Gallery from './gallery';
import Sidebar from "react-sidebar";
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          sidebar={
            <div className="sidebar" onClick={() => this.onSetSidebarOpen(false)}>
              <div id="mdiv" ><div class="mdiv"><div class="md"></div></div></div>
              <a onClick={() => scrollToComponent(this.Header, { offset: 0, align: 'top', duration: 500})}>Header</a>
              <a onClick={() => scrollToComponent(this.VideoGallery, { offset: 0, align: 'top', duration: 500})}>Videos</a>
              <a onClick={() => scrollToComponent(this.Gallery, { offset: 0, align: 'top', duration: 500})}>Gallery</a>
              <a onClick={() => scrollToComponent(this.Tagebuch, { offset: 0, align: 'top', duration: 500})}>Tagebuch</a>
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white", position: "fixed", zIndex: "4"} }}
        >
        <div onClick={() => this.onSetSidebarOpen(true)} className="hh">
          <div className="hhicon"></div>
          <div className="hhicon"></div>
          <div className="hhicon"></div>
        </div>
        </Sidebar>
        <Header ref={(section) => { this.Header = section; }}/>
        <VideoGallery ref={(section) => { this.VideoGallery = section; }}/>
        <Gallery ref={(section) => { this.Gallery = section; }}/>
        <Tagebuch ref={(section) => { this.Tagebuch = section; }}/>
        <Footer/>
      </div>
    
    );
  }
}

export default App;