import vertex from "../assets/designs/vertex.png";
import portfolio from "../assets/designs/portfolio.png";
import Design from './Design';
import { useEffect, useState } from 'react';

export type DesignName = "iOS 6 Portfolio" | "Vertex Landing Page";

interface DesignInfo {
    name: DesignName;
    image: string;
    link?: string;
}

const designs: DesignInfo[] = [
    { name: "iOS 6 Portfolio", image: portfolio, link: 'https://www.figma.com/proto/8mzM1sUZmGTosneOPiX4jn/Untitled?node-id=0-1&t=yJG6781hmmwbWxTJ-1' },
    { name: "Vertex Landing Page", image: vertex, link: 'https://www.figma.com/proto/3sDM0k81ZSTH5zGmZfZKmR/Vertex-Landing-Website?node-id=30-41&t=LGRhUS3iPmvw55f1-1' },
];

function DesignLayout({ onDesignClick }: { onDesignClick: (design: DesignName) => void }) {
    const [columnGap, setColumnGap] = useState(16);
    const [columns, setColumns] = useState(2);

    useEffect(() => {
        const calculateLayout = () => {
            const screenWidth = window.innerWidth;
            const newColumns = screenWidth < 640 ? 1 : screenWidth < 768 ? 2 : 2;
            setColumns(newColumns);
            
            // Adjust gap based on screen size
            const newGap = screenWidth < 640 ? 12 : 16;
            setColumnGap(newGap);
        };

        calculateLayout();
        window.addEventListener('resize', calculateLayout);
        return () => window.removeEventListener('resize', calculateLayout);
    }, []);

    return (
        <div className="w-full h-full">
            <div 
                className="grid px-4 pt-4 sm:px-6 sm:pt-6"
                style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    gap: `${columnGap}px`,
                }}
            >
                {designs.map((design) => (
                    <div 
                        key={design.name}
                        onClick={() => onDesignClick(design.name)}
                        className="cursor-pointer transition-transform duration-200 hover:scale-105"
                    >
                        <Design name={design.name} image={design.image} link={design.link} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DesignLayout;
