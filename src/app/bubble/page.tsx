'use client';
import { Challenge3 } from '@/Challenge3/Challenge';
import { collectGenerateParams } from 'next/dist/build/utils';
import React, { useEffect, useState } from 'react';
import { GenericType } from 'typescript';
import { inflate } from 'zlib';

export default function Challenge() {
  interface positionCoords {
    x: number;
    y: number;
    color?: string
    random?: number
  }


  const [isMousePosition, setMousePosition] = useState<positionCoords[]>([]);
  const [softSavePosition, setSoftSavePosition] = useState<positionCoords[]>(
    []
  );
  const [isRedoDisabledButtons, setRedoDisabledButtons] =
    useState<boolean>(true);
  const [isUndoDisabledButtons, setUndoDisabledButtons] =
    useState<boolean>(true);

  const [isColorSwitch, setColorSwitch] = useState<boolean>(true)

 
// get click data points
//set the click data points
//
      


const getMousePosition = (event: React.MouseEvent<HTMLDivElement>) => {
  const colorSwitch = isColorSwitch ? 'blue' : 'red';
  const randomNumber = Math.floor(Math.random() * 19) + 6;

  setUndoDisabledButtons(false);

  const samePosition = isMousePosition.find(
    (item) => event.clientX === item.x && event.clientY === item.y
  );

  if (samePosition) {
    setMousePosition((prev) =>
      prev.map((item) =>
        event.clientX === item.x && event.clientY === item.y
          ? { ...item, color: 'blue' }
          : item
      )
    );
  } else {
    setMousePosition((prev) => [
      ...prev,
      { x: event.clientX, y: event.clientY, color: 'red', random: randomNumber },
    ]);
  }
};

  function undoDot() {
    //@ts-ignore
    const removedDot: positionCoords = isMousePosition.pop();

    if (removedDot) {
      setSoftSavePosition((prev) => [...prev, removedDot]);
      setUndoDisabledButtons(isMousePosition.length === 0);
      setRedoDisabledButtons(false);
    }
  }

  function redoDot() {
    // @ts-ignore
    const lastSoftSave: positionCoords = softSavePosition.pop();

    if (lastSoftSave) {
      setMousePosition((prev) => [...prev, lastSoftSave]);
      setRedoDisabledButtons(softSavePosition.length === 0);
      setUndoDisabledButtons(false);
    }
  }

  

  // RENDERING EACH DOT
  const renderDot = (dots: positionCoords[]) => {

  
    return (
      <ul>
        {dots?.map((dot, index: number) => (
          <li
            key={index}
            className={` m-4 absolute`}
            style={{ top: dot.y, left: dot.x, backgroundColor: dot.color, width: dot.random, height: dot.random }}
          ></li>
        ))}
      </ul>
    );
  };

  return (
    <main className='flex min-h-screen flex-col items-center py-10 gap-4'>
      <h1 className='text-2xl font-medium'>Bubble Drawing</h1>
      <div className='flex justify-evenly'>
        <button
          className='border-2 border-black m-4 p-4  disabled:text-gray-300 disabled:border-gray-300'
          disabled={isUndoDisabledButtons}
          onClick={undoDot}
        >
          Undo
        </button>
        <button
          className='border-2 border-black m-4 p-4 disabled:text-gray-300 disabled:border-gray-300'
          onClick={redoDot}
          disabled={isRedoDisabledButtons}
        >
          redo
        </button>
      </div>
      <div className='h-full w-full'>
        {/* Click anywhere to create dot */}
        <div
          className='h-96  border-red-300 border-4 m-12'
          onClick={getMousePosition}
        >
          {renderDot(isMousePosition)}
        </div>
      </div>
    </main>
  );
}
