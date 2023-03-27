import Image from "next/image";

const index = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Image
        src="https://i.ibb.co/DQw8cKj/pexels-arina-krasnikova-5424945.jpg"
        alt="hello"
        width={200}
        height={200}
        unoptimized
        className="w-full h-[500px] "
      />
      <div className="absolute  flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">Text in the middle</h1>
      </div>
    </div>
  );
};

export default index;
