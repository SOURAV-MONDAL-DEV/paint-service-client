import React from 'react';

const Intro = () => {
    return (
        <div className='grid md:grid-cols-2 m-5 md:m-20 bg-slate-400'>
            <div className='m-10 md:m-2 lg:m-10 '>
                <h1 className='text-5xl md:text-4xl lg:text-6xl font-bold text-lime-300 '>Love For The Painting?</h1>
                <h2 className='text-3xl lg:text-4xl my-5 font-bold text-yellow-500'>Let me Create your favorite painting.</h2>
                <p className='text-xl lg:text-2xl  my-5 text-gray-600 '>You can order for your favorite painting from Here<br/>
                    Also you can check my valuable customer review from service details.  
                </p>
            </div>
            <div className='mx-auto'>
                <img src="https://i.ibb.co/VCdjmq8/painter.png" alt="painter" border="0" />
            </div>
        </div>
    );
};

export default Intro;