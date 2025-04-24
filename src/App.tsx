import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CommitInput from './components/commitInput'
import Calendar from './components/Calendar'
import React from 'react'; // ✅ 반드시 있어야 함!
import CommitHistory from './components/CommitHistory'

function App() {
  return (<>
    
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-6">
      <div className="min-h-screen bg-green-700 text-white flex items-center justify-center">
    
    </div>
      <div className="w-full max-w-5xl flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-center w-full">🌱 DevGrass! 🌱</h1>

        <Calendar />
        <CommitInput />
        <CommitHistory />
      </div>
    </div>
    </>
  );
}

export default App
