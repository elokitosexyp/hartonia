import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: 'bg-accent-cyan text-bg-primary hover:bg-accent-blue',
    secondary: 'bg-bg-tertiary text-text-primary hover:bg-border-light',
    outline: 'border-2 border-border-light text-text-primary hover:border-accent-cyan hover:bg-accent-cyan/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  };

  return (
    <button
      className={cn(
        'font-semibold rounded-xl transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
