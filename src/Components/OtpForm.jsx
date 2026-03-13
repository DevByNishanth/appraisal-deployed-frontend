import React from "react";
import LoadingButton from "./common/LoadingButton";

const OtpForm = ({ openNewPassword, isLoading = false }) => {
  return (
    <>
      <div className="main-container w-[100%]">
        <div className="">
          <label className="text-white text-sm mb-2 block">OTP</label>
          <input
            type="text"
            placeholder="Enter otp"
            className="w-full py-3 px-2 rounded-md input-bg bg-opacity-10 text-[#ffffff] placeholder-gray-300 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-300 border border-[#ffffff5f] focus:border-none"
          />
          <LoadingButton
            onClick={openNewPassword}
            isLoading={isLoading}
            className="w-full bg-[#318179] hover:bg-[#569c96da] mt-4 text-white font-medium py-4 px-2 rounded-md transition-all duration-100"
          >
            VERIFY OTP
          </LoadingButton>
        </div>
      </div>
    </>
  );
};

export default OtpForm;
