function LockBar() {
    const gradientStyle = {
        backgroundSize: '200% 100%',
        animation: 'gradientMove 2s linear infinite'
    };
    return (    
        <div className="w-full h-[150px]">
        <div className="absolute w-full h-[150px] bottom-0 left-0 bg-[#1b1b1b] shadow-[inset_0px_75px_8px_#00000040] opacity-95" />
        <div className="w-9/10 md:w-[400px] h-[71px]">
            <div className="absolute w-9/10 md:w-[400px] h-[71px] z-1 bottom-10 left-1/2 -translate-x-1/2 bg-[#1a1c1db2] rounded-[21px] shadow-[inset_0px_0px_9.4px_-1px_#e6e6e640]"  />
        </div>
        <div className="w-1/5 md:w-[206px] h-[37px]">
            <div
              style={{...gradientStyle, fontFamily: '"Helvetica Neue", Helvetica, Inter, sans-serif', fontWeight: 300}}
              className="absolute select-none z-2 bottom-13 left-1/2 -translate-x-1/4 font-light text-[32px] whitespace-nowrap bg-gradient-to-r from-[#3f3f3f] via-[#fbfbfb] to-[#3f3f3f] bg-clip-text text-transparent">
              slide to unlock
            </div>
        </div>
      </div>
    );
}

const styles = `
  @keyframes gradientMove {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default LockBar