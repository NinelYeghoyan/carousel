import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="h-20 border-b-[3px] border-accent bg-background shadow-sm">
      <div className="container mx-auto flex h-full items-center justify-center px-4">
        <h5 className="text-center text-base font-semibold capitalize tracking-wide text-gray-800 sm:text-lg md:text-xl lg:text-2xl">
          Vehicle Carousel with Grid Layout and Responsive Design
        </h5>
      </div>
    </header>
  );
};

export default Header;
