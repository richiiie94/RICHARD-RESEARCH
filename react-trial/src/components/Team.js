import React from 'react';
import '../styles.scss';
import '../styles/LandingPage.scss';
import product1 from '../assets/images/bricket.jpg';
import product2 from '../assets/images/cocofibre.jpg';
import product3 from '../assets/images/cocopeat.jpg';

export default class Team extends React.Component {
    render() {
        return (
            <div>
                <div id="carouselProduct" className="carousel carousel-dark carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselProduct" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselProduct" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselProduct" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="8000">
                            <div className="row">
                                <div className="col">
                                    <img src={product1} className="d-block w-100" alt="product1" />
                                </div>

                                <div className="col d-flex align-items-center">
                                    Nama Saja
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="8000">
                            <img src={product2} className="d-block w-100" alt="product2" />
                        </div>

                        <div className="carousel-item" data-bs-interval="8000">
                            <img src={product3} className="d-block w-100" alt="product3" />
                        </div>
                    </div>

                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </div>
        );
    }
}