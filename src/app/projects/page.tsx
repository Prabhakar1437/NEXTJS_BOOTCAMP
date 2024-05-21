import React from "react";
import Link from "next/link";
function Projects({searchParams}:{searchParams:any}) {
  return (
    <div>
      <div className="flex justify-between p-5 bg-gray-700 text-white">
        <div>
          <Link href="/">
            <h1 className="font-semibold">Vats</h1>
          </Link>
        </div>

        <div className="flex gap-5">
          <Link href="/contactus">Contact Us</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
      <h1 className="text-2xl">Projects Page</h1>

      <h1>
        Applied Filters
      </h1>
      <h1>
        Tech= :{searchParams.tech}
      </h1>
      <h1>
        Sort By ={searchParams.sortby}
      </h1>

      <div className="flex gap-10 p-10">
        <Link href="/projects/1">
          <div className="bg-red-500 p-10">
            <h1 className="text-2xl">Project 1</h1>
          </div>
        </Link>

        <Link href="/projects/2">
          <div className="bg-green-500 p-10">
            <h1 className="text-2xl">Project 2</h1>
          </div>
        </Link>

        <Link href="/projects/3">
          <div className="bg-yellow-500 p-10">
            <h1 className="text-2xl">Project 3</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
