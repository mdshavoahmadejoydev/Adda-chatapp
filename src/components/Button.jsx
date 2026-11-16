import React from "react";

const Button = ({
  firstBtnText,
  secondBtntext,
  onClickForAdd,
  onclickForRemove,
  onClickforAccept,
}) => {
  return (
    <div>
      <button
        onClick={onclickForRemove}
        className="bg-red-400 font-poppins font-semibold text-base px-4 text-white rounded-md cursor-pointer"
      >
        {firstBtnText}
      </button>
      <button
        disabled={secondBtntext === "Pending"}
        onClick={() => {
          if (secondBtntext === "Add") {
            onClickForAdd();
          } else if (secondBtntext === "Accept") {
            onClickforAccept();
          }
        }}
        className={`bg-blue-violet ml-1 font-poppins font-semibold text-base px-4 text-white rounded-md cursor-pointer  `}
      >
        {secondBtntext}
      </button>
    </div>
  );
};

export default Button;
