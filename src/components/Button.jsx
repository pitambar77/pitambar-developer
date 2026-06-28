import Link from "next/link";
import React from "react";

const Button = ({ href, children, className = "" }) => {
  return (
    <Link
      href={href}
      className={`bg-[#3c4655] font-aviner text-white text-sm px-8 py-3 uppercase rounded-sm hover:bg-transparent border border-[#3c4655] hover:border hover:text-[#ab7e47] hover:border-[#ab7e47]  transition cursor-pointer tracking-widest duration-300 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
