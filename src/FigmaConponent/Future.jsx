import React from "react";
import Future1 from './Imglar/Future1.png'
import Future2 from './Imglar/Future2.png'
import Future3 from './Imglar/Future3.png'
import Future4 from './Imglar/Future4.png'
import Future5 from './Imglar/Future5.png'
import Future6 from './Imglar/Future6.png'
import Future7 from './Imglar/Future7.png'
import Future8 from './Imglar/Future8.png'

const Future = () => {

  return (
    <div id="future" className="max-w-[1400px] w-full mx-auto px-4 lg:mt-12">
      {/* Title */}
      <h2 className="text-center text-[#616161] py-2 md:text-xl font-semibold mb-6">
        Share your setup with <br />
        <span className="text-gray-900 text-4xl font-bold">#FuniroFurniture</span>
      </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <img src={Future1} alt="rasm"  className="h-[400px] mx-auto w-[285px] lg:w-[327px] " />
            <img src={Future2} alt="rasm" className="h-[400px] mx-auto w-[285px] lg:w-[327px] "  />
            <img src={Future3} alt="rasm"  className="h-[400px] mx-auto w-[285px] lg:w-[327px] " />
            <img src={Future4} alt="rasm" className=" h-[400px] mx-auto w-[285px] lg:w-[327px] " />
            <img src={Future5} alt="rasm" className=" h-[400px] mx-auto w-[285px] lg:w-[327px] " />
            <img src={Future6} alt="rasm" className=" h-[400px] mx-auto w-[285px] lg:w-[327px] " />
            <img src={Future7} alt="rasm" className=" h-[400px] mx-auto w-[285px] lg:w-[327px] "/>
            <img src={Future8} alt="rasm" className="h-[400px] mx-auto w-[285px] lg:w-[327px] " />.
        </div>

    </div>
  );
};

export default Future;
