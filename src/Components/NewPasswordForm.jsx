import React from "react";
import LoadingButton from "./common/LoadingButton";

const NewPasswordForm = ({ handleNewPassword, isLoading = false }) => {
  return (
    <>
      <div className="W-[100%] ">
        <div className="">
          <label className="text-white text-sm mb-2 block">New password</label>
          <input
            type="text"
            placeholder="Enter New Password"
            className="w-full py-3 px-2 rounded-md input-bg bg-opacity-10 text-[#ffffff] placeholder-gray-300 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-300 border border-[#ffffff5f] focus:border-none"
          />
          <label className="text-white text-sm mb-2 block mt-2">
            Confirm password
          </label>
          <input
            type="text"
            placeholder="Enter confirm Password"
            className="w-full py-3 px-2 rounded-md input-bg bg-opacity-10 text-[#ffffff] placeholder-gray-300 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-300 border border-[#ffffff5f] focus:border-none"
          />
          <LoadingButton
            onClick={handleNewPassword}
            isLoading={isLoading}
            className="w-full bg-[#318179] hover:bg-[#569c96da] mt-4 text-white font-medium py-4 px-2 rounded-md transition-all duration-100"
          >
            CHANGE PASSWORD
          </LoadingButton>
        </div>
      </div>
    </>
  );
};

export default NewPasswordForm;
