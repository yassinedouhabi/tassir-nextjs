import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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

export default async function RestaurantBreadcrumb() {
  const restaurants = await fetchRestaurants();
  return (
    <div className="breadcrumb mb-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/restaurants">Restaurants</BreadcrumbLink>
          </BreadcrumbItem>
          {restaurants && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={restaurants.name}>
                  {restaurants.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
