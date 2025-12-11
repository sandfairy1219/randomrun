import Link from 'next/link';

export default function PatchNotes() {
  return (
    <div className="min-h-screen bg-[#1d1d1d] text-gray-200 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block text-blue-400 hover:text-blue-300 mb-6">
          ← 뽑기로 돌아가기
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">업데이트 내역</h1>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-gray-700">
            <p className="text-gray-500 mb-4">2025-12-11</p>
            <ul className="space-y-2 text-gray-300">
              <li>• 쿠키 등급별 필터 기능 추가</li>
              <li>• 펫 등급별 필터 기능 추가</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border-2 border-gray-700">
            <p className="text-gray-500 mb-4">2025-12-10</p>
            <ul className="space-y-2 text-gray-300">
              <li>• 모바일 UI 개선</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border-2 border-gray-700">
            <p className="text-gray-500 mb-4">2025-12-01</p>
            <ul className="space-y-2 text-gray-300">
              <li>• 1차 개발 완료</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
