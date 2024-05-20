import React from "react";
import Link from "next/link";
function Resume() {
  return (
    <div className="text-xl">
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
      <h1>Resume Page</h1>
    </div>
  );
}

export default Resume;
