import Header from "./components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <>
      <Header />
      <div className="container flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
          Welcome to
          <span className="text-green-600 dark:text-green-400">Tassir</span>
        </h1>
        <p className="text-neutral-800 dark:text-neutral-200">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          beatae.
        </p>
        <Link href="/restaurants">
          <Button className="w-full bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-800">
            Make Your order now!
          </Button>
        </Link>
      </div>
    </>
  );
}
