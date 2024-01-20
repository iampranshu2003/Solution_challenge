import React from "react";

const Model = ({
  name1,
  name2,
  description1,
  description2,
  description3,
  image1,
  image2,
}) => {
  return (
    <div>
      <div className="flex flex-wrap place-content-center justify-center  ">
        <div className="flex flex-col lg:flex-row h-full w-full m-5 rounded-xl border-2 p-10 bg-green-50">
          <section className="lg:flex-grow">
            <h1 className="text-3xl font-bold mb-2 text-green-800">{name1}</h1>
            <h2 className="text-xl font-semibold italic mb-4 text-green-600">
              {description1}
            </h2>
            <div className="flex flex-col gap-4 p-5 font-semibold text-green-800">
              <div>1. Download and install the "Green Scan" app.</div>
              <div>2. Open the app. </div>
              <div>3. Use your device's camera to scan the product.</div>
              <div>4. Wait for the app to analyze. </div>
              <div>5. Receive results on eco-friendliness.</div>
              <div>6. Interpret results (Green, Yellow, Red).</div>
              <div>7. Explore alternative eco-friendly options. </div>
              <div>8. Save scans for future reference. </div>
              <div>9. Share your eco-friendly discoveries.</div>
            </div>
          </section>

          <section className="lg:w-1/2">
            <img
              src={image1}
              alt="Product Image"
              className="object-cover w-full h-full rounded-lg lg:rounded-l-none lg:rounded-r-lg"
            />
          </section>
        </div>

        
        </div>
      </div>
  );
};

export default Model;
