import React from 'react';

interface ProgressBarProps {
  progress: number; // Percentage, e.g., 30
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const normalizedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mx-4 mt-4 md:mx-6">
      <h2 className="text-warm-gray text-sm md:text-base font-medium mb-2">오늘의 학습 목표</h2>
      <div className="w-full bg-soft-gray rounded-full h-2.5">
        <div
          className="bg-sage-green h-2.5 rounded-full"
          style={{ width: `${normalizedProgress}%` }}
          aria-valuenow={normalizedProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        ></div>
      </div>
      <p className="text-right text-dark-sage-green text-xs md:text-sm mt-1">{normalizedProgress}% 완료</p>
    </div>
  );
};

export default ProgressBar;