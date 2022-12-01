import React from 'react';
import '../styles.scss'
import '../styles/LandingPage.scss'

export default class About extends React.Component {
    render() {
        return (
            <div id="AboutDesktopApp">
                <div className="container">
                    <div className="row whiteColorAbout pb-lg-4">
                        <div className="col-sm-6 px-4 py-2 py-sm-4">
                            <div className="row leftAboutTitle px-sm-0 mb-lg-3 mb-sm-1">
                                About Us
                            </div>
                            <div className="row gap-lg-2 leftAboutSubtitle pr-sm-0">
                                <div className="px-0">
                                    Coco Fortune
                                </div>
                                <div className="px-0">
                                    /'kōkō fôrCHən/
                                </div>
                                <div className="px-0 justifyText">
                                    Coco Fortune is an Indonesian company engaged in the export of various variants of coconut products.
                                    One of our main product is coconut charcoal briquette for Shisha.
                                    We keep to build and develop networks with farmers in every coconut plantation that we manage, especially in West Borneo.
                                    In addition, we also have partners with many other coconut farmers from East Java.
                                    And we always make sure that our products availability and the best quality.
                                </div>
                                <div className="px-0 justifyText">
                                    Our Motto is "If our customers’ happy, we must be happy".
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 px-4 py-2 py-sm-4">
                            <div className="row justify-content-center">
                                <div className="mb-4">
                                    <div className="row rightAboutTitle mb-lg-2 mb-sm-1">
                                        Our Vision
                                    </div>
                                    <div className="row rightAboutSubtitle justifyText">
                                        become one of the best Indonesian coconut exporter in the world.                   
                                    </div>
                                </div>

                                <div className="pb-sm-2">
                                    <div className="row rightAboutTitle mb-lg-2 mb-sm-1">
                                        Our Mission
                                    </div>
                                    <div className="row rightAboutSubtitle justifyText">
                                        1. Provide the best and responsive service experience  
                                    </div>
                                    <div className="row rightAboutSubtitle justifyText">
                                        2. Keep the quality of the products provided     
                                    </div>
                                    <div className="row rightAboutSubtitle justifyText">
                                        3. Build business relationships with commitment and trust oriented           
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}