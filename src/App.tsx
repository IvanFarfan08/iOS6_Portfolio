import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import StatusBar from './components/StatusBar'
import TimeBar from './components/TimeBar'
import LockBar from './components/LockBar'
import LockButton from './components/LockButton'
import DockBar from './components/DockBar'
import AppScreen from './components/AppScreen'
import BiographyScreen from './components/BiographyScreen'
import ProjectsScreen from './components/ProjectsScreen'
import DesignsScreen from './components/DesignsScreen'
import { preloadImages } from './utils/preloadImages'

import './App.css'

function HomeScreen({ date }: { date: Date }) {
  return (
    <>
      <h1 className="sr-only">Ivan Farfan Diaz — Software Engineer & Automation Engineer</h1>
      <DockBar />
      <AppScreen date={date} />
    </>
  );
}

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        window.scrollTo(0, 0);
        navigate('/');
      }}
      className="fixed top-[35px] left-2 bg-[#007AFF] text-white px-4 py-1.5 rounded-full text-sm font-medium opacity-90 hover:opacity-100 transition-all z-50 shadow-lg"
    >
      ← Back
    </button>
  );
}

function App() {
  const [isLocked, setIsLocked] = useState(() => {
    return sessionStorage.getItem('unlocked') !== 'true';
  });
  const [date, setDate] = useState(new Date());
  const location = useLocation();

  // Preload all images on mount so they're cached before navigation
  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, [])

  const handleUnlock = () => {
    setIsLocked(false);
    sessionStorage.setItem('unlocked', 'true');
  };

  // Only show lock on root route and when not yet unlocked
  const showLock = isLocked && location.pathname === '/';

  return (
    <>
      <div className='w-screen h-screen overflow-hidden'>
        <div className='w-full h-full'>
          <StatusBar showLock={showLock} date={date} />
          {showLock && (
            <div className="touch-none">
              <TimeBar date={date} />
              <LockBar />
              <LockButton onUnlock={handleUnlock} />
            </div>
          )}
          {/* Always render main content so crawlers can see it; lock screen overlays on top */}
          <main className={showLock ? 'sr-only' : ''}>
            <Routes>
              <Route path="/" element={<HomeScreen date={date} />} />
              <Route path="/biography" element={<><BiographyScreen /><BackButton /></>} />
              <Route path="/projects" element={<><ProjectsScreen /><BackButton /></>} />
              <Route path="/designs" element={<><DesignsScreen /><BackButton /></>} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
