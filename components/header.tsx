import Image from "next/image";
import profilePic from "../public/avatar_3.jpeg";

export default function Header() {
  return (
    <>
      <div className="sticky top-0 flex-none bg-black">
        <div className="flex place-content-center items-center">
          <div className="flex flex-row items-center py-8">
            <Image
              className="mr-4 h-16 w-16 rounded-full ring-2 ring-white"
              src={profilePic}
              alt="Picture of James Whitney"
            ></Image>
            <h1 className="text-3xl">James Whitney</h1>
          </div>
        </div>
        <div className="px-16">
          <hr></hr>
        </div>
      </div>
    </>
  );
}
