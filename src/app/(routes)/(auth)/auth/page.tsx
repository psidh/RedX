import Image from "next/image";
export default function Page() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-screen space-x-4 md:pr-36 md:pl-14">
      <img
        src={"/RedX.jpg"}
        alt="RedX Logo"
        className="w-[70%] h-[50%] object-cover lg:w-[70%] md:h-[80%]"
      />
      <div className="flex flex-col items-center justify-center  w-[80%] md:w-[50%]">
        <h1 className="text-red-100 text-4xl mb-6">
          RedX
        </h1>
        <a
          href="/api/auth/signin"
          className="py-2 bg-red-600 hover:bg-red-800 transition-all duration-300 px-8 w-[65%] rounded-full text-center font-semibold"
        >
          SignIn
        </a>
      </div>
    </div>
  );
}
