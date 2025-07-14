import { useState } from "react";
import TravelMap from '../components/TravelMap';
import hawaii1 from "../assets/hawaii-1.JPG";
import hawaii2 from "../assets/hawaii-2.JPG";
import hawaii3 from "../assets/hawaii-3.JPG";
import st_martin from "../assets/st-martin.JPG";
import cancun1 from "../assets/cancun-1.JPG";
import puertovallerta1 from "../assets/puerto-vallerta-1.JPG";
import puertovallerta2 from "../assets/puerto-vallerta-2.JPG";
import puertovallerta3 from "../assets/puerto-vallerta-3.JPG";
import puertovallerta4 from "../assets/puerto-vallerta-4.JPG";
import puertovallerta5 from "../assets/puerto-vallerta-5.JPG";
import ajmer1 from "../assets/ajmer-1.JPG";
import ajmer2 from "../assets/ajmer-2.JPG";
import ajmer3 from "../assets/ajmer-3.JPG";
import florida1 from "../assets/florida-1.JPG";
import florida2 from "../assets/florida-2.JPG";

const photos = [
  { src: hawaii1, alt: "Beach in Hawaii", location: "Hawaii" },
  { src: hawaii2, alt: "River in Hawaii", location: "Hawaii" },
  { src: hawaii3, alt: "Sunset in Hawaii", location: "Hawaii" },
  { src: st_martin, alt: "Beach in St. Martin", location: "St. Martin" },
  { src: cancun1, alt: "Machu Picchu", location: "Cancun, Mexico" },
  { src: puertovallerta1, alt: "Tennis Court at Puerto Vallerta", location: "Puerto Vallarta, Mexico" },
  { src: puertovallerta2, alt: "Some Pink Flowers", location: "Puerto Vallarta, Mexico" },
  { src: puertovallerta3, alt: "Sea Cave", location: "Puerto Vallarta, Mexico" },
  { src: puertovallerta4, alt: "Neighborhood Walkway", location: "Puerto Vallarta, Mexico" },
  { src: puertovallerta5, alt: "Sea Bird", location: "Puerto Vallarta, Mexico" },
  { src: florida1, alt: "A Lamp", location: "Florida" },
  { src: florida2, alt: "Fish", location: "Florida" },
  { src: ajmer1, alt: "City or Ajmer", location: "Ajmer, India" },
  { src: ajmer2, alt: "City of Ajmer", location: "Ajmer, India" },
  { src: ajmer3, alt: "Indian Truck", location: "Ajmer, India" },  
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
            Showing photos from: <span className="h-1">{filter}</span>
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