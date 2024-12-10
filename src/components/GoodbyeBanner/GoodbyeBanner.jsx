import React, { useState, useEffect } from "react";
import goodbyeImage from '../../assets/goodbyeBanner.png';

  const GoodbyeBanner = () => {
    const [displayText, setDisplayText] = useState(""); 
    const fullText = "Thank you for playing, \nsee you next time!";
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
    <div className="goodbye-banner">
        <img className="goodbye-img block h-[68.6vh] w-full z-10 relative" src={goodbyeImage} alt="alien waving goodbye" />
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

export default GoodbyeBanner;
