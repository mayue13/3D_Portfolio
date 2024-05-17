import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white nep-btn" to={text}>
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Mayur</span>
      <br />A
    </h1>
  ),
  2: <InfoBox text="About" link="/about" btnText="Learn more" />,
  3: <InfoBox text="Project" link="/projects" btnText="Visit" />,
  4: <InfoBox text="Contact" link="/contact" btnText="Lets talk" />,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
