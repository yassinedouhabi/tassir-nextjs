import Link from "next/link";
import { MapPin, Star, Tag, Clock, ForkKnife } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Tassir - Restaurants",
};

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://tassir-nextjs.vercel.app";

export async function fetchRestaurants() {
  const res = await fetch(`${BASE_URL}/api/restaurants`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch restaurants");

  const restaurants = await res.json();
  return restaurants;
}

export default async function Page() {
  const restaurants = await fetchRestaurants();

  return (
    <section className="restaurants">
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold">Restaurants</h1>
        <div className="restaurants grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant._id}
              href={`/restaurant/${restaurant._id}`}
              className="restaurant-card card flex flex-col gap-4 bg-green-50 border-2 border-green-100 shadow-md hover:shadow-2xl hover:shadow-green-200 transition duration-300 ease-in-out shadow-green-50 p-4 rounded-xl"
            >
              <div className="card-image">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={500}
                  height={500}
                />
              </div>
              <div className="card-content flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                  <div className="flex felx-row items-center gap-2">
                    <Star size={18} className="text-green-600" />{" "}
                    <span className="text-gray-500">{restaurant.rating}</span>
                  </div>
                  <div className="flex felx=row items-center gap-2">
                    <Tag size={18} className="text-green-600" />{" "}
                    <span className="text-gray-500">{restaurant.category}</span>
                  </div>
                  <div className="flex felx=row items-center gap-2">
                    <Clock size={18} className="text-green-600" />{" "}
                    <span className="text-gray-500">
                      {restaurant.deliveryTime}
                    </span>
                  </div>
                </div>

                <div className="address flex flex-row items-center gap-2 text-green-600">
                  <MapPin />
                  <span className="font-bold ">{restaurant.address}</span>
                </div>

                <div className="card-title">
                  <h1 className="text-xl font-bold">{restaurant.name}</h1>
                  <p>{restaurant.description}</p>
                </div>

                <button
                  href={`/restaurant/${restaurant.id}`}
                  className="flex flex-row items-center gap-2 font-bold bg-green-500 py-2 justify-center rounded-full text-white cursor-pointer"
                >
                  <ForkKnife size={16} />
                  <span>Order Now</span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
