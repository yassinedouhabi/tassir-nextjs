import { fetchRestaurants } from '@/lib/api/restaurants';
import RestaurantCard from '@/components/restaurant/RestaurantCard';

export const metadata = {
  title: 'Tassir - Restaurants',
};

export const revalidate = 0;

export default async function RestaurantsPage() {
  const restaurants = await fetchRestaurants();

  return (
    <section className='py-12'>
      <div className='container'>
        <h1 className='text-4xl font-extrabold mb-6 text-green-700'>
          Discover the Best Restaurants in Your City
        </h1>
        <p className='text-lg text-gray-600 mb-10 max-w-2xl'>
          Enjoy delicious meals and top-quality dishes with a wide variety to
          suit every taste. Choose your favorite restaurant and start your
          amazing food journey!
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {restaurants.map((r) => (
            <RestaurantCard key={r._id} restaurant={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
