import React, { useState } from 'react';
import './Quote.css'
import emailjs from 'emailjs-com';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Quote = ({id}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_gmail', 'plumbstars-customQuote', e.target, 'user_YkG7RU6RPjqI9ELTlnD7y')
          .then((result) => {
              console.log(result.text);
              handleClickOpen();
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
        <section className="custom-quote pb-5" id={id}>
            
            <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="brand-text" id="alert-dialog-title">{"Your Request Has Been Submitted Successfully"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We'll Go through Your message and Get back to you soon. Please Check you email for details.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
            
            <div className="container w-75">

                <div className="row pt-5">
                    <div className="col-md-6 quote-content pt-5">
                        <h4 className="text-white">Have a Different Work then our packages?</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure amet, eum ea nam sed harum.</p>
                        <h5 style={{color:'#F5822A'}}>Get a Custom Quote NOW</h5>
                    </div>
                    <div className="col-md-6 quote-content pt-5">
                        <form onSubmit={sendEmail}>
                            <div className="d-flex">
                            <input name="name" type="text" className="form-control mr-2 mb-3"  placeholder="Your Name" required/>
                            <input name="email" type="email" className="form-control mb-3"  placeholder="Your Email" required/>
                            </div>
                            <input name="subject" type="text" className="form-control mb-3"  placeholder="Subject" required/>
                            <textarea name="message" class="form-control mb-3" placeholder="your message" rows="3" required></textarea>
                            <input type="submit" value="Send" className="brand-btn-primary send-btn w-75 mr-0"/>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Quote;