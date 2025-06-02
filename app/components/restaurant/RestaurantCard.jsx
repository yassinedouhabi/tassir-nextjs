'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MapPin, Star, Tag, Clock, ForkKnife } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RestaurantCard({ restaurant }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleOrderClick = () => {
    setIsLoading(true);
    router.push(`/restaurants/${restaurant._id}`);
  };

  return (
    <div className={`${!isLoading ? 'hover:border-green-200 dark:hover:border-accent transform hover:scale-[1.01] bg-green-100 dark:bg-card' : 'opacity-50'} restaurant-card card flex flex-col gap-4 border-2 border-transparent text-card-foreground transition-all duration-200 ease-in-out rounded-xl overflow-hidden`}>
      <Image src={restaurant.image} alt={restaurant.name} width={500} height={300} className='w-full h-60 object-cover' priority />

      <div className='card-content flex flex-col gap-4 p-4'>
        <div className='flex flex-wrap justify-between text-sm text-gray-600 dark:text-gray-300'>
          <div className='flex items-center gap-1'>
            <Star size={16} className='text-green-600 dark:text-green-400' />
            {restaurant.rating}
          </div>
          <div className='flex items-center gap-1'>
            <Tag size={16} className='text-green-600 dark:text-green-400' />
            {restaurant.category}
          </div>
          <div className='flex items-center gap-1'>
            <Clock size={16} className='text-green-600 dark:text-green-400' />
            {restaurant.deliveryTime}
          </div>
        </div>

        <div className='flex items-center gap-2 text-green-800 dark:text-green-300'>
          <MapPin size={16} />
          <span className='font-medium'>{restaurant.address}</span>
        </div>

        <div>
          <h2 className='text-lg font-bold text-green-900 dark:text-green-100'>{restaurant.name}</h2>
          <p className='text-sm text-gray-700 dark:text-gray-300'>{restaurant.description}</p>
        </div>

        <Button onClick={handleOrderClick} disabled={isLoading} className='flex items-center justify-center gap-2 font-semibold bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white py-2 rounded-full transition'>
          {isLoading ? <span className='animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4' /> : <ForkKnife size={16} />}
          {isLoading ? 'Please Wait' : 'Order Now'}
        </Button>
      </div>
    </div>
  );
}
