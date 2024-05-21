import React from 'react'
import Link from "next/link";
function Reviews() {
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
    <h1 className='p-10 text-5xl'>Reviews Page of Specific project</h1>
    </div>
  )
}

export default Reviews