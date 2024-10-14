import { Bottom } from "components";


const FriendsPage = () => {

  return (

    <main className="flex flex-col w-full max-w-lg h-[100vh] mx-auto text-white">
      <div className="flex flex-col justify-end bg-cover flex-1" style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/06/20/08/47/360_F_620084766_fGRU1NqbRmNxiqw5EfY9oq1weKIo3FNH.jpg)' }}>
        <div className="flex flex-col flex-1 w-full h-full px-6 py-8 pb-24 mt-12 modal-body">
          <h1 className="text-2xl font-bold text-center uppercase">Friends</h1>
          <p className="mt-2.5 font-medium text-center">
            You and your friend will receive bonuses.
          </p>

          <div className="mt-4 space-y-2">
            <button className="flex items-center w-full gap-4 px-4 py-2 bg-white/10 rounded-xl">
              <div className="text-sm font-medium text-left">
                <p>Invite a friend</p>
                <div className="flex items-center space-x-1">
                  <img
                    src="https://crypto-coin.x1cryptoscripts.com/images/chest.png"
                    alt="chest"
                    className="object-contain w-9 h-9 mix-blend-screen"
                  />
                  <span className="font-bold text-primary">+5,000</span>
                  <span className="text-sm">for you and your friend</span>
                </div>
              </div>
            </button>

            <button className="flex items-center w-full gap-4 px-4 py-2 bg-white/10 rounded-xl">
              <div className="text-sm font-medium">
                <p>Invite a friend with Telegram premium</p>
                <div className="flex items-center space-x-1">
                  <img
                    src="https://crypto-coin.x1cryptoscripts.com/images/chest.png"
                    alt="chest"
                    className="object-contain w-9 h-9 mix-blend-screen"
                  />
                  <span className="font-bold text-primary">+25,000</span>
                  <span className="text-sm">for you and your friend</span>
                </div>
              </div>
            </button>
          </div>

          <div className="relative flex-1">
            <div className="absolute inset-0 w-full h-[calc(100%-1rem)] py-6 mt-4 overflow-y-scroll">
              <div className="text-center">
                <button className="rounded-full border-2 border-[#FFDAA3]/10 text-[#FFDAA3] text-xs font-bold py-2.5 px-4">
                  More bonuses
                </button>
              </div>

              <p className="mt-8 text-sm font-bold uppercase">
                List of your friends (100)
              </p>

              <div className="flex items-center justify-center px-4 mt-4 border-2 border-dashed rounded-xl border-white/10 h-14">
                <p className="text-xs font-medium text-center text-white/30">
                  You didn’t invite anyone yet
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap select-none rounded-md text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-bold uppercase bg-[linear-gradient(180deg,#EEE8E2_0%,#C6C2BE_51.99%,_#C6C2BE_52%,#A48B74_100%)] text-black active:bg-[linear-gradient(180deg,#A48B74_0%,#C6C2BE_48%,#C6C2BE_48.01%,#EEE8E2_100%)] shadow-[0px_0px_20px_0px_rgba(255,218,163,0.27)] active:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)_inset,_0px_0px_20px_0px_rgba(255,218,163,0.27)] px-6 py-4 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7143 2.14286H10C9.43168 2.14286 8.88663 2.36862 8.48477 2.77049C8.08291 3.17235 7.85714 3.71739 7.85714 4.28571V5.71429H10C11.1366 5.71429 12.2267 6.16582 13.0305 6.96954C13.8342 7.77327 14.2857 8.86336 14.2857 10V12.1429H15.7143C16.2826 12.1429 16.8277 11.9171 17.2295 11.5152C17.6314 11.1134 17.8571 10.5683 17.8571 10V4.28571C17.8571 3.71739 17.6314 3.17235 17.2295 2.77049C16.8277 2.36862 16.2826 2.14286 15.7143 2.14286ZM14.2857 14.2857H15.7143C16.8509 14.2857 17.941 13.8342 18.7447 13.0305C19.5485 12.2267 20 11.1366 20 10V4.28571C20 3.14907 19.5485 2.05898 18.7447 1.25526C17.941 0.451529 16.8509 0 15.7143 0H10C8.86336 0 7.77327 0.451529 6.96954 1.25526C6.16582 2.05898 5.71429 3.14907 5.71429 4.28571V5.71429H4.28571C3.14907 5.71429 2.05898 6.16582 1.25526 6.96954C0.451529 7.77327 0 8.86336 0 10V15.7143C0 16.8509 0.451529 17.941 1.25526 18.7447C2.05898 19.5485 3.14907 20 4.28571 20H10C11.1366 20 12.2267 19.5485 13.0305 18.7447C13.8342 17.941 14.2857 16.8509 14.2857 15.7143V14.2857ZM4.28571 7.85714H10C10.5683 7.85714 11.1134 8.08291 11.5152 8.48477C11.9171 8.88663 12.1429 9.43168 12.1429 10V15.7143C12.1429 16.2826 11.9171 16.8277 11.5152 17.2295C11.1134 17.6314 10.5683 17.8571 10 17.8571H4.28571C3.71739 17.8571 3.17235 17.6314 2.77049 17.2295C2.36862 16.8277 2.14286 16.2826 2.14286 15.7143V10C2.14286 9.43168 2.36862 8.88663 2.77049 8.48477C3.17235 8.08291 3.71739 7.85714 4.28571 7.85714Z"
                  fill="black"
                />
              </svg>
            </button>

            <button className="inline-flex w-[80%] items-center justify-center whitespace-nowrap select-none rounded-md text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-bold uppercase bg-[linear-gradient(180deg,#EEE8E2_0%,#C6C2BE_51.99%,_#C6C2BE_52%,#A48B74_100%)] text-black active:bg-[linear-gradient(180deg,#A48B74_0%,#C6C2BE_48%,#C6C2BE_48.01%,#EEE8E2_100%)] shadow-[0px_0px_20px_0px_rgba(255,218,163,0.27)] active:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)_inset,_0px_0px_20px_0px_rgba(255,218,163,0.27)] px-6 py-4 flex-shrink-0">
              Send Invite
            </button>
          </div>
        </div>
      </div>

      <Bottom />
    </main>

  );
};


export default FriendsPage