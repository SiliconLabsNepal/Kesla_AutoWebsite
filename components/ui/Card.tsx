import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card = ({ children, className = '', hoverable = false }: CardProps) => {
  let baseStyles = 'bg-surface-container rounded-xl border border-outline-variant/15 overflow-hidden transition-all duration-300';
  
  if (hoverable) {
    baseStyles += ' hover:bg-surface-container-highest hover:border-outline-variant/40 hover:-translate-y-1 hover:shadow-2xl';
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
};
