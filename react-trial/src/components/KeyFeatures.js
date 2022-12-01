import React from 'react';
import '../styles.scss'
import '../styles/LandingPage.scss'

export default class KeyFeatures extends React.Component {
    render() {
        return (
            <div id="KeyFeaturesApp" className="grayColorKeyFeatures">
                <div className="container">
                    <div className="col pb-3">
                        <div className="col px-4 py-2 py-sm-4">
                            <div className="row-auto leftKeyFeaturesTitle">
                                Our Key Value (F-I-N-E)
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 px-4 py-2 py-sm-4">
                                <div className="row">
                                    <div className="row justify-content-center">
                                        <div className="col-auto leftKeyFeaturesSubtitle1">
                                            F 
                                        </div>
                                        <div className="col-auto align-self-center leftKeyFeaturesSubtitle2">
                                            Focus
                                        </div>
                                    </div>
                                    <div className="row-auto text-center leftKeyFeaturesSubtitle3">
                                        Focus on Customer. Customer is our top priority.
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 px-4 py-2 py-sm-4">
                                <div className="row">
                                    <div className="row justify-content-center">
                                        <div className="col-auto leftKeyFeaturesSubtitle1">
                                            I
                                        </div>
                                        <div className="col-auto align-self-center leftKeyFeaturesSubtitle2">
                                            Integrity
                                        </div>
                                    </div>
                                    <div className="row-auto text-center leftKeyFeaturesSubtitle3">
                                        The foundation and culture of our work. We are honest, transparent & commited to do the best for our customers.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 px-4 py-2 py-sm-4">
                                <div className="row">
                                    <div className="row justify-content-center">
                                        <div className="col-auto leftKeyFeaturesSubtitle1">
                                            N
                                        </div>
                                        <div className="col-auto align-self-center leftKeyFeaturesSubtitle2">
                                            Nature / Nimble
                                        </div>
                                    </div>
                                    <div className="row-auto text-center leftKeyFeaturesSubtitle3">
                                        Everything must be friendly to nature / Our team is committed to respond as soon as possible.
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 px-4 py-2 py-sm-4">
                                <div className="row">
                                    <div className="row justify-content-center">
                                        <div className="col-auto leftKeyFeaturesSubtitle1">
                                            E
                                        </div>
                                        <div className="col-auto align-self-center leftKeyFeaturesSubtitle2">
                                            Excellence
                                        </div>
                                    </div>
                                    <div className="row-auto text-center leftKeyFeaturesSubtitle3">
                                        The quality of being outstanding or extremely good. Strive to excellence.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-sm-6 px-4 py-2 py-sm-4">
                            <div className="row rightKeyFeaturesTitle">
                                LOREM IPSUM
                            </div>
                            <div className="row rightKeyFeaturesSubtitle justifyText">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="row">
                        <div className="col-sm-6 px-4 py-2 py-sm-4">
                            <div className="row leftKeyFeaturesTitle">
                                COCONUT
                            </div>
                            <div className="row leftKeyFeaturesSubtitle">
                                <div className="row">
                                    co·co·nut
                                </div>
                                <div className="row">
                                    /ˈkōkəˌnət/
                                </div>
                                <div className="row justifyText">
                                    the large, oval, brown seed of a tropical palm, consisting of a hard shell lined with edible white flesh and containing a clear liquid. It grows inside a woody husk, surrounded by fiber.
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 px-4 py-2 py-sm-4">
                            <div className="row rightKeyFeaturesTitle">
                                LOREM IPSUM
                            </div>
                            <div className="row rightKeyFeaturesSubtitle justifyText">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}