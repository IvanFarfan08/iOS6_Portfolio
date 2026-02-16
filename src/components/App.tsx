import { useState } from 'react';

interface AppProps {
    icon: string;
    name: string;
    link?: string;
    onClick?: () => void;
}

function App({icon, name, link = '#', onClick}: AppProps) {
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 150);
        
        // Execute onClick or navigate to link after the press animation completes
        setTimeout(() => {
            if (onClick) {
                onClick();
            } else if (link !== '#') {
                window.open(link, '_blank');
            }
        }, 200);
    };

    return (
        <div 
            className="w-[80px] h-[80px] cursor-pointer"
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
            onClick={handleClick}>
            <div className="flex flex-col items-center justify-center">
                <div 
                    className={`w-[80px] h-[80px] rounded-[16px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25),0px_10px_10px_0px_rgba(0,0,0,0.30)] transition-all duration-150 ${isPressed ? 'opacity-50 scale-90' : 'opacity-100 scale-100'}`}
                >
                    <img src={icon} alt="App" className="w-full h-full object-cover"/>
                </div>
                <div className="relative w-full mt-2">
                    <div className="absolute left-1/2 -translate-x-1/2 [text-shadow:0px_2px_4px_#000000cc] [font-family:'Helvetica-Bold',Helvetica] font-bold text-sm text-white tracking-[0] leading-[normal] whitespace-nowrap">
                        {name}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;