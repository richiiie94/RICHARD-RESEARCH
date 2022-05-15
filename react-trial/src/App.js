// import logo from './logo.svg';
import './styles.scss'
import './styles/LandingPage.scss'
import './App.scss';

import React from 'react';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';

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
        <div className="firstBG" style={{backgroundImage: `url(${this.state.imageURL})`}}>
          <NavigationBar />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
