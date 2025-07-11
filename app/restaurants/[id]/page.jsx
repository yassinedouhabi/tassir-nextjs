import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import Image from 'next/image';
import { MapPin, Star, Clock, CircleChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MapImage from '../../../public/images/map.jpg';
import Link from 'next/link';
import LoadingButton from '@/components/LoadingButton';

// Tab Title: Resataurant Name
export async function generateMetadata({ params }) {
  const { id } = await params;
  const client = await clientPromise;
  const db = client.db('tassir-db');
  const restaurant = await db.collection('restaurants').findOne({ _id: new ObjectId(id) });

  return {
    title: restaurant ? restaurant.name : 'Restaurant',
  };
}

export default async function RestaurantPage({ params }) {
  const { id } = await params;
  const client = await clientPromise;
  const db = client.db('tassir-db');

  const restaurant = await db.collection('restaurants').findOne({ _id: new ObjectId(id) });

  if (!restaurant) {
    return <div className='container'>Restaurant Not Found</div>;
  }

  return (
    <section className='restaurant-details bg-muted min-h-dvh'>
      <div className='container'>
        <div className='max-w-4xl mx-auto bg-white dark:bg-card p-4 md:p-6 rounded-2xl shadow'>
          {/* Back Home Link */}
          <LoadingButton route={'/restaurants'} loading={'Waiting...'} notLoading={'Return'} />

          <div className='flex flex-col md:flex-row-reverse items-start justify-between gap-y-6 md:gap-x-6 w-full border-b-2 border-accent pb-6'>
            {/* Restaurant Image */}
            <div className='image w-full'>
              <Image src={restaurant.image} alt={restaurant.name} width={600} height={400} className='rounded-xl w-full object-contain' />
            </div>
            {/* Restaurant Content */}
            <div className='flex flex-col items-start gap-6'>
              <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300'>
                <Star size={20} className='text-green-700 dark:text-green-400' />
                <span>{restaurant.rating} &bull; Fast & Reliable Delivery</span>
              </div>

              <h1 className='text-3xl font-bold text-green-900 dark:text-green-100'>{restaurant.name}</h1>

              <div className='flex flex-wrap items-center gap-6 text-sm text-gray-700 dark:text-gray-300'>
                <div className='flex items-center gap-2'>
                  <MapPin size={20} className='text-green-700 dark:text-green-400' />
                  <span>{restaurant.address}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Clock size={20} className='text-green-700 dark:text-green-400' />
                  <span>{restaurant.deliveryTime}</span>
                </div>
              </div>

              <p className='text-gray-700 dark:text-gray-200'>{restaurant.description}</p>

              <p className='text-sm text-gray-500 italic'>Tip: Order from your favorite spots and enjoy exclusive discounts and offers!</p>

              <Button className='w-full md:w-1/2'>Order Now</Button>
            </div>
          </div>
          {/* Restaurant Map */}
          <div className='restaurant-map mt-6 flex flex-col gap-6 mb-6'>
            <div className='map-text flex flex-col gap-y-2'>
              <h3 className='text-xl md:text-2xl font-bold'>See If The Restaurant Is Near You</h3>
              <p className='text-xs text-accent-foreground'>Check the map below to find our location and see how close we are to you. We look forward to welcoming you!</p>
            </div>
            <Image src={MapImage} alt='Map showing the restaurant location' className='rounded-xl' />
          </div>

          {/* Policies and Privacy */}
          <p className='text-xs text-muted-foreground'>
            We value your trust and are committed to protecting your privacy. Please take a moment to read our{' '}
            <Link href='/policies' className='underline hover:text-primary'>
              Policies and Privacy Notice
            </Link>
            to understand how we collect, use, and safeguard your information.
          </p>
        </div>
      </div>
    </section>
  );
}
