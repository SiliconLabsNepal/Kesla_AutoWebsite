import React from 'react';

interface PerformanceGaugeProps {
  label: string;
  value: string;
  percentage: number;
}

export const PerformanceGauge = ({ label, value, percentage }: PerformanceGaugeProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <span className="text-on-surface-variant font-display text-xs tracking-wider uppercase">
          {label}
        </span>
        <span className="text-on-background font-display font-medium text-lg">
          {value}
        </span>
      </div>
      <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary shadow-[0_0_10px_rgba(74,139,194,0.5)] transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
