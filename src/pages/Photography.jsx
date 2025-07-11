import { useState } from "react";
import TravelMap from '../components/TravelMap';
import hawaii1 from "../assets/hawaii-1.JPG";
import hawaii2 from "../assets/hawaii-2.JPG";
import hawaii3 from "../assets/hawaii-3.JPG";
import st_martin from "../assets/st-martin.JPG"; 

const photos = [
  { src: hawaii1, alt: "Beach in Hawaii", location: "Hawaii" },
  { src: hawaii2, alt: "River in Hawaii", location: "Hawaii" },
  { src: hawaii3, alt: "Sunset in Hawaii", location: "Hawaii" },
  { src: st_martin, alt: "Beach in St. Martin", location: "St. Martin" },
];


export default function Photography() {
  const [filter, setFilter] = useState(null);

  const filteredPhotos = filter
    ? photos.filter((photo) => photo.location === filter)
    : photos;

  return (
    <div className="ml-35 mr-35 mt-10">
      <h1 className="text-2xl font-bold">My Photograpghy</h1>
      <hr className="my-2 border-t-2 border-gray-300 w-20 mb-5" />
      <p className="mb-5">
        Although I am in no way a professional photographer with any sort of fancy equipment, I really taking photos of scenic views. Currently, I just use my iPhone
        camera to take pics, but I plan on purchasing a simple underwater camera becasue I will be going to Australia and New Zealand later this year! I will be going to
        The Great Barrier Reef, so I hope to see some cool sea creatures. Take a look on this map to see all the places I've been and find all the corresponding pictures.
      </p>
      <TravelMap setFilter={setFilter} />
      {filter && (
        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            Showing photos from: <span className="text-blue-600">{filter}</span>
          </h2>
          <button
            onClick={() => setFilter(null)}
            className="bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Reset Filter
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {filteredPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="rounded-lg shadow-md object-cover w-full h-72"
          />
        ))}
      </div>
    </div>
  );
}