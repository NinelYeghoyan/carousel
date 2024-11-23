import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { VehicleCarouselItemType } from '@/features/carousel/carouselTypes';

interface VehicleCardProps {
  item: VehicleCarouselItemType;
}

const VehicleCard: FC<VehicleCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Image src={item.image} alt={item.name} priority />
      <h3 className="text-center text-lg font-medium">{item.name}</h3>
    </div>
  );
};

export default VehicleCard;
