"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Tag, Clock, ForkKnife } from "lucide-react";

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card card flex flex-col gap-4 bg-green-50 border-2 border-transparent hover:border-green-300 dark:bg-green-950 dark:hover:border-green-700 transition-all duration-200 ease-in-out rounded-xl overflow-hidden transform hover:scale-[1.01] hover:shadow-md hover:shadow-slate-300 dark:hover:shadow-slate-800">
      <Image
        src={restaurant.image}
        alt={restaurant.name}
        width={500}
        height={300}
        className="w-full h-60 object-cover"
        priority
      />

      <div className="card-content flex flex-col gap-4 p-4">
        <div className="flex flex-wrap justify-between text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-green-600 dark:text-green-400" />
            {restaurant.rating}
          </div>
          <div className="flex items-center gap-1">
            <Tag size={16} className="text-green-600 dark:text-green-400" />
            {restaurant.category}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-green-600 dark:text-green-400" />
            {restaurant.deliveryTime}
          </div>
        </div>

        <div className="flex items-center gap-2 text-green-800 dark:text-green-300">
          <MapPin size={16} />
          <span className="font-medium">{restaurant.address}</span>
        </div>

        <div>
          <h2 className="text-lg font-bold text-green-900 dark:text-green-100">
            {restaurant.name}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {restaurant.description}
          </p>
        </div>

        <Link
          href={`/restaurants/${restaurant._id}`}
          className="flex items-center justify-center gap-2 font-semibold bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white py-2 rounded-full transition"
        >
          <ForkKnife size={16} />
          Order Now
        </Link>
      </div>
    </div>
  );
}
