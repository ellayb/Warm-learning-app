import React from 'react';
import { NAV_ITEMS } from '../constants';
import { NavItem } from '../types';

interface NavigationBarProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 flex justify-around items-center rounded-t-2xl z-50">
      {NAV_ITEMS.map((item: NavItem) => (
        <button
          key={item.name}
          onClick={() => onTabChange(item.name)}
          className={`flex flex-col items-center p-2 text-xs font-medium transition-colors duration-200
            ${activeTab === item.name ? 'text-dark-sage-green' : 'text-warm-gray hover:text-sage-green'}`}
        >
          <item.icon className="w-6 h-6 mb-1" />
          <span>{item.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default NavigationBar;