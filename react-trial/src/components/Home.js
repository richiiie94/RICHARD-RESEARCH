import React from 'react';
import '../styles.scss'
import '../styles/LandingPage.scss'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row whiteColor">
                        <div className="col text-start">
                            <div className="row leftHomeTitle">
                                COCONUT
                            </div>
                            <div className="row leftHomeSubtitle">
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

                        <div className="col text-end rightHomeTitle">
                            COCONUT
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;