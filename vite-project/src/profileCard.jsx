import React from "react";
import profileImg from "./assets/myPic.png";

export default function ProfileCard() {
  return (
    <div className="w-[340px] min-h-[570px] bg-white rounded-[28px] shadow-2xl px-6 py-6 relative overflow-hidden">
      <div className="absolute -top-5 left-8 w-40 h-24 border-t-4 border-dashed border-orange-400 rounded-full rotate-12 opacity-80" />
      <div className="bg-gradient-to-br from-[#c1441c] to-[#e45c2c] rounded-[22px] overflow-hidden">
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-[260px] object-cover"
        />
      </div>

      <h2 className="mt-6 text-3xl font-extrabold text-black text-center">
        S Prasanna Venketesh
      </h2>

      <div className="flex justify-center mt-4">
        <div className="w-10 h-10 rounded-full bg-orange-300 flex items-center justify-center text-white">
          🔥
        </div>
      </div>

      <p className="mt-4 text-center text-gray-500 text-sm leading-relaxed px-2">
        A Software Engineer who has developed countless innovative solutions.
      </p>
      <div className="absolute bottom-38 left-10 w-27 h-24 border-b-4 border-dashed border-orange-400 opacity-80" />
    </div>
  );
}
