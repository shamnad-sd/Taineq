import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="bg-gradient-to-b from-[#eaf3ff] via-transparent to-transparent px-6 lg:px-22 md:px-10 py-40">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-[28px] md:text-[46px] Primary-font uppercase leading-tight bg-gradient-to-r from-[#0065EC] via-[#45606E] to-[#001568] bg-clip-text text-transparent">
          Oops! we can't find that page.
        </h2>
        <p className="py-4 text-[#0065EC] ">
          It seems like the page you were looking for has disappeared into thin air! Don't worry, though. You can:
        </p>
        <Link
          href="/"
          className="cursor-pointer uppercase px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
