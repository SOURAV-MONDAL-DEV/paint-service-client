import React from 'react';
import img1 from "../../../img/7399226.jpg";
import img2 from "../../../img/girl_dress_back_180944_3840x2160.jpg";
import img3 from "../../../img/spring_painting-wallpaper-1280x800.jpg";
import img4 from "../../../img/vincent_van_gogh_the_starry_night_oil_canvas_117815_1600x900.jpg";

const Banner = () => {


    return (
        <div>
            

            <div className="carousel w-3/4 mx-auto">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-full" alt="bn" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} className="w-full" alt="bn"  />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} className="w-full"  alt="bn" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img4} className="w-full"  alt="bn" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn  btn-primary btn-xs">1</a>
                <a href="#item2" className="btn  btn-primary btn-xs">2</a>
                <a href="#item3" className="btn  btn-primary btn-xs">3</a>
                <a href="#item4" className="btn  btn-primary btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;