import { useState, useEffect } from "react";
import welcomeImage from '../../assets/welcomeBanner.png';

const WelcomeBanner = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `Hello, Earth being! I’m Bob, from a faraway part of the galaxy, and sent on a mission to explore your planet. Unfortunately, I overslept on the day of my space flight, and tried to hurry up by taking a shortcut through a quantum singularity. Something unexpected happened, because I landed in the wrong time, in the earliest eras of the planet’s past! According to my calculations, the only way out seems to be to travel through all of Earth’s history, and I could really use an Earthling’s help with this task.
  
  Help me solve the riddles and puzzles of each time period, and collect important historical items and inventions as rewards. Once we’ve gathered them all and are back in the present moment, I can return home again (and continue my nap!). Start from the buttons below to register or log in to the game, or play a quick session as a guest!`;

  const typingSpeed = 50;

  useEffect(() => {
    let charIndex = 0; 
    const lines = fullText.split("\n"); 
    let currentLine = 0; 
    let typedText = ""; 
    const typeCharacter = () => {
      if (currentLine < lines.length) {
        if (charIndex < lines[currentLine].length) {
          typedText += lines[currentLine][charIndex];
          charIndex++;
        } else {
          typedText += "\n";
          charIndex = 0; 
          currentLine++;
        }
        setDisplayText(typedText);
        setTimeout(typeCharacter, typingSpeed);
      }
    };

    typeCharacter();
  }, []);

  return (
    <div className="welcomeBanner">
        {<img className="welcome-img block h-full w-full z-10 relative border-2 border-[#8168fe] rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.22)" src={welcomeImage} alt="alien welcoming to game" />}
        <div className="typewriter-text absolute top-[31.5%] left-[37%] transform -translate-x-1/2 w-[740px] whitespace-pre-line text-left leading-[1] font-typewriter text-[24px] z-30">
        {displayText}
        </div> 
    </div>
  );
};

export default WelcomeBanner;
