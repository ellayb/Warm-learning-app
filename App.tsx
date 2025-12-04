import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import QuestList from './components/QuestList';
import WeeklyProgressChart from './components/WeeklyProgressChart';
import NavigationBar from './components/NavigationBar';
import { Quest, WeeklyProgressData } from './types';
import { BACKGROUND_IMAGE_URL } from './constants';

const App: React.FC = () => {
  // Initialize username from localStorage, default to '수줍은 학습자'
  const [username, setUsername] = useState<string>(() => {
    const savedUsername = localStorage.getItem('appUsername');
    return savedUsername || '수줍은 학습자';
  });
  // State for the username input field
  const [inputUsername, setInputUsername] = useState<string>(username === '수줍은 학습자' ? '' : username);

  const [learningProgress, setLearningProgress] = useState<number>(30); // 0-100
  const [quests, setQuests] = useState<Quest[]>([
    { id: '1', text: 'AI 추천 맞춤 학습 30분 완료', completed: false },
    { id: '2', text: '위클리 커뮤니티에 질문 1개 고민', completed: false },
    { id: '3', text: '오늘의 요약 노트 작성', completed: true },
  ]);
  const [weeklyData] = useState<WeeklyProgressData[]>([
    { name: '월', progress: 65 },
    { name: '화', progress: 70 },
    { name: '수', progress: 55 },
    { name: '목', progress: 80 },
    { name: '금', progress: 75 },
    { name: '토', progress: 90 },
    { name: '일', progress: 85 },
  ]);
  const [activeTab, setActiveTab] = useState<string>('홈');

  const handleToggleQuestComplete = (id: string) => {
    setQuests((prevQuests) =>
      prevQuests.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest
      )
    );
  };

  const handleSaveUsername = () => {
    if (inputUsername.trim()) {
      setUsername(inputUsername.trim());
      localStorage.setItem('appUsername', inputUsername.trim());
    }
  };

  useEffect(() => {
    // In a real app, you might fetch initial data here.
    // For this demo, we use static data and states.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center pb-16 md:pb-20 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      <div className="absolute inset-0 bg-light-beige opacity-90 backdrop-blur-sm"></div> {/* Warm, diffused background layer */}
      <div className="relative w-full max-w-md mx-auto py-4 md:py-6">
        {(username === '수줍은 학습자' && !localStorage.getItem('appUsername')) ? (
          <div className="bg-white p-4 rounded-xl shadow-sm mx-4 mt-4 md:mx-6 flex flex-col items-center">
            <p className="text-warm-gray text-sm md:text-base font-medium mb-3">사용자 이름을 입력해주세요:</p>
            <input
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              placeholder="이름을 입력하세요"
              className="w-full p-2 border border-soft-gray rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-sage-green"
              aria-label="사용자 이름 입력"
            />
            <button
              onClick={handleSaveUsername}
              className="bg-sage-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-dark-sage-green transition-colors duration-200 disabled:opacity-50"
              disabled={!inputUsername.trim()}
            >
              이름 저장
            </button>
          </div>
        ) : (
          <Header username={username} />
        )}
        <ProgressBar progress={learningProgress} />
        <QuestList quests={quests} onToggleComplete={handleToggleQuestComplete} />
        <WeeklyProgressChart data={weeklyData} />
      </div>
      <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;