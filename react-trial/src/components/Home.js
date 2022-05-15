import React from 'react';
import '../styles.scss'
import '../styles/LandingPage.scss'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row whiteColor">
                        <div className="col">
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

                        <div className="col">
                            <div className="row text-end rightHomeTitle">
                                LOREM IPSUM
                            </div>
                            <div className="row text-end rightHomeSubtitle justifyText">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;