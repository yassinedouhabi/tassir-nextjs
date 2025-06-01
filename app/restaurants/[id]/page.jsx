import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import Image from "next/image";
import { MapPin, Star, Clock } from "lucide-react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db("tassir-db");
  const restaurant = await db
    .collection("restaurants")
    .findOne({ _id: new ObjectId(id) });

  return {
    title: restaurant ? restaurant.name : "Restaurant",
  };
}

export default async function RestaurantPage({ params }) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db("tassir-db");

  const restaurant = await db
    .collection("restaurants")
    .findOne({ _id: new ObjectId(id) });

  if (!restaurant) {
    return <div className="container">Restaurant Not Found</div>;
  }

  return (
    <section className="restaurant-details">
      <div className="container ">
        <div className="flex flex-col md:flex-row-reverse justify-between gap-6 max-w-xl mx-auto bg-green-50 dark:bg-green-950 rounded-xl shadow-sm p-4">
          <div className="image">
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              width={600}
              height={400}
              className="rounded-xl w-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-green-900 dark:text-green-100 mb-4">
              {restaurant.name}
            </h1>

            <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
              <Star size={20} className="text-green-700 dark:text-green-400" />
              <span>{restaurant.rating} &bull; Fast & Reliable Delivery</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-4 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin
                  size={20}
                  className="text-green-700 dark:text-green-400"
                />
                <span>{restaurant.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock
                  size={20}
                  className="text-green-700 dark:text-green-400"
                />
                <span>{restaurant.deliveryTime}</span>
              </div>
            </div>

            <p className="mb-4 text-gray-700 dark:text-gray-200">
              {restaurant.description}
            </p>

            <p className="mt-4 text-sm text-gray-500 italic">
              Tip: Order from your favorite spots and enjoy exclusive discounts
              and offers!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
