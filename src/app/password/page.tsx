import { Password } from "@/Challenge1/challenge";
import React from "react";

export default function Challenge() {
  return (
    <main className="flex min-h-screen flex-col items-center py-10 gap-4">
      <h1 className="text-2xl font-medium">Password Challenge</h1>
      <Password />
    </main>
  );
}
