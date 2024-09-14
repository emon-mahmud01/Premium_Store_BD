import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { AiFillDollarCircle } from 'react-icons/ai';
import { Button } from '@material-tailwind/react';




function Descriptions() {
  const { id } = useParams();
  const data = useLoaderData();
  const specificData = data.filter(item => item.id === Number(id));
  const [{ image, name, rating, price, description, content }] = specificData;
  return (
    <div className="max-w-2xl p-4 mx-auto my-10 border rounded-lg space-y-2 bg-gray-300">
      <img className="w-80 rounded-md" src={image} alt="" />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="flex gap-1 items-center text-yellow-800">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
        {rating}
      </p>
      <p className="flex gap-2 items-center font-medium">
        <AiFillDollarCircle />
        Price: {price}
      </p>
      <p>{content}</p>
      <li>Money Back Warranty</li>
      <li>24/7 Online Support</li>
      <li>Renewable Account with Pin lock</li>
      <p className="text-gray-800">{description}</p>
      <div className='flex gap-6'>
        <Button className='hover:scale-105'>Add to Cart</Button>
        <Button className='hover:scale-105'>Buy Now</Button>
      </div>
    </div>
  );
}

export default Descriptions;
