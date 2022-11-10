import React from 'react';

const ReviewCard = ({ review }) => {

    console.log(review);

    const { customer, reviewText } = review;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{customer}</h2>
                <p>{reviewText}</p>
            </div>
        </div>
    );
};

export default ReviewCard;