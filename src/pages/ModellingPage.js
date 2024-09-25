import React from "react";
import Header from "../components/Header";
import defaultimg from "../assests/image-icon-600nw-211642900.webp";
import Footer from "../components/Footer";

const ModellingPage = () => {
  return (
    <div className="bg-background_green">
      <Header
        primaryColorClass="text-primary_purple"
        secondaryColorClass="text-primary_green"
        backgroundColorClass="bg-background_green"
      />
      <div className="py-6 px-10 md:px-16 lg:px-24">
        <h1 className="font-cormorant text-7xl py-6 text-primary_green">
          Modelling Portfolio
        </h1>
        <img src={defaultimg} alt="/" />
      </div>
      <div>
        <p className="font-cormorant text-5xl text-primary_purple text-center py-8">
          All images below are barefaced shoots.
        </p>
      </div>
      <div className="bg-background_purple grid lg:grid-cols-3 gap-4 px-10 md:px-16 lg:px-24 py-10">
        <div className="flex items-stretch">
          <img src={defaultimg} alt="/" className="w-full h-96 object-cover" />
        </div>
        <div className="flex flex-col gap-8">
          <img src={defaultimg} alt="/" className="w-full h-48 object-cover" />
          <img src={defaultimg} alt="/" className="w-full h-48 object-cover" />
        </div>
        <div className="flex items-stretch">
          <img src={defaultimg} alt="/" className="w-full h-96  object-cover" />
        </div>
      </div>
      <div className="bg-background_purple grid lg:grid-cols-3 gap-4 px-10 md:px-16 lg:px-24 py-10">
        <div className="items-stretch flex flex-col gap-8">
          <img src={defaultimg} alt="/" className="w-full h-96 object-cover" />
          <img src={defaultimg} alt="/" className="w-full h-48 object-cover" />
          <img src={defaultimg} alt="/" className="w-full h-48 object-cover" />
          <img src={defaultimg} alt="/" className="w-full h-48 object-cover" />
        </div>
        <div className="items-stretch flex flex-col gap-8">
          <img src={defaultimg} alt="/" className="w-full h-48 object-cover" />
          <img src={defaultimg} alt="/" className="w-full h-48 object-cover" />
          <img
            src={defaultimg}
            alt="/"
            className="w-full h-48 object-cover"
          />{" "}
          <img src={defaultimg} alt="/" className="w-full h-48 object-cover" />
        </div>
        <div className="items-stretch flex flex-col gap-8">
          <img src={defaultimg} alt="/" className="w-full h-96  object-cover" />
          <img src={defaultimg} alt="/" className="w-full h-48 object-cover" />
          <img src={defaultimg} alt="/" className="w-full h-48 object-cover" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModellingPage;
