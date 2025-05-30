"use client";

import { Listbox } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import clsx from "clsx";

export default function Dropdown({ label, options, selected, onChange }) {
  return (
    <div className="">
      <Listbox value={selected} onChange={onChange}>
        <div className="relative">
          <Listbox.Label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </Listbox.Label>
          <Listbox.Button className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left cursor-pointer hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">
            <span className="block truncate">
              {selected || `Select ${label}`}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option}
                value={option}
                className={({ active }) =>
                  clsx(
                    "cursor-pointer select-none px-4 py-2",
                    active ? "bg-green-100 text-green-900" : "text-gray-700"
                  )
                }
              >
                {({ selected }) => (
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {selected && <Check className="w-4 h-4 text-green-600" />}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
