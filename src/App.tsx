import { useState, useEffect } from 'react'
import StatusBar from './components/StatusBar'
import TimeBar from './components/TimeBar'
import LockBar from './components/LockBar'
import LockButton from './components/LockButton'
import DockBar from './components/DockBar'
import AppScreen from './components/AppScreen'
import BiographyScreen from './components/BiographyScreen'
import ProjectsScreen from './components/ProjectsScreen'
import DesignsScreen from './components/DesignsScreen'
import './App.css'

function App() {
  const [isLocked, setIsLocked] = useState(true);
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [date, setDate] = useState(new Date());

  // Persist lock state
  useEffect(() => {
    if (!isLocked) {
      console.log('Device unlocked!');
    }
  }, [isLocked])

  // new Date() sets the date when the component is rendered.
  // set state and update it every second

  useEffect(() => {
      const timer = setInterval(() => setDate(new Date()), 16); // ~60fps update

      return function cleanup() {
          clearInterval(timer);
      };
  }, [])

  return (
    <>
    <div className='w-screen h-screen overflow-hidden touch-none'>
      <div className='w-full h-full'>
        <StatusBar showLock={isLocked} date={date}/>
        {isLocked && (
          <div>
            <TimeBar date={date}/>
            <LockBar/>
            <LockButton onUnlock={() => setIsLocked(false)}/>
          </div>
        )}
        {!isLocked && (
          <div>
            {activeApp === null && (
              <div>
                <DockBar onAppClick={setActiveApp}/>
                <AppScreen date={date}/>
              </div>
            )}
            {activeApp === 'Biography' && <BiographyScreen />}
            {activeApp === 'Projects' && <ProjectsScreen />}
            {activeApp === 'Designs' && <DesignsScreen />}
            {activeApp && (
              <button 
                onClick={() => {
                  window.scrollTo(0, 0);
                  setActiveApp(null);
                }}
                className="fixed top-[35px] left-2 bg-[#007AFF] text-white px-4 py-1.5 rounded-full text-sm font-medium opacity-90 hover:opacity-100 transition-all z-50 shadow-lg"
              >
                ← Back
              </button>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default App
