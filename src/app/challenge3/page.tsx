import { Challenge3 } from "@/Challenge3/Challenge";
import React from "react";

export default function Challenge() {
  return (
    <main className="flex min-h-screen flex-col items-center py-10 gap-4">
      <h1 className="text-2xl font-medium">Bubble Drawing</h1>
      <Challenge3 />
    </main>
  );
}
