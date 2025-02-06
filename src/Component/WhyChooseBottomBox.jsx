import React from "react";

const WhyChooseBottomBox = ({ BottomBoxName, BottomBoxText,Image }) => {
  return (
    <div className="why-choose-bottom-box d-flex">
      <div className="mediket-chooseus-icon">
        <img className="img-fluid" src={Image} alt="" />
      </div>
      <div className="ms-4">
        <h4>{BottomBoxName}</h4>
        <p>{BottomBoxText}</p>
      </div>
    </div>
  );
};

export default WhyChooseBottomBox;
