import Image from "next/image";
import Sidebar from "./ui/sidebar";
import File from "./ui/file";

export default function Home() {
  return (
    <div className="w-screen h-screen before:-z-10 before:fixed before:bg-white before:h-screen before:w-full after:-z-10 after:w-1/2 after:fixed after:top-0 after:bg-lime-900 after:h-screen">
      <main className="bg-white w-full h-full max-w-[96rem] m-auto flex">
        <Sidebar/>
        <div className="w-full h-full p-16">
          <File/>
        </div>
      </main>
    </div>
  );
}
