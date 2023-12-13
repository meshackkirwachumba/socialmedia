import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NoProfile from "../assets/NoProfile.jpg";
import { LiaEditSolid } from "react-icons/lia";
import { UpdateProfile } from "../redux/userSlice";
import {
  BsBriefcase,
  BsFacebook,
  BsInstagram,
  BsPersonFillAdd,
} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import moment from "moment";

function ProfileCard({ user }) {
  const { user: data, edit } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="
         bg-primary
         w-full
         flex
         flex-col
         items-center
         shadow-sm
         rounded-xl
         px-6
         py-4
         
       "
      >
        {/* user info */}
        <div
          className="
           flex items-center w-full justify-between border-b pb-5 border-[#66666645]
         "
        >
          <Link to={`/profile/${user._id}`} className="flex gap-2">
            <img
              className="
                 w-14
                 h-14
                 rounded-full
                 object-cover
                 cursor-pointer
               "
              src={user?.profileUrl ?? NoProfile}
              alt={user?.firstName}
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-medium text-ascent-1">
                {user?.firstName} {user?.lastName}
              </p>
              <span className="text-ascent-2">
                {user?.profession ?? "No profession"}
              </span>
            </div>
          </Link>
          <div className="">
            {user?._id === data?._id ? (
              <LiaEditSolid
                size={22}
                className="text-blue cursor-pointer"
                onClick={() => dispatch(UpdateProfile(true))}
              />
            ) : (
              <button
                className="bg-[#0444a430] text-sm text-white p-1 rounded"
                onClick={() => {}}
              >
                <BsPersonFillAdd size={20} className="text-[#0f52b6]" />
              </button>
            )}
          </div>
        </div>

        {/* location & profession */}
        <div className="flex flex-col w-full gap-2 py-4 border border-[#66666645]">
          <div className="flex gap-2 items-center text-ascent-2">
            <CiLocationOn className="text-xl text-ascent-1" />
            <span>{user?.location ?? "Add Location"}</span>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <BsBriefcase className="text-xl ml-1 text-ascent-1" />
            <span>{user?.profession ?? "Add Profession"}</span>
          </div>
        </div>

        <div className="flex flex-col w-full gap-2 py-4 border-b border-[#66666645]">
          <p className="text-xl text-ascent-1 font-semibold">
            {user?.friends?.length === 1 ? "1 Friend" : "Friends"}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-ascent-2">Who viewed your profile?</span>
            <span className="text-ascent-1 text-lg">{user?.views?.length}</span>
          </div>
          <span className="text-base text-blue">
            {user?.verified ? "Verified Account" : "Not Verified"}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-ascent-2">Joined</span>
            <span className="text-ascent-1 text-base">
              {moment(user?.createdAt).fromNow()}
            </span>
          </div>
        </div>

        {/* friends */}
        <div className="flex flex-col w-full gap-4 pb-6 py-4">
          <p className="text-ascent-1 font-semibold text-lg">Social Profile</p>
          <div className="flex gap-2 items-center text-ascent-2">
            <BsInstagram className="text-xl text-ascent-1" />
            <span>Instagram</span>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <FaTwitterSquare className="text-xl text-ascent-1" />
            <span>Twitter</span>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <BsFacebook className="text-xl text-ascent-1" />
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
