import React from "react";

const AccountInfo = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-lg mx-auto border border-[#D4AF37]">
      <h3 className="text-xl font-semibold text-[#1D4D4F] mb-4">Bank Account Details</h3>
      <p className="text-gray-700"><strong>Account Name:</strong> Olajide Rokeebat</p>
      <p className="text-gray-700"><strong>Bank Name:</strong> Opay Bank</p>
      <p className="text-gray-700"><strong>Account Number:</strong> 8137041526</p>
      <p className="mt-3 text-sm text-gray-600 italic">
        Please make your donation to the account above, then fill out the form below.
      </p>
    </div>
  );
};

export default AccountInfo;
