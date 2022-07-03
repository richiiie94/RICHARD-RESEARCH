// import logo from './logo.svg';
import './styles.scss'
import './styles/LandingPage.scss'
import './App.scss';

import React from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import KeyFeatures from './components/KeyFeatures';
import Team from './components/Team';
import CompanyProfile from './components/CompanyProfile';

import backgroundImage from './assets/images/coconut.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imageURL: backgroundImage};
  }

  handleImageChange() {
    this.setState({
      imageURL: backgroundImage
    })
  }
  
  render() {
    return (
      <div className="d-grid gap-3 containerStyle">
        <div className="parallaxBG" style={{backgroundImage: `url(${this.state['imageURL']})`}}>
          <NavigationBar />
          <Home />
        </div>
        {/* //! DESKTOP VERSION */}
        <div className="d-none d-sm-block container content contentSpecial">
          <About />
        </div>
        {/* //! MOBILE VERSION */}
        <div className="d-block d-sm-none content contentSpecial">
          <About />
        </div>

        <div className="content">
          <KeyFeatures />
          <Product />
          {/* <Team /> */}
        </div>

        <div className="content">
          <CompanyProfile />
        </div>
      </div>
    );
  }
}

export default App;
