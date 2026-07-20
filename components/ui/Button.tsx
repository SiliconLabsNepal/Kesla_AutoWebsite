import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button = ({
  variant = 'primary',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) => {
  let baseStyles = 'inline-flex items-center justify-center font-display uppercase tracking-wider text-sm font-semibold rounded-full px-8 py-3 transition-all duration-300 ';
  
  if (variant === 'primary') {
    baseStyles += 'bg-primary-gradient text-on-primary hover:scale-105 shadow-[0_0_20px_rgba(74,139,194,0.25)] hover:shadow-[0_0_30px_rgba(106,180,232,0.4)] border border-transparent';
  } else if (variant === 'secondary') {
    // Glass-style secondary button
    baseStyles += 'bg-surface-variant/20 border border-outline-variant/30 text-primary hover:bg-surface-variant/40 hover:border-outline-variant/50 backdrop-blur-md';
  } else if (variant === 'tertiary') {
    // Text-only in primary
    baseStyles += 'bg-transparent text-primary hover:text-white px-0 py-0 hover:underline underline-offset-4';
  }

  const combinedClassName = `${baseStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
