import React from "react";
import Future3 from './Imglar/Future3.svg'

import Future2 from './Imglar/Future2.svg'
import Future8 from './Imglar/Corusel2.svg'
import Future1 from './Imglar/Rooms2.svg'
import Future4 from './Imglar/Rooms1.svg'

import Future5 from './Imglar/Future5.svg'
import Future6 from './Imglar/Future6.svg'
import Future7 from './Imglar/Product5.svg'


const Future = () => {

  return (
    <div className="w-[1400px] mx-auto px-4 py-10">
      {/* Title */}
      <h2 className="text-center text-[#616161] py-2 md:text-xl font-semibold mb-6">
        Share your setup with <br />
        <span className="text-gray-900 text-4xl font-bold">#FuniroFurniture</span>
      </h2>

        <div className="grid grid-cols-4 gap-4 relative py-10">
            <img src={Future4} alt="rasm" />
            <img src={Future2} alt="rasm" />
            <img src={Future3} alt="rasm" />
            <img src={Future4} alt="rasm" className="absolute h-[490px] right-[20px] top-[40px]" />
            <img src={Future5} alt="rasm" className="absolute w-[327px] top-[287px] left-[350px]" />
            <img src={Future6} alt="rasm" className="absolute -bottom-[208px] w-[330px]" />
            <img src={Future7} alt="rasm" className="absolute -bottom-[200px] left-[700px]"/>
            <img src={Future8} alt="rasm" className="w-[340px] absolute right-[20px] -bottom-[210px]" />.
        </div>

    </div>
  );
};

export default Future;
