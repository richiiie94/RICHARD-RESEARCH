import React from 'react';
import '../styles.scss'
import '../styles/LandingPage.scss'

export default class CompanyProfile extends React.Component {
    openWindow = (linkpage) => {
        window.open(linkpage, '_blank');
    }

    render() {
        return (
            <div id="CompanyProfileApp">
                <div className="container-fluid grayColorCompanyProfile">
                    <div className="container-fluid row py-5">
                        <div className="col-sm-6 col-lg-3 px-4 py-2 py-sm-4">
                            <div className="row mb-2 leftCompanyProfileTitle">
                                COCONUT COMMODITIES
                            </div>
                            <div className="row leftCompanyProfileSubtitle lh-lg">
                                We provide the best coconut commodities into some products from Indonesia.
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 px-4 py-4 py-sm-4">
                            <div className="row mb-2 leftCompanyProfileTitle">
                                CONTACT US
                            </div>
                            <div className="row">
                                <div id={`link-fb-compro`} class="link-fb py-1" onClick={() => this.openWindow('https://www.facebook.com')}>
                                    <i class="bi bi-facebook"></i> Facebook
                                </div>
                                <div id={`link-ig-compro`} class="link-ig py-1" onClick={() => this.openWindow('https://www.instagram.com')}>
                                    <i class="bi bi-instagram"></i> Instagram
                                </div>
                                <div id={`link-li-compro`} class="link-li py-1" onClick={() => this.openWindow('https://www.linkedin.com')}>
                                    <i class="bi bi-linkedin"></i> LinkedIn
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row px-4 py-2">
                        <div className="col px-4 py-2 text-center border-top">
                            © Coco Commos. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}