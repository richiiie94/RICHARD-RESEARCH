
import React from 'react';
import '../styles.scss'
import '../styles/LandingPage.scss'

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarPos: 0,
            showNavbar: true,
            clickCount: 0,
        };

        this.home = 'Home';
        this.about = 'About';
        this.product = 'Product';
    }

    navbarBGChange = () => {
        const navbar = document.querySelector('.navbar');
        this.setState.clickCount = this.state.clickCount++;

        if (this.state.clickCount % 2 === 1) {
            navbar.classList.add('navbarBG');
        } else {
            navbar.classList.remove('navbarBG');
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            navbarPos: document.body.getBoundingClientRect().top,
            showNavbar: document.body.getBoundingClientRect().top > this.state.navbarPos,
        })
        this.props.scrollPositionFromNavigationBarComponent(document.body.getBoundingClientRect().top);
        
        const navbar_collapse = document.querySelector('.navbar-collapse');
        if (document.body.getBoundingClientRect().top !== this.state.navbarPos) {
            navbar_collapse.classList.remove('show');
        }
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-light ${this.state.navbarPos === 0 ? 'mainNavbarTransparent' : 'mainNavbar'} ${this.state.showNavbar ? 'activeNavbar' : 'hiddenNavbar'}`}>
                    <div className="container-fluid mainNavbarDiv">
                        <a className="navbar-brand" href="#">Navbar</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.navbarBGChange}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse mainNavbarCollapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href={`#${this.home}App`}>{this.home}</a>
                                </li>

                                {/* //! DESKTOP VERSION */}
                                <li className="d-none d-sm-block nav-item">
                                    <a className="nav-link active" href={`#${this.about}DesktopApp`}>{this.about}</a>
                                </li>
                                {/* //! MOBILE VERSION */}
                                <li className="d-block d-sm-none nav-item">
                                    <a className="nav-link active" href={`#${this.about}App`}>{this.about}</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href={`#${this.product}App`}>{this.product}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}