import React from 'react';
import '../styles.scss'
import '../styles/LandingPage.scss'

export default class CompanyProfile extends React.Component {
    openWindow = (link_page) => {
        window.open(link_page, '_blank');
    }

    render() {
        return (
            <div id="CompanyProfileApp">
                <div className="container-fluid grayColorCompanyProfile">
                    <div className="container-fluid row gap-lg-4 py-4">
                        <div className="col-sm-6 col-lg-4 px-4 py-2 py-sm-4">
                            <div className="row mb-2 leftCompanyProfileTitle"> 
                                Coco Fortune
                            </div>
                            <div className="row leftCompanyProfileSubtitle lh-lg">
                                We provide the best coconut commodities into some products from Indonesia.
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2 px-4 py-4 py-sm-4">
                            <div className="row mb-2 leftCompanyProfileTitle">
                                FOLLOW US
                            </div>
                            <div className="row g-2 leftCompanyProfileSubTitle">
                                <div id={`link-fb-compro`} className="link-fb" onClick={() => this.openWindow('https://www.facebook.com')}>
                                    <i className="bi bi-facebook"></i> Facebook
                                </div>
                                <div id={`link-ig-compro`} className="link-ig" onClick={() => this.openWindow('https://www.instagram.com')}>
                                    <i className="bi bi-instagram"></i> Instagram
                                </div>
                                <div id={`link-li-compro`} className="link-li" onClick={() => this.openWindow('mailto:test@example.com')}>
                                    <i className="bi bi-envelope"></i> E-mail
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row px-4 py-2">
                        <div className="col px-4 py-2 text-center border-top footer-rights">
                            © Coco Fortune. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}