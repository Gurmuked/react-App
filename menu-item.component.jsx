import React from 'react';
import '../index.css';



const MenuItem = (props) => (
    <div className="menu-item  w-full h-60 bg-red-950 relative mx-5 my-10">
    <div className="text-center items-center bg-opacity-50 bg-white absolute top-20 left-40">
      <h2 className="contents text-black">{props.title}</h2>
      <h3 className="button text-black">Shop Now</h3>
    </div> 
  </div> 
);


export default MenuItem;