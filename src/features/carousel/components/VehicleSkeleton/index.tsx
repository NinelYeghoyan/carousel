import type { FC } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { CHUNK_SIZE } from '@/features/carousel/carouselConstants';

const VehicleSkeleton: FC = () => {
  const renderSkeletonItems = (className: string) =>
    Array.from({ length: CHUNK_SIZE }).map((_, index) => (
      <Skeleton key={index} className={className} />
    ));

  const renderNavigationSkeletons = () => (
    <>
      <Skeleton className="absolute -left-12 top-2/4 size-8 rounded-full" />
      <Skeleton className="absolute -right-12 top-2/4 size-8 rounded-full" />
    </>
  );

  const renderFooterSkeleton = () => (
    <div className="flex h-9 items-center justify-center py-2">
      <Skeleton className="h-2.5 w-9 rounded-xl" />
    </div>
  );

  return (
    <>
      <div className="hidden lg:block">
        <div className="relative flex items-center">
          {renderNavigationSkeletons()}

          <div className="grid w-full grid-cols-4 gap-4">
            {renderSkeletonItems('aspect-square w-full rounded-xl')}
          </div>
        </div>
        {renderFooterSkeleton()}
      </div>

      <div className="lg:hidden">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: CHUNK_SIZE }).map((_, index) => (
              <CarouselItem
                key={index}
                className="min-[320px]:basis-1/1 min-[480px]:basis-1/2 sm:basis-1/3 md:basis-1/4"
              >
                <Skeleton className="aspect-square w-full rounded-xl" />
              </CarouselItem>
            ))}
          </CarouselContent>
          {renderNavigationSkeletons()}
        </Carousel>
        {renderFooterSkeleton()}
      </div>
    </>
  );
};

export default VehicleSkeleton;
