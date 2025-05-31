'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Star, Tag, Clock, ForkKnife } from 'lucide-react';

export default function RestaurantCard({ restaurant }) {
  return (
    <div className='restaurant-card card flex flex-col gap-4 bg-green-50 border shadow-md hover:shadow-2xl hover:shadow-green-200 transition duration-300 ease-in-out rounded-xl'>
      <Image
        src={restaurant.image}
        alt={restaurant.name}
        width={500}
        height={300}
        className='rounded-xl w-full h-60 object-cover'
        priority
      />

      <div className='card-content flex flex-col gap-4 p-4'>
        <div className='flex flex-wrap justify-between text-sm text-gray-500'>
          <div className='flex items-center gap-1'>
            <Star size={16} className='text-green-600' />
            {restaurant.rating}
          </div>
          <div className='flex items-center gap-1'>
            <Tag size={16} className='text-green-600' />
            {restaurant.category}
          </div>
          <div className='flex items-center gap-1'>
            <Clock size={16} className='text-green-600' />
            {restaurant.deliveryTime}
          </div>
        </div>

        <div className='flex items-center gap-2 text-green-700'>
          <MapPin size={16} />
          <span className='font-medium'>{restaurant.address}</span>
        </div>

        <div>
          <h2 className='text-lg font-bold'>{restaurant.name}</h2>
          <p className='text-sm text-gray-600'>{restaurant.description}</p>
        </div>

        <Link
          href={`/restaurants/${restaurant._id}`}
          className='flex items-center justify-center gap-2 font-bold bg-green-500 py-2 rounded-full text-white hover:bg-green-600 transition'>
          <ForkKnife size={16} />
          Order Now
        </Link>
      </div>
    </div>
  );
}
