import Image from "next/image";

export default function loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src={"/loading.gif"} alt="loading" width={100} height={100} />
    </div>
  );
}
