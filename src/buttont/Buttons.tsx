import React from 'react';
import styles from './button.module.css';

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={styles[variant]}>
      {label}
    </button>
  );
};

export default Button; 
  