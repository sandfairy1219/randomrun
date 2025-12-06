"use client"
import Image from "next/image";
import { randomcookie1 } from "./function";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1d1d1d] text-gray-200 py-8 transition-colors flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold text-center">
        쿠키런 랜덤런 뽑기툴
      </h1>
      <div className="flex justify-center items-center gap-10 border-4 border-gray-200 rounded-[20px] p-10 w-[80%] max-w-6xl min-h-[400px]" id="container">

        {/* 선달 슬롯 */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-bold">선달</div>
          <div id="cookieimg1" className="w-32 h-32  rounded-lg flex items-center justify-center">
            이미지
          </div>
          <div id="cookiename1" className="text-xl font-bold text-center">선달 미정</div>
          <button onClick={randomcookie1} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hover:shadow-lg transition-colors cursor-pointer">
            뽑기
          </button>
        </div>

        {/* 이달 슬롯 */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-bold">이달</div>
          <div id="cookieimg2" className="w-32 h-32  rounded-lg flex items-center justify-center">
            이미지
          </div>
          <div id="cookiename2" className="text-xl font-bold text-center">이달 미정</div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hover:shadow-lg transition-colors cursor-pointer">
            뽑기
          </button>
        </div>

        {/* 펫 슬롯 */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-bold">펫</div>
          <div id="petimg" className="w-32 h-32  rounded-lg flex items-center justify-center">
            이미지
          </div>
          <div id="petname" className="text-xl font-bold text-center">펫 미정</div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hover:shadow-lg transition-colors cursor-pointer">
            뽑기
          </button>
        </div>

        {/* 에피소드 슬롯 */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-bold">에피소드</div>
          <div id="episodeimg" className="w-32 h-32  rounded-lg flex items-center justify-center">
            이미지
          </div>
          <div id="episodename" className="text-xl font-bold text-center">에피소드 미정</div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hover:shadow-lg transition-colors cursor-pointer">
            뽑기
          </button>
        </div>
      </div>
    </div>
  );
}
