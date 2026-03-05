"use client";

import { useState } from "react";
import DesignOne from "@/components/DesignOne";
import DesignTwo from "@/components/DesignTwo";

const designs = [
  { id: 1, name: "Design One", component: DesignOne },
  { id: 2, name: "Design Two", component: DesignTwo },
];

export default function Home() {
  const [selectedDesign, setSelectedDesign] = useState(1);

  const ActiveDesign = designs.find(d => d.id === selectedDesign)?.component || DesignOne;

  return (
    <div className="relative z-100">
      <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-2 border border-gray-200">
        <div className="flex gap-2">
          {designs.map((design) => (
            <button
              key={design.id}
              onClick={() => setSelectedDesign(design.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedDesign === design.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {design.name}
            </button>
          ))}
        </div>
      </div>
      <ActiveDesign />
    </div>
  );
}