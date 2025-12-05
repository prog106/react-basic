import React, { useState } from 'react';
import './AppJumpGame.css';

function AppJumpGame() {
  const [isJumping, setIsJumping] = useState(false);

  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 600); // 점프 애니메이션 시간
    }
  };

  return (
    <div className="jump-game-container">
      <div className="game-area">
        <div className="ground"></div>
        <div className={`character ${isJumping ? 'jump' : ''}`}>
          <div className="character-body">🐰</div>
        </div>
      </div>
      <button className="jump-button" onClick={handleJump} disabled={isJumping}>
        점프!
      </button>
    </div>
  );
}

export default AppJumpGame;

