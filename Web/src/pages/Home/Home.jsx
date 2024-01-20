import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Model from "../../Components/AppModel/Model";
import Benefit from "../../Components/Benefits/Benefit";
import { product_data, social_share } from "../../data";
import Product from "../../Components/ProductCard/Product";
import pic1 from "./scan.png";
import BinIcon from "./bin.gif";
import pic2 from "../../Assets/Home_images/app1.jpg";
import PlantIcon from "../../Assets/Home_images/plant.gif";
import labelIcon from "../../Assets/Home_images/label.gif";
import FactoryIcon from "../../Assets/Home_images/factory.gif";
import PollutionIcon from "../../Assets/Home_images/pollution.gif";
import EcoIcon from "../../Assets/Home_images/eco.gif";
import Social from "../../Components/Social/Social";
// import { social_share } from "../../data";
import StoreBuild from '../../Assets/Home_images/store_image.jpg'

const model_data = [
  {
    name1: "Go Green with Smart Choices",
    name2: "EcoScan",
    description1:
      "Navigating Eco-Friendly Living Through Innovative Technology",
    description2: " Your Lens to a Greener World - Choose, Consume, Conserve",
    image1: pic2,
    image2: "image url2",
  },
];

const benefit_data = [
  {
    description: "Responsible Consumption",
    description2: "Environmentally Conscious Choices",
    description3: "Encouraging Sustainable Production",
    Icon20: BinIcon,
    Icon21: EcoIcon,
    Icon22: FactoryIcon,
  },
  {
    description: "Reducing Carbon Footprint",
    description2: "Promoting Eco-friendly Brands",
    description3: "Implementing Energy-efficient Practices",
    Icon20: PollutionIcon,
    Icon21: labelIcon,
    Icon22: PlantIcon,
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <Head1 />
      <Appmodel />
      <ProductCard />
      <Banner1 />
      <Benefits />
      <Banner2 />
      <SocialCard />
      <FeedBack />
      <Footer />
    </div>
  );
};

const Head1 = () => {
  return (
    <div className="flex flex-wrap justify-center align-middle place-content-center h-lvh bg-[#d1f076] text-3xl  ">
      <div className="">
        <img src={pic1} alt="image here " className="" />
      </div>
    </div>
  );
};

const Appmodel = () => {
  return (
    <div>
      <div>
        <div className="flex flex-wrap justify-center place-content-center m-5 rounded-xl ">
          {model_data.map((wall) => {
            return (
              <Model
                name1={wall.name1}
                name2={wall.name2}
                description1={wall.description1}
                description2={wall.description2}
                image1={wall.image1}
                image2={wall.image2}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Banner1 = () => {
  return (
    <div className="bg-violet-900 text-white py-5 text-center">
      <div className="container mx-auto">
        <h1 className="font-rubik text-4xl font-bold">
          Reduce Your Carbon Footprint 🐾
        </h1>
      </div>
    </div>
  );
};

const Banner2 = () => {
  return (
    <div className="bg-violet-900 text-white py-5 text-center">
      <div className="container mx-auto">
        <h1 className="font-rubik text-4xl font-bold">
          Share Your Eco-Friendly Discoveries !
        </h1>
      </div>
    </div>
  );
};


const FeedBack = () => {
  return (
    <div className="bg-violet-900 text-white py-5 text-center">
      <div className="flex gap-5 place-content-center container mx-auto">
        <h1 className="font-rubik text-4xl font-bold">
          Don't leave us ? Give us your valuable feedback
        </h1>
        <button
          type="button"
          className="bg-lime-500 p-2 rounded-3xl text-blue-700 font-serif"
        >
          feedback
        </button>
      </div>
    </div>
  );
};



const Benefits = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap justify-center place-content-center m-5 ">
        <div className="flex justify-center text-3xl ">OUR GOALS </div>

        <div className="flex flex-wrap m-3 gap-10">
          {benefit_data.map((pop) => {
            return (
              <Benefit
                description={pop.description}
                description2={pop.description2}
                description3={pop.description3}
                Icon20={pop.Icon20}
                Icon21={pop.Icon21}
                Icon22={pop.Icon22}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-4xl text-center font-bold mb-8 text-green-600">
        Explore Our Products
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {product_data.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};



const SocialCard = () => {
  return (
    <div>
      {/* <div>hello </div> */}
      {
        social_share.map((soc) => {
          return (
            <Social
              key={soc.id}
              text={soc.text}
              image={soc.image}
              text2={soc.text2}
              image2={soc.image2}
            />
          )
        })
      }
    </div>
  )
}


export default Home;
