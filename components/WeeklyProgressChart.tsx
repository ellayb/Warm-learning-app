import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { WeeklyProgressData } from '../types';

interface WeeklyProgressChartProps {
  data: WeeklyProgressData[];
}

const WeeklyProgressChart: React.FC<WeeklyProgressChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mx-4 mt-4 mb-20 md:mx-6 md:mb-24">
      <h2 className="text-warm-gray text-sm md:text-base font-medium mb-3">주간 학습 진전도</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fill: '#7B7A7A', fontSize: 12 }} />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            tick={{ fill: '#7B7A7A', fontSize: 12 }}
            width={30}
          />
          <Tooltip
            formatter={(value: number) => [`${value}%`, 'Progress']}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid #A3B18A',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#588157' }}
            itemStyle={{ color: '#7B7A7A' }}
          />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#A3B18A"
            strokeWidth={2}
            dot={{ stroke: '#A3B18A', strokeWidth: 2, r: 4 }}
            activeDot={{ stroke: '#588157', strokeWidth: 4, r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyProgressChart;