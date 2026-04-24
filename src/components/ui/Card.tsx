import { type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: ElementType;
  onClick?: () => void;
}

export default function Card({ children, className, hover = false, as: Tag = 'div', onClick }: CardProps) {
  return (
    <Tag
      onClick={onClick}
      className={cn(
        'bg-white rounded-xl border border-slate-100 overflow-hidden',
        'shadow-[0_2px_12px_0_rgba(26,47,94,0.08)]',
        hover &&
          'hover:shadow-[0_8px_30px_0_rgba(26,47,94,0.16)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer',
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('px-6 py-4 border-b border-slate-100', className)}>{children}</div>;
}

export function CardBody({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('px-6 py-4', className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('px-6 py-4 bg-slate-50 border-t border-slate-100', className)}>{children}</div>;
}
