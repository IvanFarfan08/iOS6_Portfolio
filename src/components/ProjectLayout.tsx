import vertex from "../assets/books/Vertex.png"
import blue from "../assets/books/Blue_Book.png"
import red from "../assets/books/Red_Book.png"
// import green from "../assets/books/Green_Book.png"
import Shelf from "../assets/screens/Shelf.png";
import Project from './Project';
import { useEffect, useState } from 'react';
import { ProjectName } from './ProjectsScreen';

function ProjectLayout({ onProjectClick }: { onProjectClick: (project: ProjectName) => void }) {
    const [columnGap, setColumnGap] = useState(24);
    const [rowGap, setRowGap] = useState(40); // Initial row gap
    const [columns, setColumns] = useState(5);
    const [shelfPositions, setShelfPositions] = useState<number[]>([]);

    const totalProjects = 15; // Total number of project items

    useEffect(() => {
        const calculateLayout = () => {
            const screenWidth = window.innerWidth;
            let projectWidth = 120;
            const newColumns = screenWidth < 768 ? 4 : 5;
            setColumns(newColumns);
            
            // iOS-style spacing calculation
            const widthPercentage = newColumns === 5 ? 0.9 : 0.8; // 95% width for 5 columns, 80% for 4
            const desiredTotalWidth = screenWidth * widthPercentage;
            const minGap = screenWidth < 768 ? 24 : 40; // Smaller gaps on mobile
            const newColumnGap = Math.max(minGap, (desiredTotalWidth - (projectWidth * newColumns)) / (newColumns - 1));
            setColumnGap(Math.min(newColumnGap, 400)); // Allow for even wider gaps on large screens
            
            // Calculate row gap based on screen height if needed
            const screenHeight = window.innerHeight;
            const newRowGap = Math.max(40, screenHeight * 0.06); // 6% of screen height with a minimum of 40px
            setRowGap(Math.min(newRowGap, 120)); // Allow for larger vertical spacing

            // Calculate shelf positions based on number of rows
            const numRows = Math.ceil(totalProjects / newColumns);
            const projectHeight = screenWidth < 768 ? 128 : 208; // h-32 (128px) for mobile, h-52 (208px) for desktop
            
            // Calculate base offset based on screen size and aspect ratio
            const aspectRatio = screenWidth / screenHeight;
            let baseShelfOffset;
            
            if (screenWidth < 768) {
                if (aspectRatio < 0.5) { // Very tall phones
                    baseShelfOffset = 190;
                } else if (aspectRatio > 0.65) { // Wide phones
                    baseShelfOffset = 175;
                } else { // Standard phones
                    baseShelfOffset = 182;
                }
            } else {
                if (aspectRatio < 1) { // Portrait tablets/laptops
                    baseShelfOffset = 260;
                } else if (aspectRatio > 1.5) { // Wide screens
                    baseShelfOffset = 245;
                } else { // Standard screens
                    baseShelfOffset = 252;
                }
            }
            
            const rowSpacing = projectHeight + newRowGap;
            
            // Calculate shelf positions to align perfectly with projects
            const newShelfPositions = Array.from({ length: numRows }, (_, index) => {
                return baseShelfOffset + (index * rowSpacing);
            });
            setShelfPositions(newShelfPositions);
        };

        calculateLayout();
        window.addEventListener('resize', calculateLayout);
        return () => window.removeEventListener('resize', calculateLayout);
    }, []);

    return (
        <div className="w-full flex items-end justify-center">
            <div 
                className="absolute top-0 mt-[68px] grid px-4 md:px-0 z-[2]" 
                style={{ 
                    columnGap: `${columnGap}px`, 
                    rowGap: `${rowGap}px`, 
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    transform: 'translateY(0)'
                }}
            >
                <Project icon={vertex} title="" description="" onClick={() => onProjectClick('Vertex')}/>
                <Project icon={red} title="DishDetective" description="AI POS System" onClick={() => onProjectClick('DishDetective')}/>
                <Project icon={blue} title="Recalled" description="FDA Recall Verification App" onClick={() => onProjectClick('Recalled')}/>
                {/* <Project icon={green} title="Fourier Stocks" description="FFT Based Stock Price Predictor" onClick={() => onProjectClick('Fourier Stocks')}/> */}
                
            </div>
            {shelfPositions.map((position, index) => (
                <div 
                    key={`shelf-${index}`}
                    className="absolute left-0 w-full z-[1]"
                    style={{ top: `${position}px` }}
                >
                    <img 
                        src={Shelf} 
                        alt={`Shelf ${index + 1}`} 
                        className="w-full h-[28px] md:h-[44px] transition-all duration-500" 
                    />
                </div>
            ))}
        </div>
    );
}

export default ProjectLayout;