'use client';

import { useEffect, useState } from 'react';
import { useSearchStore } from '@/store';
import Block from '@/components/blockCard/blockCard';

export default function Post() {
  const { searchValue } = useSearchStore();

  if (!searchValue) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    console.log(searchValue);
  }, []);
  return (
    <div className="ml-[41px] mt-[100px] flex flex-col">
      <Block data={searchValue} />
    </div>
  );
}
