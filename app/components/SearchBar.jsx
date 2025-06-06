'use client';

import Typical from 'react-typical';
import { Input } from '@/components/ui/input';

export default function SearchBar() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-lg space-x-2 mx-auto">
      <Input
        type="text"
        placeholder="Search"
        className="p-6 text-xl font-bold bg-white dark:bg-black"
      />
      <div>
        <h1>
          <Typical
            steps={[
              'Get your favorite meals delivered fast and fresh, right to your door.',
            ]}
            loop={1}
          />
        </h1>
      </div>
    </div>
  );
}
