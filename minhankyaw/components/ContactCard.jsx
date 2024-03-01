import Link from "next/link";
import React from "react";

const ContactCard = ({item}) => {
  return (
    <Link
      href={item?.link}
      className="cursor-pointer hover:scale-105 transition-all duration-300 w-full p-6 text-[#536163] text-[1.2rem] font-medium rounded-full bg-[#E8F5F7] flex justify-between items-center"
    >
      <p>{item?.name}</p>
      {item?.icon}
    </Link>
  );
};

export default ContactCard;
