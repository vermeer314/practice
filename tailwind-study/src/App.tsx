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
    <div className="min-h-screen">
      <nav className="flex"></nav>
    </div>
  );
}

export default App;
