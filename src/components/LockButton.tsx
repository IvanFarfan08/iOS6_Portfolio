import { useState, useRef, useEffect } from 'react';
import lockedArrow from '../assets/lock_screen/locked_arrow.webp';

interface LockButtonProps {
  onUnlock: () => void;
}

function LockButton({ onUnlock }: LockButtonProps) {
  // State
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Refs
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const grabOffsetRef = useRef(0);
  const positionRef = useRef(0);

//   console.log('position', position);
  
  // Constants and utilities
  const getMaxX = () => {
    if (window.innerWidth < 768) { // Mobile
      const viewportWidth = window.innerWidth;
      const barWidth = viewportWidth * 0.9; // w-9/10 from LockBar
      const buttonWidth = 105; // Fixed button width
      return barWidth - buttonWidth;
    }
    return 295; // Desktop: 400px (bar) - 105px (button)
  };

  // Handlers
  const handleDragStart = (clientX: number) => {
    if (!buttonRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    // Store where on the button the user grabbed (relative to button's left edge)
    grabOffsetRef.current = clientX - buttonRect.left;
    setIsDragging(true);
  };

  const handleDragMove = (clientX: number) => {
    if (!buttonRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    // Where the grabbed point on the button should be
    const targetX = clientX - grabOffsetRef.current;
    // How far to move from current position
    const delta = targetX - buttonRect.left;
    const newPosition = Math.max(0, Math.min(positionRef.current + delta, getMaxX()));

    positionRef.current = newPosition;
    setPosition(newPosition);

    if (newPosition >= getMaxX() * 0.9) {
      onUnlock();
      positionRef.current = 0;
      setPosition(0);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    const maxX = getMaxX();
    if (positionRef.current < maxX * 0.9) {
      positionRef.current = 0;
      setPosition(0);
    }
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };
  
  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };
  
  // Global event listeners
  useEffect(() => {
    if (!isDragging) return;
    
    const handleGlobalMouseMove = (e: MouseEvent) => handleDragMove(e.clientX);
    const handleGlobalMouseUp = () => handleDragEnd();
    
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (e.cancelable) {
        e.preventDefault();
      }
      handleDragMove(e.touches[0].clientX);
    };
    
    const handleGlobalTouchEnd = () => {
      handleDragEnd();
    };

    // Add event listeners
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
    window.addEventListener('touchend', handleGlobalTouchEnd, { passive: true });

    // Clean up event listeners
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging]);

  // Styling
  const buttonStyle = {
    transform: `translateX(${position}px)`,
    left: window.innerWidth >= 768 ? 'calc(50% - 200px)' : 'calc(5vw)'
  };
  
  const arrowStyle = {
    transform: `scale(${isDragging ? 0.8 : 1})`,
    opacity: isDragging 
      ? Math.max(0.3, 0.8 - (position / getMaxX() * 0.5)) 
      : 0.8
  };
  
  const baseStyle = `absolute w-[105px] h-[70px] z-3 bottom-10 rounded-[21px]
    shadow-[inset_0px_4px_4px_#00000040]
    [background:linear-gradient(180deg,rgba(210,210,210,1)_0%,rgba(108,108,108,1)_100%)]
    cursor-grab active:cursor-grabbing select-none
    flex items-center justify-center ${isDragging ? '' : 'transition-all duration-500 ease-out'}`;

  return (
    <div ref={containerRef} className="w-[105px] h-[70px] touch-none">
      <div
        ref={buttonRef}
        className={baseStyle}
        style={buttonStyle}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div 
          className="w-[35px] h-[35px] flex items-center justify-center transition-all duration-300 ease-out"
          style={arrowStyle}
        >
          <img 
            src={lockedArrow} 
            alt="Lock" 
            className="w-full h-full object-contain pointer-events-none select-none" 
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}

export default LockButton;