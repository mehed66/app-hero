import React from "react";
import { useLoaderData } from "react-router";
import AppsDataCard from "./AppsDataCard";

const Home = () => {
  const appDatas = useLoaderData();
  const featherApp = appDatas.slice(0,8)

  return (
    <div className="bg-[#D2D2D2]">
      <h1 className="text-4xl font-bold text-center pt-8 ">
        We Build <br />
        <span className="text-[#632EE3] ">Productive</span> Apps
      </h1>
      <p className="text-center pt-2 text-sm">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>

      <div className="flex justify-center gap-5 my-8">
        <div className="flex justify-center items-center">
          <a href="https://play.google.com/store/games?hl=en">
            <button className="btn py-6 ">
            <img className="w-8" src={"/assets/Google Play.png"} alt="" />
            Google Play
          </button>
          </a>
        </div>

        <div className=" ">
         <a href="https://www.apple.com/app-store/" >
           <button  className="btn py-6">
            <img className="w-8" src={"/assets/App Store.png"} alt="" />
            App Store
          </button>
         </a>
        </div>
      </div>

      <div>
        <img className="mx-auto" src={"/assets/hero.png"} alt="" />
      </div>

      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
        <h1 className="text-center text-white text-3xl pt-5">
          Trusted by Millions, Built for You
        </h1>
        <div className=" md:flex  justify-around md:pb-5 max-w-[840px] mx-auto pt-5">
          <div>
            <p className="text-[8px] text-center text-white">Total Downloads</p>
            <h1 className="text-[64px] font-extrabold text-white text-center">
              29.6M
            </h1>
            <p className="text-[8px] text-center text-white md:pb-0 pb-8">
              21% more than last month
            </p>
          </div>
          <div>
            <p className="text-[8px] text-center text-white">Total Reviews</p>
            <h1 className="text-[64px] font-extrabold text-white text-center">
              906K
            </h1>
            <p className="text-[8px] text-center text-white md:pb-0 pb-8">
              46% more than last month
            </p>
          </div>
          <div>
            <p className="text-[8px] text-center text-white">Active Apps</p>
            <h1 className="text-[64px] font-extrabold text-white text-center">
              132+
            </h1>
            <p className="text-[8px] text-center text-white md:pb-0 pb-8">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-black text-center text-3xl pt-8">Trending Apps</h1>
        <p className="text-sm text-center text-gray-400">Explore All Trending Apps on the Market developed by us</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2">
          {featherApp.map((appInfo) => (
          <div key={appInfo.id} className="my-4">
            <AppsDataCard appInfo={appInfo} />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
