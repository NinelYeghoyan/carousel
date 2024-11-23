'use client';

import { VehicleCarousel } from '@/features/carousel/components/VehicleCarousel';

export default function HomePage() {
  return (
    <div className="px-32 py-10 min-[320px]:px-16 sm:px-20 lg:px-40 lg:py-20 2xl:px-60">
      <VehicleCarousel />
    </div>
  );
}
