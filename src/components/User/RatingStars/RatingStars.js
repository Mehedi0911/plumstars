import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const RatingStars = () => {
    const [value, setValue] = React.useState(2);
    return (
    <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography className="mb-2 pt-3" component="legend">Your Rating</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(newValue);
                }}
            /></Box>
    </div>

    );
};

export default RatingStars;