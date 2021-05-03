import React from "react";
import Image from "next/image";

const Mentor = ({ imageUrl, name, location, bio, role }) => {
  return (
    <div className="flex flex-col items-center text-center  rounded-2 hover:bg-gray-100 cursor-pointer p-5">
      <img
        src={imageUrl}
        className="rounded-full border-2 border-brand-green mb-3"
        height={90}
        width={90}
      />
      <h5 className="uppercase text-brand-green font-bold mb-2">{name}</h5>
      <p>💼 {role}</p>
      <p>💎 {bio}</p>
      <p>📍 {location}</p>
    </div>
  );
};

export default Mentor;
