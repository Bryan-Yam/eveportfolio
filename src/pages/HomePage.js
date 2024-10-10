import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import defaultimage from "../assests/image-icon-600nw-211642900.webp";
import { Link } from "react-router-dom";
import fencingimg from "../assests/OFAChampionships_617.jpg";
import speakingimg from "../assests/rbcolympians.jpg";
import modellingimg from "../assests/EZ111N8736.JPG";

const HomePage = () => {
  return (
    <div className="bg-background_purple">
      <Header
        primaryColorClass="text-primary_green"
        secondaryColorClass="text-primary_purple"
        backgroundColorClass="bg-background_purple"
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 lg:gap-2 px-10 md:px-16 lg:px-24 justify-items-center py-16">
        <div>
          <Link to="/fencing" className="hover:bg-opacity-35">
            <img src={fencingimg} alt="/" className="w-full" />
          </Link>
          <h2 className="w-full py-4 text-4xl font-cormorant">Fencing</h2>
        </div>
        <div>
          <Link to="/speaking" className="hover:bg-opacity-35">
            <img src={speakingimg} alt="/" className="w-full" />
          </Link>
          <h2 className="w-full py-4 text-4xl font-cormorant">Speaking</h2>
        </div>
        <div>
          <Link to="/modelling" className="hover:bg-opacity-35">
            <img src={modellingimg} alt="/" className="w-full" />
          </Link>
          <h2 className="w-full py-4 text-4xl font-cormorant">Modelling</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
