import React from 'react';
import '../styles.scss';
import '../styles/LandingPage.scss';
import product1 from '../assets/images/briquette.png';
import product2 from '../assets/images/virgin_coconut_oil.png';
import product3 from '../assets/images/coco_fibre.png';
import product4 from '../assets/images/coco_peat.png';
import product5 from '../assets/images/desiccated_coconut.png';
import product6 from '../assets/images/copra.png';

const carousels = [
    {
        img: product1,
        name: 'coconut_charcoal_briquettes',
        description: 'Coconut Charcoal Briquettes',
        specification: `Ash Content : 1.8 - 2.5 %
        Ash Color : Natural White
        Calories : 7000 - 7500 Kcal
        Fixed Carbon : ± 80 %
        Moisture : 5 - 7 %
        Shape : Cube, Hexagonal, Finger`,
    },
    {
        img: product2,
        name: 'coconut_oil',
        description: 'Coconut Oil',
        specification: `Fatty-Acids/ Persetase(%)/ Moisture : 0,06%
        Iodine Value : 7,36%
        FFA : 0,07%`,
    },
    {
        img: product3,
        name: 'coco_fibre',
        description: 'Coco Fibre',
        specification: `Size : 30 x 30 x 12 - 15 cm
        Filter : 6 mm
        Weight : ± 5 kg
        Electrical Conductivy < 1.2 ms/cm
        pH : 5.8 - 6.4
        Expand : 45 - 50 Liter/block`,
    },
    {
        img: product4,
        name: 'coco_peat',
        description: 'Coco Peat',
        specification: `Size : 30 x 30 x 12 - 15 cm
        Filter : 6 mm
        Weight : ± 5 kg
        Electrical Conductivy : < 0.5 ms/cm 
        pH : 5.8 - 6.4
        Expand : 45 - 50 liter/block`,
    },
    {
        img: product5,
        name: 'dessicated_coconut',
        description: 'Dessicated Coconut',
        specification: `Water : 0.2%
        Fat : 25 %
        Karbohidrat : 5.9 %
        Protein : 9.3 %
        Ash : 2.4 %
        Fiber : 3.9 %
        Pentosan : 8.9 %`,
    },
    {
        img: product6,
        name: 'Copra',
        description: 'Copra',
        specification: `Fat : 60.84 %
        Water : max 7.56 %`,
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
                <div className="col-6 text-center">
                    <img src={item['img']} class="h-100" alt={item['name']} />
                </div>

                <div className="col-6 py-3">
                    <div className="col text-center descriptionProduct">
                        {item['description']}
                    </div>

                    <div className="col specificationProduct">
                        {item['specification']}
                    </div>
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

                <div className="container text-center imgDescription">
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
                <div className="col px-4 pt-2 pt-sm-4">
                    <div className="row-auto productsTitle">
                        Our Products
                    </div>
                </div>
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