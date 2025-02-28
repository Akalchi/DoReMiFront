import React from "react";
export default function HomeView() {
  return (
    <main>
      <div className="background-container flex flex-col justify-center items-center text-center">
        <div className="w-[806px] max-w-full text-white text-4xl font-black leading-[41.6px] break-words mb-8">
          Despierta tu creatividad musical, toca, graba y comparte tus melodías
          con el mundo. ¡Empieza ahora y haz que la música fluya!
        </div>

        <div className="w-full max-w-[505px] bg-white rounded-[16px] overflow-hidden flex justify-center items-center p-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-[16px] w-full">
            <button className="flex-1 h-[53px] px-[24px] py-[16px] bg-[#A855F7] rounded-[4px] flex justify-center items-center">
              <p className="text-center text-[#FAFAFA] text-[14px] md:text-[16px] font-semibold leading-[21px]">
                Empieza a tocar
              </p>
            </button>

            <button className="flex-1 h-[53px] px-[24px] py-[16px] rounded-[4px] border border-[#A1A1AA] flex justify-center items-center">
              <p className="text-center text-[#18181B] text-[14px] md:text-[16px] font-semibold leading-[21px]">
                Escucha tus grabaciones
              </p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
