import React from 'react';

interface LineProps {
  length?: string | number;
}

export default function Line({ length = '100%' }: LineProps) {
  return (
    <div 
      className="h-[1px] bg-zinc-50 self-center"
      style={{
        width: typeof length === 'number' ? `${length}px` : length,
      }}
    />
  );
};