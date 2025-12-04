import React from 'react';

/**
 * Represents a navigation item in the bottom navigation bar.
 */
export interface NavItem {
  name: string;
  icon: React.ElementType; // React component for the icon
}

/**
 * Represents a quest or to-do item.
 */
export interface Quest {
  id: string;
  text: string;
  completed: boolean;
}

/**
 * Represents data for the weekly learning progress chart.
 */
export interface WeeklyProgressData {
  name: string; // e.g., '월', '화'
  progress: number; // Percentage or value
}