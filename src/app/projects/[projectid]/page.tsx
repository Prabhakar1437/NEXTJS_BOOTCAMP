
import React from 'react'
import Link from "next/link";

function ProjectInfo({params}:any) {
    const projectid =params.projectid;
  return (
    <div>
        <div className="flex justify-between p-5 bg-gray-700 text-white">
        <div>
        <Link href ="/"><h1 className="font-semibold">Vats</h1></Link>
        </div>

        <div className="flex gap-5">
          <Link href="/contactus">Contact Us</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
      <h1>Project Info Page of Project - {projectid}</h1>

      <div className="flex gap-10 text-2xl p-10">
        <Link href="/projects">Back to projects</Link>

        <Link href={`/projects/${projectid}/reviews`}>Go to projects review</Link>
      </div>
    </div>
  )
}

export default ProjectInfo