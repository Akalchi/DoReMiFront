import { useState, useEffect } from "react";
import Key from "./Key";

const Piano = () => {
  const [activeKey, setActiveKey] = useState(null);

  // Lista de teclas con sus propiedades usando keyCode
  const keys = [
    { id: "C4", note: new Audio("/sounds/C4.mp3"), keyCode: 81 }, // Tecla Q (keyCode 81)
    { id: "Db4", note: new Audio("/sounds/Db4.mp3"), keyCode: 50 }, // Tecla 2 (keyCode 50)
    { id: "D4", note: new Audio("/sounds/D4.mp3"), keyCode: 87 }, // Tecla W (keyCode 87)
    { id: "Eb4", note: new Audio("/sounds/Eb4.mp3"), keyCode: 51 }, // Tecla 3 (keyCode 51)
    { id: "E4", note: new Audio("/sounds/E4.mp3"), keyCode: 69 }, // Tecla E (keyCode 69)
    { id: "F4", note: new Audio("/sounds/F4.mp3"), keyCode: 82 }, // Tecla R (keyCode 82)
    { id: "Gb4", note: new Audio("/sounds/Gb4.mp3"), keyCode: 53 }, // Tecla 5 (keyCode 53)
    { id: "G4", note: new Audio("/sounds/G4.mp3"), keyCode: 84 }, // Tecla T (keyCode 84)
    { id: "Ab4", note: new Audio("/sounds/Ab4.mp3"), keyCode: 54 }, // Tecla 6 (keyCode 54)
    { id: "A4", note: new Audio("/sounds/A4.mp3"), keyCode: 89 }, // Tecla Y (keyCode 89)
    { id: "Bb4", note: new Audio("/sounds/Bb4.mp3"), keyCode: 55 }, // Tecla 7 (keyCode 55)
    { id: "B4", note: new Audio("/sounds/B4.mp3"), keyCode: 85 }, // Tecla U (keyCode 85)
    { id: "C5", note: new Audio("/sounds/C5.mp3"), keyCode: 73 }, // Tecla I (keyCode 73)
    { id: "Db5", note: new Audio("/sounds/Db5.mp3"), keyCode: 57 }, // Tecla 9 (keyCode 57)
    { id: "D5", note: new Audio("/sounds/D5.mp3"), keyCode: 79 }, // Tecla O (keyCode 79)
    { id: "Eb5", note: new Audio("/sounds/Eb5.mp3"), keyCode: 48 }, // Tecla 0 (keyCode 48)
    { id: "E5", note: new Audio("/sounds/E5.mp3"), keyCode: 80 }, // Tecla P (keyCode 80)
  ];

  // Función para reproducir una nota
  const playNote = (audio) => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0), 2000);
  };

  // Función para manejar el clic o la pulsación de tecla
  const pressKey = (id, note) => {
    console.log(`Tocando nota: ${id}`); // Depuración
    playNote(note);
    setActiveKey(id);
    setTimeout(() => setActiveKey(null), 100);
  };

  // Evento global para escuchar las teclas del teclado usando keyCode
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log("Tecla presionada:", event.keyCode); // Depuración
      const pressedKey = keys.find((key) => key.keyCode === event.keyCode);
      if (pressedKey) {
        console.log("Nota encontrada:", pressedKey.id); // Depuración
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
          <div className="w-[396px] text-center text-[#F5F5F5] text-[56px] font-black leading-[67.20px] break-words m-8">
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