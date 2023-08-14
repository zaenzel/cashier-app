import React from "react";

const ModalSave = () => {
  return (
    <div className="absolute z-50 top-0 left-1/2 -translate-x-1/2">
      <div className="alert alert-success text-white font-semibold transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Bill berhasil di save</span>
      </div>
    </div>
  );
};

export default ModalSave;
