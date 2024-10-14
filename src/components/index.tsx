import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export const Bottom = () => {
  const location = useLocation(); // React Router hook to get current location
  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Update active tab state
  };

  const isActive = (path: string) => (activeTab === path ? 'text-white' : 'text-white/70');

  return (
    <div className="fixed left-0 z-10 w-full px-5 py-0 bottom-2">
      <div className="flex items-center w-full p-2 max-w-lg mx-auto rounded-[35px] bg-black/30 backdrop-blur-3xl">
        <Link
          className={`relative flex items-center rounded-xl flex-col justify-center font-bold text-xs px-2.5 py-1.5 gap-1 select-none flex-1 ${isActive("/Explore")}`}
          to="/Explore"
          onClick={() => handleTabClick("/Explore")}
        >
          <span>Explore</span>
          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#B0B0B0] rounded-sm shadow-[0px_0px_4px_0px_#B88CFF] h-1 w-4/5 ${activeTab === "/src" ? '' : 'hidden'}`} />
        </Link>
        <Link
          className={`relative flex items-center rounded-xl flex-col justify-center font-bold text-xs px-2.5 py-1.5 gap-1 select-none flex-1 ${isActive("/missions")}`}
          to="/missions"
          onClick={() => handleTabClick("/missions")}
        >
          <span>Missions</span>
          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#B0B0B0] rounded-sm shadow-[0px_0px_4px_0px_#B88CFF] h-1 w-4/5 ${activeTab === "/missions" ? '' : 'hidden'}`} />
        </Link>
        <Link
          className={`relative flex items-center rounded-xl flex-col justify-center font-bold text-xs px-2.5 py-1.5 gap-1 select-none flex-1 ${isActive("/friends")}`}
          to="/friends"
          onClick={() => handleTabClick("/friends")}
        >
          <span>Friends</span>
          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#B0B0B0] rounded-sm shadow-[0px_0px_4px_0px_#B88CFF] h-1 w-4/5 ${activeTab === "/friends" ? '' : 'hidden'}`} />
        </Link>
        
        <Link
          className={`relative flex items-center rounded-xl flex-col justify-center font-bold text-xs px-2.5 py-1.5 gap-1 select-none flex-1 ${isActive("/wallet")}`}
          to="/wallet"
          onClick={() => handleTabClick("/wallet")}
        >
          <span>Wallet</span>
          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#B0B0B0] rounded-sm shadow-[0px_0px_4px_0px_#B88CFF] h-1 w-4/5 ${activeTab === "/wallet" ? '' : 'hidden'}`} />
        </Link>
      </div>
    </div>
  );
};
