import { Icon } from "@iconify/react";
import PasswordInput from "../components/shared/PasswordInput";
import RoundedButton from "../components/shared/RoundedButton";
import TextInput from "../components/shared/TextInput";

const SignupComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-200 w-full flex justify-center">
        <Icon icon="logos:spotify" width={150} />
      </div>
      <div className="inputRegion w-1/3 py-10 flex flex-col justify-center items-center">
        <div className="text-2xl font-bold mb-10">
          Sign up for free to start listening.
        </div>
        <TextInput
          className="mb-4"
          label="What's your email?"
          placeholder="Enter your email."
        />
        <TextInput
          className="mb-4"
          label="Confirm your email"
          placeholder="Enter your email again."
        />
        <PasswordInput
          className="mb-4"
          label="Create a Password"
          placeholder="Create a Password"
        />
        <TextInput
          className="mb-4"
          label="What should we call you?"
          placeholder="Enter a profile name."
        />
        <div className="flex w-full justify-center mt-2">
          <button className="bg-green-400 p-3 rounded-full font-semibold px-5">
            SIGN UP
          </button>
        </div>
        <div className="w-full border border-solid border-gray-400 mt-6"></div>
        <div className="font-semibold mt-8">Already have a account?</div>
        <RoundedButton
          placeholder="LOG IN TO SPOTIFY"
          className="my-5"
          path="/login"
        />
      </div>
    </div>
  );
};

export default SignupComponent;
