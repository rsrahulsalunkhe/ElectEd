import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'navy' | 'orange' | 'success' | 'gray' | 'purple' | 'red';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantMap: Record<BadgeVariant, string> = {
  navy: 'bg-navy-50 text-navy border border-navy-100',
  orange: 'bg-orange-50 text-orange-700 border border-orange-100',
  success: 'bg-green-50 text-green-700 border border-green-100',
  gray: 'bg-slate-100 text-slate-600 border border-slate-200',
  purple: 'bg-purple-50 text-purple-700 border border-purple-100',
  red: 'bg-red-50 text-red-700 border border-red-100',
};

export default function Badge({ children, variant = 'gray', className, ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variantMap[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
