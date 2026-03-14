import clock from '../assets/home/icons/Clock_Clean.webp';
import calendar from '../assets/home/icons/Calendar_Clean.webp';
import mail from '../assets/home/icons/Mail.webp';
import github from '../assets/home/icons/Github.webp';
import linkedin from '../assets/home/icons/LinkedIn.webp';

import App from './App';
import { useEffect, useState } from 'react';
import CalendarApp from './CalendarApp';
import ClockApp from './ClockApp';

interface AppScreenProps {
    date: Date;
}

function AppScreen({ date }: AppScreenProps) {
    const [columnGap, setColumnGap] = useState(() => {
        const w = typeof window !== 'undefined' ? window.innerWidth : 768;
        return w < 768 ? 24 : 40;
    });
    const [rowGap, setRowGap] = useState(() => {
        const w = typeof window !== 'undefined' ? window.innerWidth : 768;
        return w < 768 ? 24 : 60;
    });
    const [columns, setColumns] = useState(() => {
        const w = typeof window !== 'undefined' ? window.innerWidth : 768;
        return w < 768 ? 4 : 5;
    });

    useEffect(() => {
        const calculateLayout = () => {
            const screenWidth = window.innerWidth;
            const appWidth = 80;
            const newColumns = screenWidth < 768 ? 4 : 5;
            setColumns(newColumns);

            // iOS-style spacing calculation
            const widthPercentage = newColumns === 5 ? 0.9 : 0.8;
            const desiredTotalWidth = screenWidth * widthPercentage;
            const minGap = screenWidth < 768 ? 24 : 40;
            const newColumnGap = Math.max(minGap, (desiredTotalWidth - (appWidth * newColumns)) / (newColumns - 1));
            setColumnGap(Math.min(newColumnGap, 400));

            // Calculate row gap based on screen height
            const screenHeight = window.innerHeight;
            const isMobile = screenWidth < 768;
            const minRowGap = isMobile ? 24 : 60;
            const rowGapPercent = isMobile ? 0.04 : 0.1;
            const maxRowGap = isMobile ? 40 : 160;
            const newRowGap = Math.max(minRowGap, screenHeight * rowGapPercent);
            setRowGap(Math.min(newRowGap, maxRowGap));
        };

        calculateLayout();
        window.addEventListener('resize', calculateLayout);
        return () => window.removeEventListener('resize', calculateLayout);
    }, []);

    return (
        <div className="w-full h-24 flex items-end justify-center">
            <nav
                className="absolute top-0 mt-[72px] grid px-4 md:px-0"
                aria-label="Applications"
                style={{
                    columnGap: `${columnGap}px`,
                    rowGap: `${rowGap}px`,
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
                }}
            >
                <App icon={mail} name="Mail" link="mailto:ifarfand@stevens.edu" />
                <App icon={github} name="GitHub" link="https://github.com/IvanFarfan08" />
                <App icon={linkedin} name="LinkedIn" link="https://www.linkedin.com/in/ifdiaz/" />
                <ClockApp icon={clock} name="Clock" date={date} />
                <CalendarApp icon={calendar} name="Calendar" date={date} />

            </nav>
        </div>
    );
}

export default AppScreen;