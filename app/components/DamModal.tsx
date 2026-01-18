import React from "react";
import { IoClose } from "react-icons/io5";
import type { EnergyAsset } from "~/types";

export interface DamModalProps {
  selectedDam: EnergyAsset | null;
  setSelectedDam: React.Dispatch<React.SetStateAction<EnergyAsset | null>>;
}

const DamModal = ({ selectedDam, setSelectedDam }: DamModalProps) => {
  if (!selectedDam) return null;
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        onClick={() => setSelectedDam(null)} // 👈 close on backdrop click
      >
        {/* MODAL */}
        <div
          className="bg-white rounded-xl w-full max-w-5xl mx-4 overflow-hidden animate-fadeIn"
          onClick={(e) => e.stopPropagation()} // 👈 prevent closing when clicking inside
        >
          <div className="">
            <div className="flex gap-4 p-4 relative">
              <div className="w-1/3">
                <img
                  src={`${import.meta.env.VITE_IMAGE_URL}${selectedDam.field_image_banner}`}
                  alt={selectedDam.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 overflow-auto max-h-100">
                <p className="text-black text-sm md:text-base">
                  {selectedDam.field_entrepreneurship_developme}
                </p>
              </div>
              <button
                className="absolute top-3 right-3 z-10 bg-black/40 text-white h-6 w-6 flex justify-center items-center rounded-full hover:bg-black/80 transition"
                onClick={() => {}}
              >
                <IoClose size={18} />
              </button>
            </div>
          </div>
          {/* <div className="relative">
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}${selectedDam.field_image_banner}`}
              alt={selectedDam.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />

            <button
              onClick={() => setSelectedDam(null)}
              className="absolute top-3 right-3 z-10 bg-black/60 text-white w-5 h-5 rounded-full flex items-center justify-center hover:bg-black/80 transition"
              aria-label="Close modal"
            >
              <IoClose size={18} />
            </button>
          </div>

          <div className="px-4 py-2">
            <h2 className="text-2xl font-semibold text-black">
              {selectedDam.title}
            </h2>
            <p className="text-gray-600 text-sm">
              {selectedDam.field_location_assets}
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DamModal;
