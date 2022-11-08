import React from 'react';

const Intro = () => {
    return (
        <div className='grid md:grid-cols-2 m-10'>
            <div className='m-10'>
                <h1 className='text-6xl font-bold text-fuchsia-600'>Love For The Painting?</h1>
                <h2 className='text-4xl my-5 text-teal-600 '>Let me Create your favourite painting.</h2>
            </div>
            <div>
                <img src="https://i.ibb.co/VCdjmq8/painter.png" alt="painter" border="0" />
            </div>
        </div>
    );
};

export default Intro;