import TravelMap from '../components/TravelMap';

export default function Photography() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">My Photograpghy</h1>
      <hr className="my-2 border-t-2 border-gray-300 w-20 mb-5" />
      <p className="mb-5"> Map shows up!</p>
      <TravelMap />
    </div>
  );
}