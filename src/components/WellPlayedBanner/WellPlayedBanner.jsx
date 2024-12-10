import React, { useState, useEffect } from "react";
import wellPlayedImage from '../../assets/wellplayedBanner.png';

  const WellPlayedBanner = () => {
    const [displayText, setDisplayText] = useState(""); 
    const fullText = "Well played! \nA new item is rewarded for your effort.";
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
    <div className="wellplayed-banner">
        <img className="wellplayed-img block h-[68.6vh] w-full z-10 relative" src={wellPlayedImage} alt="alien showing thumbs up" />
        <div className="typewriter-text absolute top-[22%] left-[66%] transform -translate-x-1/2 whitespace-normal text-left w-[27%] leading-[1.5] font-typewriter text-[30px] z-30">
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

export default WellPlayedBanner;