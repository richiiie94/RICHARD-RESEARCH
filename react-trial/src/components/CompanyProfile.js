import React from 'react';
import '../styles.scss'
import '../styles/LandingPage.scss'

export default class CompanyProfile extends React.Component {
    render() {
        return (
            <div id="CompanyProfileApp">
                <div className="container-fluid grayColorCompanyProfile">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 px-4 py-2 py-sm-4">
                            <div className="row leftCompanyProfileTitle">
                                COCONUT COMMODITIES
                            </div>
                            <div className="row leftCompanyProfileSubtitle">
                                We provide the best coconut commodities into some products from Indonesia.
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 px-4 py-2 py-sm-4">
                            <div className="row leftCompanyProfileTitle">
                                CONTACT US
                            </div>
                            <div className="row leftCompanyProfileSubtitle">
                                {/* <div onClick={href='https://www.facebook.com/'} style="cursor: pointer;">
                                    Facebook
                                </div> */}
                            </div>
                            <div className="row leftCompanyProfileSubtitle">
                                <svg class="bi bi-instagram" width="20" height="20"></svg>
                            </div>
                            <div className="row leftCompanyProfileSubtitle">
                                <svg class="bi bi-linkedin" width="20" height="20"></svg>
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