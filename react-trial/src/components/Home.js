import React from 'react';
import '../styles.scss'
import '../styles/LandingPage.scss'

export default class Home extends React.Component {
    render() {
        return (
            <div id="HomeApp">
                <div className="container">
                    <div className="row whiteColorHome">
                        <div className="col-sm-8 px-4 py-2 py-sm-4">
                            <div className="row leftHomeTitle">
                                Provides The Best Coconut Products From Indonesia To World Wide
                            </div>
                            {/* <div className="row leftHomeSubtitle justifyText">
                                co·co·nut
                                <br></br>
                                /ˈkōkəˌnət/
                                <br></br>
                                the large, oval, brown seed of a tropical palm, consisting of a hard shell lined with edible white flesh and containing a clear liquid. It grows inside a woody husk, surrounded by fiber.
                            </div> */}
                        </div>

                        {/* <div className="col-sm-6 px-4 py-2 py-sm-4">
                            <div className="row rightHomeTitle">
                                LOREM IPSUM
                            </div>
                            <div className="row rightHomeSubtitle justifyText">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}