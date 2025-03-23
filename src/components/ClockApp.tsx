import { useState } from 'react';

function ClockApp({icon, name, date}: {icon: string, name: string, date: Date}) {
    const [isPressed, setIsPressed] = useState(false);
    const seconds = date.getSeconds() + date.getMilliseconds() / 1000;
    const minutes = date.getMinutes() + seconds / 60;
    const hours = (date.getHours() % 12) + minutes / 60;

    const handleClick = () => {
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 150);
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
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-[60px] h-[60px] rounded-full">
                            <div 
                                className="absolute w-[2px] h-[15px] bg-black top-[15px] left-[29px] origin-bottom transform shadow-[0_0_2px_rgba(0,0,0,0.5)]"
                                style={{ transform: `rotate(${hours * 30}deg)` }}
                            />
                            <div 
                                className="absolute w-[2px] h-[20px] bg-black top-[10px] left-[29px] origin-bottom transform shadow-[0_0_2px_rgba(0,0,0,0.5)]"
                                style={{ transform: `rotate(${minutes * 6}deg)` }}
                            />
                            <div 
                                className="absolute w-[1px] h-[25px] bg-red-500 top-[5px] left-[29.5px] origin-bottom transform shadow-[0_0_2px_rgba(255,0,0,0.3)] transition-transform duration-[16ms] ease-linear"
                                style={{ transform: `rotate(${seconds * 6}deg)` }}
                            />
                            <div className="absolute w-[4px] h-[4px] bg-black rounded-full top-[28px] left-[28px]" />
                        </div>
                    </div>
                </div>
                <div className="w-full text-center mt-2">
                    <div className="[text-shadow:0px_2px_4px_#000000cc] [font-family:'Helvetica-Bold',Helvetica] font-bold text-sm text-white tracking-[0] leading-[normal] whitespace-nowrap">
                        {name} 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClockApp;