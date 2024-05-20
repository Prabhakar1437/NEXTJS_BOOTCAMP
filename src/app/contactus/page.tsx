import React from "react";
import Link from "next/link";
function Contactus() {
  return (
    <div>
      <div className="flex justify-between p-5 bg-gray-700 text-white">
        <div>
          <h1 className="font-semibold"> Vats</h1>
        </div>

        <div className="flex gap-5">
          <Link href="/contactus">Contact Us</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
      <h1 className="text-2xl">Contact us Page </h1>
    </div>
  );
}

export default Contactus;
