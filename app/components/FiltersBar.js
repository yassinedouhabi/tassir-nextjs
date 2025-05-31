"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";

export default function FiltersBar({ onFilterChange }) {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleApply = () => {
    onFilterChange({ category, price });
  };

  return (
    <div className="flex flex-wrap gap-4 items-end mb-6">
      <Dropdown
        label="Category"
        options={["All", "Main", "Drinks", "Dessert"]}
        selected={category}
        onChange={setCategory}
      />
      <Dropdown
        label="Price"
        options={["All", "Under $10", "$10 – $20", "Above $20"]}
        selected={price}
        onChange={setPrice}
      />

      <button
        onClick={handleApply}
        className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Apply Filters
      </button>
    </div>
  );
}
