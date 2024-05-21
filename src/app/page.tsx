import Link from "next/link";
export default function Home() {
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
      <h1 className="text-2xl">Home Page</h1>
    </div>
  );
}
