import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="container w-75 pt-5 pb-5">
                <div className="row">
                    <div className="col-md-3 mb-5">
                        <h5 className="text-white"><span className="brand-text">plumb</span>Stars</h5>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus consectetur.</p>
                        <div className="social d-flex justify-content-between w-75">
                            <div className="p-2 bg-white d-flex align-items-center justify-content-center mr-2"><FontAwesomeIcon className="brand-text" icon={faFacebook} /></div>
                            <div className="p-2 bg-white d-flex align-items-center justify-content-center mr-2"><FontAwesomeIcon className="brand-text" icon={faInstagram} /></div>
                            <div className="p-2 bg-white d-flex align-items-center justify-content-center mr-2"><FontAwesomeIcon className="brand-text" icon={faTwitter} /></div>
                            <div className="p-2 bg-white d-flex align-items-center justify-content-center mr-2"><FontAwesomeIcon className="brand-text" icon={faLinkedin} /></div>

                        </div>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h5 className="text-white">Top Services</h5>
                        <hr />
                        <ul>
                            <li className="text-white">Heater Repair</li>
                            <li className="text-white">Heater Repair</li>
                            <li className="text-white">Heater Repair</li>
                            <li className="text-white">Heater Repair</li>
                            <li className="text-white">Heater Repair</li>
                            <li className="text-white">Heater Repair</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h5 className="text-white">Recent Blogs</h5>
                        <hr />
                        <div className="mb-2">
                            <p className="text-white mb-0">Lorem ipsum dolor sit amet.</p>
                            <small className="text-white">{new Date().toDateString()}</small>
                        </div>
                        <div className="mb-2">
                            <p className="text-white mb-0">Lorem ipsum dolor sit amet.</p>
                            <small className="text-white">{new Date().toDateString()}</small>
                        </div>
                        <div className="mb-2">
                            <p className="text-white mb-0">Lorem ipsum dolor sit amet.</p>
                            <small className="text-white">{new Date().toDateString()}</small>
                        </div>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h5 className="text-white">Find Us</h5>
                        <hr />
                        <div className="d-flex">
                            <div>
                                <FontAwesomeIcon className="brand-text mr-2" icon={faMapMarkerAlt} />
                            </div>
                            <div>
                                <p className="text-white">1598  Charla Lane,<br />Dallas, Texas-75247</p>
                            </div>

                        </div>
                        <div className="d-flex">
                            <div>
                                <FontAwesomeIcon className="brand-text mr-2" icon={faPhoneSquareAlt} />
                            </div>
                            <div>
                                <p className="text-white">972-739-0686</p>
                            </div>

                        </div>
                        <div className="d-flex">
                            <div>
                                <FontAwesomeIcon className="brand-text mr-2" icon={faEnvelope} />
                            </div>
                            <div>
                                <p className="text-white">info@plumbstars.com</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="text-center mt-3 bg-secondary pb-2">
                    <small className="text-white">copyright reserved @plumbstars</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;