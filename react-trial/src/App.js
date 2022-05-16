// import logo from './logo.svg';
import './styles.scss'
import './styles/LandingPage.scss'
import './App.scss';

import React from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';

import coconutImage from './assets/images/coconut.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imageURL: coconutImage};
  }

  handleImageChange() {
    this.setState({
      imageURL: coconutImage
    })
  }
  
  render() {
    return (
      <div>
        <div className="parallaxBG" style={{backgroundImage: `url(${this.state.imageURL})`}}>
          <NavigationBar />
          <Home />
        </div>

        <div className="container">
          <div className="content">
            <About />
            <Home />
            <Home />
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
