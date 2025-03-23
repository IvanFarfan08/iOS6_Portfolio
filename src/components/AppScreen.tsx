import clock from '../assets/home/icons/Clock_Clean.png';
import calendar from '../assets/home/icons/Calendar_Clean.png';
import mail from '../assets/home/icons/Mail.png';
import github from '../assets/home/icons/Github.png';
import linkedin from '../assets/home/icons/LinkedIn.png';
import App from './App';
import { useEffect, useState } from 'react';
import CalendarApp from './CalendarApp';
import ClockApp from './ClockApp';

function AppScreen({date}: {date: Date}) {
    const [columnGap, setColumnGap] = useState(24);
    const [rowGap, setRowGap] = useState(40); // Initial row gap
    const [columns, setColumns] = useState(5);

    useEffect(() => {
        const calculateLayout = () => {
            const screenWidth = window.innerWidth;
            const appWidth = 80;
            const newColumns = screenWidth < 768 ? 4 : 5;
            setColumns(newColumns);
            
            // iOS-style spacing calculation
            const widthPercentage = newColumns === 5 ? 0.9 : 0.8; // 95% width for 5 columns, 80% for 4
            const desiredTotalWidth = screenWidth * widthPercentage;
            const minGap = screenWidth < 768 ? 24 : 40; // Smaller gaps on mobile
            const newColumnGap = Math.max(minGap, (desiredTotalWidth - (appWidth * newColumns)) / (newColumns - 1));
            setColumnGap(Math.min(newColumnGap, 400)); // Allow for even wider gaps on large screens
            
            // Calculate row gap based on screen height if needed
            const screenHeight = window.innerHeight;
            const newRowGap = Math.max(40, screenHeight * 0.06); // 6% of screen height with a minimum of 40px
            setRowGap(Math.min(newRowGap, 120)); // Allow for larger vertical spacing
        };

        calculateLayout();
        window.addEventListener('resize', calculateLayout);
        return () => window.removeEventListener('resize', calculateLayout);
    }, []);

    return (
        <div className="w-full h-24 flex items-end justify-center">
            <div 
                className="absolute top-0 mt-[72px] grid px-4 md:px-0" 
                style={{ 
                    columnGap: `${columnGap}px`, 
                    rowGap: `${rowGap}px`, 
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` 
                }}
            >
                <App icon={mail} name="Mail" link="mailto:ifarfand@stevens.edu"/>
                <App icon={github} name="GitHub" link="https://github.com/IvanFarfan08"/>
                <App icon={linkedin} name="LinkedIn" link="https://www.linkedin.com/in/ifdiaz/"/>
                <ClockApp icon={clock} name="Clock" date={date}/>
                <CalendarApp icon={calendar} name="Calendar" date={date}/>
            </div>
        </div>
    );
}

export default AppScreen;