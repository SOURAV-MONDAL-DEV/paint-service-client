import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AurhProvider/AuthProvider';
import ReviewCard from '../ServiceDetails/ReviewCard/ReviewCard';

const MyReview = () => {


    const { user } = useContext(AuthContext);
    
    const [reviews, setReviews] = useState([]);
    

    const url = `http://localhost:5000/reviews?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [] )

console.log(user);
console.log(reviews);

    return (
        <div  className=' lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg::grid-cols-3 gap-10 mx-auto my-10'>
                {
                    reviews.map(review => 
                        
                        <ReviewCard
                        key={review._id}
                        review={review}
                        >

                        </ReviewCard>
                    )
                }
                </div>
    );
};

export default MyReview;