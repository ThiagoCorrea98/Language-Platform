import React from "react";
import * as wanakana from "wanakana";
import { hiraganaCharacters } from "../utils/hiragana";

const generateHiraganaTable = () => {
  const rows = [];
  const gojuonStart = 0x3041;
  const gojuonEnd = 0x3096;

  const hiraganaList = Array.from(
    { length: gojuonEnd - gojuonStart + 1 },
    (_, i) => {
      const kana = String.fromCharCode(gojuonStart + i);
      return { kana, romaji: wanakana.toRomaji(kana) };
    }
  );

  const filterHiragana = hiraganaList.filter(({ kana }) =>
    hiraganaCharacters.includes(kana)
  );

  const gojuonColumns = [5, 5, 5, 5, 5, 5, 5, 3, 5, 2, 1];
  let index = 0;

  for (const col of gojuonColumns) {
    const row = filterHiragana.slice(index, index + col);
    index += col;
    rows.push([...row, ...Array(5 - col).fill(null)]);
  }

  return rows;
};

export default function Hiragana() {
  const hiraganaTables = generateHiraganaTable();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">Hiragana</h1>
      <div className="grid grid-cols-5 gap-4 mt-6">
        {hiraganaTables.flat().map((char, index) =>
          char ? (
            <div key={index} className="p-4 bg-gray-200 rounded-lg text-center">
              <span className="text-4xl">{char.kana}</span>
              <p className="text-gray-700 mt-2">{char.romaji}</p>
            </div>
          ) : (
            <div key={index} className="p-4"></div>
          )
        )}
      </div>
    </div>
  );
}
