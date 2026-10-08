import Image from "next/image";
import img1 from "../../assets/our process.webp";

export default function Sustainable() {
  return (
    <div className="relative w-full min-h-[360px] overflow-hidden flex items-center justify-between">
      <div
        style={{
          background:
            "linear-gradient(to right, rgb(12, 20, 16) 0%, rgb(10, 26, 18, .9) 38%, rgb(10, 26, 18, .5) 95%)",
        }}
        className="p-12 rounded-4xl ml-24"
      >
        <p className="text-green-600 font-semibold pb-6">
          SUSTAINABLE MOBILITY
        </p>
        <p
          style={{ fontFamily: "var(--font-title)" }}
          className="text-5xl text-white  leading-14"
        >
          A Cleaner <span className="underline">Tomorrow</span>
          <br />
          Is a Shared <span className="underline">Journey</span>
        </p>
      </div>
      <div
        style={{ background: "linear-gradient(to left, rgb(12, 20, 16) 20%, rgb(10, 26, 18, .8) 55%, rgb(10, 26, 18, .5) 95%)"}}
        className="h-[360px] w-[350px] flex flex-col justify-center"
      >
        <div className="w-full flex items-center justify-center py-3 gap-6">
          <Image src={img1} alt="image" className="w-30" />
          <p className="font-semibold text-xl text-white">
            Lower <br />
            Emissions
          </p>
        </div>
        <div className="w-full flex items-center justify-center py-3 gap-6">
          <Image src={img1} alt="image" className="w-30" />
          <p className="font-semibold text-xl text-white">
            Lower <br />
            Emissions
          </p>
        </div>
        <div className="w-full flex items-center justify-center py-3 gap-6">
          <Image src={img1} alt="image" className="w-30" />
          <p className="font-semibold text-xl text-white">
            Lower <br />
            Emissions
          </p>
        </div>
      </div>
    </div>
  );
}
