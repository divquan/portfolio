import React from "react";

const RoundButton = ({
  children,
  color = "yellow",
}: {
  children: React.ReactNode;
  color?: "red" | "pink" | "yellow";
}) => {
  return (
    <div className="relative w-fit h-fit my-3 rounded-full aspect-square">
      <button
        className={`rounded-full items-center justify-center  ${
          color == "red"
            ? " bg-qred "
            : color === "pink"
            ? " bg-qpink "
            : " bg-qyellow "
        } p-2 md:p-4 flex gap-2 border-black  border-2 aspect-square -translate-x-[2px] -translate-y-[4px] hover:-translate-x-[4px] hover:-translate-y-[6px] transition-transform`}
      >
        {children}
      </button>
      <div className="rounded-full absolute inset-0 bg-black aspect-square -z-10"></div>
    </div>
  );
};

export default RoundButton;
