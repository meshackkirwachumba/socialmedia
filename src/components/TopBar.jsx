import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TbSocial } from "react-icons/tb";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { BsSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { setTheme } from "../redux/theme";
import { UserLogout } from "../redux/userSlice";

function TopBar() {
  const { user } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  console.log("teme", theme);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  function handleSearch() {}

  function handleTheme() {
    const themeValue = theme === "light" ? "dark" : "light";

    dispatch(setTheme(themeValue));
  }

  return (
    <div
      className="
       sticky
       top-0
       z-50
       w-full
       flex
       items-center
       justify-between
       py-3
       md:py-6
       px-4
       bg-primary
     "
    >
      {/* logo */}
      <Link to="/" className="flex gap-2 items-center">
        <div className="p-1 md:p-2 bg-[#065ad8] rounded text-white">
          <TbSocial />
        </div>
        <span className="text-xl md:text-2xl text-[#065ad8] font-semibold">
          ShareFun
        </span>
      </Link>

      {/* search */}
      <form
        className="hidden md:flex items-center justify-center"
        onSubmit={handleSubmit(handleSearch)}
      >
        <TextInput
          placeholder="Search..."
          inputStyles="w-[18rem] lg:w-[30rem] rounded-l-full py-3"
          register={register("search")}
        />
        <CustomButton
          title="Search"
          type="submit"
          containerStyles="bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full"
        />
      </form>

      {/* icons */}
      <div className="flex items-center text-ascent-1 text-md md:text-xl gap-4">
        <button onClick={() => handleTheme()}>
          {theme ? <BsMoon /> : <BsSunFill />}
        </button>
        <div className="hidden lg:flex">
          <IoMdNotificationsOutline />
        </div>
        <CustomButton
          onClick={() => dispatch(UserLogout())}
          title="Logout"
          containerStyles="text-sm text-asccent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
        />
      </div>
    </div>
  );
}

export default TopBar;
