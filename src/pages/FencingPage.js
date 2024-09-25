import React from "react";
import Header from "../components/Header";
import defaultimg from "../assests/image-icon-600nw-211642900.webp";
import Footer from "../components/Footer";

const FencingPage = () => {
  return (
    <div className="bg-background_purple">
      <Header
        primaryColorClass="text-primary_green"
        secondaryColorClass="text-primary_purple"
        backgroundColorClass="bg-background_purple"
      />
      <div className="grid md:grid-cols-2 gap-2 px-10 md:px-16 lg:px-24 pb-24">
        <div>
          <h1 className="lg:text-7xl py-10 font-cormorant text-primary_green">
            At a glance
          </h1>
          <div className="font-nunito text-2xl text-primary_purple flex flex-col gap-8 pr-10">
            <div className="text-3xl">
              <p>Canadian Senior Women’s Epee National Team Member</p>
              <p>World Rank: 230</p>
            </div>
            <div>
              <p className="font-bold pb-2">Top Results</p>
              <p>GOLD – Commonwealth Fencing Senior Team Championships</p>
              <p>BRONZE – Costa Rica Satellite World Cup</p>
              <p>FISU World University Games athlete for Team Canada</p>
              <p>GOLD – Ontario Provincial Championships</p>
              <p>GOLD – Ontario University Championships</p>
              <p>SILVER – Ontario University Championships, teams</p>
              <p>GOLD – Canada Cup, U23</p>
              <p>
                Captain of the Western University varsity fencing team for 4
                years
              </p>
              <p>
                Award: Ontario Quest for Gold (top 2 senior athletes across all
                weapons)
              </p>
              <p>
                Award: Western University Purple Blanket (top 12 graduating
                student-athletes across all sports)
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src={defaultimg} alt="/" className="w-full" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FencingPage;
