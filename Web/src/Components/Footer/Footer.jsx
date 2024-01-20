import React from "react";
import Preview from '../../Assets/Home_images/preview.jpg'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-around bg-black text-green-500 p-5  ">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1256.2071512290727!2d77.49623165257753!3d28.753452309975284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1705465144464!5m2!1sen!2sin"
            width="400 "
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map_office"
            className=" "
          >
            map
          </iframe>
        </div>
        <div className="flex gap-10">
          <img src={Preview} alt="preview" className="w-96 h-96" />
          <div className="m-5 ">
            <div>Get your App Now</div>
            <button type="button" className="bg-green-900 p-2 rounded-full">
              Download now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
