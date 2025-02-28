import React from "react";
import { Link } from "react-router-dom";

export default function HomeView() {
  return (
    <main>
      <div className="background-container flex flex-col justify-center items-center text-center">
        <div className="w-[806px] max-w-full text-white text-4xl font-black leading-[41.6px] break-words mb-8">
          <div className="sm:hidden text-sm overflow-hidden h-[6rem] sm:max-w-[505px] mx-auto w-[300px]">
            Despierta tu creatividad musical, toca, graba y comparte tus
            melodías con el mundo. ¡Empieza ahora y haz que la música fluya!
          </div>

          <div className="hidden sm:block text-4xl">
            Despierta tu creatividad musical, toca, graba y comparte tus
            melodías con el mundo. ¡Empieza ahora y haz que la música fluya!
          </div>
        </div>

        <div className="w-full max-w-[505px] mx-auto mt-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/instruments"
              className="sm:flex-1 h-[53px] px-[24px] py-[16px] bg-[#A855F7] rounded-[4px] flex justify-center items-center text-center text-[#FAFAFA] text-[14px] sm:text-[16px] font-semibold leading-[21px] sm:w-auto w-[200px] mx-auto"
            >
              Empieza a tocar
            </Link>

            <Link
              to="/records"
              className="sm:flex-1 h-[53px] px-[24px] py-[16px] bg-[#c6a8e2] rounded-[4px] border border-[#A1A1AA] flex justify-center items-center text-center text-[#18181B] text-[14px] sm:text-[16px] font-semibold leading-[21px] sm:w-auto w-[200px] mx-auto"
            >
              Escucha tus grabaciones
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
