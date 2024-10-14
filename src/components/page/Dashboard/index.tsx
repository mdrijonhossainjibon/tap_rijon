import { useEffect, useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import { formatNumber } from "lib";
import { LibLocalStorage } from "lib/LibLocalStorage";
import { Bottom } from "components";
 
 


 const Dashboard = () => {
  const [clicks, setClicks] = useState<{ id: number, x: number, y: number }[]>([]);
  const pointsToAdd = 8;

  const [points, setPoints] = useState(LibLocalStorage.read('point') || 0);
  const [energy, setEnergy] = useState(500);
  const energyToReduce = 8;

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (energy > 0) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
      setTimeout(() => {
        card.style.transform = "";
      }, 100);

      setPoints(points + pointsToAdd);
      LibLocalStorage.write('point', points + pointsToAdd); ///  localdata

      setEnergy(energy - energyToReduce < 0 ? 0 : energy - energyToReduce);
      setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + 1, 500));
    }, 1000); // Restore 10 energy points every second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const url = 'https://t4.ftcdn.net/jpg/06/20/08/47/360_F_620084766_fGRU1NqbRmNxiqw5EfY9oq1weKIo3FNH.jpg';



  return (
    <main className="flex flex-col w-full  fixed  max-w-small h-[100vh] mx-auto text-white  ">
      <div className="flex-1 px-5 pb-20 bg-center bg-cover" style={{ backgroundImage: `url(${url}) ` }}>
        <div className="fixed top-5 left-0 w-full px-4 pt-8 z-10 flex flex-col items-center text-white">
          <div className=" w-full  mt-1  cursor-pointer">

          </div>
          <div className="mt-8 text-3xl font-bold flex items-center">
            <img width={34} src={require('../../../logo.png')} height={34} />
            <span className="ml-2">{formatNumber(points)}</span>
          </div>
          <div className="text-sm mt-2 flex items-center">
            <img width={20} height={20} />
            <span className="ml-1">Gold <RightOutlined /></span>
          </div>
        </div>

        <div className="flex justify-center absolute inset-x-0 top-1/3">
          <div
            className="w-64 h-64 p-4 rounded-full circle-outer"
            onClick={handleCardClick}
          >
            <div className="w-full h-full rounded-full circle-inner">
              <img src={require('../../../9b9b65d9-a54d-408f-bacc-ed2fd818a4d7-removebg-preview.png')} alt="Main Character" className="w-full h-full" />
            </div>
          </div>
        </div>


        <div className=" relative top-[35em]  ">
          <span className="text-xs font-bold">{energy} / 500</span>

          <div className="w-full bg-[#f9c035] rounded-full mt-4">
            <div className="bg-gradient-to-r from-[#f3c45a] to-[#fffad0] h-4 rounded-full" style={{ width: `${(energy / 500) * 100}%` }} >  </div>
          </div>
        </div>
 
      </div>

 
      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`,
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          {formatNumber(pointsToAdd)}
        </div>
      ))}
 
 <Bottom />
    </main>
  );
};

 
export default Dashboard