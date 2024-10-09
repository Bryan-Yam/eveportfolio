import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="bg-background_green min-h-screen flex flex-col">
      <Header
        primaryColorClass="text-primary_purple"
        secondaryColorClass="text-primary_green"
        backgroundColorClass="bg-background_green"
      />
      <div className="py-8 w-full flex-grow flex justify-center items-center">
        <div className="text-center mb-24">
          <h1 className="font-cormorant text-6xl pb-10 text-primary_green font-bold">
            Let's work together
          </h1>
          <h2 className="font-cormorant text-4xl text-primary_purple">
            Interested in working together? Send me an email at{" "}
            <a
              href="mailto:evelynzhengfencing@gmail.com"
              className="text-primary_green font-bold">
              evelynzhengfencing@gmail.com
            </a>{" "}
            and we will be in touch!
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
