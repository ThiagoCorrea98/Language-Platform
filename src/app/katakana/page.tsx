import React from "react";
import * as wanakana from "wanakana";
import { katakanaCharacters } from "../utils/katakana";

const generateKatakanaTable = () => {
  const rows = [];
  const gojuonStart = 0x30a1;
  const gojuonEnd = 0x30f6;

  const katakanaList = Array.from(
    { length: gojuonEnd - gojuonStart + 1 },
    (_, i) => {
      const kana = String.fromCharCode(gojuonStart + i);
      return { kana, romaji: wanakana.toRomaji(kana) };
    }
  );

  const filteredKatakana = katakanaList.filter(({ kana }) =>
    katakanaCharacters.includes(kana)
  );

  const gojuonColumns = [5, 5, 5, 5, 5, 5, 5, 3, 5, 2, 1];
  let index = 0;

  for (const col of gojuonColumns) {
    const row = filteredKatakana.slice(index, index + col);
    index += col;
    rows.push([...row, ...Array(5 - col).fill(null)]);
  }

  return rows;
};

export default function Katakana() {
  const katakanaTable = generateKatakanaTable();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">Katakana</h1>
      <div className="grid grid-cols-5 gap-4 mt-6">
        {katakanaTable.flat().map((char, index) =>
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
