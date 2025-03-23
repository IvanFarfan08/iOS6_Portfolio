import { useState } from 'react';

interface ProjectProps {
    icon: string;
    title?: string;
    description?: string;
    onClick?: () => void;
}

function Project({icon, title, description, onClick}: ProjectProps) {
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 150);
        
        setTimeout(() => {
            if (onClick) {
                onClick();
            }
        }, 200);
    };

    return (
        <div 
            className="w-20 md:w-32 h-32 md:h-52 cursor-pointer"
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
            onClick={handleClick}>  
            <div className="flex flex-col items-center justify-center">
                <div 
                    className={`relative w-20 h-32 md:w-32 md:h-52 overflow-hidden shadow-lg transition-all duration-150 hover:shadow-xl ${isPressed ? 'opacity-50 scale-90' : 'opacity-100 scale-100 hover:scale-[1.02]'}`}
                >
                    <img src={icon} alt="Project" className="w-full h-full object-cover"/>
                    {title && (
                        <>
                            <div className="absolute inset-0 from-black/40 via-transparent to-black/40" />
                            <div className="absolute inset-0 flex flex-col items-center">
                                <div className="px-3 mt-4">
                                    <span className="block font-serif font-bold text-[#dfd79b] text-[9px] md:text-sm text-center leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                                        {title}
                                    </span>
                                </div>
                                <div className="px-2 md:px-3 mt-auto mb-12">
                                    <span className="block font-serif font-bold text-[#fcfcfccb] text-[9px] md:text-sm text-center leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                                        {description}
                                    </span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;