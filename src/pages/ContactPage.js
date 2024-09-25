import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="bg-background_green">
      <Header
        primaryColorClass="text-primary_purple"
        secondaryColorClass="text-primary_green"
        backgroundColorClass="bg-background_green"
      />
      <div className="py-8 w-full items-center">
        <h1 className="font-cormorant text-6xl text-center pb-10 text-primary_green font-bold">
          Let's work together
        </h1>
        <h2 className="font-cormorant text-4xl text-center text-primary_purple">
          Interested in working together? Fill out some info and we will be in
          touch!
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
