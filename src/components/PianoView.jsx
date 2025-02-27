import React, { useState, useEffect } from "react";
import Key from "./Key";
import { FaCircle, FaPause, FaSave } from "react-icons/fa";

const Piano = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [isRecording, setIsRecording] = useState(false); // Estado para grabar
  const [isPaused, setIsPaused] = useState(false); // Estado para pausar
  const [elapsedTime, setElapsedTime] = useState(0); // Tiempo transcurrido
  const [showModal, setShowModal] = useState(false); // Modal de confirmación
  const [fileName, setFileName] = useState(""); // Nombre del archivo

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
  useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = keys.find((key) => key.keyCode === event.keyCode);
      if (pressedKey) {
        pressKey(pressedKey.id, pressedKey.note);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Cronómetro
  useEffect(() => {
    let interval;
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording, isPaused]);

  // Función para formatear el tiempo
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Funciones de los botones
  const handleRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleSave = () => {
    setIsRecording(false);
    setIsPaused(false);
    setShowModal(true);
  };

  const handleConfirmSave = () => {
    console.log(`Archivo guardado como: ${fileName}`);
    setShowModal(false);
    setElapsedTime(0); // Reiniciar el cronómetro
    setFileName(""); // Limpiar el nombre del archivo
  };

  const handleCancelSave = () => {
    setShowModal(false);
  };

  return (
    <main>
      <div className="background-container2 flex flex-col justify-center items-center text-center">
        <div className="bg-[#E06EF1] w-full h-full max-w-[1029px] max-h-[489px] rounded-[32px] overflow-hidden flex flex-col justify-center items-center p-4">
          <div className="w-[396px] text-center text-[#ffe8e8] text-[56px] font-black leading-[67.20px] break-words m-8">
            PIANO
          </div>
          <div className="flex">
            {/* Piano Keys */}
            <div id="piano" className="mr-14">
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

            {/* Buttons Column */}
            <div className="flex flex-col ml-8 space-y-6"> {/* Aumentamos el margen izquierdo */}
              {/* Botón de Grabar */}
              <button
                className={`text-3xl text-white rounded-full p-2 ${
                  isRecording ? "bg-red-500" : "bg-gray-500"
                } hover:bg-red-600`}
                onClick={handleRecord}
                disabled={isRecording}
              >
                <FaCircle />
              </button>

              {/* Botón de Pausa */}
              <button
                className="text-3xl text-white bg-yellow-500 rounded-full p-2 hover:bg-yellow-600"
                onClick={handlePause}
                disabled={!isRecording}
              >
                <FaPause />
              </button>

              {/* Botón de Guardar */}
              <button
                className="text-3xl text-white bg-green-500 rounded-full p-2 hover:bg-green-600"
                onClick={handleSave}
                disabled={!isRecording}
              >
                <FaSave />
              </button>

              {/* Cronómetro */}
              {isRecording && (
                <div className="text-white text-lg mt-4">
                  Tiempo: {formatTime(elapsedTime)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal de Confirmación */}
        {showModal && (
          <div className=" bgmodal fixed inset-0 flex items-center justify-center ">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Guardar Grabación</h2>
              <input
                type="text"
                placeholder="Nombre del archivo"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <div className="flex justify-end space-x-4">
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  onClick={handleCancelSave}
                >
                  Cancelar
                </button>
                <button
                  className="px-4 py-2 bg-[#672886] text-white rounded hover:bg-[#a668d7]"
                  onClick={handleConfirmSave}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Piano;