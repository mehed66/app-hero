import React from "react";
import { Link, useLoaderData } from "react-router";
import AppsDataCard from "./AppsDataCard";

const Home = () => {
  const appDatas = useLoaderData();
  const featherApp = appDatas.slice(0, 8);

  return (
    <div className="bg-[#D2D2D2]">
      <h1 className="text-3xl md:text-4xl font-bold text-center pt-6 px-2">
        We Build <br />
        <span className="text-[#632EE3]">Productive</span> Apps
      </h1>
      <p className="text-center pt-2 text-sm md:text-base text-gray-700 px-4">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br className="hidden md:block" />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-8 px-4">
        <a href="https://play.google.com/store/games?hl=en" className="w-full sm:w-auto">
          <button className="btn  sm:w-auto py-4 md:py-6 flex items-center justify-center gap-2">
            <img className="w-6 md:w-8" src={"/assets/Google Play.png"} alt="Google Play" />
            Google Play
          </button>
        </a>

        <a href="https://www.apple.com/app-store/" className="w-full sm:w-auto">
          <button className="btn sm:w-auto py-4 md:py-6 flex items-center justify-center gap-2">
            <img className="w-6 md:w-8" src={"/assets/App Store.png"} alt="App Store" />
            App Store
          </button>
        </a>
      </div>
      <div className="px-4">
        <img className="mx-auto w-full max-w-[500px]" src={"/assets/hero.png"} alt="Hero" />
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-8 py-6">
        <h1 className="text-center text-white text-2xl md:text-3xl font-semibold mb-4 px-2">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex flex-col md:flex-row justify-around items-center gap-6 max-w-[840px] mx-auto">
          <div>
            <p className="text-[10px] text-center text-white">Total Downloads</p>
            <h1 className="text-[48px] md:text-[64px] font-extrabold text-white text-center">
              29.6M
            </h1>
            <p className="text-[10px] text-center text-white">21% more than last month</p>
          </div>
          <div>
            <p className="text-[10px] text-center text-white">Total Reviews</p>
            <h1 className="text-[48px] md:text-[64px] font-extrabold text-white text-center">
              906K
            </h1>
            <p className="text-[10px] text-center text-white">46% more than last month</p>
          </div>
          <div>
            <p className="text-[10px] text-center text-white">Active Apps</p>
            <h1 className="text-[48px] md:text-[64px] font-extrabold text-white text-center">
              132+
            </h1>
            <p className="text-[10px] text-center text-white">31 more will Launch</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-8">
        <h1 className="font-bold text-black text-center text-2xl md:text-3xl">
          Trending Apps
        </h1>
        <p className="text-sm md:text-base text-center text-gray-500 mb-6">
          Explore all trending apps on the market developed by us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featherApp.map((appInfo) => (
            <div key={appInfo.id} className="my-2">
              <AppsDataCard appInfo={appInfo} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Link to="/apps">
            <button className="btn bg-fuchsia-700 text-white px-6 md:px-8">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
