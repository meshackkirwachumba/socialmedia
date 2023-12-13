import { useSelector } from "react-redux";
import TopBar from "../components/TopBar";
import ProfileCard from "../components/ProfileCard";
import FriendsCard from "../components/FriendsCard";

function Home() {
  const { user } = useSelector((state) => state.user);

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

      <div
        className="
         h-full
         w-full
         pt-5
         pb-10
         flex
         gap-2
         lg:gap-4

       "
      >
        {/* LEFT */}
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
          <FriendsCard />
        </div>

        {/* MIDDLE */}

        {/* RIGHT */}
      </div>
    </div>
  );
}

export default Home;
