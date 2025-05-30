import Link from "next/link";
import Header from "./components/Header";

export default function page() {
  return (
    <>
      <Header />
      <div className="container flex flex-col">
        <h1 className="text-4xl font-bold text-black">
          Welcome to <span className="text-green-600">Tassir</span>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          beatae.
        </p>
        <Link
          href="/restaurants"
          className="bg-black text-white text-xl font-bold w-full py-4 px-2 mt-4 rounded-4xl flex items-center justify-center"
        >
          Make Your order now!
        </Link>
      </div>
    </>
  );
}
