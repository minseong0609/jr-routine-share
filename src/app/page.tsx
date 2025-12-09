// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            💪 루틴 공유 커뮤니티
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            검증된 운동 루틴과 식단을 공유하고, 원클릭으로 복사하세요
          </p>
          
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              루틴 탐색하기
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
              루틴 만들기
            </button>
          </div>
        </div>

        {/* 기능 소개 */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">루틴 탐색</h3>
            <p className="text-gray-600">
              목표별, 난이도별로 검증된 루틴을 찾아보세요
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-2">원클릭 복사</h3>
            <p className="text-gray-600">
              마음에 드는 루틴을 클릭 한 번으로 내 것으로
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">커뮤니티</h3>
            <p className="text-gray-600">
              나만의 루틴을 공유하고 다른 사람들과 소통하세요
            </p>
          </div>
        </div>

        {/* 통계 */}
        <div className="mt-16 text-center">
          <div className="inline-flex gap-12 bg-white px-12 py-6 rounded-xl shadow-sm">
            <div>
              <div className="text-3xl font-bold text-blue-600">1,234</div>
              <div className="text-sm text-gray-600">공유된 루틴</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">5,678</div>
              <div className="text-sm text-gray-600">활성 사용자</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">12,345</div>
              <div className="text-sm text-gray-600">복사된 횟수</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
