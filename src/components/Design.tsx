import { useState } from 'react';

interface DesignProps {
    name: string;
    image: string;
    link?: string;
    onClick?: () => void;
}

function Design({ name, image, link = '#', onClick }: DesignProps) {
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
        <div className="flex flex-col items-center gap-3.5 py-10" onClick={handleClick}>
            <div className="w-1/2 aspect-[16/9] bg-white shadow-[0_0.5px_0_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.1)] p-1">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-full text-center mt-2">
                <div className="[text-shadow:0px_2px_4px_#000000cc] [font-family:'Helvetica-Bold',Helvetica] font-bold text-sm text-white tracking-[0] leading-[normal] whitespace-nowrap">
                    {name}
                </div>
            </div> 
        </div>
    )
}

export default Design;