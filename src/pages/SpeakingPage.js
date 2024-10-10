import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import defaultimg from "../assests/00002.jpg";
import contactimg from "../assests/rbcolympians.jpg"
import ImageWithText from "../components/ImageWithText";

const SpeakingPage = () => {
  return (
    <div className="bg-background_purple">
      <Header
        primaryColorClass="text-primary_green"
        secondaryColorClass="text-primary_purple"
        backgroundColorClass="bg-background_purple"
      />
      <div className="grid md:grid-cols-2 gap-10 px-10 md:px-16 lg:px-24 pb-8">
        <div>
          <h1 className="lg:text-7xl md:text-5xl text-3xl py-10 font-cormorant text-primary_green">
            Who is Evelyn?
          </h1>
          <div className="font-nunito text-base md:text-lg lg:text-xl text-primary_purple flex flex-col gap-6">
            <p>
              Evelyn’s speaking career started in 2019 with an organization
              called Fitspirit, who hired her to take-over middle- and
              high-school girls’ gym classes to inspire young girls to start or
              stay in sports. Since then, she has maintained her passion for
              inspiring others with stories and experiences from the field.
            </p>
            <p>
              In her talks, Evelyn draws frequently from lessons in sports
              psychology and speaks about their practical applications in
              everyday life, careers, and personal relationships. She has been a
              high-performance athlete for Team Canada since 2016, and also has
              experience captaining a university varsity team, working in
              finance and sales, starting her own business, and solo travelling
              the world.
            </p>
            <div className="py-4">
              <p className="pb-4">
                Each talk is custom-tailored the client’s audience and needs.
                Popularly requested topics include:
              </p>
              <ul className="list-disc list-inside">
                <li>The “Get to” Theory behind Motivation and Resilience</li>
                <li>
                  Growth Mindset: Supercharge your Learning and Performance
                </li>
                <li>
                  Women in Sports and Business: The Good, the Ugly, the Truth
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src={defaultimg} alt="/" className="w-full" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-12 px-10 md:px-16 lg:px-24 py-8">
        <div className="w-full">
          <ImageWithText imageSrc={contactimg} text="Classroom Visits" />
        </div>
        <div className="w-full">
          <ImageWithText imageSrc={contactimg} text="Corporate Visits" />
        </div>
        <div className="w-full">
          <ImageWithText
            imageSrc={contactimg}
            text="Panels/Conferences/Podcasts"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpeakingPage;
