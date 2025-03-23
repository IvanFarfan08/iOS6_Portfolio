import { useState } from 'react';

function CalendarApp({icon, name, date}: {icon: string, name: string, date: Date}) {
    const [isPressed, setIsPressed] = useState(false);

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
                    <div className="absolute inset-0">
                        <div className='absolute w-full text-center'>
                            <div className="font-bold text-[14px] text-[#FFFFFF] [text-shadow:1px_1px_1px_rgba(255,255,255,0.3),0px_1px_1px_rgba(0,0,0,0.7)]">
                                {date.toLocaleDateString([], {weekday: 'long'})}
                            </div>
                            <div className='absolute w-full text-center top-[12px]'>
                            <div className="font-bold text-[52px] text-[#2d2d2d] [text-shadow:1px_1px_1px_rgba(255,255,255,0.3),0px_1px_1px_rgba(0,0,0,0.7)]">
                                {date.getDate()} 
                            </div>
                            </div>
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

export default CalendarApp;