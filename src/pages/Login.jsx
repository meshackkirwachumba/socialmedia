import { TbSocial } from "react-icons/tb";
import TextInput from "../components/TextInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading";
import CustomButton from "../components/CustomButton";
import loginImg from "../assets/bgimage.jpg";
import { BsShare } from "react-icons/bs";
import { ImConnection } from "react-icons/im";
import { AiOutlineInteraction } from "react-icons/ai";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmitData = async (data) => {};

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className="
       bg-bgColor
       w-full
       h-screen
       flex
       justify-center
       items-center
       p-6
    "
    >
      <div
        className="
         w-full
         md:w-2/3
         h-fit
         lg:h-full
         2xl:h-5/6
         py-8
         lg:py-0
         bg-primary
         rounded-xl
         flex
         shadow-xl
         overflow-hidden
         "
      >
        {/* LEFT CONTAINER */}
        <div
          className="
            w-full
            lg:w-1/2
            h-full
            p-10
            2xl:px-20
            flex
            flex-col
            justify-center
           "
        >
          {/* logo */}
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-[#065ad8] rounded text-white">
              <TbSocial />
            </div>
            <span className="text-2xl text-[#065ad8] font-semibold">
              Share Fun
            </span>
          </div>
          <p className="text-ascent-1 text-base font-semibold">
            Log in to your account
          </p>
          <span className="text-sm mt-2 text-ascent-2">Welcome back</span>
          <form
            onSubmit={handleSubmit(onSubmitData)}
            className="
             py-8
             flex
             flex-col
             gap-5
            "
          >
            <TextInput
              label="Email"
              name="email"
              placeholder="Enter your email"
              type="email"
              register={register("email", {
                required: "Email address is required",
                pattern: /^\S+@\S+$/i,
              })}
              inputStyles="w-full rounded-full"
              labelStyles="ml-2"
              error={errors.email ? errors.email.message : ""}
            />
            <TextInput
              label="Password"
              name="password"
              placeholder="Enter your password"
              type="password"
              register={register("password", {
                required: "Password address is required",
                pattern: /^\S+@\S+$/i,
              })}
              inputStyles="w-full rounded-full"
              labelStyles="ml-2"
              error={errors.password ? errors.password.message : ""}
            />
            <Link
              className="text-sm text-right text-blue font-semibold"
              to="/reset-password"
            >
              Forgot password?
            </Link>

            {errMsg?.message && (
              <span
                className={`
                    text-sm
                    ${
                      errMsg?.status === "failed"
                        ? "text-[#f64949fe]"
                        : "text-[#2ba150fe]"
                    }
                    mt-0.5
                  `}
              >
                {errMsg?.message}
              </span>
            )}

            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                title="Login"
                type="submit"
                containerStyles={`
                   inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium
                    text-white outline-none`}
              />
            )}
          </form>
          <p className="text-ascent-2 text-sm text-center">
            Do not have an account?
            <Link
              to="/register"
              className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
            >
              Create Account
            </Link>
          </p>
        </div>

        {/* RIGHT CONTAINER wrapper */}
        <div
          className="
           hidden
           lg:flex
           w-1/2
           h-full
           flex-col
           items-center
           justify-center
           bg-blue
          "
        >
          <div className="relative w-full flex items-center justify-center">
            <img
              src={loginImg}
              alt="login"
              className="w-48 2xl:w-64 h-48 2xl:h-64 object-cover rounded-full"
            />

            <div className="absolute right-10 top-10 bg-white rounded-full px-5 py-2 flex items-center gap-1">
              <BsShare size={14} />
              <span className="text-xs font-medium">Share</span>
            </div>
            <div className="absolute left-8 top-6 bg-white rounded-full px-5 py-2 flex items-center gap-1">
              <ImConnection size={14} />
              <span className="text-xs font-medium">Connect</span>
            </div>
            <div className="absolute left-9 bottom-6 bg-white rounded-full px-5 py-2 flex items-center gap-1">
              <AiOutlineInteraction size={14} />
              <span className="text-xs font-medium">Interact</span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white text-base">
              Connect with friends and share for fun
            </p>
            <p className="text-sm text-white/80">
              Share memories with friends and the world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
