import { Button } from '@material-tailwind/react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Card({ item }) {

  const {id, name, image, rating } = item;
  return (
    <div className="border p-4 rounded-lg mt-6 hover:scale-105 duration-200 space-y-4 border-green-600 bg-[#FFF8DC] ">
      <img className="h-44 w-full rounded-lg" src={image} alt="" />
      <h2 className="text-3xl font-semibold mt-4 text-center">{name}</h2>
      <div className="flex gap-2 justify-between">
        <div className="flex gap-2 items-center text-2xl">
          <FaStarHalfAlt className="text-yellow-900" />
          <p>{rating}</p>
        </div>
        <Link to={`/descriptions/${id}`} className="text-lg">
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
