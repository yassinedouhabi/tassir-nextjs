import { Suspense } from 'react';
import { fetchRestaurants } from '@/lib/api/restaurants';
import RestaurantCard from '@/components/restaurant/RestaurantCard';
import EmptyRestaurants from '@/components/restaurant/EmptyRestaurants';

export const metadata = {
  title: 'Tassir - Restaurants',
};

export const revalidate = 0;

export default async function RestaurantsPage() {
  const restaurants = await fetchRestaurants();

  return (
    <section className='restaurants flex-1 py-12'>
      <div className='container'>
        {restaurants.length > 0 ? (
          <>
            <h1 className='text-xl md:text-4xl font-extrabold mb-6 text-green-600 dark:text-green-400'>
              Discover the Best Restaurants in Your City
            </h1>
            <p className='text-sm md:text-lg mb-10 max-w-2xl text-neutral-800 dark:text-neutral-200'>
              Enjoy delicious meals and top-quality dishes with a wide variety
              to suit every taste. Choose your favorite restaurant and start
              your amazing food journey!
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {restaurants.map((r) => (
                <RestaurantCard key={r._id} restaurant={r} />
              ))}
            </div>
          </>
        ) : (
          <Suspense fallback={null}>
            <EmptyRestaurants />
          </Suspense>
        )}
      </div>
    </section>
  );
}
