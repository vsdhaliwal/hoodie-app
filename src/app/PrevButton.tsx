// PrevButton.tsx
import React from 'react';

const PrevButton = ({ onClick }) => {
  const handleClick = () => {
    console.log('prev button clicked');
    if (onClick) {
      onClick();
    }
  };

  return (
    <button type="button" id="prev" onClick={handleClick}>
      &lt;
    </button>
  );
};

export default PrevButton;
