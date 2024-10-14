import { Bottom } from 'components';
import { useState } from 'react';
import PullToRefresh from 'antd-mobile/es/components/pull-to-refresh';
import { sleep } from 'antd-mobile/es/utils/sleep';
import { Empty } from 'antd';

interface Task {
  imgSrc: string;
  text: string;
  reward: string;
  completed: boolean;
  disabled: boolean;
}

export default function Earn() {
  const [tasks, setTasks] = useState<Task[]>([
    { imgSrc: 'https://duck-coin.x1cryptoscripts.com/images/bounty.png', text: 'Join Our Discord', reward: '+100', completed: true, disabled: true },
    { imgSrc: 'https://duck-coin.x1cryptoscripts.com/images/bounty.png', text: 'Follow on Twitter', reward: '+50', completed: false, disabled: false },
    { imgSrc: 'https://duck-coin.x1cryptoscripts.com/images/bounty.png', text: 'Like on Facebook', reward: '+30', completed: true, disabled: true },
    { imgSrc: 'https://duck-coin.x1cryptoscripts.com/images/bounty.png', text: 'Follow on Instagram', reward: '+40', completed: false, disabled: true },
    { imgSrc: 'https://duck-coin.x1cryptoscripts.com/images/bounty.png', text: 'Subscribe to YouTube Channel', reward: '+60', completed: true, disabled: true },
    { imgSrc: 'https://duck-coin.x1cryptoscripts.com/images/bounty.png', text: 'Share on LinkedIn', reward: '+70', completed: false, disabled: true },
    { imgSrc: 'https://duck-coin.x1cryptoscripts.com/images/bounty.png', text: 'Follow on TikTok', reward: '+35', completed: true, disabled: true },
    { imgSrc: 'https://duck-coin.x1cryptoscripts.com/images/bounty.png', text: 'Write a Blog Post', reward: '+150', completed: false, disabled: true },
  ]);

  const handleTask = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, idx) =>
        idx === index
          ? { ...task, completed: !task.completed, disabled: !task.disabled }
          : task
      )
    );
  };

  const handleRefresh = async (): Promise<void> => {
    await sleep(1000);
    // You can add logic here to refresh the tasks if needed
  };

  const allTasksCompleted = tasks.every(task => task.completed); 

  return (
    <main className="flex flex-col w-full h-screen fixed mx-auto text-white">
      <div className="flex flex-col justify-end flex-1 bg-[url('https://t4.ftcdn.net/jpg/06/20/08/47/360_F_620084766_fGRU1NqbRmNxiqw5EfY9oq1weKIo3FNH.jpg')] bg-cover">
        <div className="flex flex-col flex-1 w-full h-full px-6 pb-24 mt-12 rounded-lg">
          <h1 className="mt-0 text-2xl font-bold text-center uppercase">EARN MORE COINS</h1>


          <PullToRefresh onRefresh={handleRefresh}>
             

            <p className="mt-8 font-medium text-center">Daily Tasks</p>
            <div className="mt-4 space-y-2">
              <button className="group flex items-center w-full gap-4 px-4 py-2 bg-gray-950/10 rounded-xl" type="button">
                <img src="https://crypto-coin.x1cryptoscripts.com/images/daily-task.png" alt="Daily Task" className="object-contain w-9 h-9 mix-blend-screen" />
                <div className="text-sm font-medium text-left">
                  <p>Daily reward</p>
                  <div className="flex items-center space-x-1 text-primary">
                    <span className="font-bold">+5,526,000</span>
                  </div>
                </div>
              </button>
            </div>

            <p className="mt-8 font-medium text-center">All Tasks</p>
            <div className="mt-4 space-y-2" id="task-container">
            {tasks.length === 0 || allTasksCompleted ? ( // Check if there are no tasks
                <Empty className=' text-rose-200' description="No tasks available" /> // Render Empty component
              ) : (
                tasks.map((item, index) => (
                  <button
                    onClick={() => handleTask(index)}
                    key={index}
                    className={item.completed ? 'hidden' : 'flex items-center backdrop-blur bg-gray-950/30 rounded-xl w-full gap-4 p-4'}
                  >
                    <img src={item.imgSrc} alt="Task Icon" className="object-contain w-9 h-9 mix-blend-screen" />
                    <div className="flex flex-col text-left">
                      <span className="font-medium">{item.text}</span>
                      <span className="font-medium text-primary">{item.reward}</span>
                    </div>
                    <div className="ml-auto flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                      {item.completed ? <span>✓</span> : <span>✗</span>}
                    </div>
                  </button>
                ))
              )}
            </div>
          </PullToRefresh>
        </div>
      </div>

      <Bottom />
    </main>
  );
}
 