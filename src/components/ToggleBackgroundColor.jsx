import React, { useState } from 'react';

const ToggleBackgroundColor = () => {
  const [isDark, setIsDark] = useState(false);

  function handleClick() {
    setIsDark((prev) => !prev);
  }

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${
        isDark ? 'bg-gray-900 text-amber-500' : 'bg-white text-gray-900'
      }`}
    >
      <button
        onClick={handleClick}
        className={`px-6 py-2 mb-4 text-lg font-semibold border-2 rounded-lg transition-all duration-300 ${
          isDark
            ? 'bg-gray-900 text-amber-500 border-amber-500'
            : 'bg-white text-gray-900 border-gray-900'
        }`}
      >
        {isDark ? 'Black Theme' : 'White Theme'}
      </button>

      <section className='text-center'>
        <h1 className='text-4xl font-bold leading-tight'>
          Welcome To A <br /> Real World..
        </h1>
      </section>
    </section>
  );
};

export default ToggleBackgroundColor;
