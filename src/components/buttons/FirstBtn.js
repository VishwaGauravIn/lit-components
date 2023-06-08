import React from "react";

export default function FirstBtn() {
  return (
    <div className="group relative z-30 flex justify-center items-center">
      <button className="ring-2 px-8 py-4 rounded-tl-lg rounded-br-lg rounded-tr-[1px] rounded-bl-[1px] hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-tl-[1px] hover:rounded-br-[1px] transition-all ease-in-out duration-500 active:rounded-tr-md active:rounded-bl-md active:rounded-tl-sm active:rounded-br-sm active:scale-105 font-medium tracking-wide bg-black text-white text-lg ring-black flex gap-2 justify-center items-center z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 group-hover:fill-yellow-400 transition-all ease-in-out duration-500 group-active:animate-spin group-active:w-7 group-active:h-7"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        Click Here!
      </button>
      <ARROW_SVG varient="tr" />
      <ARROW_SVG varient="tl" />
      <ARROW_SVG varient="br" />
      <ARROW_SVG varient="bl" />
      <div className="absolute w-0 h-0 group-focus-within:w-[24rem] group-focus-within:h-[24rem] bg-yellow-200 rounded-full transition-all ease-in-out duration-500"></div>
      <div className="absolute w-0 h-0 group-focus-within:w-[20rem] group-focus-within:h-[20rem] bg-yellow-300 rounded-full transition-all ease-in-out duration-500"></div>
      <div className="absolute w-0 h-0 group-focus-within:w-[16rem] group-focus-within:h-[16rem] bg-yellow-400 rounded-full transition-all ease-in-out duration-500"></div>
    </div>
  );
}

const ARROW_SVG = ({ varient }) => {
  const baseClassNames =
    "w-6 h-6 absolute transition-all ease-in-out opacity-50 z-10 group-focus-within:opacity-0 ";
  const conditonalClassNames = {
    tl: "-top-8 -left-7 group-hover:-top-7 group-hover:-left-6",
    tr: "scale-x-[-1] -top-8 -right-7 group-hover:-top-7 group-hover:-right-6",
    br: "scale-[-1] -bottom-8 -right-7 group-hover:-bottom-7 group-hover:-right-6",
    bl: "scale-y-[-1] -bottom-8 -left-7 group-hover:-bottom-7 group-hover:-left-6",
  };
  function getClassName(varient) {
    switch (varient) {
      case "tr":
        return baseClassNames + conditonalClassNames.tr;
        break;
      case "tl":
        return baseClassNames + conditonalClassNames.tl;
        break;
      case "br":
        return baseClassNames + conditonalClassNames.br;
        break;
      case "bl":
        return baseClassNames + conditonalClassNames.bl;
        break;
      default:
        break;
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={getClassName(varient)}
    >
      <path
        fillRule="evenodd"
        d="M1.72 5.47a.75.75 0 011.06 0L9 11.69l3.756-3.756a.75.75 0 01.985-.066 12.698 12.698 0 014.575 6.832l.308 1.149 2.277-3.943a.75.75 0 111.299.75l-3.182 5.51a.75.75 0 01-1.025.275l-5.511-3.181a.75.75 0 01.75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 00-3.528-5.617l-3.809 3.81a.75.75 0 01-1.06 0L1.72 6.53a.75.75 0 010-1.061z"
        clipRule="evenodd"
      />
    </svg>
  );
};
