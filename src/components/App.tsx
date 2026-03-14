import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AppProps {
    icon: string;
    name: string;
    link?: string;
    to?: string;
    onClick?: () => void;
}

function App({icon, name, link, to, onClick}: AppProps) {
    const [isPressed, setIsPressed] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 150);

        setTimeout(() => {
            if (onClick) {
                onClick();
            } else if (to) {
                navigate(to);
            }
        }, 200);
    };

    const content = (
        <div className="flex flex-col items-center justify-center">
            <div
                className={`w-[80px] h-[80px] rounded-[16px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25),0px_10px_10px_0px_rgba(0,0,0,0.30)] transition-all duration-150 ${isPressed ? 'opacity-50 scale-90' : 'opacity-100 scale-100'}`}
            >
                <img src={icon} alt={name} className="w-full h-full object-cover"/>
            </div>
            <div className="relative w-full mt-2">
                <div className="absolute left-1/2 -translate-x-1/2 [text-shadow:0px_2px_4px_#000000cc] [font-family:'Helvetica-Bold',Helvetica] font-bold text-sm text-white tracking-[0] leading-[normal] whitespace-nowrap">
                    {name}
                </div>
            </div>
        </div>
    );

    if (link) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[80px] h-[80px] cursor-pointer"
                onTouchStart={() => setIsPressed(true)}
                onTouchEnd={() => setIsPressed(false)}
                onClick={(e) => {
                    e.preventDefault();
                    setIsPressed(true);
                    setTimeout(() => setIsPressed(false), 150);
                    setTimeout(() => {
                        window.open(link, '_blank', 'noopener,noreferrer');
                    }, 200);
                }}>
                {content}
            </a>
        );
    }

    return (
        <div
            className="w-[80px] h-[80px] cursor-pointer"
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
            onClick={handleClick}>
            {content}
        </div>
    );
}

export default App;