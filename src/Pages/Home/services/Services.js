import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])




    return (
        <div>
            <div className='mb-10'>
                <h1 className='text-3xl font-bold text-center mb-5'>Some of my services</h1>
                <p className='text-xl font-semibold text-center'>There are some of my services are showing. You can see all of my services by tapping SEE ALL button</p>
            </div>
            <div className=' lg:mx-20 grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto my-10'>
                {
                    services.slice(0, 3).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
                <div className=" w-96 bg-base-100 shadow-xl flex items-center justify-center mx-auto">
                    <Link to='/services'>
                        <button className='btn rounded-lg bg-fuchsia-600 text-white border-0 px-10 text-lg'>see all  🡢</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Services;