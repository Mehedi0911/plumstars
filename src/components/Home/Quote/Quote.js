import React from 'react';
import './Quote.css'
const Quote = ({id}) => {
    return (
        <section className="custom-quote pb-5" id={id}>
            <div className="container w-75">

                <div className="row pt-5">
                    <div className="col-md-6 quote-content pt-5">
                        <h4 className="text-white">Have a Different Work then our packages?</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure amet, eum ea nam sed harum.</p>
                        <h5 className="brand-text">Get a Custom Quote NOW</h5>
                    </div>
                    <div className="col-md-6 quote-content pt-5">
                        <form>
                            <div className="d-flex">
                            <input type="text" className="form-control mr-2 mb-3"  placeholder="Your Name"/>
                            <input type="email" className="form-control mb-3"  placeholder="Your Email"/>
                            </div>
                            <input type="text" className="form-control mb-3"  placeholder="Subject"/>
                            <textarea class="form-control mb-3" placeholder="your message" rows="3"></textarea>
                            <input type="submit" value="Send" className="brand-btn-primary send-btn w-75 mr-0"/>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Quote;