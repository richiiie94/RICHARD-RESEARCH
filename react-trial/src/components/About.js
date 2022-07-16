import React from 'react';
import '../styles.scss'
import '../styles/LandingPage.scss'

export default class About extends React.Component {
    render() {
        return (
            <div id="AboutDesktopApp">
                <div className="container">
                    <div className="row whiteColorAbout">
                        <div className="col-sm-6 px-4 py-2 py-sm-4">
                            <div className="row leftAboutTitle">
                                About Us
                            </div>
                            <div className="row leftAboutSubtitle">
                                <div className="px-0">
                                    Coco Fortunes
                                </div>
                                <div className="px-0">
                                    /ˈkōkəˌkəˈmäˈz/
                                </div>
                                <div className="px-0 justifyText">
                                    is a company which focuses on processed products from Indonesian coconut with the best quality.
                                </div>
                                <div className="px-0 justifyText">
                                    Our Motto is "If our customers’ happy, we must be happy".
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 px-4 py-2 py-sm-4">
                            <div className="row rightAboutTitle">
                                LOREM IPSUM
                            </div>
                            <div className="row rightAboutSubtitle justifyText">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}