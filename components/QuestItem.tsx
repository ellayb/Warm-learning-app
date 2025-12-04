import React from 'react';
import { StarIcon, SpeechBubbleIcon } from '../constants';
import { Quest } from '../types';

interface QuestItemProps {
  quest: Quest;
  onToggleComplete: (id: string) => void;
}

const QuestItem: React.FC<QuestItemProps> = ({ quest, onToggleComplete }) => {
  const textColorClass = quest.completed ? 'text-warm-gray line-through' : 'text-dark-sage-green';

  return (
    <li
      className="flex items-center justify-between p-3 rounded-lg bg-light-beige shadow-sm mb-2 cursor-pointer transition-all duration-200 hover:bg-beige"
      onClick={() => onToggleComplete(quest.id)}
    >
      <div className="flex items-center flex-grow">
        <StarIcon className={`w-5 h-5 mr-3 ${quest.completed ? 'text-soft-gray' : 'text-sage-green'}`} />
        <span className={`text-sm md:text-base font-medium ${textColorClass}`}>
          {quest.text}
        </span>
      </div>
      <SpeechBubbleIcon className="w-4 h-4 text-warm-gray ml-auto" />
    </li>
  );
};

export default QuestItem;