import Link from "next/link";
import React from "react";

const ContactCard = ({item}) => {
  return (
    <a
      href={item?.isEmail ? `mailto:${item?.link}` : item?.link }
      target="_blank"
      className="cursor-pointer hover:scale-105 transition-all duration-300 w-full p-6 text-[#536163] text-[1.2rem] font-medium rounded-full bg-[#E8F5F7] flex justify-between items-center"
    >
      <p>{item?.name}</p>
      {item?.icon}
    </a>
  );
};

export default ContactCard;
