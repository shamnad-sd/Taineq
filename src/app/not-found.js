import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="bg-gradient-to-b from-[#d0e7cb] via-transparent to-transparent px-6 lg:px-22 md:px-10 py-40">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-[28px] md:text-[46px] Primary-font uppercase leading-tight bg-gradient-to-r from-[#145D3E] via-[#45606E] to-[#63AF51] bg-clip-text text-transparent">
          Oops! we can't find that page.
        </h2>
        <p className="py-4 text-[#145D3E] ">
          It seems like the page you were looking for has disappeared into thin air! Don't worry, though. You can:
        </p>
        <Link
          href="/"
          className=" w-fit uppercase Primary-font px-4 py-2.5 mb-2 border border-[#145D3E] text-[#145D3E] text-sm cursor-pointer transition-colors duration-600 group-hover:bg-[#63AF51] group-hover:text-white"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
