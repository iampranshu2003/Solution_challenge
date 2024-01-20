import React from 'react'
import Logo from '../../Assets/Home_images/logo.jpg'


const Navbar = () => {
  return (
    <div className="flex justify-between p-5 bg-[#d1f076] font-bold align-middle ">
      <div className="flex ">
        <div className='flex align-middlen rounded-full overflow-hidden'>
          <img src={Logo} alt="Logo" className="w-12 h-12 " />
        </div>
        <div>Green scan</div>
      </div>
      <div className="flex gap-10 ">
        <button>Products</button>
        <button>Community</button>
        <button className="bg-green-800 p-2 text-white rounded-xl">
          ➕ List your product
        </button>
      </div>
    </div>
  ); 
}

export default Navbar