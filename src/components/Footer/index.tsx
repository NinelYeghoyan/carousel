import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 h-10 w-full border-t border-gray-200 bg-background">
      <div className="container mx-auto flex h-full items-center justify-center px-4">
        <p className="text-xs font-medium text-gray-500">
          © 2024 Ninel Yeghoyan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
