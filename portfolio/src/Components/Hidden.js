import React, { useState, useEffect, useRef } from 'react';
import './Hidden.css';

function Heart({ onRespawn }) {
  const [key, setKey] = useState(0);
  const [position, setPosition] = useState({
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 100}%`,
    animationDuration: `${8 + Math.random() * 12}s`
  });

  const handleAnimationEnd = () => {
    setKey(prev => prev + 1);
    setPosition({
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 100}%`,
      animationDuration: `${8 + Math.random() * 12}s`
    });
  };

  return (
    <div
      key={key}
      className="floating-heart"
      style={{
        left: position.left,
        bottom: position.bottom,
        animationDuration: position.animationDuration
      }}
      onAnimationIteration={handleAnimationEnd}
    >
      💕
    </div>
  );
}

function Hidden() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeUntilValentine, setTimeUntilValentine] = useState('');
  const [yesButtonScale, setYesButtonScale] = useState(1);

  useEffect(() => {
    // Update page title
    document.title = '💕 Happy Valentine\'s Day 😘';
    
    // Countdown timer
    const updateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let valentineDate = new Date(currentYear, 1, 14); // February 14
      
      // If Valentine's Day has passed this year, use next year
      if (now > valentineDate) {
        valentineDate = new Date(currentYear + 1, 1, 14);
      }
      
      const diff = valentineDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeUntilValentine(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };
    
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    
    return () => {
      clearInterval(timer);
      document.title = 'Portfolio';
    };
  }, []);

  const handleYesClick = () => {
    setShowMessage(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleNoHover = (e) => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: randomX, y: randomY });
    setYesButtonScale(prev => prev * 1.2);
  };

  return (
    <div className="hidden-container">
      {/* Floating Hearts */}
      <div className="hearts-container">
        {[...Array(30)].map((_, i) => (
          <Heart key={i} />
        ))}
      </div>
      
      {/* Confetti */}
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="confetti" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.5}s`,
              backgroundColor: ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'][Math.floor(Math.random() * 5)]
            }}></div>
          ))}
        </div>
      )}
      
      <div className="valentine-content">
        <div className="countdown-timer">
          ⏰ {timeUntilValentine} until Valentine's Day!
        </div>
        
        <h1 className="valentine-title">💕 Will you be my Valentine? 💕</h1>
        <p className="valentine-subtitle">Choose below!</p>
        
        <div className="button-container">
          <button 
            className="yes-button" 
            onClick={handleYesClick}
            style={{
              transform: `scale(${yesButtonScale})`,
              transition: 'transform 0.3s ease'
            }}
          >
            Yes 💖
          </button>
          
          <button 
            className="no-button"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={handleNoHover}
          >
            No 💔
          </button>
        </div>
      </div>
      
      {showMessage && (
        <div className="modal-overlay" onClick={() => setShowMessage(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>🎉 You won't regret it! 😘</h2>
            <p>I'm so happy you said yes!</p>
            <button className="close-button" onClick={() => setShowMessage(false)}>
              Close 💕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hidden;
