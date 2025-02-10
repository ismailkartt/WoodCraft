import React from 'react';

export const Logo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-800 dark:text-white"
  >
    {/* Testere şeklinde logo */}
    <path
      d="M3 6L6 7L9 6L12 7L15 6L18 7L21 6V14L18 15L15 14L12 15L9 14L6 15L3 14V6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Ahşap doku çizgisi */}
    <path
      d="M3 10L21 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
); 