import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import Loading from "../components/Loading";
import CustomButton from "../components/CustomButton";

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitData = async (data) => {};
  return (
    <div
      className="
      w-full
      h-[100vh]
      bg-bgColor
      flex
      items-center
      justify-center
      p-6
      "
    >
      <div
        className="
         bg-primary
         w-full
         md:w-1/3
         2xl:w-1/4
         px-6
         py-8
         shadow-md
         rounded-lg
       "
      >
        <p className="text-ascent-1 text-lg  font-semibold ">Email Address</p>
        <span className="text-sm text-ascent-2">
          Enter email address used during registration
        </span>

        <form
          onSubmit={handleSubmit(onSubmitData)}
          className="py-4 flex flex-col gap-5"
        >
          <TextInput
            label="Password"
            name="password"
            placeholder="Enter a new password"
            type="password"
            register={register("password", {
              required: "Password address is required",
              pattern: /^\S+@\S+$/i,
            })}
            inputStyles="w-full"
            error={errors.password ? errors.password.message : ""}
          />

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
              title="Reset Password"
              type="submit"
              containerStyles={`
                   inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium
                    text-white outline-none`}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
