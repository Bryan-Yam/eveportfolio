import React from "react";
import Header from "../components/Header";
import defaultimg from "../assests/image-icon-600nw-211642900.webp";
import headlineimg from "../assests/EZ111N9085.JPG"
import Footer from "../components/Footer";
import img01 from "../assests/EZ111N8651.JPG"
import img02 from "../assests/EZ111N8657.JPG"
import img03 from "../assests/EZ111N8736.JPG"
import img04 from "../assests/EZ111N8779.JPG"
import img05 from "../assests/EZ111N8788.JPG"
import img06 from "../assests/EZ111N8989_web.jpg"
import img07 from "../assests/EZ111N9085.JPG"
import img08 from "../assests/EZ111N9154.JPG"
import img09 from "../assests/EZ111N9161.JPG"
import img10 from "../assests/R6A_3658.jpg"
import img11 from "../assests/R6B_1982.jpg"
import img12 from "../assests/R6B_2002.jpg"
import img13 from "../assests/R6B_2033.jpg"
import img14 from "../assests/R6B_2389.jpg"
import img15 from "../assests/R6B_2422.jpg"
import img16 from "../assests/R6B_2541.jpg"
import img17 from "../assests/R6B_2586.jpg"
import img18 from "../assests/R6B_2609.jpg"
import img19 from "../assests/_DSC2012.jpg"
import img20 from "../assests/_DSC2023.jpg"
import img21 from "../assests/EZ111N9114.JPG"

const ModellingPage = () => {
  return (
    <div className="bg-background_green">
      <Header
        primaryColorClass="text-primary_purple"
        secondaryColorClass="text-primary_green"
        backgroundColorClass="bg-background_green"
      />
      <div className="py-6 px-10 md:px-16 lg:px-24 flex flex-col items-center relative">
  <h1 className="font-cormorant text-7xl py-6 text-primary_green text-center">
    Modelling Portfolio
  </h1>
  <div className="relative">
    <img src={headlineimg} alt="/" className="mx-auto" />
    <span
      className="absolute font-cormorant text-primary_purple text-5xl transform"
      style={{ top: 'calc(50% - 120px)', left: 'calc(50% + 50px)' }}
    >
      5'7"  38/28/38
    </span>
  </div>
</div>


      <div>
        <p className="font-cormorant text-5xl text-primary_purple text-center py-8">
          All images below are barefaced shoots.
        </p>
      </div>
      <div className="bg-background_purple grid lg:grid-cols-3 gap-4 px-10 md:px-16 lg:px-24 py-10">
        <div className="flex items-stretch">
          <img src={img06} alt="/" className="w-full object-cover" />
        </div>
        <div className="flex flex-col gap-8">
          <img src={img05} alt="/" className="w-full object-cover" />
          <img src={img14} alt="/" className="w-full object-cover" />
        </div>
        <div className="flex items-stretch">
          <img src={img03} alt="/" className="w-full object-cover" />
        </div>
      </div>
      <div className="bg-background_purple grid lg:grid-cols-3 gap-4 px-10 md:px-16 lg:px-24 py-10">
        <div className="items-stretch flex flex-col gap-8">
          <img src={img01} alt="/" className="w-full object-cover" />
          <img src={img15} alt="/" className="w-full object-cover" />
        </div>
        <div className="items-stretch flex flex-col gap-8">
          <img src={img18} alt="/" className="w-full object-cover" />
          <img src={img17} alt="/" className="w-full object-cover" />
          <img
            src={img21}
            alt="/"
            className="w-full object-cover"
          />{" "}
        </div>
        <div className="items-stretch flex flex-col gap-8">
          <img src={img20} alt="/" className="w-full object-cover" />
          <img src={img02} alt="/" className="w-full object-cover" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModellingPage;
