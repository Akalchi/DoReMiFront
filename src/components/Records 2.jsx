import React, { useState } from "react";
import { FaPlay, FaPause, FaTrash } from "react-icons/fa";

const Records = () => {
  // Estado para almacenar las grabaciones (simulado)
  const [recordings, setRecordings] = useState([
    { id: 1, name: "Nombre de grabación", isPlaying: false },
    { id: 2, name: "Nombre de grabación", isPlaying: false },
    { id: 3, name: "Nombre de grabación", isPlaying: false },
  ]);

  const handlePlayPause = (id) => {
    setRecordings((prevRecordings) =>
      prevRecordings.map((recording) =>
        recording.id === id
          ? { ...recording, isPlaying: !recording.isPlaying }
          : recording
      )
    );
  };

  const handleDelete = (id) => {
    setRecordings((prevRecordings) =>
      prevRecordings.filter((recording) => recording.id !== id)
    );
  };

  return (
    <main>
      <div className="background-container3 flex flex-col justify-center items-center text-center px-4 py-8">
        <div className="w-full mx-auto text-center text-white text-3xl sm:text-5xl lg:text-6xl font-black leading-tight break-words mb-8">
          ESCUCHA TUS GRABACIONES
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl lg:m-60">
          {recordings.map((recording) => (
            <div
              key={recording.id}
              className="bg-black sm:h-72 lg:h-60 flex flex-col justify-center items-center text-white rounded-2xl p-4"
            >
              <p className="text-base sm:text-lg lg:text-xl font-bold mb-4">{recording.name}</p>

              <div className="flex space-x-4">
                <button
                  className={`text-xl sm:text-2xl ${
                    recording.isPlaying ? "text-yellow-500" : "text-green-500"
                  }`}
                  onClick={() => handlePlayPause(recording.id)}
                >
                  {recording.isPlaying ? <FaPause /> : <FaPlay />}
                </button>

                <button
                  className="text-xl sm:text-2xl text-red-500"
                  onClick={() => handleDelete(recording.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Records;
