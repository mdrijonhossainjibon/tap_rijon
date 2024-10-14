
import { useTonConnectModal ,    useTonAddress , useTonConnectUI } from "@tonconnect/ui-react";
import { Bottom } from "components";
import { CloseCircleFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { LibLocalStorage } from "lib/LibLocalStorage";
  

const TonWallet = () => {
   
     const {   open   } = useTonConnectModal();
    
     
    const userFriendlyAddress = useTonAddress();
    const [ tonConnect ]= useTonConnectUI();
 
    const [ connected , setconnected ] = useState(LibLocalStorage.read('wallet') || null)
 
    
    useEffect(() =>{
        LibLocalStorage.write('wallet' ,  userFriendlyAddress);
        setconnected(userFriendlyAddress as any)
    }, [ userFriendlyAddress ])
    
console.log("UQDrGq9n5XMkppwE1nn393F48SGi88E5qDNbziO4tTmMaWsY".length)

    const handleDisconnect = () => {
        tonConnect.disconnect();
        LibLocalStorage.write('wallet' ,  '');
    };

    return (
        <main className="flex flex-col h-screen w-full fixed  mx-auto text-white">
            <div className="flex flex-col   justify-end bg-[url('https://t4.ftcdn.net/jpg/06/20/08/47/360_F_620084766_fGRU1NqbRmNxiqw5EfY9oq1weKIo3FNH.jpg')] bg-cover flex-1">
                <div
                    className="flex flex-col flex-1 w-full h-full px-6 py-8 pb-24 mt-12 rounded-t-lg"
                    style={{
                        boxShadow: '0 0 82px wheat, 0 1px wheat inset, 0 2px 2px wheat inset',
                        WebkitBackdropFilter: 'blur(6px)',
                        backdropFilter: 'blur(6px)',
                    }}
                >
                    <img
                        src="https://crypto-coin.x1cryptoscripts.com/images/toncoin.png"
                        alt="toncoin"
                        className="object-contain w-32 h-32 mx-auto"
                    />
                    <h1 className="mt-4 text-2xl font-bold text-center uppercase">TON Wallet</h1>
                    <p className="mt-2.5 font-medium text-center">Connect your TON wallet</p>

                     
                    { connected ? (
                        <p className="mt-2 text-green-400 text-center">Connected:  {`${userFriendlyAddress.slice(0,10)}...${userFriendlyAddress.slice(35,48)}` }</p> // Display connected address
                    ) : (
                        <p className="mt-2 text-yellow-400 text-center">No wallet connected.</p> // No wallet message
                    )}

                    <div className="mt-4 space-y-2">

                   

                        {
                            connected  ? (
                                <button type="button" className="group flex items-center text-center w-full gap-4 px-4 py-2 bg-white/10 rounded-xl" onClick={handleDisconnect}>
                                    <CloseCircleFilled className="object-contain w-9 h-9 mix-blend-screen" />   
                                    Disconnect
                                </button>
                            ) : (
                                <button
                                    onClick={ open }
                                    className="group flex items-center w-full gap-4 px-4 py-2 bg-white/10 rounded-xl"
                                    type="button"
                                >
                                    <img
                                        src="https://duck-coin.x1cryptoscripts.com/images/wallet.png"
                                        alt="Connect your Wallet"
                                        className="object-contain w-9 h-9 mix-blend-screen"
                                    />
                                    <div className="text-sm font-medium text-left">
                                        <p>Connect your Wallet</p>
                                    </div>
                                    <div className="ml-auto"></div>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>

            <Bottom />
        </main>
    );
};

export default TonWallet;
