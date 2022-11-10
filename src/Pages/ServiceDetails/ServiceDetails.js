import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AurhProvider/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';

const ServiceDetails = () => {
    
    
    const { _id, image, Price, name, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    
    const [reviews, setReviews] = useState([]);

    const url = `http://localhost:5000/reviews?service=${_id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.Name.value;
        const email = user?.email || 'unregistered';
        const reviewText = form.message.value;


        const review = {
            service: _id,
            serviceName: name,
            customer: userName,
            email,
            reviewText
        }


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }


    return (
        <div className='mx-5 md:mx-10'>
            <div>
                <img className='rounded-lg' src={image} alt=''></img>
                <h1 className='text-center text-lime-500 font-bold text-4xl m-12'>{name}</h1>
                <div className='md:flex '>
                    <div className='flex-auto md:w-64 border-2 bg-gray-200 rounded-lg'>
                        <h3 className='bg-gray-600 p-10 text-2xl text-white text-center font-bold rounded-t-lg'>About This Painting</h3>
                        <p className='p-10 text-lg font-semibold '>{description}</p>
                    </div>
                    <div className='flex-auto md:w-64 md:p-20'>
                        <div className='card w-96 bg-base-100 shadow-xl mx-auto md:max-w-xs p-3'>
                            <h1 className='text-xl font-bold my-8 '>price :  <span className='text-fuchsia-600'>${Price}</span></h1>
                            <h1 className='text-xl font-semi-bold my-3 '>Time Required : <span className='font-bold text-gray-600'>3 Days</span></h1>
                            <h1 className='text-xl font-semi-bold my-3 '>Frame Size : <span className='font-bold text-gray-600'>36 X 24 "</span></h1>
                            <h1 className='text-xl font-semi-bold my-3 '>Additional Requirement : <span className='font-bold text-gray-600'>Require</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-center text-dark-500 font-bold text-2xl m-8'>Reviews and Comments</h3>


                <div  className=' lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg::grid-cols-3 gap-10 mx-auto my-10'>
                {
                    reviews.map(review => 
                        <ReviewCard
                        key={review._id}
                        review={review}
                        ></ReviewCard>
                    )
                }
                </div>



                {
                    user?.uid ?
                        <>
                            <form onSubmit={handlePlaceReview}>
                                <h2 className="text-2xl">Write reviews on: {name}</h2>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                                    <input name="Name" type="text" placeholder="Write Your Name" className="input input-ghost w-full  input-bordered" required />
                                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                                </div>
                                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>

                                <input className='btn ' type="submit" value="Post Review" />
                            </form>
                        </>
                        :
                        <>
                            <p className='text-center text-dark-500 font-bold text-2xl m-8'>Please Login first for write your review</p>
                        </>
                }





            </div>
        </div>
    );
};

export default ServiceDetails;