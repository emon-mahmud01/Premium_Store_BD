import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card';
function Home() {
  const data = useLoaderData();
  return (
    <div>
      <h2 className="text-5xl text-center my-10 font-bold bg-[#2D2D2D] text-white p-6 rounded-lg">
        Streaming Sites
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item,index) => (
          <Card key={index} item={item}></Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
