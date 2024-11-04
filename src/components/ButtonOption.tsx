import React from 'react';
import './components/ButtonOption.css';

interface ButtonOptionProps {
  label: string;
  icon: string;
}

const ButtonOption: React.FC<ButtonOptionProps> = ({ label, icon }) => {
  return (
    <button className="button-option">
      <div className={`icon ${icon}`}></div>
      <span>{label}</span>
      <span className="arrow">→</span>
    </button>
  );
};

export default ButtonOption;
