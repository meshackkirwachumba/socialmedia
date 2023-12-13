import { useSelector } from "react-redux";
import TopBar from "../components/TopBar";
import ProfileCard from "../components/ProfileCard";
import FriendsCard from "../components/FriendsCard";
import { suggest, requests } from "../assets/data";
import { useState } from "react";
import { Link } from "react-router-dom";
import NoProf from "../assets/NoProfile.jpg";
import CustomButton from "../components/CustomButton";
import { BsPersonFill } from "react-icons/bs";

function Home() {
  const { user } = useSelector((state) => state.user);
  const [friendRequest, setFriendRequest] = useState(requests);
  const [suggestedFriends, setSuggestedFriends] = useState(suggest);

  return (
    <div
      className="
       w-full
       px-0
       lg:px-10
       pb-20
       2xl:px-40
       bg-bgColor
       lg:rounded-lg
       h-screen
       overflow-hidden
     "
    >
      <TopBar />

      {/* left, middle, right wrapper */}
      <div
        className="
         h-full
         w-full
         pt-4
         pb-10
         flex
         gap-2
         lg:gap-4

       "
      >
        {/* LEFT CONTAINER */}
        <div
          className="
           hidden
           md:flex
           w-1/3
           lg:w-1/4
           h-full
           flex-col
           gap-6
           overflow-y-auto
         "
        >
          <ProfileCard user={user} />
          <FriendsCard friends={user?.friends} />
        </div>

        {/* MIDDLE CONTAINER */}
        <div
          className="
           flex-1
           bg-primary
           h-full
           px-4
           flex
           flex-col
           gap-6
           overflow-y-auto
         "
        >
          MIDDLE
        </div>

        {/* RIGHT CONTAINER */}
        <div
          className="
           hidden
           w-1/4
           lg:flex
           h-full
           flex-col
           gap-8
           overflow-y-auto
         "
        >
          {/* friend requests */}
          <div className="w-full bg-primary shadow-sm rounded-lg px-6 py-5">
            <div
              className="flex items-center justify-between text-xl text-ascent-1 pb-2 border-b
             border-[#66666645]"
            >
              <span>Friend Requests</span>
              <span>{friendRequest?.length}</span>
            </div>
            <div className="w-full flex flex-col gap-4 pt-4">
              {friendRequest?.map(({ _id, requestFrom: from }) => (
                <div key={_id} className="flex items-center justify-between">
                  <Link
                    to={`/profile/${from?._id}`}
                    className="flex items-center gap-4 cursor-pointer"
                  >
                    <img
                      src={from?.profileUrl || NoProf}
                      alt={from?.firstName}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-base font-medium text-ascent-1">
                        {from?.firstName} {from?.lastName}
                      </p>
                      <span className="text-sm text-ascent-2">
                        {from?.profession ?? "No Profession"}
                      </span>
                    </div>
                  </Link>
                  <div className="flex gap-1">
                    <CustomButton
                      title="Accept"
                      containerStyles="bg-[#0444a4] text-xs text-white px-1.5 py-1 rounded-full"
                    />
                    <CustomButton
                      title="Deny"
                      containerStyles="border border-[#666] text-xs text-ascent-1 px-1.5 py-1 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* suggested friends  */}
          <div
            className="
             w-full
             bg-primary
             shadow-sm
             rounded-lg
             px-5
             py-5
           "
          >
            <div
              className="
               flex items-center justify-between text-lg
               text-ascent-1 border-b border-[#66666645]"
            >
              <span>Friend Suggestion</span>
            </div>
            <div className="w-full flex flex-col gap-4 pt-4">
              {suggestedFriends?.map((friend) => (
                <div
                  key={friend?._id}
                  className="flex items-center justify-between"
                >
                  <Link
                    to={`/profile/${friend?._id}`}
                    key={friend?._id}
                    className="w-full flex gap-4 items-center cursor-pointer"
                  >
                    <img
                      src={friend?.profileUrl || NoProf}
                      alt={friend?.firstName}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-base font-medium text-ascent-1">
                        {friend?.firstName} {friend?.lastName}
                      </p>
                      <span className="text-sm text-ascent-2">
                        {friend?.profession ?? "No Profession"}
                      </span>
                    </div>
                  </Link>

                  <div className="flex-1 gap-1">
                    <button
                      className="bg-[#0444a4] text-sm  text-white  p-1 rounded "
                      onClick={() => {}}
                    >
                      <BsPersonFill size={20} className="text-[#0f52b6]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
