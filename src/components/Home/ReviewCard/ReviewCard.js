import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const ReviewCard = (props) => {
    const { userImg, userName, rating, comment, reviewBody } = props.review;

    const filledStar = [];
    const blankStar = [];
    for (var i = 0; i < rating; i++) {
        const element = i;
        filledStar.push(element);
    }
    for (var i = 0; i < 5-rating; i++) {
        const element = i;
        blankStar.push(element);
    }
    console.log(filledStar,blankStar);
    return (
        <div>
            <div className="p-5">

                <img className="mb-3" style={{ height: '75px', borderRadius: '50%' }} src={userImg} alt="" />
               <div className="mb-3">
               {
                    filledStar.map(a => <FontAwesomeIcon style={{color:'tomato'}} icon={faStar}/>)
                }
                {
                    blankStar.map(a =><FontAwesomeIcon style={{color:'gray'}} icon={faStar}/>)
                }
               </div>
                <h5 className="brand-text">{userName}</h5>
                <p>{comment}</p>
                <p>{reviewBody}</p>
            </div>
        </div>
    );
};

export default ReviewCard;