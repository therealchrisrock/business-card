import { ReactNode } from 'react';

export function ThumbnailWrapper({ children }: { children: ReactNode }) {
  return (
    <div className='w-[41px] h-[41px] rounded-full overflow-hidden'>
      {children}
    </div>
  );
}
