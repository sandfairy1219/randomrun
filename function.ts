// 쿠키 등급 정의: C, B, A, S, SS, L
type CookieTier = 'C' | 'B' | 'A' | 'S' | 'SS' | 'L';

const cookieData: Record<number, { name: string, tier: CookieTier }> = {
    0: { name: "용감한 쿠키", tier: 'C' },
    1: { name: "명량한 쿠키양", tier: 'C' },
    2: { name: "구름맛 쿠키", tier: 'B' },
    3: { name: "딸기맛 쿠키", tier: 'B' },
    4: { name: "버터크림 초코쿠키", tier: 'B' },
    5: { name: "쿠키앤크림 쿠키", tier: 'B' },
    6: { name: "공주맛 쿠키", tier: 'A' },
    7: { name: "근육맛 쿠키", tier: 'A' },
    8: { name: "보더맛 쿠키", tier: 'A' },
    9: { name: "용사맛 쿠키", tier: 'A' },
    10: { name: "좀비맛 쿠키", tier: 'A' },
    11: { name: "커피맛 쿠키", tier: 'A' },
    12: { name: "산타맛 쿠키", tier: 'A' },
    13: { name: "닌자맛 쿠키", tier: 'S' },
    14: { name: "천사맛 쿠키", tier: 'S' },
    15: { name: "해적맛 쿠키", tier: 'S' },
    16: { name: "피겨여왕맛 쿠키", tier: 'S' },
    17: { name: "히어로맛 쿠키", tier: 'S' },
    18: { name: "특전사맛 쿠키", tier: 'S' },
    19: { name: "치어리더맛 쿠키", tier: 'S' },
    20: { name: "악마맛 쿠키", tier: 'S' },
    21: { name: "구미호맛 쿠키", tier: 'S' },
    22: { name: "의적맛 쿠키", tier: 'S' },
    23: { name: "마법사맛 쿠키", tier: 'S' },
    24: { name: "요정맛 쿠키", tier: 'S' },
    25: { name: "락스타맛 쿠키", tier: 'S' },
    26: { name: "음유시인맛 쿠키", tier: 'S' },
    27: { name: "체리맛 쿠키", tier: 'S' },
    28: { name: "눈설탕맛 쿠키", tier: 'S' },
    29: { name: "핑크초코 쿠키", tier: 'S' },
    30: { name: "예언자맛 쿠키", tier: 'S' },
    31: { name: "피스타치오맛 쿠키", tier: 'S' },
    32: { name: "연금술사맛 쿠키", tier: 'S' },
    33: { name: "뱀파이어맛 쿠키", tier: 'S' },
    34: { name: "풋사과맛 쿠키", tier: 'S' },
    35: { name: "치즈케이크맛 쿠키", tier: 'S' },
    36: { name: "소다맛 쿠키", tier: 'S' },
    37: { name: "탐험가맛 쿠키", tier: 'S' },
    38: { name: "블랙베리맛 쿠키", tier: 'S' },
    39: { name: "키위맛 쿠키", tier: 'S' },
    40: { name: "웨어울프맛 쿠키", tier: 'S' },
    41: { name: "민트초코 쿠키", tier: 'S' },
    42: { name: "코코아맛 쿠키", tier: 'S' },
    43: { name: "홍고추맛 쿠키", tier: 'S' },
    44: { name: "슈크림맛 쿠키", tier: 'S' },
    45: { name: "버블껌맛 쿠키", tier: 'S' },
    46: { name: "벚꽃맛 쿠키", tier: 'S' },
    47: { name: "레몬맛 쿠키", tier: 'S' },
    48: { name: "오렌지맛 쿠키", tier: 'S' },
    49: { name: "라임맛 쿠키", tier: 'S' },
    50: { name: "박하사탕맛 쿠키", tier: 'S' },
    51: { name: "대추맛 쿠키", tier: 'S' },
    52: { name: "복숭아맛 쿠키", tier: 'S' },
    53: { name: "양파맛 쿠키", tier: 'S' },
    54: { name: "시나몬맛 쿠키", tier: 'S' },
    55: { name: "마카롱맛 쿠키", tier: 'S' },
    56: { name: "단팥맛 쿠키", tier: 'S' },
    57: { name: "화이트초코 쿠키", tier: 'S' },
    58: { name: "허브맛 쿠키", tier: 'S' },
    59: { name: "다이노사워 쿠키", tier: 'S' },
    60: { name: "솜사탕맛 쿠키", tier: 'S' },
    61: { name: "롤케이크맛 쿠키", tier: 'S' },
    62: { name: "바나나맛 쿠키", tier: 'S' },
    63: { name: "팬케이크맛 쿠키", tier: 'S' },
    64: { name: "달토끼맛 쿠키", tier: 'S' },
    65: { name: "정글전사 쿠키", tier: 'L' },
    66: { name: "불꽃정령 쿠키", tier: 'L' },
    67: { name: "달빛술사 쿠키", tier: 'L' },
    68: { name: "바다요정 쿠키", tier: 'L' },
    69: { name: "바람궁수 쿠키", tier: 'L' },
    70: { name: "딸기쇼트케이크맛 쿠키", tier: 'S' },
    71: { name: "굴랍자문맛 쿠키", tier: 'S' },
    72: { name: "카주카틀리맛 쿠키", tier: 'S' },
    73: { name: "멜로우버니 쿠키", tier: 'S' },
    74: { name: "오이맛 쿠키", tier: 'S' },
    75: { name: "식혜맛 쿠키", tier: 'S' },
    76: { name: "수정과맛 쿠키", tier: 'S' },
    77: { name: "보리장수맛 쿠키", tier: 'S' },
    78: { name: "바리공주맛 쿠키", tier: 'SS' },
    79: { name: "감자샐러드맛 쿠키", tier: 'S' },
    80: { name: "파김치맛 쿠키", tier: 'S' },
    81: { name: "백김치맛 쿠키", tier: 'S' },
    82: { name: "충무김밥맛 쿠키", tier: 'SS' },
    83: { name: "망개떡맛 쿠키", tier: 'S' },
};

export function randomcookie1(): { name: string, number: number, tier: CookieTier } {
    const randomcookie = Math.floor(Math.random() * 84); // 0 to 83
    const cookie = cookieData[randomcookie];
    console.log(randomcookie);
    console.log(cookie.name);
    return { name: cookie.name, number: randomcookie, tier: cookie.tier };
}

// 등급별 쿠키 뽑기 (선달용)
export function randomcookie1ByTier(allowedTiers: CookieTier[]): { name: string, number: number, tier: CookieTier } {
    const availableCookies = Object.entries(cookieData)
        .filter(([_, data]) => allowedTiers.includes(data.tier))
        .map(([num, _]) => parseInt(num));
    
    if (availableCookies.length === 0) {
        throw new Error('No cookies available for selected tiers');
    }
    
    const randomIndex = Math.floor(Math.random() * availableCookies.length);
    const cookieNumber = availableCookies[randomIndex];
    const cookie = cookieData[cookieNumber];
    
    console.log(cookieNumber);
    console.log(cookie.name);
    return { name: cookie.name, number: cookieNumber, tier: cookie.tier };
}

export function randomcookie2(excludedNumber: number | null): { name: string, number: number, tier: CookieTier } {
    let randomcookie: number;
    do {
        randomcookie = Math.floor(Math.random() * 84); // 0 to 83
    } while (excludedNumber !== null && randomcookie === excludedNumber);

    const cookie = cookieData[randomcookie];
    console.log(randomcookie);
    console.log(cookie.name);
    return { name: cookie.name, number: randomcookie, tier: cookie.tier };
}

// 등급별 쿠키 뽑기 (이달용, 선달 제외)
export function randomcookie2ByTier(excludedNumber: number | null, allowedTiers: CookieTier[]): { name: string, number: number, tier: CookieTier } {
    const availableCookies = Object.entries(cookieData)
        .filter(([num, data]) => {
            const cookieNum = parseInt(num);
            return allowedTiers.includes(data.tier) && 
                   (excludedNumber === null || cookieNum !== excludedNumber);
        })
        .map(([num, _]) => parseInt(num));
    
    if (availableCookies.length === 0) {
        throw new Error('No cookies available for selected tiers');
    }
    
    const randomIndex = Math.floor(Math.random() * availableCookies.length);
    const cookieNumber = availableCookies[randomIndex];
    const cookie = cookieData[cookieNumber];
    
    console.log(cookieNumber);
    console.log(cookie.name);
    return { name: cookie.name, number: cookieNumber, tier: cookie.tier };
}

// 펫 등급 정의: C, B, A, S, E, L
type PetTier = 'C' | 'B' | 'A' | 'S' | 'E' | 'L';

const petData: Record<number, { name: string, tier: PetTier }> = {
    0: { name: "초코방울", tier: 'C' },
    1: { name: "치즈방울", tier: 'C' },
    2: { name: "구름사탕", tier: 'C' },
    3: { name: "산타양말", tier: 'C' },
    4: { name: "조랭이젤리", tier: 'C' },
    5: { name: "좋은손", tier: 'C' },
    6: { name: "뭉치유니콘", tier: 'B' },
    7: { name: "산타모자", tier: 'B' },
    8: { name: "생크림 모카커피", tier: 'B' },
    9: { name: "쌍둥이 덤벨", tier: 'B' },
    10: { name: "포근실타래", tier: 'B' },
    11: { name: "안깐 마늘", tier: 'B' },
    12: { name: "테크노볼", tier: 'B' },
    13: { name: "럭키다이스 형제", tier: 'A' },
    14: { name: "브레인껌", tier: 'A' },
    15: { name: "용의 꼬리", tier: 'A' },
    16: { name: "천사의 별", tier: 'A' },
    17: { name: "플라워콥터", tier: 'A' },
    18: { name: "빛나는 럭키 호박", tier: 'A' },
    19: { name: "공주의 장신구", tier: 'S' },
    20: { name: "꼬마유령", tier: 'S' },
    21: { name: "해적의 폭탄", tier: 'S' },
    22: { name: "눈꽃송이", tier: 'S' },
    23: { name: "젤리코 큐브", tier: 'S' },
    24: { name: "건빵 보급병", tier: 'S' },
    25: { name: "반짝이볼", tier: 'S' },
    26: { name: "황금방울", tier: 'S' },
    27: { name: "불꽃박쥐", tier: 'S' },
    28: { name: "바람이", tier: 'S' },
    29: { name: "여우구슬", tier: 'S' },
    30: { name: "마법사전", tier: 'S' },
    31: { name: "꽃봉오리", tier: 'S' },
    32: { name: "스포트라이트", tier: 'S' },
    33: { name: "로켓폭죽", tier: 'S' },
    34: { name: "통나무케이크", tier: 'S' },
    35: { name: "스노우 글로브", tier: 'S' },
    36: { name: "복주머니", tier: 'S' },
    37: { name: "핑크캔디", tier: 'S' },
    38: { name: "보라보라 향초", tier: 'S' },
    39: { name: "반딧불이", tier: 'S' },
    40: { name: "젤리저울", tier: 'S' },
    41: { name: "코인저울", tier: 'S' },
    42: { name: "참나무 주스통", tier: 'S' },
    43: { name: "토끼사과", tier: 'S' },
    44: { name: "치즈뭉치 고양이", tier: 'S' },
    45: { name: "조각레몬", tier: 'S' },
    46: { name: "배낭이", tier: 'S' },
    47: { name: "집사 유령", tier: 'S' },
    48: { name: "키위새", tier: 'S' },
    49: { name: "털뭉치 멍뭉이", tier: 'S' },
    50: { name: "미스 도레미", tier: 'S' },
    51: { name: "미스 파솔라시", tier: 'S' },
    52: { name: "마시멜로 햄찌", tier: 'S' },
    53: { name: "파프리카 샌드백", tier: 'S' },
    54: { name: "도토리 부엉이", tier: 'S' },
    55: { name: "미니 잭슨 2호", tier: 'S' },
    56: { name: "홍차 찻잔", tier: 'S' },
    57: { name: "레몬 전지", tier: 'S' },
    58: { name: "어린쥐", tier: 'S' },
    59: { name: "백금방울", tier: 'S' },
    60: { name: "미스터 삑", tier: 'S' },
    61: { name: "종이배 선원", tier: 'S' },
    62: { name: "판다만두", tier: 'S' },
    63: { name: "식지 않는 찻잔", tier: 'S' },
    64: { name: "양파 물고기", tier: 'S' },
    65: { name: "시나몬롤 토끼", tier: 'S' },
    66: { name: "파도방울", tier: 'S' },
    67: { name: "캐스터네츠", tier: 'S' },
    68: { name: "찹쌀 하프물범", tier: 'S' },
    69: { name: "회중시계 심판", tier: 'S' },
    70: { name: "허브티팟", tier: 'S' },
    71: { name: "팝핑 용알", tier: 'S' },
    72: { name: "솜사탕 비둘기", tier: 'S' },
    73: { name: "라이트 형제", tier: 'S' },
    74: { name: "사바나나 사자", tier: 'S' },
    75: { name: "팬케이크 원반", tier: 'S' },
    76: { name: "달절구", tier: 'S' },
    77: { name: "초코 왕방울", tier: 'L' },
    78: { name: "방울방울 콩콩이", tier: 'E' },
    79: { name: "작은 케이크 들개", tier: 'S' },
    80: { name: "꼬마북", tier: 'S' },
    81: { name: "앵무할아범", tier: 'S' },
    82: { name: "말랑 에그버니", tier: 'S' },
    83: { name: "오이푸딩 개구리", tier: 'S' },
    84: { name: "흑돌 흑미 선생", tier: 'S' },
    85: { name: "백돌 백미 선생", tier: 'S' },
    86: { name: "용마 인형", tier: 'S' },
    87: { name: "꿀떡 영혼", tier: 'S' },
    88: { name: "다사라 빵", tier: 'S' },
    89: { name: "벌레무당", tier: 'S' },
    90: { name: "깍둑방울", tier: 'S' },
    91: { name: "런중일기", tier: 'S' },
    92: { name: "망개잎 달팽이", tier: 'S' }
};

export function randompet(): { name: string, number: number, tier: PetTier } {
    const randompet = Math.floor(Math.random() * 93); // 0 to 92
    const pet = petData[randompet];
    console.log(randompet);
    console.log(pet.name);
    return { name: pet.name, number: randompet, tier: pet.tier };
}

// 등급별 펫 뽑기
export function randompetByTier(allowedTiers: PetTier[]): { name: string, number: number, tier: PetTier } {
    const availablePets = Object.entries(petData)
        .filter(([_, data]) => allowedTiers.includes(data.tier))
        .map(([num, _]) => parseInt(num));
    
    if (availablePets.length === 0) {
        throw new Error('No pets available for selected tiers');
    }
    
    const randomIndex = Math.floor(Math.random() * availablePets.length);
    const petNumber = availablePets[randomIndex];
    const pet = petData[petNumber];
    
    console.log(petNumber);
    console.log(pet.name);
    return { name: pet.name, number: petNumber, tier: pet.tier };
}

export function randomepisode(): { name: string, number: number } {
    const episodes: Record<number, string> = {
        0: "오븐 탈출",
        1: "원시림",
        2: "용의 협곡",
        3: "마법사들의 도시",
        4: "디저트 파라다이스",
        5: "미지의 토끼굴 여행"

    }
    const randomepisode = Math.floor(Math.random() * 6); // 0 to 5
    const episode = episodes[randomepisode];
    console.log(randomepisode);
    console.log(episode);
    return { name: episode, number: randomepisode };
}