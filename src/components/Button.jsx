import React from "react";

const Button = ({ firstBtnText, secondBtntext, onClickForAdd, onclickForRemove }) => {
  return (
    <div>
      <button
        onClick={onclickForRemove}
        className="bg-red-400 font-poppins font-semibold text-base px-4 text-white rounded-md cursor-pointer"
      >
        {firstBtnText}
      </button>
      <button
        onClick={onClickForAdd}
        className="bg-blue-violet ml-1 font-poppins font-semibold text-base px-4 text-white rounded-md cursor-pointer"
      >
        {secondBtntext}
      </button>
    </div>
  );
};

export default Button;
