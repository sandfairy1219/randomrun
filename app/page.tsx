"use client"
import Image from "next/image";
import { useState } from "react";
import { randomcookie1, randomcookie2, randompet, randomepisode } from "./function";

export default function Home() {
  const [cookieName1, setCookieName1] = useState("선달 미정");
  const [cookieimg1, setCookieimg1] = useState("/img/cookie/0.webp");
  const [cookieNumber1, setCookieNumber1] = useState<number | null>(null);

  const [cookieName2, setCookieName2] = useState("이달 미정");
  const [cookieimg2, setCookieimg2] = useState("/img/cookie/0.webp");
  const [cookieNumber2, setCookieNumber2] = useState<number | null>(null);

  const [petName, setPetName] = useState("펫 미정");
  const [petimg, setPetimg] = useState("/img/pet/0.webp");

  const [episodeName, setEpisodeName] = useState("에피소드 미정");
  const [episodeimg, setEpisodeimg] = useState("/img/episode/0.webp");

  const [rerollCount, setRerollCount] = useState(30);
  const [inputReroll, setInputReroll] = useState("30");

  // 각 에피소드별 조합 이미지 저장 (선달, 펫, 이달)
  const [combo1Images, setCombo1Images] = useState({ cookie1: "", pet: "", cookie2: "" });
  const [combo2Images, setCombo2Images] = useState({ cookie1: "", pet: "", cookie2: "" });
  const [combo3Images, setCombo3Images] = useState({ cookie1: "", pet: "", cookie2: "" });
  const [combo4Images, setCombo4Images] = useState({ cookie1: "", pet: "", cookie2: "" });
  const [combo5Images, setCombo5Images] = useState({ cookie1: "", pet: "", cookie2: "" });
  const [combo6Images, setCombo6Images] = useState({ cookie1: "", pet: "", cookie2: "" });

  // 각 에피소드별 점수 저장
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");
  const [score3, setScore3] = useState("");
  const [score4, setScore4] = useState("");
  const [score5, setScore5] = useState("");
  const [score6, setScore6] = useState("");

  // 합산 점수
  const [totalScore, setTotalScore] = useState("");


  const handleRandomCookie1 = () => {
    const cookieData = randomcookie2(cookieNumber2); // 이달 번호 제외
    setCookieName1(cookieData.name);
    setCookieNumber1(cookieData.number);
    const imgPath = `/img/cookie/${cookieData.number}.webp`;
    setCookieimg1(imgPath);
    // "미정"이 아닌 경우에만 리롤 차감 (리롤)
    if (!cookieName1.endsWith("미정")) {
      setRerollCount(prev => prev - 1);
    }
  };

  const handleRandomCookie2 = () => {
    const cookieData = randomcookie2(cookieNumber1); // 선달 번호 제외
    setCookieName2(cookieData.name);
    setCookieNumber2(cookieData.number);
    const imgPath = `/img/cookie/${cookieData.number}.webp`;
    setCookieimg2(imgPath);
    // "미정"이 아닌 경우에만 리롤 차감 (리롤)
    if (!cookieName2.endsWith("미정")) {
      setRerollCount(prev => prev - 1);
    }
  };

  const handleRandomPet = () => {
    const petData = randompet();
    setPetName(petData.name);
    const imgPath = `/img/pet/${petData.number}.webp`;
    setPetimg(imgPath);
    // "미정"이 아닌 경우에만 리롤 차감 (리롤)
    if (!petName.endsWith("미정")) {
      setRerollCount(prev => prev - 1);
    }
  };

  const handleRandomEpisode = () => {
    const episodeData = randomepisode();
    setEpisodeName(episodeData.name);
    const imgPath = `/img/episode/${episodeData.number}.webp`;
    setEpisodeimg(imgPath);
  };

  const handleReset = () => {
    setCookieName1("선달 미정");
    setCookieimg1("/img/cookie/0.webp");
    setCookieNumber1(null);
    setCookieName2("이달 미정");
    setCookieimg2("/img/cookie/0.webp");
    setPetName("펫 미정");
    setPetimg("/img/pet/0.webp");
    setEpisodeName("에피소드 미정");
    setEpisodeimg("/img/episode/0.webp");
  };

  const handleSwap = () => {
    // 선달과 이달 쿠키 교체
    const tempName = cookieName1;
    const tempImg = cookieimg1;
    const tempNumber = cookieNumber1;

    setCookieName1(cookieName2);
    setCookieimg1(cookieimg2);
    setCookieNumber1(null); // 이달 숫자는 추적 안 하므로 null

    setCookieName2(tempName);
    setCookieimg2(tempImg);
  };

  const saveCombo = (slotNumber: number) => {
    // 미정 상태 체크
    if (cookieName1.endsWith("미정") || cookieName2.endsWith("미정") || petName.endsWith("미정")) {
      alert("선달, 이달, 펫을 모두 뽑아주세요!");
      return;
    }

    // 현재 이미지 경로 저장
    const comboImages = {
      cookie1: cookieimg1,
      pet: petimg,
      cookie2: cookieimg2
    };

    switch (slotNumber) {
      case 1: setCombo1Images(comboImages); break;
      case 2: setCombo2Images(comboImages); break;
      case 3: setCombo3Images(comboImages); break;
      case 4: setCombo4Images(comboImages); break;
      case 5: setCombo5Images(comboImages); break;
      case 6: setCombo6Images(comboImages); break;
    }
  };

  const calculateTotalScore = () => {
    const scores = [score1, score2, score3, score4, score5, score6];
    const total = scores.reduce((sum, score) => {
      // 쉼표 제거 후 숫자로 변환
      const cleanScore = score.replace(/,/g, '');
      const num = parseFloat(cleanScore) || 0;
      return sum + num;
    }, 0);
    // 천 단위 구분 기호 추가
    const formattedTotal = total.toLocaleString('ko-KR');
    setTotalScore(formattedTotal);
  };

  const deleteCombo = (slotNumber: number) => {
    const emptyImages = { cookie1: "", pet: "", cookie2: "" };

    switch (slotNumber) {
      case 1:
        setCombo1Images(emptyImages);
        setScore1("");
        break;
      case 2:
        setCombo2Images(emptyImages);
        setScore2("");
        break;
      case 3:
        setCombo3Images(emptyImages);
        setScore3("");
        break;
      case 4:
        setCombo4Images(emptyImages);
        setScore4("");
        break;
      case 5:
        setCombo5Images(emptyImages);
        setScore5("");
        break;
      case 6:
        setCombo6Images(emptyImages);
        setScore6("");
        break;
    }
  };


  return (
    <div className="min-h-screen bg-[#1d1d1d] text-gray-200 py-8 transition-colors flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold text-center">
        쿠키런 랜덤런 뽑기툴
      </h1>
      <div className="flex justify-center items-center gap-10 border-4 border-gray-200 rounded-[20px] p-10 w-[80%] max-w-6xl min-h-[400px]" id="container">

        {/* 선달 슬롯 */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-bold">선달</div>
          <div id="cookieimg1" className="w-32 h-32 rounded-lg flex items-center justify-center overflow-hidden">
            {cookieimg1.endsWith('.webp') ? (
              <Image src={cookieimg1} alt="쿠키 이미지" width={128} height={128} className="w-full h-full object-contain" />
            ) : (
              <span>{cookieimg1}</span>
            )}
          </div>
          <div id="cookiename1" className="text-xl font-bold text-center">{cookieName1}</div>
          <button onClick={handleRandomCookie1} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hover:shadow-lg transition-colors cursor-pointer">
            뽑기
          </button>
        </div>

        {/* 이달 슬롯 */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-bold">이달</div>
          <div id="cookieimg2" className="w-32 h-32 rounded-lg flex items-center justify-center overflow-hidden">
            {cookieimg2.endsWith('.webp') ? (
              <Image src={cookieimg2} alt="쿠키 이미지" width={128} height={128} className="w-full h-full object-contain" />
            ) : (
              <span>{cookieimg2}</span>
            )}
          </div>
          <div id="cookiename2" className="text-xl font-bold text-center">{cookieName2}</div>
          <button onClick={handleRandomCookie2} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hover:shadow-lg transition-colors cursor-pointer">
            뽑기
          </button>
        </div>

        {/* 펫 슬롯 */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-bold">펫</div>
          <div id="petimg" className="w-32 h-32 rounded-lg flex items-center justify-center">
            {petimg.endsWith('.webp') ? (
              <Image src={petimg} alt="펫 이미지" width={96} height={96} className="object-contain" style={{ width: "auto", height: "auto" }} />
            ) : (
              <span>{petimg}</span>
            )}
          </div>
          <div id="petname" className="text-xl font-bold text-center">{petName}</div>
          <button onClick={handleRandomPet} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hover:shadow-lg transition-colors cursor-pointer">
            뽑기
          </button>
        </div>

        {/* 에피소드 슬롯 */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-bold">에피소드</div>
          <div id="episodeimg" className="w-32 h-32  rounded-lg flex items-center justify-center">
            {episodeimg.endsWith('.webp') ? (
              <Image src={episodeimg} alt="에피소드 이미지" width={96} height={96} className="object-contain" style={{ width: "auto", height: "auto" }} />
            ) : (
              <span>{episodeimg}</span>
            )}
          </div>
          <div id="episodename" className="text-xl font-bold text-center">{episodeName}</div>
          <button onClick={handleRandomEpisode} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded hover:shadow-lg transition-colors cursor-pointer">
            뽑기
          </button>
        </div>

        {/* 리롤 카운터 */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <label htmlFor="rerollInput" className="text-xl font-bold">리롤 횟수:</label>
            <input
              id="rerollInput"
              type="number"
              value={inputReroll}
              onChange={(e) => {
                setInputReroll(e.target.value);
                const num = parseInt(e.target.value);
                if (!isNaN(num) && num >= 0) {
                  setRerollCount(num);
                }
              }}
              className="w-24 px-3 py-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500"
              min="0"
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="remainingRerollInput" className="text-xl font-bold text-blue-400">남은 리롤:</label>
            <input
              id="remainingRerollInput"
              type="number"
              value={rerollCount}
              onChange={(e) => {
                const num = parseInt(e.target.value);
                if (!isNaN(num) && num >= 0) {
                  setRerollCount(num);
                  setInputReroll(e.target.value);
                }
              }}
              className="w-24 px-3 py-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center font-bold text-xl"
              min="0"
            />
          </div>
          <button
            onClick={handleReset}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-lg hover:shadow-lg transition-colors cursor-pointer font-bold text-lg"
          >
            초기화
          </button>
          <button
            onClick={handleSwap}
            className="mt-2 bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg hover:shadow-lg transition-colors cursor-pointer font-bold text-lg"
          >
            선/이달 교체
          </button>
        </div>
      </div>

      {/* 기록창 */}
      <div className="flex flex-col border-4 border-gray-200 rounded-[20px] p-10 w-[80%] max-w-6xl gap-4">
        {/* 에피1 */}
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold w-24">에피1</h2>
          <div className="flex gap-2 w-40">
            {combo1Images.cookie1 && (
              <Image src={combo1Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo1Images.pet && (
              <Image src={combo1Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo1Images.cookie2 && (
              <Image src={combo1Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score1}
            onChange={(e) => setScore1(e.target.value)}
            className="w-120 px-4 py-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(1)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(1)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            삭제
          </button>
        </div>

        {/* 에피2 */}
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold w-24">에피2</h2>
          <div className="flex gap-2 w-40">
            {combo2Images.cookie1 && (
              <Image src={combo2Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo2Images.pet && (
              <Image src={combo2Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo2Images.cookie2 && (
              <Image src={combo2Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score2}
            onChange={(e) => setScore2(e.target.value)}
            className="w-120 px-4 py-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(2)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(2)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            삭제
          </button>
        </div>

        {/* 에피3 */}
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold w-24">에피3</h2>
          <div className="flex gap-2 w-40">
            {combo3Images.cookie1 && (
              <Image src={combo3Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo3Images.pet && (
              <Image src={combo3Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo3Images.cookie2 && (
              <Image src={combo3Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score3}
            onChange={(e) => setScore3(e.target.value)}
            className="w-120 px-4 py-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(3)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(3)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            삭제
          </button>
        </div>

        {/* 에피4 */}
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold w-24">에피4</h2>
          <div className="flex gap-2 w-40">
            {combo4Images.cookie1 && (
              <Image src={combo4Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo4Images.pet && (
              <Image src={combo4Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo4Images.cookie2 && (
              <Image src={combo4Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score4}
            onChange={(e) => setScore4(e.target.value)}
            className="w-120 px-4 py-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(4)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(4)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            삭제
          </button>
        </div>

        {/* 에피5 */}
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold w-24">에피5</h2>
          <div className="flex gap-2 w-40">
            {combo5Images.cookie1 && (
              <Image src={combo5Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo5Images.pet && (
              <Image src={combo5Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo5Images.cookie2 && (
              <Image src={combo5Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score5}
            onChange={(e) => setScore5(e.target.value)}
            className="w-120 px-4 py-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(5)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(5)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            삭제
          </button>
        </div>

        {/* 스엪 */}
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold w-24">스엪</h2>
          <div className="flex gap-2 w-40">
            {combo6Images.cookie1 && (
              <Image src={combo6Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo6Images.pet && (
              <Image src={combo6Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
            {combo6Images.cookie2 && (
              <Image src={combo6Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-12 h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score6}
            onChange={(e) => setScore6(e.target.value)}
            className="w-120 px-4 py-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(6)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(6)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            삭제
          </button>
        </div>

        {/* 점수 합산 */}
        <div className="flex items-center gap-4 mt-6 pt-6 border-t-2 border-gray-600">
          <h2 className="text-2xl font-bold w-24">합산</h2>
          <div className="flex gap-2 w-40"></div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={totalScore}
            readOnly
            className="w-120 px-4 py-2 bg-gray-800 text-white rounded border-2 border-green-500 focus:outline-none text-center text-xl font-bold"
            placeholder="점수"
          />
          <button
            onClick={calculateTotalScore}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold"
          >
            점수 합산
          </button>
          <button
            className="bg-red-500 text-white py-2 px-6 rounded font-bold invisible"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
