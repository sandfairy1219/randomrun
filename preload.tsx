// 이미지 프리로드 컴포넌트
export default function PreloadImages() {
    // 쿠키 이미지 (0-83)
    const cookieImages = Array.from({ length: 84 }, (_, i) => `/img/cookie/${i}.webp`);

    // 펫 이미지 (0-92)
    const petImages = Array.from({ length: 93 }, (_, i) => `/img/pet/${i}.webp`);

    // 에피소드 이미지 (0-5)
    const episodeImages = Array.from({ length: 6 }, (_, i) => `/img/episode/${i}.webp`);

    // 우선순위 조정: 펫(93개) -> 에피소드(6개) -> 쿠키(84개)
    const allImages = [...petImages, ...episodeImages, ...cookieImages];

    return (
        <>
            {allImages.map((src) => (
                <link key={src} rel="preload" as="image" href={src} />
            ))}
        </>
    );
}
