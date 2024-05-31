import clsx from 'clsx';
import { ReactNode } from 'react';

interface CenterProps {
  children: ReactNode;
  isFullScreen?: boolean;
  className?: string;
}

export default function XCenter({ children, isFullScreen = true, className = '' }: CenterProps) {
  const center = 'flex flex-row justify-center items-center';
  const fullScreenClass = 'w-[100vw] h-[100vh]';
  const centerElement = 'w-full h-full';

  return <div className={clsx(center, isFullScreen ? fullScreenClass : centerElement, className)}>{children}</div>;
}
