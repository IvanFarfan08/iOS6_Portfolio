function TimeBar( {date} : {date: Date} ) {
    return (
    <div className="w-full h-[150px]">
        <div className="absolute w-full h-[150px] top-[30px] left-0 bg-[#1b1b1b] shadow-[inset_0px_75px_8px_#00000040] opacity-90" />
        <div className="left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-[80px] font-light tracking-[0] leading-[normal] whitespace-nowrap">
            <h1 className="time-display text-white">{date.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute: '2-digit'})}</h1>
        </div>
        <div className="left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-[150px] font-light tracking-[0] leading-[normal] whitespace-nowrap">
            <h2 className="date-display text-white">{date.toLocaleDateString([], {weekday: 'long', day: 'numeric', month: 'long' })}</h2>
        </div>
    </div>
    );
}

export default TimeBar