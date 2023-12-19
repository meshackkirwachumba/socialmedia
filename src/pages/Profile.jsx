import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "../components/TopBar";
import ProfileCard from "../components/ProfileCard";
import FriendsCard from "../components/FriendsCard";
import Loading from "../components/Loading";
import PostCard from "../components/PostCard";

function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [userinfo, setUserinfo] = useState(user);
  const { posts } = useSelector((state) => state.posts);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id) => {};

  const handleLike = async (id) => {};

  return (
    <>
      <div className="h-screen w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg overflow-hidden">
        {/* navbar */}
        <TopBar />
        <div className="w-full flex gap-2 lg:gap-4 md:pl-4 pt-5 pb-10 h-full">
          {/* left */}
          <div className="hidden w-1/3 lg:w-1/4 md:flex flex-col gap-6 overflow-y-auto">
            <ProfileCard user={userinfo} />

            <div className="block lg:hidden">
              <FriendsCard friends={userinfo?.friends} />
            </div>
          </div>

          {/* CENTER */}
          <div className="flex-1 h-full bg-primary px-4 flex flex-col gap-6 overflow-y-auto">
            {loading ? (
              <Loading />
            ) : posts?.length > 0 ? (
              posts?.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                  user={user}
                  deletePost={handleDelete}
                  likePost={handleLike}
                />
              ))
            ) : (
              <div className="flex w-full h-full items-center justify-center">
                <p className="text-lg  text-ascent-2">No Post Available</p>
              </div>
            )}
          </div>

          {/* right */}
          <div className="hidden lg:flex w-1/4 h-full flex-col gap-8 overflow-y-auto">
            <FriendsCard friends={userinfo?.friends} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
