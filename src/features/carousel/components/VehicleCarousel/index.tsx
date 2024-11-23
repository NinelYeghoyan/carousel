'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { VEHICLE_CAROUSEL_DATA } from '@/features/carousel/_mockData';
import { CHUNK_SIZE } from '@/features/carousel/carouselConstants';
import type { VehicleCarouselItemType } from '@/features/carousel/carouselTypes';
import VehicleCard from '@/features/carousel/components/VehicleCard';
import VehicleSkeleton from '@/features/carousel/components/VehicleSkeleton';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { chunkArray } from '@/utils';

const VehicleCardWrapper = ({ item }: { item: VehicleCarouselItemType }) => {
  return (
    <Card>
      <CardContent className="flex aspect-square items-center justify-center p-4">
        <VehicleCard item={item} />
      </CardContent>
    </Card>
  );
};

export const VehicleCarousel = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { lgUp: isDesktop } = useBreakpoint();

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSlideInfo = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
      setTotalSlides(carouselApi.scrollSnapList().length);
    };

    carouselApi.on('select', updateSlideInfo);
    updateSlideInfo();

    return () => {
      carouselApi.off('select', updateSlideInfo);
    };
  }, [carouselApi]);

  const groupedVehicleData = useMemo(
    () => chunkArray(VEHICLE_CAROUSEL_DATA, CHUNK_SIZE),
    [],
  );

  const renderSkeleton = useCallback(() => <VehicleSkeleton />, []);

  const renderCarouselItems = useCallback(() => {
    return isDesktop
      ? groupedVehicleData.map((group, index) => (
          <CarouselItem key={index}>
            <div className="grid grid-cols-4 gap-4">
              {group.map((item: VehicleCarouselItemType) => (
                <VehicleCardWrapper key={item.id} item={item} />
              ))}
            </div>
          </CarouselItem>
        ))
      : VEHICLE_CAROUSEL_DATA.map((item: VehicleCarouselItemType) => (
          <CarouselItem
            key={item.id}
            className="min-[320px]:basis-1/1 min-[480px]:basis-1/2 sm:basis-1/3 md:basis-1/4"
          >
            <VehicleCardWrapper item={item} />
          </CarouselItem>
        ));
  }, [isDesktop, groupedVehicleData]);

  return isLoading ? (
    renderSkeleton()
  ) : (
    <>
      <Carousel setApi={setCarouselApi}>
        <CarouselContent>{renderCarouselItems()}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="py-2 text-center text-sm text-muted-foreground">
        <span className="font-medium text-black-100">{currentSlide}</span> /{' '}
        {totalSlides}
      </div>
    </>
  );
};
