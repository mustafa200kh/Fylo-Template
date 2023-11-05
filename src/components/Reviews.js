import React, { useState } from "react";
// Assets
import qoute from "../Assets/bg-quotes.png";
import avatarOne from "../Assets/profile-1.jpg";
import avatarTwo from "../Assets/profile-2.jpg";
import avatarThree from "../Assets/profile-3.jpg";
import ReviewCard from "./Review-card";

const Reviews = () => {
  // #21293c

  const [reviews, setReviews] = useState([
    {
      id: 1,
      rev: "Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine",
      image: avatarOne,
      name: "Satish Patel",
      job: "Founder & CEO",
    },
    {
      id: 2,
      rev: "Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine",
      image: avatarTwo,
      name: "Bruce McKenzie",
      job: "Founder & CEO",
    },
    {
      id: 3,
      rev: "Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine",
      image: avatarThree,
      name: "Iva Boyd",
      job: "Founder & CEO",
    },
  ]);
  return (
    <div className="reviews relative bg-bgSecond pt-16">
      <div className="qoute absolute z-0 left-[60px]">
        <img src={qoute} alt="qoute-image" />
      </div>
      <div className="relative container mx-auto p-7 grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((e) => {
          return <ReviewCard key={e.id} data={e} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
