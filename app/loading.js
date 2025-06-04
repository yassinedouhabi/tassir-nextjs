import { Loader2Icon } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-ful h-full absolute inset-0 z-50">
      <Loader2Icon className="animate-spin" size={40} />
    </div>
  );
}
