
import React from 'react';
import '../styles.scss'
import '../styles/LandingPage.scss'

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarPos: 0,
            showNavbar: true,
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
        console.log('Scroll: ', document.body.getBoundingClientRect().top);
        console.log('position before: ', this.state.navbarPos);
    }

    render() {
        return (
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-light mainNavbar ${this.state.showNavbar ? 'activeNavbar' : 'hiddenNavbar'}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}