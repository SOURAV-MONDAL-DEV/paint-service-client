import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])




    return (
        <div>
            <div className='mb-10'>
                <h1 className='text-3xl font-bold text-center mb-5'>Some of my services</h1>
                <p className='text-xl font-semibold text-center'>There are some of my services are showing. You can see all of my services by tapping SEE ALL button</p>
            </div>
            <div className=' lg:mx-20 grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <button>see all</button>
                </div>
            </div>

        </div>
    );
};

export default Services;