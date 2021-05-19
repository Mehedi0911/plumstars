import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { UserContext } from '../../../App';
import PanelHeader from '../../Admin/PanelHeader/PanelHeader';
const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault();
        data.rating = rateValue;
        const reviewData = {
            userImg: loggedInUser.photoURL,
            userName: loggedInUser.displayName,
            rating: data.rating,
            comment: data.comment,
            reviewBody: data.reviewBody
        }
        //sending data to database.....
        fetch('https://arcane-reef-18482.herokuapp.com/postReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                console.log('Server side response', res);
            })

        e.target.reset();
    }
    const [rateValue, setRateValue] = useState(2);
    return (
        <section className="container p-5">
            <PanelHeader header={"Review Our Service"}></PanelHeader>
            <div className="row">
                <div className="col-md-8">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>


                            <div>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Typography className="mb-2 pt-3" component="legend">Your Rating</Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={rateValue}
                                        onChange={(event, newValue) => {
                                            setRateValue(newValue);
                                            console.log(newValue);
                                        }}
                                    />
                                </Box>
                            </div>

                        </div>
                        <div>
                            <select class="form-control mt-3" name="comment" placeholder="select service time" {...register("comment")} required >
                                <option>Service as Described - Highly Recommended</option>
                                <option>Fair Service</option>
                                <option>Just Ok</option>
                                <option>Poor Service - Not Recommended</option>
                                <option>Bad Experience</option>
                            </select>
                        </div>
                        <textarea name="reviewBody" class="form-control  mb-3 mt-3" rows="3" placeholder="Your Comments" {...register("reviewBody")} required></textarea>
                        <input className="brand-btn-secondary" type="submit" value="Review" />
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Review;