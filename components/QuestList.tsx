import React from 'react';
import { Quest } from '../types';
import QuestItem from './QuestItem';

interface QuestListProps {
  quests: Quest[];
  onToggleComplete: (id: string) => void;
}

const QuestList: React.FC<QuestListProps> = ({ quests, onToggleComplete }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mx-4 mt-4 md:mx-6">
      <h2 className="text-warm-gray text-sm md:text-base font-medium mb-3">퀘스트/할 일</h2>
      <ul>
        {quests.map((quest) => (
          <QuestItem key={quest.id} quest={quest} onToggleComplete={onToggleComplete} />
        ))}
      </ul>
    </div>
  );
};

export default QuestList;