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
// import Team from './components/Team';

import CompanyProfile from './components/CompanyProfile';
import backgroundImage from './assets/images/coconut.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imageURL: backgroundImage};
    this.navigationBar = React.createRef();
    this.companyProfile = React.createRef();
  }

  handleImageChange() {
    this.setState({
      imageURL: backgroundImage
    })
  }

  scrollPosition = (position) => {
    const btnBackToTop = document.getElementById("btn-back-to-top");
    if (position < -50) {
      btnBackToTop.style.display = "block";
    }

    if (position > -50) {
      btnBackToTop.style.display = "none";
    }
  }
  
  render() {
    return (
      <div className="d-grid gap-lg-3 containerStyle">
        <div className="parallaxBG" style={{backgroundImage: `url(${this.state['imageURL']})`}}>
          <NavigationBar scrollPositionFromNavigationBarComponent={this.scrollPosition} ref={this.navigationBar} />
          <Home />
        </div>

        {/* //! DESKTOP VERSION */}
        <div className="d-none d-sm-block container content contentSpecial">
          <About />
        </div>
        {/* //! MOBILE VERSION */}
        <div id="AboutApp" className="d-block d-sm-none content contentSpecial">
          <About />
        </div>

        <div className="content">
          <KeyFeatures />
          <Product />
          {/* <Team /> */}
        </div>

        <div className="content">
          <CompanyProfile ref={this.companyProfile} />
        </div>

        <button 
          type="button"
          className={`btn btn-primary rounded-circle`}
          id="btn-back-to-top"
          data-bs-toggle="tooltip"
          title="Scroll to Top"
          onClick={() => this.navigationBar.current.scrollToTop()}>
          <i className="bi bi-caret-up-fill" id="bi-back-to-top"></i>
        </button>

        <button 
          type="button"
          className="btn rounded-circle"
          id="btn-whatsapp"
          onClick={() => this.companyProfile.current.openWindow('https://www.whatsapp.com')}>
          <i className="bi bi-whatsapp" id="bi-whatsapp"></i>
        </button>
      </div>
    );
  }
}

export default App;
