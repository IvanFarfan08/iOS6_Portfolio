import dock from '../assets/home/Dock.webp';
import biography from '../assets/home/icons/Biography.webp';
import designs from '../assets/home/icons/Designs.webp';
import projects from '../assets/home/icons/Projects.webp';
import resume from '../assets/home/icons/Resume.webp';
import App from './App';

import { useEffect, useState } from 'react';

interface DockBarProps {
    onAppClick: (appName: string) => void;
}

function DockBar({ onAppClick }: DockBarProps) {
    const [gap, setGap] = useState(24); // 6 * 4px (default Tailwind spacing)

    useEffect(() => {
        const calculateGap = () => {
            const screenWidth = window.innerWidth;
            const appWidth = 80; // width of each app icon
            const numApps = 4;
            const desiredTotalWidth = screenWidth * 0.7; // use 70% of screen width
            const newGap = Math.max(24, (desiredTotalWidth - (appWidth * numApps)) / (numApps - 1));
            setGap(Math.min(newGap, 208)); // max gap of 52 * 4px = 208px
        };

        calculateGap();
        window.addEventListener('resize', calculateGap);
        return () => window.removeEventListener('resize', calculateGap);
    }, []);

    return (
        <div className="w-full h-24 flex items-end justify-center">
            <img
                className="absolute w-full h-14 md:h-24 bottom-0 left-0"
                alt="Dock Bar"
                src={dock}
            />
            <div className="absolute bottom-0 mb-8 md:mb-10 grid grid-cols-4" style={{ gap: `${gap}px` }}>
                <App icon={biography} name="Biography" onClick={() => onAppClick('Biography')} />
                <App icon={resume} name="Resume" link="https://docs.google.com/document/d/1PpZlO_xNWjJj41wtlVenTyyOjLTFoEwpzIPZXoevsKM/edit?usp=sharing" />
                <App icon={projects} name="Projects" onClick={() => onAppClick('Projects')} />
                <App icon={designs} name="Designs" onClick={() => onAppClick('Designs')} />
            </div>
        </div>
    );
}

export default DockBar;