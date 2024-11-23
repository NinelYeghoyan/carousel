import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-background">
      <h1 className="text-8xl font-extrabold text-primary">404</h1>
      <h2 className="text-3xl font-bold text-black-200">Not Found</h2>
      <p className="mt-2 text-gray-500">Could not find requested resource</p>

      <Button className="mt-5">
        <Link href="/">Go back to Home</Link>
      </Button>
    </div>
  );
}
