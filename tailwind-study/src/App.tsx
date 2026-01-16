import './App.css';

const RAMEN_LIST = [
  {
    id: 1,
    name: '진한 돈코츠',
    shop: '코우짱라멘',
    rating: 4.8,
    tags: ['진한육수', '차슈맛집'],
  },
  {
    id: 2,
    name: '미소 라멘',
    shop: '삿포로야',
    rating: 4.5,
    tags: ['구수한', '옥수수토핑'],
  },
  {
    id: 3,
    name: '쇼유 라멘',
    shop: '도쿄정식',
    rating: 4.3,
    tags: ['깔끔한', '해장추천'],
  },
];

function App() {
  return (
    // 최상위 컨테이너
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-300 w-full">
      {/* 사이드바 */}
      <nav className="fixed bottom-0 inset-x-0 md:sticky md:top-0 z-50 md:w-64 h-16 md:h-screen bg-slate-200 border-t md:border-t-0 md:border-r border-slate-200 duration-300">
        <div className="flex md:flex-col items-center md:items-start justify-around md:justify-center h-full p-4 gap-6 md:w-20 md:hover:w-64 group overflow-hidden">
          {/* <div className="hidden md:block text-2xl font-black text-orange-500 mb-8">
            RAMEN TODAY
          </div> */}
          <button className="flex p-2 text-slate-600  md:hover:bg-slate-400 transition-colors">
            <span className="text-xl">🏠</span>
            <span className="ml-2 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              홈
            </span>
          </button>
          <button className="flex p-2 text-slate-600  md:hover:bg-slate-400 transition-colors">
            <span className="text-xl">❤️</span>
            <span className="ml-2 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              저장
            </span>
          </button>
          <button className="flex p-2 text-slate-600  md:hover:bg-slate-400 transition-colors">
            <span className="text-xl">🗓️</span>
            <span className="ml-2 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              TODAY
            </span>
          </button>
          <button className="flex p-2 text-slate-600  md:hover:bg-slate-400 transition-colors">
            <span className="text-xl">🔥</span>
            <span className="ml-2 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              NEW
            </span>
          </button>
          <button className="flex p-2 text-slate-600  md:hover:bg-slate-400 transition-colors">
            <span className="text-xl">👤</span>
            <span className="ml-2 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              MY
            </span>
          </button>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 pb-20 md:pb-0">
        <div className="max-w-[1440px] mx-auto p-6 md:p-12">
          {/* 상단바 */}
          <nav className="flex">
            <div className="hidden md:block text-2xl font-black text-orange-500 mb-8">
              RAMEN TODAY
            </div>
            <form className="">
              <input type="text" />
            </form>
          </nav>
          <div>오늘의 이벤트</div>
          <div>라멘 투데이 랭킹</div>
          <div>신규 리뷰</div>
        </div>
      </main>
    </div>
  );
}

export default App;
