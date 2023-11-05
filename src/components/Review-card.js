import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="review-card bg-[#21293c] p-5 rounded-lg shadow-[10px_5px_5px_5px_#1d2530]">
      <p className="text-[#bdc4cc] mb-5">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className="flex items-center gap-5">
        <div className="basis-[20%]">
          <img
            src={props.data.image}
            alt="avatar"
            className="rounded-full max-w-full"
          />
        </div>
        <div className="text-white">
          <p className="font-medium">{props.data.name}</p>
          <p className="text-xs text-[#bdc4cc]"> {props.data.job} </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
