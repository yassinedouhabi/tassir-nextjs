export async function fetchRestaurants() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/restaurants`);
  if (!res.ok) {
    throw new Error('Failed to fetch restaurants');
  }
  return res.json();
}
