import React from "react";
import { Link } from "react-router-dom";
import NoProf from "../assets/NoProfile.jpg";

const FriendsCard = ({ friends }) => {
  return (
    <div
      className="
       w-full
       bg-primary
       shadow-sm
       rounded-lg
       px-6
       py-5
     "
    >
      <div className="flex items-center justify-between pb-2 text-ascent-1 border-b border-[#66666645]">
        <span>Friends</span>
        <span>{friends?.length}</span>
      </div>
      <div className="flex flex-col w-full pt-4 gap-4">
        {friends?.map((friend) => (
          <Link
            to={`/profile/${friend?._id}`}
            key={friend?._id}
            className="flex w-full items-center gap-4 cursor-pointer"
          >
            <img
              src={friend.profileUrl || NoProf}
              alt={friend?.firstName}
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex-1">
              <p className="text-base font-medium text-ascent-1">
                {friend?.firstName} {friend?.lastName}
              </p>
              <span className="text-sm text-ascent-2">
                {friend?.profession ?? "No profession"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendsCard;
