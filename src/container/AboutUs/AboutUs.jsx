import React from 'react';

import './AboutUs.css';

const AboutUs = () => (
  <div className='aboutus__header'>
    <div class="grid grid-rows-3 grid-flow-col gap-3">
      <div class="bg-black  row-span-3  h-screen w-full ...">01</div>
      <div class="bg-green-800 col-span-1  w-full row-span-1 ...">02</div>
      <div class="bg-emerald-800 row-span-1 w-full col-span-1 ...">03</div>
      <div class="bg-blue-800 row-span-1 w-full col-span-1 ...">04</div>
    </div>
  </div>
);

export default AboutUs;
