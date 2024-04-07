import React from 'react'
import WelcomeView from '../components/WelcomeView'
import { useState } from 'react';
function RPS() {
    const [userName, setUserName] = useState("");
  return (
    <div>
        <WelcomeView userName={userName} setUserName={setUserName} />
        
    </div>
  )
}

export default RPS