import { useSelector } from "react-redux";
import TopBar from "../components/TopBar";
import ProfileCard from "../components/ProfileCard";
import FriendsCard from "../components/FriendsCard";
import { suggest, requests } from "../assets/data";
import { useState } from "react";
import { Link } from "react-router-dom";
import NoProf from "../assets/NoProfile.jpg";
import CustomButton from "../components/CustomButton";
import { BsFiletypeGif, BsPersonFill } from "react-icons/bs";
import { BiImages, BiSolidVideo } from "react-icons/bi";
import TextInput from "../components/TextInput";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";

function Home() {
  const { user } = useSelector((state) => state.user);
  const [friendRequest, setFriendRequest] = useState(requests);
  const [suggestedFriends, setSuggestedFriends] = useState(suggest);
  const [errMsg, setErrMsg] = useState("");
  const [file, setFile] = useState(null);
  const [posting, setPosting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handlePostSubmit = async (data) => {};

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
           rounded-lg
         "
        >
          <form
            onSubmit={handleSubmit(handlePostSubmit)}
            className="bg-primary px-4 rounded-lg"
          >
            <div className="flex items-center gap-2 py-4 border-b border-[#66666645]">
              <img
                src={user?.profileUrl || NoProf}
                alt={user?.firstName}
                className="w-14 h-14 object-cover rounded-full"
              />
              <TextInput
                inputStyles="w-full rounded-full py-5"
                placeholder="What's on your mind?"
                name="description"
                register={register("description", {
                  required: "Write something about post",
                })}
                error={errors.description ? errors.description?.message : ""}
              />
            </div>
            {errMsg?.message && (
              <span
                role="alert"
                className={`
                text-sm
                ${
                  errMsg?.status === "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } 
               `}
              >
                {errMsg?.message}
              </span>
            )}

            <div className="flex items-center justify-between py-4">
              <label
                htmlFor="imgUpload"
                className="
                flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer
              "
              >
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                  id="imgUpload"
                  data-max-size="5120"
                  accept=".jpg, .jpeg, .png"
                />
                <BiImages />
                <span>Image</span>
              </label>
              <label
                htmlFor="videoUpload"
                className="
                flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer
              "
              >
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                  id="videoUpload"
                  data-max-size="5120"
                  accept=".mp4, .wav"
                />
                <BiSolidVideo />
                <span>Video</span>
              </label>
              <label
                htmlFor="vgifUpload"
                className="
                flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer
              "
              >
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                  id="vgifUpload"
                  data-max-size="5120"
                  accept=".gif"
                />
                <BsFiletypeGif />
                <span>Gif</span>
              </label>

              <div>
                {posting ? (
                  <Loading />
                ) : (
                  <CustomButton
                    type="submit"
                    title={"Post"}
                    containerStyles="bg-[#0444a4] text-white py-1 px-6 rounded-full font-semibold text-sm"
                  />
                )}
              </div>
            </div>
          </form>
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
