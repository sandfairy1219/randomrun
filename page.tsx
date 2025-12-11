"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { randomcookie1, randomcookie2, randomcookie1ByTier, randomcookie2ByTier, randompet, randompetByTier, randomepisode } from "./function";

export default function Home() {
  // Proportional scaling: keep PC layout, shrink uniformly on smaller screens
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const baseSizeRef = useRef<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const updateScale = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Capture desktop/base size once on first measurement
      if (!baseSizeRef.current) {
        // If loaded on desktop, use actual container size; otherwise use a sensible desktop default
        if (window.innerWidth >= 1024) {
          baseSizeRef.current = { width: rect.width, height: rect.height };
        } else {
          // Desktop default to preserve PC proportions when first loading on mobile
          baseSizeRef.current = { width: 1024, height: 576 };
        }
      }
      const base = baseSizeRef.current!;
      const sx = rect.width / base.width;
      const sy = rect.height / base.height;
      const s = Math.min(sx, sy);
      setScale(s < 1 ? s : 1); // no upscaling; desktop remains unchanged
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);
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

  // 쿠키 등급 필터 설정
  type CookieTier = 'C' | 'B' | 'A' | 'S' | 'SS' | 'L';
  const [cookieTierFilter, setCookieTierFilter] = useState<'all' | 'exclude-cba' | 'L-only'>('all');

  // 펫 등급 필터 설정
  type PetTier = 'C' | 'B' | 'A' | 'S' | 'E';
  const [petTierFilter, setPetTierFilter] = useState<'all' | 'S-and-above'>('all');

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
    let cookieData;
    
    if (cookieTierFilter === 'exclude-cba') {
      // C, B, A 제외 (S, SS, L만)
      cookieData = randomcookie1ByTier(['S', 'SS', 'L']);
    } else if (cookieTierFilter === 'L-only') {
      // L급만
      cookieData = randomcookie1ByTier(['L']);
    } else {
      // 전체
      cookieData = randomcookie1();
    }
    
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
    let cookieData;
    
    if (cookieTierFilter === 'exclude-cba') {
      // C, B, A 제외 (S, SS, L만)
      cookieData = randomcookie2ByTier(cookieNumber1, ['S', 'SS', 'L']);
    } else if (cookieTierFilter === 'L-only') {
      // L급만
      cookieData = randomcookie2ByTier(cookieNumber1, ['L']);
    } else {
      // 전체
      cookieData = randomcookie2(cookieNumber1);
    }
    
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
    let petData;
    
    if (petTierFilter === 'S-and-above') {
      // S급 이상 (S, E 포함)
      petData = randompetByTier(['S', 'E', 'L']);
    } else {
      // 전체
      petData = randompet();
    }
    
    const imgPath = `/img/pet/${petData.number}.webp`;
    
    // 이미지 프리로드
    const img = new window.Image();
    img.src = imgPath;
    
    setPetName(petData.name);
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
    <div className="min-h-screen bg-[#1d1d1d] text-gray-200 py-6 sm:py-8 transition-colors flex flex-col items-center gap-6 sm:gap-10">
      <h1 className="text-2xl sm:text-4xl font-bold text-center">
        쿠키런 랜덤런 뽑기툴
      </h1>
      
      {/* 등급 필터 선택 - 가로 한줄 정렬 */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-gray-800 px-4 sm:px-6 py-4 rounded-lg border-2 border-gray-600">
        {/* 쿠키 필터 */}
        <span className="text-base sm:text-xl font-bold text-blue-400 whitespace-nowrap">쿠키:</span>
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={() => setCookieTierFilter('all')}
            className={`px-3 sm:px-5 py-2 rounded-lg font-bold text-xs sm:text-base transition-colors whitespace-nowrap ${
              cookieTierFilter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            전체
          </button>
          <button
            onClick={() => setCookieTierFilter('exclude-cba')}
            className={`px-3 sm:px-5 py-2 rounded-lg font-bold text-xs sm:text-base transition-colors whitespace-nowrap ${
              cookieTierFilter === 'exclude-cba'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            S급 이상
          </button>
          <button
            onClick={() => setCookieTierFilter('L-only')}
            className={`px-3 sm:px-5 py-2 rounded-lg font-bold text-xs sm:text-base transition-colors whitespace-nowrap ${
              cookieTierFilter === 'L-only'
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            L급만
          </button>
        </div>

        {/* 구분선 */}
        <div className="hidden sm:block w-px h-8 bg-gray-600"></div>

        {/* 펫 필터 */}
        <span className="text-base sm:text-xl font-bold text-green-400 whitespace-nowrap">펫:</span>
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={() => setPetTierFilter('all')}
            className={`px-3 sm:px-5 py-2 rounded-lg font-bold text-xs sm:text-base transition-colors whitespace-nowrap ${
              petTierFilter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            전체
          </button>
          <button
            onClick={() => setPetTierFilter('S-and-above')}
            className={`px-3 sm:px-5 py-2 rounded-lg font-bold text-xs sm:text-base transition-colors whitespace-nowrap ${
              petTierFilter === 'S-and-above'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            S급 이상
          </button>
        </div>
      </div>

      <div
        className="flex justify-center items-center gap-6 sm:gap-10 border-2 sm:border-4 border-gray-200 rounded-[12px] sm:rounded-[20px] p-5 sm:p-10 w-[95%] sm:w-[80%] max-w-6xl overflow-hidden aspect-[16/9]"
        id="container"
        ref={containerRef}
      >
        {/* Centering wrapper keeps scaled content centered within the aspect box */}
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="flex justify-center items-center gap-7 sm:gap-10 flex-row"
            style={{
              width: baseSizeRef.current?.width ?? 1024,
              height: baseSizeRef.current?.height ?? 480,
              transform: `scale(${scale})`,
              transformOrigin: "center",
            }}
          >

        {/* 선달 슬롯 */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="text-xl sm:text-xl font-bold">선달</div>
          <div id="cookieimg1" className="w-36 h-36 sm:w-32 sm:h-32 rounded-lg flex items-center justify-center overflow-hidden">
            {cookieimg1.endsWith('.webp') ? (
              <Image src={cookieimg1} alt="쿠키 이미지" width={128} height={128} className="w-full h-full object-contain" unoptimized />
            ) : (
              <span>{cookieimg1}</span>
            )}
          </div>
          <div id="cookiename1" className="text-2xl sm:text-xl font-bold text-center">{cookieName1}</div>
          <button onClick={handleRandomCookie1} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 sm:px-4 rounded hover:shadow-lg transition-colors cursor-pointer text-lg sm:text-base">
            뽑기
          </button>
        </div>

        {/* 이달 슬롯 */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="text-xl sm:text-xl font-bold">이달</div>
          <div id="cookieimg2" className="w-36 h-36 sm:w-32 sm:h-32 rounded-lg flex items-center justify-center overflow-hidden">
            {cookieimg2.endsWith('.webp') ? (
              <Image src={cookieimg2} alt="쿠키 이미지" width={128} height={128} className="w-full h-full object-contain" unoptimized />
            ) : (
              <span>{cookieimg2}</span>
            )}
          </div>
          <div id="cookiename2" className="text-2xl sm:text-xl font-bold text-center">{cookieName2}</div>
          <button onClick={handleRandomCookie2} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 sm:px-4 rounded hover:shadow-lg transition-colors cursor-pointer text-lg sm:text-base">
            뽑기
          </button>
        </div>

        {/* 펫 슬롯 */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="text-xl sm:text-xl font-bold">펫</div>
          <div id="petimg" className="w-36 h-36 sm:w-32 sm:h-32 rounded-lg flex items-center justify-center">
            {petimg.endsWith('.webp') ? (
              <Image src={petimg} alt="펫 이미지" width={128} height={128} className="w-full h-full object-contain" unoptimized priority />
            ) : (
              <span>{petimg}</span>
            )}
          </div>
          <div id="petname" className="text-2xl sm:text-xl font-bold text-center">{petName}</div>
          <button onClick={handleRandomPet} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 sm:px-4 rounded hover:shadow-lg transition-colors cursor-pointer text-lg sm:text-base">
            뽑기
          </button>
        </div>

        {/* 에피소드 슬롯 */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="text-xl sm:text-xl font-bold">에피소드</div>
          <div id="episodeimg" className="w-36 h-36 sm:w-32 sm:h-32  rounded-lg flex items-center justify-center">
            {episodeimg.endsWith('.webp') ? (
              <Image src={episodeimg} alt="에피소드 이미지" width={96} height={96} className="object-contain" style={{ width: "auto", height: "auto" }} unoptimized />
            ) : (
              <span>{episodeimg}</span>
            )}
          </div>
          <div id="episodename" className="text-2xl sm:text-xl font-bold text-center">{episodeName}</div>
          <button onClick={handleRandomEpisode} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 sm:px-4 rounded hover:shadow-lg transition-colors cursor-pointer text-lg sm:text-base">
            뽑기
          </button>
        </div>

        {/* 리롤 카운터 */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <label htmlFor="remainingRerollInput" className="text-2xl sm:text-xl font-bold text-blue-400">남은 리롤:</label>
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
              className="w-32 sm:w-24 px-4 sm:px-3 py-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center font-bold text-2xl sm:text-xl"
              min="0"
            />
          </div>
          <button
            onClick={handleReset}
            className="mt-2 sm:mt-4 bg-red-500 hover:bg-red-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-lg"
          >
            초기화
          </button>
          <button
            onClick={handleSwap}
            className="mt-2 bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-lg"
          >
            선/이달 교체
          </button>
        </div>
          </div>
        </div>
      </div>

      {/* 기록창 */}
      <div
        className="flex justify-center items-center border-2 sm:border-4 border-gray-200 rounded-[12px] sm:rounded-[20px] p-5 sm:p-6 w-[95%] md:w-[80%] max-w-6xl overflow-hidden aspect-[4/3]"
      >
        {/* Center and scale the records area to keep fixed ratio */
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col gap-5 pl-5 sm:pl-8" style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
        {/* 에피1 */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-2xl font-bold w-24 sm:w-24">에피1</h2>
          <div className="flex gap-1 sm:gap-2 w-40 sm:w-48">
            {combo1Images.cookie1 && (
              <Image src={combo1Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo1Images.pet && (
              <Image src={combo1Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo1Images.cookie2 && (
              <Image src={combo1Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score1}
            onChange={(e) => setScore1(e.target.value)}
            className="w-[26rem] sm:w-[24rem] px-5 sm:px-4 py-3 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-2xl sm:text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(1)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(1)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap mr-2 sm:mr-4"
          >
            삭제
          </button>
        </div>

        {/* 에피2 */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-2xl font-bold w-24 sm:w-24">에피2</h2>
          <div className="flex gap-1 sm:gap-2 w-40 sm:w-48">
            {combo2Images.cookie1 && (
              <Image src={combo2Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo2Images.pet && (
              <Image src={combo2Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo2Images.cookie2 && (
              <Image src={combo2Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score2}
            onChange={(e) => setScore2(e.target.value)}
            className="w-[26rem] sm:w-[24rem] px-5 sm:px-4 py-3 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-2xl sm:text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(2)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(2)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap mr-2 sm:mr-4"
          >
            삭제
          </button>
        </div>

        {/* 에피3 */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-2xl font-bold w-24 sm:w-24">에피3</h2>
          <div className="flex gap-1 sm:gap-2 w-40 sm:w-48">
            {combo3Images.cookie1 && (
              <Image src={combo3Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo3Images.pet && (
              <Image src={combo3Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo3Images.cookie2 && (
              <Image src={combo3Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score3}
            onChange={(e) => setScore3(e.target.value)}
            className="w-[26rem] sm:w-[24rem] px-5 sm:px-4 py-3 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-2xl sm:text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(3)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(3)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap mr-2 sm:mr-4"
          >
            삭제
          </button>
        </div>

        {/* 에피4 */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-2xl font-bold w-24 sm:w-24">에피4</h2>
          <div className="flex gap-1 sm:gap-2 w-40 sm:w-48">
            {combo4Images.cookie1 && (
              <Image src={combo4Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo4Images.pet && (
              <Image src={combo4Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo4Images.cookie2 && (
              <Image src={combo4Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score4}
            onChange={(e) => setScore4(e.target.value)}
            className="w-[26rem] sm:w-[24rem] px-5 sm:px-4 py-3 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-2xl sm:text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(4)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(4)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap mr-2 sm:mr-4"
          >
            삭제
          </button>
        </div>

        {/* 에피5 */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-2xl font-bold w-24 sm:w-24">에피5</h2>
          <div className="flex gap-1 sm:gap-2 w-40 sm:w-48">
            {combo5Images.cookie1 && (
              <Image src={combo5Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo5Images.pet && (
              <Image src={combo5Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo5Images.cookie2 && (
              <Image src={combo5Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score5}
            onChange={(e) => setScore5(e.target.value)}
            className="w-[26rem] sm:w-[24rem] px-5 sm:px-4 py-3 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-2xl sm:text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(5)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(5)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap mr-2 sm:mr-4"
          >
            삭제
          </button>
        </div>

        {/* 스엪 */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-2xl font-bold w-24 sm:w-24">스엪</h2>
          <div className="flex gap-1 sm:gap-2 w-32 sm:w-40">
            {combo6Images.cookie1 && (
              <Image src={combo6Images.cookie1} alt="선달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo6Images.pet && (
              <Image src={combo6Images.pet} alt="펫" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
            {combo6Images.cookie2 && (
              <Image src={combo6Images.cookie2} alt="이달" width={48} height={48} className="rounded object-contain w-10 h-10 sm:w-12 sm:h-12" />
            )}
          </div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={score6}
            onChange={(e) => setScore6(e.target.value)}
            className="w-[26rem] sm:w-[24rem] px-5 sm:px-4 py-3 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none focus:border-blue-500 text-center text-2xl sm:text-xl"
            placeholder="점수"
          />
          <button
            onClick={() => saveCombo(6)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap"
          >
            조합 저장
          </button>
          <button
            onClick={() => deleteCombo(6)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap mr-2 sm:mr-4"
          >
            삭제
          </button>
        </div>

        {/* 점수 합산 */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-gray-600">
          <h2 className="text-2xl sm:text-2xl font-bold w-24 sm:w-24">합산</h2>
          <div className="flex gap-1 sm:gap-2 w-40 sm:w-48"></div>
          <div className="flex-1"></div>
          <input
            type="text"
            value={totalScore}
            readOnly
            className="w-[28rem] sm:w-[24rem] px-4 sm:px-4 py-3 bg-gray-800 text-white rounded border-2 border-green-500 focus:outline-none text-center text-2xl sm:text-xl font-bold"
            placeholder="점수"
          />
          <button
            onClick={calculateTotalScore}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 sm:px-6 rounded hover:shadow-lg transition-colors cursor-pointer font-bold text-base sm:text-base whitespace-nowrap"
          >
            점수 합산
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 sm:px-6 rounded font-bold invisible"
          >
            삭제
          </button>
          </div>
        </div>
        </div>
}
    </div>
    </div>
  );
}