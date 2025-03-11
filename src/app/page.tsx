import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-900">
        Aprenda Hiragana e Katakana
      </h1>
      <p className="text-lg text-gray-700 mt-2">
        Uma plataforma simples para aprender os alfabetos japoneses.
      </p>

      <div className="mt-6 flex gap-4">
        <Link href="/hiragana">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 cursor-pointer">
            Aprender Hiragana
          </button>
        </Link>
        <Link href="/katakana">
          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 cursor-pointer">
            Aprender Katakana
          </button>
        </Link>
        <Link href="/quiz">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 cursor-pointer">
            Fazer um Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}
