import Link from "next/link";
import { MapPin, Star, Tag, Clock, ForkKnife } from "lucide-react";
import Image from "next/image";
import PathBar from "../components/PathBar";

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
        <PathBar restaurantName={null} />
        <h1 className="text-4xl font-extrabold mb-6 text-green-700">
          Discover the Best Restaurants in Your City
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          Enjoy delicious meals and top-quality dishes with a wide variety to
          suit every taste. Choose your favorite restaurant and start your
          amazing food journey!
        </p>
        <div className="restaurants grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant._id}
              className="restaurant-card card flex flex-col gap-4 bg-green-50 border border-green-50 shadow-md hover:shadow-2xl hover:shadow-green-200 transition duration-300 ease-in-out shadow-green-50 rounded-xl"
            >
              <div className="card-image">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={500}
                  height={500}
                  className="rounded-xl"
                />
              </div>
              <div className="card-content flex flex-col gap-4 p-4 ">
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

                <Link
                  href={`/restaurants/${restaurant._id}`}
                  className="flex flex-row items-center gap-2 font-bold bg-green-500 py-2 justify-center rounded-full text-white cursor-pointer"
                >
                  <ForkKnife size={16} />
                  <span>Order Now</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
