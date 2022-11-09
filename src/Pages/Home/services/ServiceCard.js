import React from 'react';

const ServiceCard = ({service}) => {

    const  {image, Price, name, description} = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-fuchsia-600 font-bold">{name}</h2>
                <textarea maxlength="50">{description}</textarea>
                <div className="card-actions justify-end">
                    <p className='font-bold text-xl'>price: <span className='text-pink-600'>${Price}</span></p>
                    <button className="py-2 rounded-lg text-white px-3 bg-green-500">View Details</button>
                </div>
            </div>
            <image src={image}></image>
        </div>
    );
};

export default ServiceCard;