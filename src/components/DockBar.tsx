import dock from '../assets/home/Dock.webp';
import biography from '../assets/home/icons/Biography.webp';
import designs from '../assets/home/icons/Designs.webp';
import projects from '../assets/home/icons/Projects.webp';
import resume from '../assets/home/icons/Resume.webp';
import App from './App';

import { useEffect, useState } from 'react';

function DockBar() {
    const [gap, setGap] = useState(24);

    useEffect(() => {
        const calculateGap = () => {
            const screenWidth = window.innerWidth;
            const appWidth = 80;
            const numApps = 4;
            const desiredTotalWidth = screenWidth * 0.7;
            const newGap = Math.max(24, (desiredTotalWidth - (appWidth * numApps)) / (numApps - 1));
            setGap(Math.min(newGap, 208));
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
            <nav className="absolute bottom-0 mb-8 md:mb-10 grid grid-cols-4" aria-label="Main navigation" style={{ gap: `${gap}px` }}>
                <App icon={biography} name="Biography" to="/biography" />
                <App icon={resume} name="Resume" link="https://docs.google.com/document/d/1PpZlO_xNWjJj41wtlVenTyyOjLTFoEwpzIPZXoevsKM/edit?usp=sharing" />
                <App icon={projects} name="Projects" to="/projects" />
                <App icon={designs} name="Designs" to="/designs" />
            </nav>
        </div>
    );
}

export default DockBar;