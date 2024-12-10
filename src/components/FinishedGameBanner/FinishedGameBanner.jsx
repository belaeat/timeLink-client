import React, { useState, useEffect } from "react";
import finishedGameImage from '../../assets/finishedgameBanner.png';
import ufoImage from '../../assets/ufo.png';
import beamBobImage from '../../assets/beambob.png';

  const FinishedGameBanner = () => {
    const [displayText, setDisplayText] = useState(""); 
    const fullText = "That was the last item, you found them all and helped me through your planet's fascinating history! Now I will return to my faraway home to share my findings. Thank you again, and let's meet again in the future!";
    const typingSpeed = 85;
  
    useEffect(() => {
      let charIndex = 0;
      const typeText = () => {
        if (charIndex < fullText.length) {
          setDisplayText(fullText.slice(0, charIndex + 1));
          charIndex++;
          setTimeout(typeText, typingSpeed);
        }
      };
      typeText();
    }, []); 
  
  return (
    <div className="finishedgame-banner">
        <img className="finishedgame-img block h-[68.6vh] w-full z-10 relative" src={finishedGameImage} alt="alien beamed up to ufo to leave back to home planet" />
        <div className="ufo-image">
            <img className="ufo-image absolute top-[7%] left-[22%] z-30 animate-move-up animate-slide-out" src={ufoImage} alt="ufo image" />
        </div>  
        <div className="beam-image">
            <img className="beam-image absolute top-[33.5%] left-[26%] z-30 animate-flicker-fadeout" src={beamBobImage} alt="alien in ufo beam image" />
        </div>
        <div className="typewriter-text absolute top-[22%] left-[68%] transform -translate-x-1/2 whitespace-normal text-left w-[30%] leading-[1] font-typewriter text-[26px] z-30">
            {displayText.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                {line}
                <br />
                </React.Fragment>
            ))}
        </div> 
    </div>
  );
}

export default FinishedGameBanner;