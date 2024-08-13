import { Icon } from "@iconify/react";
import PasswordInput from "../components/shared/PasswordInput";
import RoundedButton from "../components/shared/RoundedButton";
import TextInput from "../components/shared/TextInput";

const LoginComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-200 w-full flex justify-center">
        <Icon icon="logos:spotify" width={150} />
      </div>
      <div className="inputRegion w-1/3 py-10 flex flex-col justify-center items-center">
        <div className="font-bold mb-10">To continue, login to Spotify</div>
        <TextInput
          className="mb-4"
          label="Email adderess or Username"
          placeholder="Email adderess or Username"
        />
        <PasswordInput
          className="mb-4"
          label="Enter Password"
          placeholder="Enter Password"
        />
        <div className="flex w-full justify-end mt-2">
          <button className="bg-green-400 p-3 rounded-full font-semibold px-5">
            LOG IN
          </button>
        </div>
        <div className="w-full border border-solid border-gray-400 mt-6"></div>
        <div className="font-semibold mt-8">Don't have a account?</div>
        <RoundedButton
        placeholder="SIGN UP FOR SPOTIFY"
        className="my-5 w-full border-gray-500 text-gray-500"
        path="/signup"/>
      </div>
    </div>
  );
};

export default LoginComponent;
