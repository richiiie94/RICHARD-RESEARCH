import React from 'react';
import '../styles.scss';
import '../styles/LandingPage.scss';
import product1 from '../assets/images/bricket.jpg';
import product2 from '../assets/images/cocofibre.jpg';
import product3 from '../assets/images/cocopeat.jpg';

const carousels = [
    {
        img: product1,
        name: 'product1',
        description: 'Ini Product 1',
    },
    {
        img: product2,
        name: 'product2',
        description: 'Ini Product 2',
    },
    {
        img: product3,
        name: 'product3',
        description: 'Ini Product 3',
    },
];
const carouselsElement = [];
const carouselsElementData = [];
const carouselsElementMobile = [];
const carouselsElementDataMobile = [];

carousels.forEach((item, index) => {
    carouselsElement.push(
        <button type="button" data-bs-target="#carouselProductDesktop" 
            data-bs-slide-to={index} 
            className={(index === 0) ? 'active' : ''} 
            aria-current="true" 
            aria-label={"Slide " + (index + 1)} 
            key={"button-desktop-" + index}>
        </button>
    );

    carouselsElementData.push(
        <div className={"carousel-item" + ((index === 0) ? ' active' : '')} data-bs-interval="8000" key={"image-desktop-" + index}>
            <div className="row">
                <div className="col">
                    <img src={item['img']} className="d-block w-100" alt={item['name']} />
                </div>

                <div className="col d-flex align-items-center">
                    {item['description']}
                </div>
            </div>
        </div>
    );

    carouselsElementMobile.push(
        <button type="button" data-bs-target="#carouselProductMobile" 
            data-bs-slide-to={index} 
            className={(index === 0) ? 'active' : ''} 
            aria-current="true" 
            aria-label={"Slide " + (index + 1)} 
            key={"button-mobile-" + index}>
        </button>
    );

    carouselsElementDataMobile.push(
        <div className={"carousel-item" + ((index === 0) ? ' active' : '')} data-bs-interval="8000" key={"image-mobile-" + index}>
            <div className="row imgWrap">
                <img src={item['img']} className="d-block w-100" alt={item['name']} />

                <div className="container imgDescription">
                    {item['description']}
                </div>
            </div>
        </div>
    );
})
export default class Product extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="ProductApp">
                {/* //! DESKTOP VERSION */}
                <div className="d-none d-sm-block">
                    <div id="carouselProductDesktop" className="carousel carousel-dark carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {carouselsElement}
                        </div>
                        
                        <div className="carousel-inner">
                            {carouselsElementData}
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
                
                {/* //! MOBILE VERSION */}
                <div className="d-block d-sm-none">
                    <div id="carouselProductMobile" className="carousel carousel-dark carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {carouselsElementMobile}
                        </div>
                        
                        <div className="carousel-inner">
                            {carouselsElementDataMobile}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}