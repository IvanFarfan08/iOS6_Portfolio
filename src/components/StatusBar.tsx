function StatusBar({ date, showLock = false }: {date:Date, showLock?: boolean}) {
  return (
    <div className="w-full">
      <div className="">
        <div className="absolute w-full h-[30px] top-0 left-0 bg-[#212121] opacity-90" />
        <div className="absolute top-1.5 left-[5px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
          <span className="md:hidden">iPhone</span>
          <span className="hidden md:inline">iPad</span>
        </div>

        <img
          className="absolute w-4 h-4 top-[7px] left-[54px] md:left-[39px]"
          alt="iOS Wi-Fi"
          src="https://c.animaapp.com/ntQlCAGr/img/ios-wifi-2-1-1.svg"
        />
        <div className='justify-center'>
        { showLock ? (
        <img
          className="left-1/2 -translate-x-1/2 absolute w-4 h-4 top-[7px]"
          alt="Lock"
          src="https://c.animaapp.com/ntQlCAGr/img/lock-1-1.svg"
        />
        ) : (
        <div className="left-1/2 -translate-x-1/2 absolute top-[7px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
          {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default StatusBar