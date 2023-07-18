"use client";
import React from "react";

export function Password() {
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
        <button
          key={number}
          className="border p-4 rounded-md flex justify-center items-center hover:bg-gray-100"
        >
          {number}
        </button>
      ))}
    </div>
  );
}
