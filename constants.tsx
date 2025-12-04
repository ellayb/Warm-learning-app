import React from 'react';
import { NavItem } from './types';

// Owl Mascot Icon
export const OwlMascot: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="#A3B18A" fillOpacity="0.3" stroke="#A3B18A" strokeWidth="1.5"/>
    <path d="M9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10Z" fill="#588157"/>
    <path d="M13 10C13 9.44772 13.4477 9 14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11C13.4477 11 13 10.5523 13 10Z" fill="#588157"/>
    <path d="M9 14C10.5 15.5 13.5 15.5 15 14" stroke="#588157" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 8.5C16.5 7 16.5 7 17.5 7C18 7 18 7 18.5 8.5" stroke="#588157" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8.5C7.5 7 7.5 7 6.5 7C6 7 6 7 5.5 8.5" stroke="#588157" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Star Icon for Quests
export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

// Speech Bubble Icon for Quests
export const SpeechBubbleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2ZM20 16H4V4H20V16Z" />
  </svg>
);

// Navigation Icons
export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6m-6 0v-5a1 1 0 011-1h4a1 1 0 011 1v5"
    />
  </svg>
);

export const LearningPathIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.253v13m0-13C10.832 5.477 9.207 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.793 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.793 5 16.5 5s3.332.477 4.5 1.253m-4.5 13C14.793 18.477 13.168 18 11.5 18s-3.332.477-4.5 1.253"
    />
  </svg>
);

export const CommunityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h-1.025a7.5 7.5 0 01-14.95 0H7A7.502 7.502 0 0122 17v-3a4 4 0 00-4-4h-2V7.1a1 1 0 00-1.707-.707L13 6.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 14H7m4-4h6"
    />
    <path d="M10 9a3 3 0 11-6 0 3 3 0 016 0z" />
    <path d="M19 18a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


export const GoalsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19V6a2 2 0 00-2-2H5a2 2 0 00-2 2v13a2 2 0 002 2h4a2 2 0 002-2zm0 0h10a2 2 0 002-2V7a2 2 0 00-2-2h-3m-6 0a2 2 0 002-2V3a1 1 0 00-1-1H5a1 1 0 00-1 1v2a2 2 0 002 2zm10 0a2 2 0 002-2V3a1 1 0 00-1-1h-3a1 1 0 00-1 1v2a2 2 0 002 2z"
    />
  </svg>
);

export const SettingsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.298.665 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);


// Navigation Items Array
export const NAV_ITEMS: NavItem[] = [
  { name: '홈', icon: HomeIcon },
  { name: '학습 경로', icon: LearningPathIcon },
  { name: '커뮤니티', icon: CommunityIcon },
  { name: '목표', icon: GoalsIcon },
  { name: '설정', icon: SettingsIcon },
];

// Placeholder image URL
export const BACKGROUND_IMAGE_URL = 'https://picsum.photos/1200/800?blur=5';
