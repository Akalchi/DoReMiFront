import React, { useState } from "react";
import Key from "./Key";

const Piano = () => {
  const [activeKey, setActiveKey] = useState(null);

  // List of keys with their properties
  const keys = [
    { id: "DO4", note: new Audio("src/assets/sounds/DO4.mp3"), keyCode: 81 },
    { id: "Db4", note: new Audio("src/sounds/Db4.mp3"), keyCode: 50 },
    { id: "D4", note: new Audio("src/sounds/D4.mp3"), keyCode: 87 },
    { id: "Eb4", note: new Audio("src/sounds/Eb4.mp3"), keyCode: 51 },
    { id: "E4", note: new Audio("src/sounds/E4.mp3"), keyCode: 69 },
    { id: "F4", note: new Audio("src/sounds/F4.mp3"), keyCode: 82 },
    { id: "Gb4", note: new Audio("src/sounds/Gb4.mp3"), keyCode: 53 },
    { id: "G4", note: new Audio("src/sounds/G4.mp3"), keyCode: 84 },
    { id: "Ab4", note: new Audio("src/sounds/Ab4.mp3"), keyCode: 54 },
    { id: "A4", note: new Audio("src/sounds/A4.mp3"), keyCode: 89 },
    { id: "Bb4", note: new Audio("src/sounds/Bb4.mp3"), keyCode: 55 },
    { id: "B4", note: new Audio("src/sounds/B4.mp3"), keyCode: 85 },
    { id: "C5", note: new Audio("src/sounds/C5.mp3"), keyCode: 73 },
    { id: "Db5", note: new Audio("src/sounds/Db5.mp3"), keyCode: 57 },
    { id: "D5", note: new Audio("src/sounds/D5.mp3"), keyCode: 79 },
    { id: "Eb5", note: new Audio("src/sounds/Eb5.mp3"), keyCode: 48 },
    { id: "E5", note: new Audio("src/sounds/E5.mp3"), keyCode: 80 },
  ];

  // Function to play a note
  const playNote = (audio) => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0), 2000);
  };

  // Function to handle key press or click
  const pressKey = (id, note) => {
    playNote(note);
    setActiveKey(id);
    setTimeout(() => setActiveKey(null), 100);
  };

  // Global event listener for keyboard keys
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = keys.find((key) => key.keyCode === event.keyCode);
      if (pressedKey) {
        pressKey(pressedKey.id, pressedKey.note);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main>
      <div className="background-container2 flex flex-col justify-center items-center text-center">
        <div className="bg-[#E06EF1] w-full h-full max-w-[1029px] max-h-[489px] rounded-[32px] overflow-hidden flex flex-col justify-center items-center p-4">
          <div className="w-[396px] text-center text-[#ffe8e8] text-[56px] font-black leading-[67.20px] break-words m-8">
            PIANO
          </div>
          <div id="piano">
            {keys.map((key) => (
              <Key
                key={key.id}
                id={key.id}
                note={key.note}
                isActive={activeKey === key.id}
                onClick={() => pressKey(key.id, key.note)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Piano;