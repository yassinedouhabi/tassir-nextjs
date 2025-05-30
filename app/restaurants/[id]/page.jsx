import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import Image from "next/image";
import { MapPin, Star, Clock } from "lucide-react";
import PathBar from "../../components/PathBar";
import FiltersBar from "@/app/components/FiltersBar";

export async function generateMetadata({ params }) {
  const client = await clientPromise;
  const db = client.db("tassir-db");
  const restaurant = await db
    .collection("restaurants")
    .findOne({ _id: new ObjectId(params.id) });

  return {
    title: restaurant ? restaurant.name : "Restaurant",
  };
}

export default async function RestaurantPage({ params }) {
  const client = await clientPromise;
  const db = client.db("tassir-db");

  const restaurant = await db
    .collection("restaurants")
    .findOne({ _id: new ObjectId(params.id) });

  if (!restaurant) {
    return <div>Restaurant Not Found</div>;
  }

  return (
    <>
      <section className="restaurant-details container mx-auto p-6">
        <PathBar restaurantName={restaurant.name} />
        <FiltersBar />

        <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
        <div className="flex items-center gap-1 mb-4">
          <Star size={20} className="text-green-600" />
          <span>{restaurant.rating} | Fast & Reliable Delivery</span>
        </div>

        <div className="mb-6">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-1">
            <MapPin size={20} className="text-green-600" />
            <span>{restaurant.address}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={20} className="text-green-600" />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>

        <p className="mb-4">{restaurant.description}</p>

        <p className="mt-4 text-sm text-gray-500 italic">
          Tip: Order from your favorite spots and enjoy exclusive discounts and
          offers!
        </p>
        {/* أضف المزيد من التفاصيل هنا مثل القائمة، التواصل، التعليقات، إلخ */}
      </section>
    </>
  );
}
